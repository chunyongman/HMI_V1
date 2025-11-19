"""
ESS HMI 백엔드 메인 서버
Engine Room Ventilation System
FastAPI + WebSocket으로 실시간 데이터 제공
"""

import asyncio
import logging
import random
from datetime import datetime
from typing import Dict, Any, List
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from modbus_client import PLCClient
from alarm_manager import AlarmManager, AlarmLevel, EventType

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="ESS HMI API", version="2.0.0")

# 정적 파일 디렉토리 (프로덕션 빌드용)
STATIC_DIR = Path(__file__).parent / "static"

# CORS 설정 (프론트엔드 연동)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 개발 중에는 모든 origin 허용
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# PLC 클라이언트 인스턴스
# use_simulation=True로 설정하면 실제 PLC 없이 시뮬레이션 데이터 사용
plc_client = PLCClient(host="192.168.0.130", port=502, slave_id=3, use_simulation=True)

# 알람 관리자 인스턴스
alarm_manager = AlarmManager(data_dir="data")

# WebSocket 연결 관리
active_connections: List[WebSocket] = []


# 요청/응답 모델
class EquipmentCommand(BaseModel):
    equipment_name: str  # "SWP1", "SWP2", ..., "FAN4"
    command: str         # "start", "stop", "start_fwd", "start_bwd"


class SettingUpdate(BaseModel):
    address: int
    value: int


class AlarmAck(BaseModel):
    alarm_id: str
    user: str = "Operator"


@app.on_event("startup")
async def startup_event():
    """서버 시작 시 PLC 연결"""
    logger.info("=" * 70)
    logger.info("🚀 ESS HMI 백엔드 서버 시작")
    logger.info("   Engine Room Ventilation System")
    logger.info("=" * 70)
    await asyncio.to_thread(plc_client.connect)

    # 실시간 데이터 브로드캐스트 태스크 시작
    asyncio.create_task(broadcast_realtime_data())


@app.on_event("shutdown")
async def shutdown_event():
    """서버 종료 시 PLC 연결 해제"""
    logger.info("🛑 ESS HMI 백엔드 서버 종료")
    await asyncio.to_thread(plc_client.disconnect)


