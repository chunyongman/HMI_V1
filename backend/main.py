"""
ESS HMI 백엔드 메인 서버
Engine Room Ventilation System
FastAPI + WebSocket으로 실시간 데이터 제공

시스템 아키텍처:
- Edge_Computer_V1: 모든 AI 계산 수행 (목표 주파수, 에너지 절감, VFD 진단) → PLC에 쓰기
- PLC: 중앙 데이터 허브 (센서, 장비 상태, Edge AI 계산 결과 저장)
- HMI_V1 (본 서버):
  * PLC에서 데이터만 읽기 (계산하지 않음)
  * 제어 명령 전송 (On/Off, 설정값 조정)
  * 웹 인터페이스로 데이터 표시
"""

import asyncio
import json
import logging
import random
import httpx
from datetime import datetime
from typing import Dict, Any, List, Optional
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from modbus_client import PLCClient
from alarm_manager import AlarmManager, AlarmLevel, EventType

# Edge Computer API 설정
EDGE_COMPUTER_API_URL = "http://localhost:8000"
EDGE_API_TIMEOUT = 5.0  # 초

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Lifespan 이벤트 핸들러 (FastAPI 최신 방식)
@asynccontextmanager
async def lifespan(app: FastAPI):
    """서버 시작 및 종료 시 실행되는 lifespan 이벤트"""
    # Startup
    logger.info("=" * 70)
    logger.info("🚀 ESS HMI 백엔드 서버 시작")
    logger.info("   Engine Room Ventilation System")
    logger.info("=" * 70)
    await asyncio.to_thread(plc_client.connect)

    # 실시간 데이터 브로드캐스트 태스크 시작
    broadcast_task = asyncio.create_task(broadcast_realtime_data())

    yield

    # Shutdown
    logger.info("🛑 ESS HMI 백엔드 서버 종료")
    broadcast_task.cancel()
    await asyncio.to_thread(plc_client.disconnect)

app = FastAPI(title="ESS HMI API", version="2.0.0", lifespan=lifespan)

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
# use_simulation=False로 설정하여 실제 PLC Simulator 연결
plc_client = PLCClient(host="localhost", port=502, slave_id=3, use_simulation=False)

# 알람 관리자 인스턴스 (로컬 백업용 - Edge Computer가 마스터)
alarm_manager = AlarmManager(data_dir="data")

# Edge Computer API 연결 상태
edge_api_connected = False


async def call_edge_api(method: str, endpoint: str, data: dict = None) -> Optional[dict]:
    """Edge Computer API 호출 헬퍼"""
    global edge_api_connected
    url = f"{EDGE_COMPUTER_API_URL}{endpoint}"

    try:
        async with httpx.AsyncClient(timeout=EDGE_API_TIMEOUT) as client:
            if method.upper() == "GET":
                response = await client.get(url, params=data)
            elif method.upper() == "POST":
                response = await client.post(url, json=data)
            else:
                return None

            if response.status_code == 200:
                edge_api_connected = True
                return response.json()
            else:
                logger.warning(f"Edge API 응답 오류: {response.status_code}")
                return None
    except httpx.ConnectError:
        if edge_api_connected:
            logger.warning("Edge Computer API 연결 끊김 - 로컬 데이터 사용")
        edge_api_connected = False
        return None
    except Exception as e:
        logger.error(f"Edge API 호출 실패: {e}")
        edge_api_connected = False
        return None


# WebSocket 연결 관리
active_connections: List[WebSocket] = []

# VFD 누적 통계 추적
vfd_stats = {
    "SW_PUMP_1": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "SW_PUMP_2": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "SW_PUMP_3": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "FW_PUMP_1": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "FW_PUMP_2": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "FW_PUMP_3": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "ER_FAN_1": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "ER_FAN_2": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "ER_FAN_3": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
    "ER_FAN_4": {"trip_count": 0, "error_count": 0, "warning_count": 0, "prev_patterns": []},
}

