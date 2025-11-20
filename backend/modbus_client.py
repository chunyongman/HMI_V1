"""
Modbus TCP 클라이언트 모듈
Engine Room Ventilation System (ESS) PLC와의 통신을 담당합니다.
"""

import logging
import random
import time
from typing import Optional, Dict, Any, List
from pymodbus.client import ModbusTcpClient
from pymodbus.exceptions import ModbusException

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class PLCClient:
    """ESS PLC Modbus TCP 클라이언트"""

    def __init__(self, host: str = "192.168.0.130", port: int = 502, slave_id: int = 3, use_simulation: bool = False):
        self.host = host
        self.port = port
        self.slave_id = slave_id
        self.client: Optional[ModbusTcpClient] = None
        self.connected = False
        self.use_simulation = use_simulation

        # 에너지 절감률 누적 데이터 (캘린더 기준)
        from datetime import datetime
        now = datetime.now()
        self.energy_accumulator = {
            "today_start": now.replace(hour=0, minute=0, second=0, microsecond=0),
            "month_start": now.replace(day=1, hour=0, minute=0, second=0, microsecond=0),
            "today_total_kwh_saved": 0.0,
            "month_total_kwh_saved": 0.0,
            "today_samples": 0,
            "month_samples": 0,
            "last_update": time.time()
        }

        # 시뮬레이션 모드용 상태 변수
        if use_simulation:
            logger.info("🎮 시뮬레이션 모드 활성화")
            self.sim_start_time = time.time()
            self.sim_alarm_counter = 0  # 알람 시나리오 카운터
            self.sim_alarm_active = False  # 알람 활성 상태
            self.sim_equipment_states = {
                # 해수 펌프 (SWP1, SWP2 운전 / SWP3 스탠바이)
                "SWP1": {"running": True, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 1234},
                "SWP2": {"running": True, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 1567},
                "SWP3": {"running": False, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 0.0, "run_hours": 567},  # 스탠바이 (ESS 모드 유지)

                # 청수 펌프 (FWP1, FWP2 운전 / FWP3 스탠바이)
                "FWP1": {"running": True, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 50.0, "run_hours": 2345},
                "FWP2": {"running": True, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 50.0, "run_hours": 2890},
                "FWP3": {"running": False, "ess_mode": True, "auto_mode": True, "vfd_mode": True, "frequency": 0.0, "run_hours": 445},  # 스탠바이 (ESS 모드 유지)

                # E/R 팬 (모두 운전 중)
                "FAN1": {"running": True, "running_fwd": True, "running_bwd": False, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 3456},
                "FAN2": {"running": True, "running_fwd": True, "running_bwd": False, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 3789},
                "FAN3": {"running": True, "running_fwd": True, "running_bwd": False, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 2890},
                "FAN4": {"running": True, "running_fwd": True, "running_bwd": False, "auto_mode": True, "vfd_mode": True, "frequency": 45.0, "run_hours": 3987},
            }

    def connect(self) -> bool:
        """PLC 연결"""
        # 시뮬레이션 모드는 실제 연결 없이 True 반환
        if self.use_simulation:
            self.connected = True
            logger.info("✅ 시뮬레이션 모드: PLC 연결 시뮬레이션")
            return True

        try:
            self.client = ModbusTcpClient(
                host=self.host,
                port=self.port,
                timeout=3
            )
            self.connected = self.client.connect()

            if self.connected:
                logger.info(f"✅ PLC 연결 성공: {self.host}:{self.port}")
            else:
                logger.warning(f"⚠️ PLC 연결 실패: {self.host}:{self.port}")

            return self.connected

        except Exception as e:
            logger.error(f"❌ PLC 연결 오류: {e}")
            self.connected = False
            return False

    def disconnect(self):
        """PLC 연결 해제"""
        if self.client:
            self.client.close()
            self.connected = False
            logger.info("PLC 연결 해제")

    def read_holding_registers(self, address: int, count: int) -> Optional[List[int]]:
        """홀딩 레지스터 읽기"""
        if not self.connected or not self.client:
            self.connect()

        if not self.connected:
            return None

        try:
            result = self.client.read_holding_registers(
                address=address,
                count=count,
                slave=self.slave_id
            )

            if result.isError():
                logger.error(f"레지스터 읽기 오류: {result}")
                return None

            return result.registers

        except Exception as e:
            logger.error(f"레지스터 읽기 예외: {e}")
            self.connected = False
            return None

    def write_coil(self, address: int, value: bool) -> bool:
        """코일 쓰기"""
        if not self.connected:
            self.connect()

        if not self.connected:
            return False

        try:
            result = self.client.write_coil(
                address=address,
                value=value,
                slave=self.slave_id
            )

            if result.isError():
                logger.error(f"코일 쓰기 오류: {result}")
                return False

            return True

        except Exception as e:
            logger.error(f"코일 쓰기 예외: {e}")
            self.connected = False
            return False

    def write_register(self, address: int, value: int) -> bool:
        """단일 레지스터 쓰기"""
        if not self.connected:
            self.connect()

        if not self.connected:
            return False

        try:
            result = self.client.write_register(
                address=address,
                value=value,
                slave=self.slave_id
            )

            if result.isError():
                logger.error(f"레지스터 쓰기 오류: {result}")
                return False

            return True

        except Exception as e:
            logger.error(f"레지스터 쓰기 예외: {e}")
            self.connected = False
            return False

    def get_sensor_data(self) -> Dict[str, Any]:
        """센서 데이터 읽기 (K400010~K400019)"""

        # 시뮬레이션 모드: 가짜 데이터 생성
        logger.info(f"🔍 get_sensor_data called, use_simulation={self.use_simulation}")
        if self.use_simulation:
            logger.info("✅ Using simulated sensor data")
            return self._get_simulated_sensor_data()

        # Address 10~19: 온도, 압력, 부하 센서
        sensor_regs = self.read_holding_registers(10, 10)

        if not sensor_regs:
            logger.warning("센서 데이터 없음 - 기본값 반환")
            return self._get_default_sensor_data()

        return {
            "TX1": round(sensor_regs[0] / 10.0, 1),   # CSW PP Disc Temp
            "TX2": round(sensor_regs[1] / 10.0, 1),   # CSW PP Suc Temp
            "TX3": round(sensor_regs[2] / 10.0, 1),   # FW CLNG In Temp
            "TX4": round(sensor_regs[3] / 10.0, 1),   # FW CLNG Out Temp
            "TX5": round(sensor_regs[4] / 10.0, 1),   # ESS Batt Temp
            "TX6": round(sensor_regs[5] / 10.0, 1),   # E/R Inside Temp
            "TX7": round(sensor_regs[6] / 10.0, 1),   # E/R Outside Temp
            "DPX1": round(sensor_regs[7] / 4608.0, 2), # CSW PP Disc Press (kg/cm²)
            "DPX2": round(sensor_regs[8] / 10.0, 1),  # E/R Diff Press (Pa)
            "PU1": round(sensor_regs[9] / 276.48, 1), # M/E Load (%)
        }

    def get_equipment_status(self) -> Dict[str, Any]:
        """장비 상태 읽기 (K4000~K4001)"""

        # 시뮬레이션 모드: 가짜 데이터 생성
        if self.use_simulation:
            return self._get_simulated_equipment_status()

        # Address 4000~4001: 장비 상태 비트
        status_regs = self.read_holding_registers(4000, 2)

        if not status_regs:
            return self._get_default_equipment_status()

        word_4000 = status_regs[0]
        word_4001 = status_regs[1]

        return {
            # SWP Status
            "SWP1_RUN": bool(word_4000 & (1 << 0)),
            "SWP1_ESS": bool(word_4000 & (1 << 1)),
            "SWP1_ABNR": bool(word_4000 & (1 << 2)),
            "SWP2_RUN": bool(word_4000 & (1 << 3)),
            "SWP2_ESS": bool(word_4000 & (1 << 4)),
            "SWP2_ABNR": bool(word_4000 & (1 << 5)),
            "SWP3_RUN": bool(word_4000 & (1 << 6)),
            "SWP3_ESS": bool(word_4000 & (1 << 7)),
            "SWP3_ABNR": bool(word_4000 & (1 << 8)),

            # FWP Status
            "FWP1_RUN": bool(word_4000 & (1 << 9)),
            "FWP1_ESS": bool(word_4000 & (1 << 10)),
            "FWP1_ABNR": bool(word_4000 & (1 << 11)),
            "FWP2_RUN": bool(word_4000 & (1 << 12)),
            "FWP2_ESS": bool(word_4000 & (1 << 13)),
            "FWP2_ABNR": bool(word_4000 & (1 << 14)),
            "FWP3_RUN": bool(word_4000 & (1 << 15)),
            "FWP3_ESS": bool(word_4001 & (1 << 0)),
            "FWP3_ABNR": bool(word_4001 & (1 << 1)),

            # E/R Fan Status
            "FAN1_RUNFW": bool(word_4001 & (1 << 2)),
            "FAN1_RUNBW": bool(word_4001 & (1 << 3)),
            "FAN1_ABNR": bool(word_4001 & (1 << 4)),
            "FAN2_RUNFW": bool(word_4001 & (1 << 5)),
            "FAN2_RUNBW": bool(word_4001 & (1 << 6)),
            "FAN2_ABNR": bool(word_4001 & (1 << 7)),
            "FAN3_RUNFW": bool(word_4001 & (1 << 8)),
            "FAN3_RUNBW": bool(word_4001 & (1 << 9)),
            "FAN3_ABNR": bool(word_4001 & (1 << 10)),
            "FAN4_RUNFW": bool(word_4001 & (1 << 11)),
            "FAN4_RUNBW": bool(word_4001 & (1 << 12)),
            "FAN4_ABNR": bool(word_4001 & (1 << 13)),
        }

    def get_vfd_data(self, equipment_index: int) -> Dict[str, Any]:
        """
        VFD 데이터 읽기 (K400160~K400238)
        equipment_index: 0=SWP1, 1=SWP2, 2=SWP3, 3=FWP1, 4=FWP2, 5=FWP3,
                        6=FAN1, 7=FAN2, 8=FAN3, 9=FAN4
        """

        # 시뮬레이션 모드: 가짜 데이터 생성
        if self.use_simulation:
            return self._get_simulated_vfd_data(equipment_index)

        # VFD 데이터 시작 주소 (각 8 레지스터)
        base_address = 160 + (equipment_index * 8)

        vfd_regs = self.read_holding_registers(base_address, 8)

        if not vfd_regs:
            return self._get_default_vfd_data()

        return {
            "frequency": round(vfd_regs[0] / 10.0, 1),  # Hz
            "power_kw": vfd_regs[1],                    # kW
            "avg_power": vfd_regs[2],                   # Avg kW
            "saved_kwh_low": vfd_regs[3],               # Savings Low Word
            "saved_kwh_high": vfd_regs[4],              # Savings High Word
            "saved_kwh": vfd_regs[3] + (vfd_regs[4] << 16),  # Total Savings
            "saved_ratio": vfd_regs[5],                 # Savings Ratio %
            "run_hours_low": vfd_regs[6],               # Run Hours Low
            "run_hours_high": vfd_regs[7],              # Run Hours High
            "run_hours": vfd_regs[6] + (vfd_regs[7] << 16),  # Total Hours
        }

    def get_all_equipment_data(self) -> List[Dict[str, Any]]:
        """모든 장비 데이터 읽기"""

        equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                          "FAN1", "FAN2", "FAN3", "FAN4"]

        status = self.get_equipment_status()
        equipment_list = []

        for i, name in enumerate(equipment_names):
            vfd_data = self.get_vfd_data(i)

            # 공통 상태: Auto/Manual, VFD/Bypass
            auto_mode = status.get(f"{name}_AUTO", True)
            vfd_mode = status.get(f"{name}_VFD", True)

            # 장비 유형에 따라 상태 가져오기
            if i < 6:  # Pumps
                running = status.get(f"{name}_RUN", False)
                abnormal = status.get(f"{name}_ABNR", False)
                # ESS 모드는 auto_mode와 vfd_mode가 모두 활성화되어야 함
                ess_mode = auto_mode and vfd_mode

                equipment_list.append({
                    "name": name,
                    "running": running,
                    "ess_mode": ess_mode,
                    "abnormal": abnormal,
                    "auto_mode": auto_mode,
                    "vfd_mode": vfd_mode,
                    **vfd_data
                })
            else:  # Fans
                running_fwd = status.get(f"{name}_RUNFW", False)
                running_bwd = status.get(f"{name}_RUNBW", False)
                abnormal = status.get(f"{name}_ABNR", False)
                # Fan도 ESS 모드 지원 (auto_mode + vfd_mode일 때 활성화)
                ess_mode = auto_mode and vfd_mode

                equipment_list.append({
                    "name": name,
                    "running_fwd": running_fwd,
                    "running_bwd": running_bwd,
                    "running": running_fwd or running_bwd,
                    "ess_mode": ess_mode,
                    "abnormal": abnormal,
                    "auto_mode": auto_mode,
                    "vfd_mode": vfd_mode,
                    **vfd_data
                })

        return equipment_list

    def send_equipment_command(self, equipment_name: str, command: str) -> bool:
        """
        장비 명령 전송
        equipment_name: "SWP1", "SWP2", ..., "FAN4"
        command: "start", "stop", "start_fwd", "start_bwd" (Fan only), "auto", "manual", "vfd", "bypass"
        """

        equipment_map = {
            "SWP1": 0, "SWP2": 1, "SWP3": 2,
            "FWP1": 3, "FWP2": 4, "FWP3": 5,
            "FAN1": 6, "FAN2": 7, "FAN3": 8, "FAN4": 9
        }

        if equipment_name not in equipment_map:
            logger.error(f"잘못된 장비 이름: {equipment_name}")
            return False

        eq_index = equipment_map[equipment_name]

        # 시뮬레이션 모드: 시뮬레이션 상태 업데이트
        if self.use_simulation:
            return self._send_simulated_command(equipment_name, command)

        # 실제 PLC 제어
        # Auto/Manual 모드 설정 (TODO: 실제 PLC 주소 확인 필요)
        if command == "auto":
            # 예시: K4010.x 주소로 가정 (실제 PLC 주소로 교체 필요)
            coil_address = 64160 + eq_index
            success = self.write_coil(coil_address, True)
            if success:
                logger.info(f"✅ {equipment_name} AUTO 모드 설정 성공")
            return success

        elif command == "manual":
            coil_address = 64160 + eq_index
            success = self.write_coil(coil_address, False)
            if success:
                logger.info(f"✅ {equipment_name} MANUAL 모드 설정 성공")
            return success

        # VFD/Bypass 모드 설정 (TODO: 실제 PLC 주소 확인 필요)
        elif command == "vfd":
            # 예시: K4020.x 주소로 가정 (실제 PLC 주소로 교체 필요)
            coil_address = 64320 + eq_index
            success = self.write_coil(coil_address, True)
            if success:
                logger.info(f"✅ {equipment_name} VFD 모드 설정 성공")
            return success

        elif command == "bypass":
            coil_address = 64320 + eq_index
            success = self.write_coil(coil_address, False)
            if success:
                logger.info(f"✅ {equipment_name} BYPASS 모드 설정 성공")
            return success

        # Coil 주소 계산 (K4004.x = address 64064 + bit)
        # START 명령
        elif command in ["start", "start_fwd"]:
            coil_address = 64064 + (eq_index * 2)  # START 비트
            success = self.write_coil(coil_address, True)
            if success:
                logger.info(f"✅ {equipment_name} START 명령 전송 성공")
            return success

        # STOP 명령
        elif command == "stop":
            coil_address = 64064 + (eq_index * 2) + 1  # STOP 비트
            success = self.write_coil(coil_address, True)
            if success:
                logger.info(f"✅ {equipment_name} STOP 명령 전송 성공")
            return success

        # BWD 명령 (Fan only)
        elif command == "start_bwd" and "FAN" in equipment_name:
            # Fan BWD 명령은 별도 비트 사용
            coil_address = 64084 + (eq_index - 6)  # FAN1~4용 BWD 비트
            success = self.write_coil(coil_address, True)
            if success:
                logger.info(f"✅ {equipment_name} BWD 명령 전송 성공")
            return success

        else:
            logger.error(f"잘못된 명령: {command}")
            return False

    def _send_simulated_command(self, equipment_name: str, command: str) -> bool:
        """시뮬레이션 모드: 장비 명령 처리"""
        if equipment_name not in self.sim_equipment_states:
            logger.error(f"시뮬레이션: 잘못된 장비 이름 {equipment_name}")
            return False

        state = self.sim_equipment_states[equipment_name]

        # Auto/Manual 모드 설정
        if command == "auto":
            state["auto_mode"] = True
            logger.info(f"✅ 시뮬레이션: {equipment_name} 자동 모드")
            return True
        elif command == "manual":
            state["auto_mode"] = False
            logger.info(f"✅ 시뮬레이션: {equipment_name} 수동 모드")
            return True

        # VFD/Bypass 모드 설정
        elif command == "vfd":
            state["vfd_mode"] = True
            logger.info(f"✅ 시뮬레이션: {equipment_name} VFD 모드")
            return True
        elif command == "bypass":
            state["vfd_mode"] = False
            logger.info(f"✅ 시뮬레이션: {equipment_name} Bypass 모드")
            return True

        # Fan 장비
        elif "FAN" in equipment_name:
            if command == "start_fwd":
                state["running"] = True
                state["running_fwd"] = True
                state["running_bwd"] = False
                state["frequency"] = 45.0
                logger.info(f"✅ 시뮬레이션: {equipment_name} 정방향 시작")
                return True
            elif command == "start_bwd":
                state["running"] = True
                state["running_fwd"] = False
                state["running_bwd"] = True
                state["frequency"] = 45.0
                logger.info(f"✅ 시뮬레이션: {equipment_name} 역방향 시작")
                return True
            elif command == "stop":
                state["running"] = False
                state["running_fwd"] = False
                state["running_bwd"] = False
                state["frequency"] = 0.0
                logger.info(f"✅ 시뮬레이션: {equipment_name} 정지")
                return True

        # Pump 장비
        else:
            if command == "start":
                state["running"] = True
                state["frequency"] = 45.0
                logger.info(f"✅ 시뮬레이션: {equipment_name} 시작")
                return True
            elif command == "stop":
                state["running"] = False
                state["frequency"] = 0.0
                logger.info(f"✅ 시뮬레이션: {equipment_name} 정지")
                return True

        logger.error(f"시뮬레이션: 잘못된 명령 {command} for {equipment_name}")
        return False

    def _get_simulated_sensor_data(self) -> Dict[str, Any]:
        """시뮬레이션 센서 데이터 - 실제처럼 변하는 값"""
        elapsed = time.time() - self.sim_start_time

        # 프로그램 시작 후 60초 동안은 알람 발생 안 함 (안정화 시간)
        if elapsed < 60:
            alarm_active = False
            cycle_position = int(elapsed)
            selected_alarms = []
        else:
            # 60초 이후부터 알람 시나리오 시작
            # 알람 시나리오: 3분(180초) 주기로 순환
            adjusted_elapsed = elapsed - 60  # 60초를 빼서 60초부터 시작
            cycle_position = int(adjusted_elapsed) % 180
            cycle_number = int(adjusted_elapsed) // 180  # 몇 번째 주기인지 (0, 1, 2, ...)

            # 알람 발생 시간: 매 주기의 0~15초 (60초 후부터 시작하므로 실제로는 60~75초)
            # 15~180초는 정상 상태
            alarm_active = (0 <= cycle_position < 15)

            # 새 알람 주기 시작 시 랜덤하게 2개 선택 (주기마다 동일한 알람 유지)
            if not hasattr(self, 'current_alarm_set') or cycle_position == 0:
                # 7개 센서 중 랜덤하게 2개 선택
                all_sensors = ['TX1', 'TX4', 'TX6', 'TX7', 'DPX1', 'DPX2', 'PU1']
                random.seed(cycle_number)  # 같은 주기에서는 동일한 알람 유지
                selected_alarms = random.sample(all_sensors, 2)
                self.current_alarm_set = selected_alarms
            else:
                selected_alarms = self.current_alarm_set

        # 알람 상태 전환 시 로그 출력
        if cycle_position == 0 and not self.sim_alarm_active and elapsed >= 60:
            self.sim_alarm_active = True
            self._new_cycle_started = True  # 새 사이클 시작 플래그
            logger.warning("=" * 70)
            logger.warning("🔔 [시뮬레이터] 랜덤 알람 발생 (15초간 유지)")

            # 선택된 알람 정보 출력
            alarm_names = {
                'TX1': '냉각수 토출 온도 상승',
                'TX4': '청수 입구 온도 상승',
                'TX6': 'E/R 내부 고온',
                'TX7': 'E/R 외부 고온',
                'DPX1': '냉각수 압력 저하',
                'DPX2': '기관실 차압 이상',
                'PU1': '주기관 부하 과다'
            }
            for sensor in selected_alarms:
                logger.warning(f"  - {alarm_names[sensor]} ({sensor})")
            logger.warning("=" * 70)
        elif cycle_position == 15 and self.sim_alarm_active:
            self.sim_alarm_active = False
            logger.info("✅ [시뮬레이터] 알람 시나리오 종료 (정상 복귀)")
            logger.info(f"   다음 알람은 {180 - 15}초 후 발생 (랜덤 알람 2개)")

        # 랜덤 알람 시스템: 선택된 센서만 알람 값으로 설정
        if alarm_active:
            # 기본값: 모든 센서 정상
            tx1_value = 25.0 + random.uniform(-2, 2)
            tx4_value = 45.0 + random.uniform(-2, 3)
            tx6_value = 35.0 + random.uniform(-3, 3)
            tx7_value = 28.0 + random.uniform(-2, 2)
            dpx1_value = 2.5 + random.uniform(-0.1, 0.1)
            dpx2_value = 100.0 + random.uniform(-10, 10)
            pu1_value = 60.0 + random.uniform(-10, 10)

            # 선택된 센서들을 알람 값으로 설정 (안정적인 범위로 고정)
            alarm_values = {
                'TX1': lambda: 32.0 + random.uniform(-0.5, 0.5),    # 냉각수 토출 고온 (임계값 30°C)
                'TX4': lambda: 52.0 + random.uniform(-0.5, 0.5),    # 청수 입구 고온 (임계값 50°C)
                'TX6': lambda: 52.0 + random.uniform(-0.3, 0.3),    # E/R 내부 고온 (임계값 50°C)
                'TX7': lambda: 42.0 + random.uniform(-0.3, 0.3),    # E/R 외부 고온 (임계값 40°C)
                'DPX1': lambda: 1.3 + random.uniform(-0.02, 0.02),  # 냉각수 압력 저하 (임계값 1.5 bar)
                'DPX2': lambda: 160.0 + random.uniform(-2, 2),      # E/R 차압 이상 (임계값 150 Pa)
                'PU1': lambda: 90.0 + random.uniform(-1, 1)         # 기관 부하 과다 (임계값 85%)
            }

            for sensor in selected_alarms:
                if sensor == 'TX1':
                    tx1_value = alarm_values[sensor]()
                elif sensor == 'TX4':
                    tx4_value = alarm_values[sensor]()
                elif sensor == 'TX6':
                    tx6_value = alarm_values[sensor]()
                elif sensor == 'TX7':
                    tx7_value = alarm_values[sensor]()
                elif sensor == 'DPX1':
                    dpx1_value = alarm_values[sensor]()
                elif sensor == 'DPX2':
                    dpx2_value = alarm_values[sensor]()
                elif sensor == 'PU1':
                    pu1_value = alarm_values[sensor]()
        else:
            # 정상 상태 (0~149초)
            tx6_value = 35.0 + random.uniform(-3, 3)      # 정상 범위
            tx7_value = 28.0 + random.uniform(-2, 2)      # 정상 범위
            tx1_value = 25.0 + random.uniform(-2, 2)      # 정상 범위
            tx4_value = 45.0 + random.uniform(-2, 3)      # 정상 범위
            dpx1_value = 2.5 + random.uniform(-0.1, 0.1)  # 정상 범위
            dpx2_value = 100.0 + random.uniform(-10, 10)  # 정상 범위
            pu1_value = 60.0 + random.uniform(-10, 10)    # 정상 범위

        # 사인파로 변동하는 온도/압력 시뮬레이션
        data = {
            "TX1": round(tx1_value, 1),                                               # CSW PP Disc Temp
            "TX2": round(22.0 + random.uniform(-1, 1) + 2 * (elapsed % 10) / 10, 1),  # CSW PP Suc Temp (22~25°C)
            "TX3": round(20.0 + random.uniform(-1, 1), 1),                            # FW Cooler 2 SW Out (19~21°C)
            "TX4": round(tx4_value, 1),                                               # FW Cooler FW In
            "TX5": round(35.0 + random.uniform(-1, 1), 1),                            # FW Cooler FW Out (34~36°C)
            "TX6": round(tx6_value, 1),                                               # E/R Inside Temp
            "TX7": round(tx7_value, 1),                                               # E/R Outside Temp
            "DPX1": round(dpx1_value, 2),                                             # CSW PP Disc Press
            "DPX2": round(dpx2_value, 1),                                             # E/R Diff Press
            "PU1": round(pu1_value, 1),                                               # M/E Load
            "_new_cycle": getattr(self, '_new_cycle_started', False)                 # 새 사이클 플래그
        }

        # 플래그 리셋
        if hasattr(self, '_new_cycle_started'):
            self._new_cycle_started = False

        return data

    def _get_simulated_equipment_status(self) -> Dict[str, Any]:
        """시뮬레이션 장비 상태"""
        status = {}
        for name, state in self.sim_equipment_states.items():
            if "FAN" in name:
                # Fan 상태
                status[f"{name}_RUNFW"] = state.get("running_fwd", False)
                status[f"{name}_RUNBW"] = state.get("running_bwd", False)
                status[f"{name}_ABNR"] = False
            else:
                # Pump 상태
                status[f"{name}_RUN"] = state.get("running", False)
                status[f"{name}_ESS"] = state.get("ess_mode", False)
                status[f"{name}_ABNR"] = False

            # Auto/Manual 및 VFD/Bypass 상태 추가
            status[f"{name}_AUTO"] = state.get("auto_mode", True)
            status[f"{name}_VFD"] = state.get("vfd_mode", True)
        return status

    def _get_simulated_vfd_data(self, equipment_index: int) -> Dict[str, Any]:
        """시뮬레이션 VFD 데이터"""
        equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                          "FAN1", "FAN2", "FAN3", "FAN4"]

        if equipment_index >= len(equipment_names):
            return self._get_default_vfd_data()

        name = equipment_names[equipment_index]
        state = self.sim_equipment_states.get(name, {})

        frequency = state.get("frequency", 0.0)
        # Pump는 running, Fan은 running_fwd 또는 running_bwd 체크
        if equipment_index < 6:  # Pump
            running = state.get("running", False)
        else:  # Fan
            running = state.get("running_fwd", False) or state.get("running_bwd", False)

        # 주파수에 따라 전력 계산 (대략적)
        power_kw = int(frequency * 2) if running else 0

        # 절감 데이터는 누적 데이터로 상태에 저장
        if "saved_kwh" not in state:
            # 초기값 설정 (장비별로 다른 값)
            state["saved_kwh"] = random.randint(1000, 5000)
            state["saved_ratio"] = random.randint(10, 30)

        # 운전 중일 때만 절감량 증가 (매우 천천히)
        if running and random.random() < 0.1:  # 10% 확률로만 증가
            state["saved_kwh"] += random.randint(0, 1)

        return {
            "frequency": round(frequency + random.uniform(-0.5, 0.5), 1) if running else 0.0,
            "power_kw": power_kw + random.randint(-2, 2) if running else 0,
            "avg_power": power_kw if running else 0,
            "saved_kwh_low": state["saved_kwh"] & 0xFFFF,
            "saved_kwh_high": (state["saved_kwh"] >> 16) & 0xFFFF,
            "saved_kwh": state["saved_kwh"],
            "saved_ratio": state["saved_ratio"],
            "run_hours_low": state.get("run_hours", 0),
            "run_hours_high": 0,
            "run_hours": state.get("run_hours", 0),
        }

    def _get_default_sensor_data(self) -> Dict[str, Any]:
        """기본 센서 데이터 (통신 실패 시)"""
        return {
            "TX1": 0.0, "TX2": 0.0, "TX3": 0.0, "TX4": 0.0,
            "TX5": 0.0, "TX6": 0.0, "TX7": 0.0,
            "DPX1": 0.0, "DPX2": 0.0, "PU1": 0.0
        }

    def _get_default_equipment_status(self) -> Dict[str, Any]:
        """기본 장비 상태 (통신 실패 시)"""
        status = {}
        for i in range(1, 4):
            status[f"SWP{i}_RUN"] = False
            status[f"SWP{i}_ESS"] = False
            status[f"SWP{i}_ABNR"] = False
            status[f"FWP{i}_RUN"] = False
            status[f"FWP{i}_ESS"] = False
            status[f"FWP{i}_ABNR"] = False
        for i in range(1, 5):
            status[f"FAN{i}_RUNFW"] = False
            status[f"FAN{i}_RUNBW"] = False
            status[f"FAN{i}_ABNR"] = False
        return status

    def _get_default_vfd_data(self) -> Dict[str, Any]:
        """기본 VFD 데이터 (통신 실패 시)"""
        return {
            "frequency": 0.0,
            "power_kw": 0,
            "avg_power": 0,
            "saved_kwh_low": 0,
            "saved_kwh_high": 0,
            "saved_kwh": 0,
            "saved_ratio": 0,
            "run_hours_low": 0,
            "run_hours_high": 0,
            "run_hours": 0,
        }

    def calculate_energy_savings_from_edge(self, equipment_list: List[Dict]) -> Dict[str, Any]:
        """
        EDGE AI 시뮬레이션: 에너지 절감률 계산
        실제 시스템에서는 EDGE Computer에서 이 계산을 수행하고,
        PLC를 통해 HMI에 전달됩니다.

        팬/펌프 법칙: P = k × N³ (전력은 회전수의 3제곱에 비례)

        Args:
            equipment_list: 장비 데이터 리스트 (get_all_equipment_data() 반환값)

        Returns:
            에너지 절감률 데이터 (total, swp, fwp, fan)
        """
        # 장비별 정격 전력 (kW)
        RATED_POWER = {
            "SWP": 132.0,  # Sea Water Pump 정격 전력
            "FWP": 75.0,   # Fresh Water Pump 정격 전력
            "FAN": 54.3,   # E/R Fan 정격 전력
        }

        # 초기화
        swp_power_60hz = 0.0
        swp_power_vfd = 0.0
        fwp_power_60hz = 0.0
        fwp_power_vfd = 0.0
        fan_power_60hz = 0.0
        fan_power_vfd = 0.0

        # 각 장비별 계산
        for i, eq in enumerate(equipment_list):
            frequency = eq.get("frequency", 0.0)

            # 장비 유형 구분
            if i < 3:  # SWP1, SWP2, SWP3
                rated_power = RATED_POWER["SWP"]
                # 60Hz 고정 운전 시 전력 (정격 전력)
                power_at_60hz = rated_power
                # 현재 주파수 운전 시 전력 (팬/펌프 법칙 적용)
                power_at_current_freq = rated_power * ((frequency / 60) ** 3) if frequency > 0 else 0

                swp_power_60hz += power_at_60hz
                swp_power_vfd += power_at_current_freq

            elif i < 6:  # FWP1, FWP2, FWP3
                rated_power = RATED_POWER["FWP"]
                power_at_60hz = rated_power
                power_at_current_freq = rated_power * ((frequency / 60) ** 3) if frequency > 0 else 0

                fwp_power_60hz += power_at_60hz
                fwp_power_vfd += power_at_current_freq

            else:  # FAN1, FAN2, FAN3, FAN4
                rated_power = RATED_POWER["FAN"]
                power_at_60hz = rated_power
                power_at_current_freq = rated_power * ((frequency / 60) ** 3) if frequency > 0 else 0

                fan_power_60hz += power_at_60hz
                fan_power_vfd += power_at_current_freq

        # 시스템별 절감량 및 절감률 계산
        def calc_savings(power_60hz, power_vfd):
            savings_kw = round(power_60hz - power_vfd, 1)
            savings_rate = round((savings_kw / power_60hz * 100), 1) if power_60hz > 0 else 0.0
            return {
                "power_60hz": round(power_60hz, 1),
                "power_vfd": round(power_vfd, 1),
                "savings_kw": savings_kw,
                "savings_rate": savings_rate
            }

        swp_data = calc_savings(swp_power_60hz, swp_power_vfd)
        fwp_data = calc_savings(fwp_power_60hz, fwp_power_vfd)
        fan_data = calc_savings(fan_power_60hz, fan_power_vfd)

        # 전체 절감량 계산
        total_power_60hz = swp_power_60hz + fwp_power_60hz + fan_power_60hz
        total_power_vfd = swp_power_vfd + fwp_power_vfd + fan_power_vfd
        total_data = calc_savings(total_power_60hz, total_power_vfd)

        # 누적 절감률 계산 (캘린더 기준)
        from datetime import datetime
        now = datetime.now()
        current_time = time.time()
        time_delta = current_time - self.energy_accumulator["last_update"]

        # 자정이 지나면 오늘 누적 데이터 리셋
        today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
        if today_start > self.energy_accumulator["today_start"]:
            self.energy_accumulator["today_start"] = today_start
            self.energy_accumulator["today_total_kwh_saved"] = 0.0
            self.energy_accumulator["today_samples"] = 0
            logger.info("📅 자정 경과: 오늘 누적 데이터 리셋")

        # 월초가 지나면 이번 달 누적 데이터 리셋
        month_start = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        if month_start > self.energy_accumulator["month_start"]:
            self.energy_accumulator["month_start"] = month_start
            self.energy_accumulator["month_total_kwh_saved"] = 0.0
            self.energy_accumulator["month_samples"] = 0
            logger.info("📅 월초 경과: 이번 달 누적 데이터 리셋")

        # 실시간 절감 전력(kW)을 시간당 절감량(kWh)으로 변환
        # time_delta(초) / 3600 = 시간, savings_kw * 시간 = kWh
        if time_delta > 0:
            kwh_saved_increment = total_data["savings_kw"] * (time_delta / 3600)
            self.energy_accumulator["today_total_kwh_saved"] += kwh_saved_increment
            self.energy_accumulator["month_total_kwh_saved"] += kwh_saved_increment
            self.energy_accumulator["today_samples"] += 1
            self.energy_accumulator["month_samples"] += 1
            self.energy_accumulator["last_update"] = current_time

        # 누적 절감률 계산 (평균)
        today_avg_rate = total_data["savings_rate"]  # 실시간 값으로 근사
        month_avg_rate = total_data["savings_rate"]  # 실시간 값으로 근사

        return {
            "realtime": {
                "total": total_data,
                "swp": swp_data,
                "fwp": fwp_data,
                "fan": fan_data
            },
            "today": {
                "total_kwh_saved": round(self.energy_accumulator["today_total_kwh_saved"], 1),
                "avg_savings_rate": round(today_avg_rate, 1),
                "start_time": self.energy_accumulator["today_start"].isoformat()
            },
            "month": {
                "total_kwh_saved": round(self.energy_accumulator["month_total_kwh_saved"], 1),
                "avg_savings_rate": round(month_avg_rate, 1),
                "start_time": self.energy_accumulator["month_start"].isoformat()
            }
        }

    def calculate_ai_target_frequency(self, equipment_list: List[Dict]) -> List[Dict]:
        """
        EDGE AI 시뮬레이션: AI 목표 주파수 계산
        실제 시스템에서는 EDGE Computer에서 이 계산을 수행하고,
        PLC를 통해 HMI에 전달됩니다.

        Args:
            equipment_list: 펌프/팬 리스트

        Returns:
            AI 목표 주파수 데이터 리스트
        """
        result = []

        # 그룹별 장비 정의
        groups = [
            {
                "group": "SW 펌프",
                "equipment": equipment_list[0:3],  # SWP1, SWP2, SWP3
                "base_target": 48.4  # AI가 계산한 기준 목표 주파수
            },
            {
                "group": "FW 펌프",
                "equipment": equipment_list[3:6],  # FWP1, FWP2, FWP3
                "base_target": 48.4
            },
            {
                "group": "E/R 팬",
                "equipment": equipment_list[6:10],  # FAN1~4
                "base_target": 47.3
            }
        ]

        for group_info in groups:
            group_name = group_info["group"]
            base_target = group_info["base_target"]

            for equip in group_info["equipment"]:
                # VFD/BYPASS 모드 확인
                vfd_mode = equip.get("vfd_mode", True)
                control_mode = "VFD" if vfd_mode else "BYPASS"

                # 운전 중인 경우에만 목표 주파수 생성
                if equip.get("running") or equip.get("running_fwd") or equip.get("running_bwd"):
                    # BYPASS 모드일 경우 목표 주파수는 60Hz 고정
                    if not vfd_mode:
                        target_freq = 60.0
                    else:
                        # AI가 계산한 목표 주파수 (약간의 변동 추가)
                        target_freq = base_target + random.uniform(-0.5, 0.5)

                    # 실제 VFD 피드백 주파수
                    actual_freq = equip.get("frequency", 0)

                    # 편차 계산
                    deviation = actual_freq - target_freq

                    # 상태 판단 (편차 기준: ±0.3Hz 이내=정상, ±0.3~1.0Hz=주의, ±1.0Hz 초과=경고)
                    if abs(deviation) <= 0.3:
                        status = "정상"
                    elif abs(deviation) < 1.0:
                        status = "주의"
                    else:
                        status = "경고"

                    # 입력 조건
                    input_conditions = ""
                    if "SW" in group_name:
                        input_conditions = "TX5, PX1"
                    elif "FW" in group_name:
                        input_conditions = "TX4"
                    else:  # E/R 팬
                        input_conditions = "TX6, TX7"

                    result.append({
                        "group": group_name,
                        "name": equip["name"],
                        "mode": control_mode,
                        "input_conditions": input_conditions,
                        "target_frequency": round(target_freq, 1),
                        "actual_frequency": round(actual_freq, 1),
                        "deviation": round(deviation, 2),
                        "status": status
                    })
                else:
                    # 정지 중인 경우
                    result.append({
                        "group": group_name,
                        "name": equip["name"],
                        "mode": "정지",
                        "input_conditions": "-",
                        "target_frequency": 0.0,
                        "actual_frequency": 0.0,
                        "deviation": 0.0,
                        "status": "-"
                    })

        return result

    def calculate_energy_savings_summary(self, equipment_list: List[Dict]) -> List[Dict]:
        """
        EDGE AI 시뮬레이션: 각 장비별 에너지 절감 상세 데이터
        실제 시스템에서는 EDGE Computer에서 이 계산을 수행하고,
        PLC를 통해 HMI에 전달됩니다.

        Args:
            equipment_list: 장비 데이터 리스트

        Returns:
            각 장비별 에너지 절감 상세 데이터 리스트
        """
        # 장비별 정격 전력 (kW)
        MOTOR_CAPACITY = {
            "SWP": 132.0,  # Sea Water Pump
            "FWP": 75.0,   # Fresh Water Pump
            "FAN": 54.3,   # E/R Fan
        }

        result = []

        for i, eq in enumerate(equipment_list):
            # 장비 이름 및 타입 결정
            if i < 3:  # SWP1, SWP2, SWP3
                motor_capacity = MOTOR_CAPACITY["SWP"]
            elif i < 6:  # FWP1, FWP2, FWP3
                motor_capacity = MOTOR_CAPACITY["FWP"]
            else:  # FAN1, FAN2, FAN3, FAN4
                motor_capacity = MOTOR_CAPACITY["FAN"]

            # 현재 주파수 및 전력 계산
            actual_freq = eq.get("frequency", 0.0)

            # 실제 전력 (팬/펌프 법칙: P = k × N³)
            actual_power = motor_capacity * ((actual_freq / 60) ** 3) if actual_freq > 0 else 0.0

            # 60Hz 고정 운전 시 전력 (정격 전력)
            power_at_60hz = motor_capacity if (eq.get("running") or eq.get("running_fwd") or eq.get("running_bwd")) else 0.0

            # 절감 전력
            saved_power = power_at_60hz - actual_power

            # 절감률
            saved_ratio = (saved_power / power_at_60hz * 100) if power_at_60hz > 0 else 0.0

            # ESS 모드 운전 시간 (ess_mode가 활성화된 시간)
            ess_mode = eq.get("ess_mode", False)
            run_hours = eq.get("run_hours", 0) if ess_mode else 0

            # KW Average (실제 전력의 평균 - 여기서는 실시간 값 사용)
            kw_average = actual_power

            # 누적 절감 에너지 (kWh) = 절감 전력(kW) × 운전 시간(h)
            # 간단한 시뮬레이션: 실시간 절감량을 기준으로 계산
            saved_kwh = saved_power * (run_hours / 1000) if run_hours > 0 else 0.0

            result.append({
                "name": eq["name"],
                "motor_capacity": round(motor_capacity, 1),
                "actual_freq": round(actual_freq, 1),
                "actual_power": round(actual_power, 1),
                "kw_average": round(kw_average, 1),
                "saved_kwh": round(saved_kwh, 1),
                "saved_ratio": round(saved_ratio, 1),
                "run_hours_ess": run_hours
            })

        return result