@app.get("/api")
async def api_root():
    """API 루트 엔드포인트"""
    return {
        "service": "ESS HMI Backend",
        "system": "Engine Room Ventilation System",
        "version": "2.0.0",
        "status": "running",
        "plc_connected": plc_client.connected,
        "equipment": {
            "pumps": 6,  # 3 SWP + 3 FWP
            "fans": 4    # 4 E/R Fans
        },
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/status")
async def get_status():
    """시스템 상태"""
    return {
        "plc_connected": plc_client.connected,
        "plc_host": plc_client.host,
        "plc_port": plc_client.port,
        "active_websocket_connections": len(active_connections),
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/sensors")
async def get_sensors():
    """센서 데이터 조회"""
    logger.info(f"🔍 get_sensors API called, plc_client.use_simulation={plc_client.use_simulation}")
    data = await asyncio.to_thread(plc_client.get_sensor_data)
    logger.info(f"📊 Sensor data retrieved: TX1={data.get('TX1', 0)}, TX6={data.get('TX6', 0)}")
    return {
        "success": True,
        "data": data,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/equipment")
async def get_all_equipment():
    """모든 장비 데이터 조회 (6 Pumps + 4 Fans)"""
    equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    return {
        "success": True,
        "data": equipment,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/pumps")
async def get_pumps():
    """펌프 데이터만 조회 (SWP1~3, FWP1~3)"""
    all_equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    pumps = all_equipment[:6]  # 첫 6개가 펌프
    return {
        "success": True,
        "data": pumps,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/fans")
async def get_fans():
    """팬 데이터만 조회 (FAN1~4)"""
    all_equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)
    fans = all_equipment[6:]  # 나머지가 팬
    return {
        "success": True,
        "data": fans,
        "timestamp": datetime.now().isoformat()
    }


# ===== VFD 예방진단 API (공유 파일에서 읽기) =====

@app.get("/api/vfd/diagnostics")
async def get_vfd_diagnostics():
    """VFD 예방진단 데이터 조회 (Edge AI 분석 결과)"""
    import json
    from pathlib import Path

    shared_file = Path("C:/shared/vfd_diagnostics.json")

    # 1. 먼저 공유 파일이 있으면 읽기 (Edge AI 데이터 우선)
    if shared_file.exists():
        try:
            with open(shared_file, 'r', encoding='utf-8') as f:
                data = json.load(f)

            return {
                "success": True,
                "data": data,
                "timestamp": datetime.now().isoformat()
            }
        except Exception as e:
            logger.error(f"VFD 진단 데이터 읽기 실패: {e}")

    # 2. 공유 파일이 없으면 PLC 시뮬레이션 데이터로 VFD 진단 생성 (HMI 자체 생성)
    logger.debug("공유 파일 없음 - PLC 데이터로 VFD 진단 생성")

    # PLC 클라이언트에서 장비 데이터 가져오기
    equipment_data = plc_client.get_all_equipment_data()

    vfd_diagnostics = {}

    for eq in equipment_data:
        # 장비 이름 (name 필드)
        eq_name = eq.get("name", "")

        # VFD가 있는 장비만 처리 (펌프와 팬)
        if not eq_name:
            continue

        # 장비 이름을 VFD ID로 변환 (SWP1 -> SW_PUMP_1)
        if "SWP" in eq_name:
            vfd_id = eq_name.replace("SWP", "SW_PUMP_")
        elif "FWP" in eq_name:
            vfd_id = eq_name.replace("FWP", "FW_PUMP_")
        elif "FAN" in eq_name:
            vfd_id = eq_name.replace("FAN", "ER_FAN_")
        else:
            continue

        # 장비 데이터에서 값 추출 (딕셔너리 형태)
        freq = eq.get("frequency", 0.0)
        # 팬은 running_fwd 또는 running_bwd로 확인
        is_running = eq.get("running", False) or eq.get("running_fwd", False) or eq.get("running_bwd", False)
        run_hours = eq.get("run_hours", 0)

        # 온도 시뮬레이션 (주파수와 운전 상태 기반)
        if is_running and freq > 0:
            # 운전 중: 주파수에 비례한 온도 (45Hz일 때 약 65-75도)
            base_temp = 55 + (freq / 60.0) * 20
            temp = base_temp + random.uniform(-2, 2)  # 약간의 변동
        else:
            # 정지 중: 낮은 온도
            temp = 35 + random.uniform(-3, 3)

        # 전류 시뮬레이션 (주파수에 비례)
        current = (freq / 60.0) * 150 if is_running else 0.0

        # 온도 기반 상태 등급
        if temp > 75:
            status_grade = "critical"
            severity_score = 85
            maintenance_priority = 5
            anomaly_score = 80
            anomaly_patterns = ["MOTOR_OVERTEMP"]
        elif temp > 70:
            status_grade = "warning"
            severity_score = 65
            maintenance_priority = 3
            anomaly_score = 60
            anomaly_patterns = ["MOTOR_TEMP_HIGH", "HEATSINK_OVERTEMP"]
        elif temp > 60:
            status_grade = "caution"
            severity_score = 35
            maintenance_priority = 1
            anomaly_score = 30
            anomaly_patterns = []
        else:
            status_grade = "normal"
            severity_score = 15
            maintenance_priority = 0
            anomaly_score = 10
            anomaly_patterns = []

        # 온도 추세 (간단 계산)
        temp_rise_rate = 0.05 if is_running else -0.02
        predicted_temp_30min = temp + (temp_rise_rate * 30)
        logger.info(f"✅ VFD {vfd_id}: running={is_running}, temp_rise_rate={temp_rise_rate}, predicted={predicted_temp_30min}")

        if temp_rise_rate > 0.03:
            temp_trend = "rising"
        elif temp_rise_rate < -0.03:
            temp_trend = "falling"
        else:
            temp_trend = "stable"

        vfd_diagnostics[vfd_id] = {
            "vfd_id": vfd_id,
            "timestamp": datetime.now().isoformat(),

            # 실시간 운전 데이터
            "current_frequency_hz": freq,
            "output_current_a": current,
            "output_voltage_v": 400,
            "dc_bus_voltage_v": 540,
            "motor_temperature_c": temp,
            "heatsink_temperature_c": temp - 10,

            # 진단 결과
            "status_grade": status_grade,
            "severity_score": severity_score,
            "anomaly_patterns": anomaly_patterns,
            "recommendation": f"{vfd_id} 정상 운전 중" if status_grade == "normal" else f"{vfd_id} 온도 상승 주의",

            # 누적 통계
            "cumulative_runtime_hours": run_hours,
            "trip_count": 0,
            "error_count": 0,
            "warning_count": 0,

            # 예측 데이터
            "predicted_temp_30min": predicted_temp_30min,
            "temp_rise_rate": temp_rise_rate,
            "temp_trend": temp_trend,
            "remaining_life_percent": 100.0,
            "estimated_days_to_maintenance": 1282,
            "anomaly_score": anomaly_score,
            "maintenance_priority": maintenance_priority,
            "prediction_confidence": 0.85,
        }

    response_data = {
        "timestamp": datetime.now().isoformat(),
        "vfd_count": len(vfd_diagnostics),
        "vfd_diagnostics": vfd_diagnostics
    }

    return {
        "success": True,
        "data": response_data,
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/equipment/command")
async def send_equipment_command(command: EquipmentCommand):
    """장비 명령 전송"""
    valid_equipment = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                      "FAN1", "FAN2", "FAN3", "FAN4"]

    if command.equipment_name not in valid_equipment:
        raise HTTPException(status_code=400, detail=f"Invalid equipment name: {command.equipment_name}")

    valid_commands = ["start", "stop", "start_fwd", "start_bwd", "auto", "manual", "vfd", "bypass"]
    if command.command not in valid_commands:
        raise HTTPException(status_code=400, detail=f"Invalid command: {command.command}")

    # Fan이 아닌 경우 start_fwd, start_bwd 명령 불가
    if "FAN" not in command.equipment_name and command.command in ["start_fwd", "start_bwd"]:
        raise HTTPException(status_code=400, detail="FWD/BWD commands are only for fans")

    success = await asyncio.to_thread(
        plc_client.send_equipment_command,
        command.equipment_name,
        command.command
    )

    if not success:
        raise HTTPException(status_code=500, detail="Failed to send command to PLC")

    # 제어 명령 이벤트 로그
    alarm_manager.add_event(
        EventType.CONTROL,
        "Operator",
        f"{command.equipment_name} {command.command.upper()} command executed"
    )

    return {
        "success": True,
        "message": f"{command.equipment_name} {command.command} command sent",
        "timestamp": datetime.now().isoformat()
    }


# 하위 호환성을 위한 펌프 명령 API (구 버전과 호환)
@app.post("/api/pump/command")
async def send_pump_command_legacy(pump_index: int = 0, command: str = "start"):
    """펌프 명령 전송 (하위 호환용)"""
    pump_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3"]

    if pump_index < 0 or pump_index >= 6:
        raise HTTPException(status_code=400, detail="Invalid pump index (0-5)")

    equipment_name = pump_names[pump_index]

    success = await asyncio.to_thread(
        plc_client.send_equipment_command,
        equipment_name,
        command
    )

    if not success:
        raise HTTPException(status_code=500, detail="Failed to send command to PLC")

    return {
        "success": True,
        "message": f"Pump {pump_index} ({equipment_name}) {command} command sent",
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/setting")
async def update_setting(setting: SettingUpdate):
    """설정값 업데이트"""
    success = await asyncio.to_thread(plc_client.write_register, setting.address, setting.value)

    if not success:
        raise HTTPException(status_code=500, detail="Failed to write to PLC")

    # 설정 변경 이벤트 로그
    alarm_manager.add_event(
        EventType.SETTING,
        "Operator",
        f"Register {setting.address} updated to {setting.value}",
        {"address": setting.address, "value": setting.value}
    )

    return {
        "success": True,
        "message": f"Register {setting.address} updated to {setting.value}",
        "timestamp": datetime.now().isoformat()
    }


# ===== 알람 및 이력 API =====

@app.get("/api/alarms/active")
async def get_active_alarms():
    """활성 알람 목록 조회"""
    alarms = alarm_manager.get_active_alarms()
    summary = alarm_manager.get_alarm_summary()
    return {
        "success": True,
        "data": alarms,
        "summary": summary,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/alarms/history")
async def get_alarm_history(limit: int = 100, level: str = None):
    """알람 이력 조회"""
    alarms = alarm_manager.get_alarm_history(limit=limit, level=level)
    return {
        "success": True,
        "data": alarms,
        "count": len(alarms),
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/alarms/acknowledge")
async def acknowledge_alarm(ack: AlarmAck):
    """알람 확인"""
    success = alarm_manager.acknowledge_alarm(ack.alarm_id, ack.user)

    if not success:
        raise HTTPException(status_code=404, detail="Alarm not found")

    # 알람 확인 이벤트 로그
    alarm_manager.add_event(
        EventType.ALARM,
        ack.user,
        f"Alarm {ack.alarm_id} acknowledged"
    )

    return {
        "success": True,
        "message": f"Alarm {ack.alarm_id} acknowledged",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/events")
async def get_event_history(limit: int = 100, event_type: str = None):
    """이벤트 로그 조회"""
    events = alarm_manager.get_event_history(limit=limit, event_type=event_type)
    return {
        "success": True,
        "data": events,
        "count": len(events),
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/operations")
async def get_operation_records(start_date: str = None, end_date: str = None):
    """운전 이력 조회"""
    records = alarm_manager.get_operation_records(start_date=start_date, end_date=end_date)
    return {
        "success": True,
        "data": records,
        "count": len(records),
        "timestamp": datetime.now().isoformat()
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket 실시간 데이터 스트림"""
    await websocket.accept()
    active_connections.append(websocket)
    logger.info(f"✅ WebSocket 연결: {len(active_connections)}개 활성")

    try:
        while True:
            # 클라이언트 메시지 수신 (연결 유지용)
            try:
                await asyncio.wait_for(websocket.receive_text(), timeout=0.1)
            except asyncio.TimeoutError:
                pass

            await asyncio.sleep(0.1)

    except WebSocketDisconnect:
        active_connections.remove(websocket)
        logger.info(f"❌ WebSocket 연결 해제: {len(active_connections)}개 활성")
    except Exception as e:
        logger.error(f"WebSocket 오류: {e}")
        if websocket in active_connections:
            active_connections.remove(websocket)


async def broadcast_realtime_data():
    """모든 WebSocket 클라이언트에 실시간 데이터 브로드캐스트"""
    logger.info("📡 실시간 데이터 브로드캐스트 시작 (1초 간격)")

    # 이전 데이터 캐시 (데이터 읽기 실패 시 사용)
    last_sensors = {}
    last_equipment = []

    # 운전 이력 추적을 위한 상태 저장
    equipment_status_tracker = {}  # {장비명: {"status": "running/stopped", "start_time": timestamp}}

    while True:
        try:
            # 센서 및 장비 데이터 수집 (WebSocket 연결 여부와 무관하게 항상 실행)
            sensors = await asyncio.to_thread(plc_client.get_sensor_data)
            equipment = await asyncio.to_thread(plc_client.get_all_equipment_data)

            # 데이터 유효성 검사
            if sensors:
                last_sensors = sensors
            else:
                sensors = last_sensors  # 이전 데이터 사용

            if equipment and len(equipment) > 0:
                last_equipment = equipment
            else:
                equipment = last_equipment  # 이전 데이터 사용

            # 새 사이클 시작 시 suppressed 알람 정리
            if sensors and sensors.get("_new_cycle"):
                alarm_manager.clear_all_suppressed()

            # 알람 체크 (센서 및 장비 기반) - 항상 실행
            new_alarms = []
            if sensors:
                sensor_alarms = alarm_manager.check_sensor_alarms(sensors)
                new_alarms.extend(sensor_alarms)

            if equipment:
                equipment_alarms = alarm_manager.check_equipment_alarms(equipment)
                new_alarms.extend(equipment_alarms)

            # 새 알람 로깅 (active_alarms에는 이미 추가됨)
            for alarm in new_alarms:
                logger.warning(f"🔔 새 알람 발생: {alarm.message}")

            # 알람 요약 정보
            alarm_summary = alarm_manager.get_alarm_summary()

            # 운전 이력 추적 (장비 상태 변화 감지)
            if equipment:
                current_time = datetime.now()
                for eq in equipment:
                    eq_name = eq.get("name", "")
                    # "running" 필드를 기준으로 상태 판단
                    eq_status = "running" if eq.get("running", False) else "stopped"

                    # 장비 상태 추적 초기화
                    if eq_name not in equipment_status_tracker:
                        equipment_status_tracker[eq_name] = {
                            "status": eq_status,
                            "start_time": current_time if eq_status == "running" else None
                        }

                    previous_status = equipment_status_tracker[eq_name]["status"]

                    # 상태 변화 감지: stopped → running (장비 시작)
                    if previous_status != "running" and eq_status == "running":
                        equipment_status_tracker[eq_name]["status"] = "running"
                        equipment_status_tracker[eq_name]["start_time"] = current_time

                        # 시작 이벤트 로그
                        alarm_manager.add_event(
                            EventType.CONTROL,
                            "System",
                            f"{eq_name} 운전 시작 (Started)"
                        )

                        # 시작 횟수 기록
                        alarm_manager.update_operation_record(
                            equipment_name=eq_name,
                            runtime_hours=0,
                            energy_kwh=0,
                            saved_kwh=0,
                            start_count=1
                        )
                        logger.info(f"⚙️ {eq_name} 운전 시작")

                    # 상태 변화 감지: running → stopped (장비 정지)
                    elif previous_status == "running" and eq_status != "running":
                        start_time = equipment_status_tracker[eq_name]["start_time"]
                        equipment_status_tracker[eq_name]["status"] = "stopped"
                        equipment_status_tracker[eq_name]["start_time"] = None

                        if start_time:
                            # 가동 시간 계산 (시간 단위)
                            runtime_seconds = (current_time - start_time).total_seconds()
                            runtime_hours = runtime_seconds / 3600

                            # 전력 소비 계산 (장비별 정격 전력)
                            if "SWP" in eq_name:
                                power_kw = 132  # Sea Water Pump: 132kW
                            elif "FWP" in eq_name:
                                power_kw = 75   # Fresh Water Pump: 75kW
                            elif "FAN" in eq_name:
                                power_kw = 54.3  # E/R Ventilation Fan: 54.3kW
                            else:
                                power_kw = 0

                            energy_kwh = power_kw * runtime_hours

                            # VFD 사용 시 절감 전력 (예: 30% 절감)
                            vfd_mode = eq.get("vfd_mode", False)
                            saved_kwh = energy_kwh * 0.3 if vfd_mode else 0

                            # 정지 이벤트 로그
                            alarm_manager.add_event(
                                EventType.CONTROL,
                                "System",
                                f"{eq_name} 운전 정지 (Stopped) - {runtime_hours:.2f}h, {energy_kwh:.2f}kWh"
                            )

                            # 운전 이력 업데이트
                            alarm_manager.update_operation_record(
                                equipment_name=eq_name,
                                runtime_hours=runtime_hours,
                                energy_kwh=energy_kwh,
                                saved_kwh=saved_kwh,
                                start_count=0
                            )
                            logger.info(f"⚙️ {eq_name} 운전 정지 - {runtime_hours:.2f}시간, {energy_kwh:.2f}kWh")

            # VFD 진단 데이터 읽기 (Edge AI 분석 결과)
            vfd_diagnostics = None
            try:
                from pathlib import Path
                shared_file = Path("C:/shared/vfd_diagnostics.json")
                if shared_file.exists():
                    with open(shared_file, 'r', encoding='utf-8') as f:
                        vfd_diagnostics = json.load(f)
            except Exception as e:
                logger.debug(f"VFD 진단 데이터 읽기 실패 (무시): {e}")

            # WebSocket 클라이언트에 데이터 전송 (연결이 있을 때만)
            if active_connections:
                # 하위 호환성을 위해 pumps도 함께 전송
                pumps = equipment[:6] if equipment else []

                message = {
                    "type": "realtime_update",
                    "sensors": sensors,
                    "equipment": equipment,
                    "pumps": pumps,  # 하위 호환용
                    "vfd_diagnostics": vfd_diagnostics,  # VFD 예방진단 (NEW)
                    "alarms": alarm_manager.get_active_alarms(),  # 활성 알람 목록
                    "alarm_summary": alarm_summary,  # 알람 요약
                    "timestamp": datetime.now().isoformat()
                }

                # 모든 연결된 클라이언트에 전송
                disconnected = []
                for connection in active_connections:
                    try:
                        await connection.send_json(message)
                    except Exception as e:
                        logger.error(f"브로드캐스트 오류: {e}")
                        disconnected.append(connection)

                # 연결 끊긴 클라이언트 제거
                for conn in disconnected:
                    if conn in active_connections:
                        active_connections.remove(conn)

            # 1초 간격 업데이트
            await asyncio.sleep(1)

        except Exception as e:
            logger.error(f"브로드캐스트 루프 오류: {e}")
            await asyncio.sleep(1)


# 정적 파일 서빙 (프로덕션 모드)
if STATIC_DIR.exists():
    logger.info(f"📁 정적 파일 제공: {STATIC_DIR}")
    app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="assets")

    @app.get("/")
    async def serve_frontend():
        """프론트엔드 index.html 제공"""
        return FileResponse(STATIC_DIR / "index.html")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        """SPA 라우팅 지원"""
        # API 경로는 제외
        if full_path.startswith("api/") or full_path.startswith("ws"):
            return {"error": "Not found"}, 404

        # 파일이 존재하면 제공
        file_path = STATIC_DIR / full_path
        if file_path.is_file():
            return FileResponse(file_path)

        # 그 외는 index.html 반환 (SPA 라우팅)
        return FileResponse(STATIC_DIR / "index.html")
else:
    logger.warning("⚠️  정적 파일 없음 - 개발 모드")

    @app.get("/")
    async def root():
        """개발 모드 루트"""
        return {
            "service": "ESS HMI Backend",
            "system": "Engine Room Ventilation System",
            "version": "2.0.0",
            "mode": "development",
            "message": "Frontend should be served separately (npm run dev)",
            "plc_connected": plc_client.connected,
            "api_docs": "/docs",
            "timestamp": datetime.now().isoformat()
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