# VFD 이상 상태 지속 추적 (확인 전까지 유지)
vfd_anomaly_state = {
    "SW_PUMP_1": None,
    "SW_PUMP_2": None,
    "SW_PUMP_3": None,
    "FW_PUMP_1": None,
    "FW_PUMP_2": None,
    "FW_PUMP_3": None,
    "ER_FAN_1": None,
    "ER_FAN_2": None,
    "ER_FAN_3": None,
    "ER_FAN_4": None,
}

# VFD 이상 징후 확인/해제 상태 추적 (HMI 자체 관리)
# 상태: None(정상/표시안함), "active"(이상감지-확인버튼), "acknowledged"(확인됨-해제버튼)
vfd_ack_status: Dict[str, Dict] = {}

# VFD 해제(cleared)된 ID 추적 - 해제된 VFD는 다시 목록에 나타나지 않음
# 정상 상태로 돌아오면 (severity <= 20 and status_grade == 'normal') 이 세트에서 제거됨
vfd_cleared_ids: set = set()

# VFD 이상 신호 주기 발생을 위한 변수
vfd_anomaly_timer = {
    "last_anomaly_time": None,
    "interval_seconds": 120  # 2분 = 120초
}

# AI 목표 주파수 데이터 (EDGE AI에서 계산하여 PLC를 통해 받음)
# target_frequency: AI가 계산한 목표 주파수
# actual_frequency: 실제 VFD 피드백 주파수
# deviation: 편차 (actual - target)
# status: 정상/주의/경고
ai_frequency_control = []

# 에너지 절감 상세 요약 데이터 (각 장비별 상세 정보)
energy_savings_summary = []

# 에너지 절감률 데이터 (EDGE AI에서 계산하여 PLC를 통해 받음)
# realtime: 실시간 순간 절감률
# today: 오늘 누적 (00:00부터)
# month: 이번 달 누적 (1일부터)
energy_savings_data = {
    "realtime": {
        "total": {"power_60hz": 0, "power_vfd": 0, "savings_kw": 0, "savings_rate": 0},
        "swp": {"power_60hz": 0, "power_vfd": 0, "savings_kw": 0, "savings_rate": 0},
        "fwp": {"power_60hz": 0, "power_vfd": 0, "savings_kw": 0, "savings_rate": 0},
        "fan": {"power_60hz": 0, "power_vfd": 0, "savings_kw": 0, "savings_rate": 0}
    },
    "today": {
        "total_kwh_saved": 0.0,
        "avg_savings_rate": 0.0,
        "start_time": ""
    },
    "month": {
        "total_kwh_saved": 0.0,
        "avg_savings_rate": 0.0,
        "start_time": ""
    }
}


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


class VFDAnomalyAck(BaseModel):
    vfd_id: str
    user: str = "Operator"


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


# ===== VFD 예방진단 API (PLC에서 직접 읽기 - Edge Computer 계산 결과) =====

@app.get("/api/vfd/diagnostics")
async def get_vfd_diagnostics():
    """VFD 예방진단 데이터 조회 (Edge Computer가 PLC에 쓴 결과를 직접 읽기)"""
    logger.info("🔍 get_vfd_diagnostics() - PLC에서 Edge Computer 결과 읽기")

    # PLC 연결 확인
    if not plc_client.connected:
        logger.warning("⚠️ PLC 연결 안됨 - VFD 진단 데이터 없음")
        return {
            "success": False,
            "error": "PLC 연결 안됨",
            "data": None,
            "timestamp": datetime.now().isoformat()
        }

    # PLC에서 Edge Computer가 계산한 VFD 진단 결과 읽기 (레지스터 5200-5219)
    vfd_diagnosis_result = plc_client.read_vfd_diagnosis()

    if not vfd_diagnosis_result:
        logger.warning("⚠️ VFD 진단 결과 읽기 실패")
        return {
            "success": False,
            "error": "VFD 진단 데이터 읽기 실패",
            "data": None,
            "timestamp": datetime.now().isoformat()
        }

    health_scores = vfd_diagnosis_result.get('health_scores', [100] * 10)
    severity_levels = vfd_diagnosis_result.get('severity_levels', [0] * 10)

    logger.info(f"✅ PLC에서 VFD 진단 읽기 성공: health_scores={health_scores}, severity_levels={severity_levels}")

    # PLC에서 장비 데이터 가져오기 (VFD 운전 데이터)
    equipment_data = plc_client.get_all_equipment_data()

    # 중증도 레벨 → 상태 등급 매핑
    severity_to_grade = {0: "normal", 1: "caution", 2: "warning", 3: "critical"}
    severity_to_name = {0: "정상", 1: "주의", 2: "경고", 3: "위험"}

    vfd_diagnostics = {}

    for i, eq in enumerate(equipment_data):
        eq_name = eq.get("name", "")
        if not eq_name:
            continue

        # 장비 이름을 VFD ID로 변환
        if "SWP" in eq_name:
            vfd_id = eq_name.replace("SWP", "SW_PUMP_")
        elif "FWP" in eq_name:
            vfd_id = eq_name.replace("FWP", "FW_PUMP_")
        elif "FAN" in eq_name:
            vfd_id = eq_name.replace("FAN", "ER_FAN_")
        else:
            continue

        # Edge Computer가 계산한 건강도 점수와 중증도 레벨 사용
        health_score = health_scores[i] if i < len(health_scores) else 100
        severity_level = severity_levels[i] if i < len(severity_levels) else 0

        # 상태 등급 결정
        status_grade = severity_to_grade.get(severity_level, "normal")
        severity_name = severity_to_name.get(severity_level, "정상")
        severity_score = 100 - health_score

        # 장비 데이터에서 실시간 운전 값 추출
        freq = eq.get("frequency", 0.0)
        is_running = eq.get("running", False) or eq.get("running_fwd", False) or eq.get("running_bwd", False)
        run_hours = eq.get("run_hours", 0)
        motor_temp = eq.get("motor_thermal", 0)
        heatsink_temp = eq.get("heatsink_temp", 0)
        motor_current = eq.get("motor_current", 0)
        dc_voltage = eq.get("dc_link_voltage", 540)

        # VFD 예방진단 데이터 추출 (Edge Computer 대시보드와 동일)
        inverter_thermal = eq.get("inverter_thermal", 0)
        num_starts = eq.get("num_starts", 0)
        phase_u_current = eq.get("phase_u_current", 0)
        phase_v_current = eq.get("phase_v_current", 0)
        phase_w_current = eq.get("phase_w_current", 0)

        # 3상 전류 불평형률 계산
        phase_currents = [phase_u_current, phase_v_current, phase_w_current]
        avg_current = sum(phase_currents) / 3 if any(phase_currents) else 0
        if avg_current > 0:
            max_deviation = max(abs(c - avg_current) for c in phase_currents)
            current_imbalance = round((max_deviation / avg_current) * 100, 1)
        else:
            current_imbalance = 0

        # 이상 패턴 및 권장 조치 결정
        anomaly_patterns = []
        maintenance_priority = 0

        if severity_level >= 3:
            anomaly_patterns = ["CRITICAL_CONDITION"]
            maintenance_priority = 5
            recommendation = f"▶ 즉시 점검 필요! {eq_name} 상태 위험"
        elif severity_level >= 2:
            anomaly_patterns = ["WARNING_CONDITION"]
            maintenance_priority = 3
            recommendation = f"▶ 정비 계획 수립 필요. {eq_name} 점검 권장"
        elif severity_level >= 1:
            anomaly_patterns = ["ATTENTION_REQUIRED"]
            maintenance_priority = 1
            recommendation = f"▶ 모니터링 강화 권장. {eq_name} 주의"
        else:
            recommendation = f"정상 운전 중. {eq_name} 정기 점검 유지"

        # 온도 추세
        temp_rise_rate = 0.05 if is_running else -0.02
        predicted_temp_30min = heatsink_temp + (temp_rise_rate * 30)
        temp_trend = "rising" if temp_rise_rate > 0.03 else ("falling" if temp_rise_rate < -0.03 else "stable")

        # 이상 징후 상태 관리
        has_anomaly = severity_level > 0
        is_cleared_vfd = vfd_id in vfd_cleared_ids
        ack_info = vfd_ack_status.get(vfd_id, {})
        ack_state = ack_info.get('status')

        is_acknowledged = False
        acknowledged_at = None
        is_cleared = False

        if has_anomaly:
            if is_cleared_vfd:
                is_acknowledged = True
                is_cleared = True
            elif ack_state == "acknowledged":
                is_acknowledged = True
                acknowledged_at = ack_info.get('acknowledged_at')
            else:
                if vfd_id not in vfd_ack_status:
                    vfd_ack_status[vfd_id] = {"status": "active", "acknowledged_at": None}
        else:
            if vfd_id in vfd_cleared_ids:
                vfd_cleared_ids.discard(vfd_id)
            if vfd_id in vfd_ack_status:
                del vfd_ack_status[vfd_id]

        vfd_diagnostics[vfd_id] = {
            "vfd_id": vfd_id,
            "timestamp": datetime.now().isoformat(),
            "current_frequency_hz": freq,
            "output_current_a": motor_current,
            "output_voltage_v": 400,
            "dc_bus_voltage_v": dc_voltage,
            "motor_temperature_c": motor_temp,
            "heatsink_temperature_c": heatsink_temp,
            "health_score": health_score,
            "severity_level": severity_level,
            "severity_name": severity_name,
            "status_grade": status_grade,
            "severity_score": severity_score,
            "anomaly_patterns": anomaly_patterns,
            "recommendation": recommendation,
            "cumulative_runtime_hours": run_hours,
            "trip_count": 0,
            "error_count": 0,
            "warning_count": 0,
            "predicted_temp_30min": predicted_temp_30min,
            "temp_rise_rate": temp_rise_rate,
            "temp_trend": temp_trend,
            "remaining_life_percent": health_score,
            "estimated_days_to_maintenance": 1282 if severity_level == 0 else (30 if severity_level == 1 else (7 if severity_level == 2 else 0)),
            "anomaly_score": severity_score,
            "maintenance_priority": maintenance_priority,
            "prediction_confidence": 0.95,
            "is_acknowledged": is_acknowledged,
            "acknowledged_at": acknowledged_at,
            "is_cleared": is_cleared,
            "cleared_at": None,
            # VFD 예방진단 데이터 (Edge Computer 대시보드와 동일)
            "motor_thermal_pct": motor_temp,
            "inverter_thermal_pct": inverter_thermal,
            "num_starts": num_starts,
            "phase_u_current": phase_u_current,
            "phase_v_current": phase_v_current,
            "phase_w_current": phase_w_current,
            "current_imbalance_pct": current_imbalance,
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
    # PLC 연결 확인 - 연결되지 않으면 빈 목록 반환
    if not plc_client.connected:
        return {
            "success": False,
            "error": "PLC 연결 안됨",
            "data": [],
            "summary": {"critical": 0, "warning": 0, "total": 0},
            "timestamp": datetime.now().isoformat()
        }
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
    """알람 이력 조회 - Edge Computer에서 가져오기 (실패 시 로컬)"""
    # Edge Computer API 먼저 시도
    params = {"limit": limit}
    if level:
        params["level"] = level

    edge_result = await call_edge_api("GET", "/api/alarms/history", params)
    if edge_result and edge_result.get("success"):
        return edge_result

    # Edge 연결 실패 시 로컬 데이터 사용
    alarms = alarm_manager.get_alarm_history(limit=limit, level=level)
    return {
        "success": True,
        "data": alarms,
        "count": len(alarms),
        "source": "local",  # 로컬 데이터임을 표시
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/alarms/acknowledge")
async def acknowledge_alarm(ack: AlarmAck):
    """알람 확인 - Edge Computer에도 전송"""
    # Edge Computer API에 먼저 전송
    edge_result = await call_edge_api("POST", "/api/alarms/acknowledge", {
        "alarm_id": ack.alarm_id,
        "user": ack.user
    })

    # 로컬에도 처리 (백업)
    success = alarm_manager.acknowledge_alarm(ack.alarm_id, ack.user)

    # 알람 확인 이벤트 로그 (로컬)
    alarm_manager.add_event(
        EventType.ALARM,
        ack.user,
        f"Alarm {ack.alarm_id} acknowledged"
    )

    # Edge에 이벤트 전송
    await call_edge_api("POST", "/api/events", {
        "event_type": "alarm",
        "source": "HMI",
        "description": f"알람 확인: {ack.alarm_id}",
        "details": {"alarm_id": ack.alarm_id, "user": ack.user}
    })

    return {
        "success": True,
        "message": f"Alarm {ack.alarm_id} acknowledged",
        "edge_synced": edge_result is not None,
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/vfd/acknowledge/{vfd_id}")
async def acknowledge_vfd_anomaly(vfd_id: str):
    """VFD 이상 감지 확인 처리 - 확인 버튼 클릭 시"""
    try:
        # HMI 자체 상태 관리에 acknowledged 상태 저장
        vfd_ack_status[vfd_id] = {
            "status": "acknowledged",
            "acknowledged_at": datetime.now().isoformat(),
            "user": "Operator"
        }

        logger.info(f"✅ VFD {vfd_id}: 확인 완료 (acknowledged)")

        return {
            "success": True,
            "message": f"VFD {vfd_id} anomaly acknowledged",
            "vfd_id": vfd_id,
            "status": "acknowledged",
            "timestamp": datetime.now().isoformat()
        }

    except Exception as e:
        logger.error(f"❌ VFD {vfd_id} acknowledge 실패: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/vfd/clear/{vfd_id}")
async def clear_vfd_anomaly(vfd_id: str):
    """VFD 이상 징후 해제 처리 - 해제 버튼 클릭 시 (목록에서 제거)"""
    try:
        # HMI 자체 상태에서 해당 VFD 제거
        if vfd_id in vfd_ack_status:
            del vfd_ack_status[vfd_id]

        # cleared 목록에 추가하여 다시 목록에 나타나지 않도록 함
        # (VFD가 정상 상태로 돌아올 때까지 유지)
        vfd_cleared_ids.add(vfd_id)

        logger.info(f"✅ VFD {vfd_id}: 해제 완료 (cleared), vfd_cleared_ids에 추가됨")

        return {
            "success": True,
            "message": f"VFD {vfd_id} anomaly cleared",
            "vfd_id": vfd_id,
            "status": "cleared",
            "timestamp": datetime.now().isoformat()
        }

    except Exception as e:
        logger.error(f"❌ VFD {vfd_id} clear 실패: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# ===== VFD 이상 징후 히스토리 API (Edge Computer에서 가져오기) =====

@app.get("/api/vfd/anomalies/active")
async def get_active_vfd_anomalies():
    """활성 VFD 이상 징후 조회 - Edge Computer에서 가져오기"""
    edge_result = await call_edge_api("GET", "/api/vfd/anomalies/active")
    if edge_result and edge_result.get("success"):
        return edge_result

    # Edge 연결 실패 시 빈 데이터 반환
    return {
        "success": True,
        "data": [],
        "summary": {"level_1": 0, "level_2": 0, "level_3": 0, "total": 0},
        "source": "fallback",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/vfd/anomalies/history")
async def get_vfd_anomaly_history(
    limit: int = 100,
    equipment_id: str = None,
    status: str = None,
    start_date: str = None,
    end_date: str = None
):
    """VFD 이상 징후 히스토리 조회 - Edge Computer에서 가져오기"""
    params = {"limit": limit}
    if equipment_id:
        params["equipment_id"] = equipment_id
    if status:
        params["status"] = status
    if start_date:
        params["start_date"] = start_date
    if end_date:
        params["end_date"] = end_date

    edge_result = await call_edge_api("GET", "/api/vfd/anomalies/history", params)
    if edge_result and edge_result.get("success"):
        return edge_result

    # Edge 연결 실패 시 빈 데이터 반환
    return {
        "success": True,
        "data": [],
        "count": 0,
        "source": "fallback",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/vfd/anomalies/statistics")
async def get_vfd_anomaly_statistics(days: int = 30):
    """VFD 이상 징후 통계 조회 - Edge Computer에서 가져오기"""
    edge_result = await call_edge_api("GET", "/api/vfd/anomalies/statistics", {"days": days})
    if edge_result and edge_result.get("success"):
        return edge_result

    # Edge 연결 실패 시 빈 통계 반환
    return {
        "success": True,
        "data": {
            "period_days": days,
            "total_anomalies": 0,
            "active_anomalies": 0,
            "by_severity": {},
            "by_equipment": {},
            "avg_duration_minutes": 0
        },
        "source": "fallback",
        "timestamp": datetime.now().isoformat()
    }


@app.post("/api/vfd/anomalies/acknowledge")
async def acknowledge_vfd_anomaly_history(anomaly_id: str, user: str = "Operator"):
    """VFD 이상 징후 확인 처리 (히스토리용) - Edge Computer에 전송"""
    edge_result = await call_edge_api("POST", "/api/vfd/anomalies/acknowledge", {
        "anomaly_id": anomaly_id,
        "user": user
    })

    if edge_result and edge_result.get("success"):
        return edge_result

    raise HTTPException(status_code=500, detail="Edge Computer 연결 실패")


@app.post("/api/vfd/anomalies/clear/{anomaly_id}")
async def clear_vfd_anomaly_history(anomaly_id: str, user: str = "Operator"):
    """VFD 이상 징후 해제 처리 (히스토리용) - Edge Computer에 전송"""
    edge_result = await call_edge_api("POST", f"/api/vfd/anomalies/clear/{anomaly_id}", {
        "user": user
    })

    if edge_result and edge_result.get("success"):
        return edge_result

    raise HTTPException(status_code=500, detail="Edge Computer 연결 실패")


@app.get("/api/events")
async def get_event_history(limit: int = 100, event_type: str = None):
    """이벤트 로그 조회 - Edge Computer에서 가져오기 (실패 시 로컬)"""
    # Edge Computer API 먼저 시도
    params = {"limit": limit}
    if event_type:
        params["event_type"] = event_type

    edge_result = await call_edge_api("GET", "/api/events", params)
    if edge_result and edge_result.get("success"):
        return edge_result

    # Edge 연결 실패 시 로컬 데이터 사용
    events = alarm_manager.get_event_history(limit=limit, event_type=event_type)
    return {
        "success": True,
        "data": events,
        "count": len(events),
        "source": "local",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/energy-savings")
async def get_energy_savings():
    """에너지 절감률 데이터 조회 (EDGE AI에서 계산된 데이터)"""
    return {
        "success": True,
        "data": energy_savings_data,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/ai-frequency-control")
async def get_ai_frequency_control():
    """AI 목표 주파수 제어 데이터 조회 (EDGE AI에서 계산된 데이터)"""
    # EDGE AI에서 계산한 목표 주파수와 실제 VFD 피드백 주파수 비교
    return {
        "success": True,
        "data": ai_frequency_control,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/energy-savings-summary")
async def get_energy_savings_summary():
    """에너지 절감 상세 요약 데이터 조회 (각 장비별 상세 정보)"""
    # EDGE AI에서 계산한 각 장비별 에너지 절감 상세 데이터
    return {
        "success": True,
        "data": energy_savings_summary,
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/ess-data")
async def get_ess_data():
    """
    ESS 운전 데이터 조회 (Edge Computer가 계산하여 PLC에 쓴 데이터)

    Returns:
        {
            'equipment': [10개 장비별 ESS 운전시간/에너지 데이터],
            'groups': {'SWP': {...}, 'FWP': {...}, 'FAN': {...}, 'TOTAL': {...}},
            'today': {'equipment': [...], 'groups': {...}}
        }
    """
    ess_data = await asyncio.to_thread(plc_client.read_ess_data)

    if ess_data:
        return {
            "success": True,
            "data": ess_data,
            "timestamp": datetime.now().isoformat()
        }
    else:
        return {
            "success": False,
            "error": "ESS 데이터 읽기 실패",
            "data": None,
            "timestamp": datetime.now().isoformat()
        }


@app.get("/api/operations")
async def get_operation_records(start_date: str = None, end_date: str = None):
    """운전 이력 조회 - Edge Computer에서 가져오기 (실패 시 로컬)"""
    # Edge Computer API 먼저 시도
    params = {}
    if start_date:
        params["start_date"] = start_date
    if end_date:
        params["end_date"] = end_date

    edge_result = await call_edge_api("GET", "/api/operations", params)
    if edge_result and edge_result.get("success") and len(edge_result.get("data", [])) > 0:
        return edge_result

    # Edge 연결 실패 또는 데이터 없음 시 로컬 데이터 사용
    records = alarm_manager.get_operation_records(start_date=start_date, end_date=end_date)
    return {
        "success": True,
        "data": records,
        "count": len(records),
        "source": "local",
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


# calculate_energy_savings 함수 제거됨
# 이제 PLC 클라이언트(EDGE AI 시뮬레이션)에서 계산된 데이터를 받아옴


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

            # 새 알람 로깅 및 Edge Computer에 저장
            for alarm in new_alarms:
                logger.warning(f"🔔 새 알람 발생: {alarm.message}")
                # Edge Computer에 알람 저장 (비동기, 실패해도 계속 진행)
                asyncio.create_task(call_edge_api("POST", "/api/alarms", {
                    "alarm_id": alarm.id,
                    "equipment_id": alarm.tag or "SYSTEM",
                    "alarm_type": alarm.tag or "SYSTEM",
                    "severity": alarm.level.value if hasattr(alarm.level, 'value') else str(alarm.level),
                    "message": alarm.message,
                    "occurred_at": alarm.time
                }))

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

                        # 시작 이벤트 로그 (로컬)
                        alarm_manager.add_event(
                            EventType.CONTROL,
                            "System",
                            f"{eq_name} 운전 시작 (Started)"
                        )

                        # Edge Computer에 이벤트 전송
                        asyncio.create_task(call_edge_api("POST", "/api/events", {
                            "event_type": "control",
                            "source": "HMI",
                            "description": f"{eq_name} 운전 시작 (Started)",
                            "details": {"equipment": eq_name, "action": "start"}
                        }))

                        # 시작 횟수 기록 (로컬 백업)
                        alarm_manager.update_operation_record(
                            equipment_name=eq_name,
                            runtime_hours=0,
                            energy_kwh=0,
                            saved_kwh=0,
                            start_count=1
                        )

                        # Edge Computer에 운전 이력 저장
                        today = current_time.strftime("%Y-%m-%d")
                        asyncio.create_task(call_edge_api("POST", "/api/operations", {
                            "equipment_name": eq_name,
                            "date": today,
                            "runtime_hours": 0,
                            "start_count": 1,
                            "energy_kwh": 0,
                            "saved_kwh": 0
                        }))

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

                            # 정지 이벤트 로그 (로컬)
                            alarm_manager.add_event(
                                EventType.CONTROL,
                                "System",
                                f"{eq_name} 운전 정지 (Stopped) - {runtime_hours:.2f}h, {energy_kwh:.2f}kWh"
                            )

                            # Edge Computer에 이벤트 전송
                            asyncio.create_task(call_edge_api("POST", "/api/events", {
                                "event_type": "control",
                                "source": "HMI",
                                "description": f"{eq_name} 운전 정지 (Stopped) - {runtime_hours:.2f}h, {energy_kwh:.2f}kWh",
                                "details": {
                                    "equipment": eq_name,
                                    "action": "stop",
                                    "runtime_hours": round(runtime_hours, 2),
                                    "energy_kwh": round(energy_kwh, 2),
                                    "saved_kwh": round(saved_kwh, 2)
                                }
                            }))

                            # 운전 이력 업데이트 (로컬 백업)
                            alarm_manager.update_operation_record(
                                equipment_name=eq_name,
                                runtime_hours=runtime_hours,
                                energy_kwh=energy_kwh,
                                saved_kwh=saved_kwh,
                                start_count=0
                            )

                            # Edge Computer에 운전 이력 저장
                            today = current_time.strftime("%Y-%m-%d")
                            asyncio.create_task(call_edge_api("POST", "/api/operations", {
                                "equipment_name": eq_name,
                                "date": today,
                                "runtime_hours": runtime_hours,
                                "start_count": 0,
                                "energy_kwh": energy_kwh,
                                "saved_kwh": saved_kwh
                            }))

                            logger.info(f"⚙️ {eq_name} 운전 정지 - {runtime_hours:.2f}시간, {energy_kwh:.2f}kWh")

            # 에너지 절감률 데이터 수신 (PLC를 통해 EDGE AI에서 계산된 데이터)
            if equipment:
                edge_ai_data = plc_client.read_edge_ai_results()
                if edge_ai_data:
                    energy_savings_data.update(edge_ai_data)

            # AI 목표 주파수 제어 데이터 (EDGE AI에서 계산된 데이터)
            global ai_frequency_control
            if equipment:
                ai_frequency_control = plc_client.read_edge_ai_target_frequencies(equipment)

            # 에너지 절감 상세 요약 데이터 (EDGE AI가 PLC에 쓴 데이터 읽기)
            global energy_savings_summary
            if equipment:
                energy_savings_summary = plc_client.read_equipment_savings_summary(equipment)

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

            # ESS 운전 데이터 읽기 (Edge Computer가 계산하여 PLC에 쓴 데이터)
            ess_data = None
            try:
                ess_data = plc_client.read_ess_data()
            except Exception as e:
                logger.debug(f"ESS 데이터 읽기 실패 (무시): {e}")

            # WebSocket 클라이언트에 데이터 전송 (연결이 있을 때만)
            if active_connections:
                # 하위 호환성을 위해 pumps도 함께 전송
                pumps = equipment[:6] if equipment else []

                # PLC 연결 상태에 따라 알람 데이터 결정
                if plc_client.connected:
                    active_alarms = alarm_manager.get_active_alarms()
                else:
                    active_alarms = []
                    alarm_summary = {"critical": 0, "warning": 0, "total": 0}

                message = {
                    "type": "realtime_update",
                    "sensors": sensors,
                    "equipment": equipment,
                    "pumps": pumps,  # 하위 호환용
                    "vfd_diagnostics": vfd_diagnostics if plc_client.connected else None,  # VFD 예방진단
                    "ess_data": ess_data if plc_client.connected else None,  # ESS 운전/에너지 데이터
                    "alarms": active_alarms,  # 활성 알람 목록
                    "alarm_summary": alarm_summary,  # 알람 요약
                    "plc_connected": plc_client.connected,  # PLC 연결 상태
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
        app,  # 문자열 대신 app 객체 직접 전달
        host="0.0.0.0",
        port=8001,  # Edge Computer API(8000)와 구분하기 위해 8001 사용
        reload=False,  # reload 비활성화
        log_level="info"
    )
