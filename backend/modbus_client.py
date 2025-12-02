"""
Modbus TCP 클라이언트 모듈
Engine Room Ventilation System (ESS) PLC와의 통신을 담당합니다.
"""

import logging
import random
import time
from typing import Optional, Dict, Any, List
try:
    from pymodbus.client import ModbusTcpClient  # pymodbus 3.x
except ImportError:
    from pymodbus.client.sync import ModbusTcpClient  # pymodbus 2.x fallback
from pymodbus.exceptions import ModbusException

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class PLCClient:
    """ESS PLC Modbus TCP 클라이언트"""

    def __init__(self, host: str = None, port: int = 502, slave_id: int = 3, use_simulation: bool = False):
        # 환경 변수로 PLC IP 설정 가능
        import os
        self.host = host or os.getenv("PLC_HOST", "localhost")
        self.port = int(os.getenv("PLC_PORT", port))
        self.slave_id = int(os.getenv("PLC_SLAVE_ID", slave_id))
        self.client: Optional[ModbusTcpClient] = None
        self.connected = False
        self.use_simulation = use_simulation

        # HMI는 계산하지 않음 - Edge Computer가 모든 계산 수행
        # energy_accumulator 제거됨 (이전에는 HMI에서 누적 계산했으나, 이제는 Edge Computer가 담당)

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
            # pymodbus 3.x는 device_id 파라미터 사용
            result = self.client.read_holding_registers(
                address=address,
                count=count,
                device_id=self.slave_id
            )

            if result.isError():
                logger.error(f"레지스터 읽기 오류: {result}")
                return None

            return result.registers

        except Exception as e:
            logger.error(f"레지스터 읽기 예외: {e}")
            self.connected = False
            return None

    def read_coils(self, address: int, count: int) -> Optional[List[bool]]:
        """코일 읽기"""
        if not self.connected or not self.client:
            self.connect()

        if not self.connected:
            return None

        try:
            result = self.client.read_coils(
                address=address,
                count=count,
                device_id=self.slave_id
            )

            if result.isError():
                logger.debug(f"코일 읽기 오류: {result}")
                return None

            return result.bits[:count]

        except Exception as e:
            logger.debug(f"코일 읽기 예외: {e}")
            return None

    def write_coil(self, address: int, value: bool) -> bool:
        """코일 쓰기"""
        if not self.connected:
            self.connect()

        if not self.connected:
            return False

        try:
            # pymodbus 3.x는 device_id 파라미터 사용
            result = self.client.write_coil(
                address=address,
                value=value,
                device_id=self.slave_id
            )

            if result.isError():
                logger.error(f"코일 쓰기 오류: {result}")
                return False

            logger.info(f"✅ 코일 쓰기 성공: 주소={address}, 값={value}")
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
            # pymodbus 3.x는 device_id 파라미터 사용
            result = self.client.write_register(
                address=address,
                value=value,
                device_id=self.slave_id
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
            "TX2": round(sensor_regs[1] / 10.0, 1),   # No.1 CLR SW Out Temp
            "TX3": round(sensor_regs[2] / 10.0, 1),   # No.2 CLR SW Out Temp
            "TX4": round(sensor_regs[3] / 10.0, 1),   # CLR FW In Temp
            "TX5": round(sensor_regs[4] / 10.0, 1),   # CLR FW Out Temp
            "TX6": round(sensor_regs[5] / 10.0, 1),   # E/R Inside Temp
            "TX7": round(sensor_regs[6] / 10.0, 1),   # E/R Outside Temp
            "DPX1": round(sensor_regs[7] / 4608.0, 2), # CSW PP Disc Press (kg/cm²)
            "DPX2": round(sensor_regs[8] / 10.0, 1),  # E/R Diff Press (Pa)
            "PU1": round(sensor_regs[9] / 276.48, 1), # M/E Load (%)
        }

    def get_equipment_status(self) -> Dict[str, Any]:
        """장비 상태 읽기 (K4000~K4001 + AUTO/VFD 코일)"""

        # 시뮬레이션 모드: 가짜 데이터 생성
        if self.use_simulation:
            return self._get_simulated_equipment_status()

        # Address 4000~4001: 장비 상태 비트
        status_regs = self.read_holding_registers(4000, 2)

        if not status_regs:
            return self._get_default_equipment_status()

        word_4000 = status_regs[0]
        word_4001 = status_regs[1]

        status = {
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

        # AUTO/MANUAL 및 VFD/BYPASS 코일 상태 읽기
        equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                          "FAN1", "FAN2", "FAN3", "FAN4"]
        for i, name in enumerate(equipment_names):
            # AUTO/MANUAL 코일 읽기 (64160 + eq_index)
            try:
                auto_coil = self.read_coils(64160 + i, 1)
                status[f"{name}_AUTO"] = bool(auto_coil[0]) if auto_coil else True
            except:
                status[f"{name}_AUTO"] = True  # 기본값: AUTO

            # VFD/BYPASS 코일 읽기 (64320 + eq_index)
            try:
                vfd_coil = self.read_coils(64320 + i, 1)
                status[f"{name}_VFD"] = bool(vfd_coil[0]) if vfd_coil else True
            except:
                status[f"{name}_VFD"] = True  # 기본값: VFD

        return status

    def get_vfd_data(self, equipment_index: int) -> Dict[str, Any]:
        """
        VFD 데이터 읽기 (레지스터 160~359, 장비당 20개 레지스터)
        equipment_index: 0=SWP1, 1=SWP2, 2=SWP3, 3=FWP1, 4=FWP2, 5=FWP3,
                        6=FAN1, 7=FAN2, 8=FAN3, 9=FAN4

        20개 레지스터 구조 (Edge Computer와 동일):
        [0] frequency, [1] power, [2] avg_power
        [3] motor_current, [4] motor_thermal, [5] heatsink_temp
        [6] torque, [7] inverter_thermal, [8] system_temp
        [9-10] kwh_counter (32bit), [11] num_starts, [12] over_temps
        [13-15] phase_u/v/w_current, [16] warning_word, [17] dc_link_voltage
        [18-19] run_hours (32bit)
        """

        # 시뮬레이션 모드: 가짜 데이터 생성
        if self.use_simulation:
            return self._get_simulated_vfd_data(equipment_index)

        # VFD 데이터 시작 주소 (각 20 레지스터)
        base_address = 160 + (equipment_index * 20)

        vfd_regs = self.read_holding_registers(base_address, 20)

        if not vfd_regs or len(vfd_regs) < 20:
            return self._get_default_vfd_data()

        return {
            # 기본 운전 데이터
            "frequency": round(vfd_regs[0] / 10.0, 1),  # Hz
            "power_kw": vfd_regs[1],                    # kW
            "avg_power": vfd_regs[2],                   # Avg kW

            # VFD 예방진단 데이터 (Edge Computer와 동일)
            "motor_current": round(vfd_regs[3] / 10.0, 1),  # A
            "motor_thermal": vfd_regs[4],              # % (모터 열부하)
            "heatsink_temp": vfd_regs[5],              # °C (방열판 온도)
            "torque": vfd_regs[6],                     # Nm
            "inverter_thermal": vfd_regs[7],           # % (인버터 열부하)
            "system_temp": vfd_regs[8],                # °C

            # 누적 통계
            "kwh_counter": vfd_regs[9] + (vfd_regs[10] << 16),  # kWh
            "num_starts": vfd_regs[11],                # 기동 횟수
            "over_temps": vfd_regs[12],                # 과열 발생 횟수

            # 3상 전류 데이터
            "phase_u_current": round(vfd_regs[13] / 10.0, 1),  # A
            "phase_v_current": round(vfd_regs[14] / 10.0, 1),  # A
            "phase_w_current": round(vfd_regs[15] / 10.0, 1),  # A

            # 기타
            "warning_word": vfd_regs[16],              # 경고 비트
            "dc_link_voltage": vfd_regs[17],           # V (DC 링크 전압)
            "run_hours": vfd_regs[18] + (vfd_regs[19] << 16),  # 운전 시간
        }

    def get_all_equipment_data(self) -> List[Dict[str, Any]]:
        """모든 장비 데이터 읽기 (VFD 데이터 + Edge AI 절감 데이터 포함)"""

        equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                          "FAN1", "FAN2", "FAN3", "FAN4"]

        status = self.get_equipment_status()

        # Edge AI가 PLC에 쓴 절감 데이터 읽기 (레지스터 5100-5109)
        savings_data = self._read_edge_ai_savings_data()

        equipment_list = []

        for i, name in enumerate(equipment_names):
            vfd_data = self.get_vfd_data(i)

            # 공통 상태: Auto/Manual, VFD/Bypass
            auto_mode = status.get(f"{name}_AUTO", True)
            vfd_mode = status.get(f"{name}_VFD", True)

            # Edge AI 절감 데이터 추가
            equipment_savings = savings_data.get(i, {}) if savings_data else {}

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
                    **vfd_data,
                    **equipment_savings  # Edge AI 절감 데이터 추가
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
                    **vfd_data,
                    **equipment_savings  # Edge AI 절감 데이터 추가
                })

        return equipment_list

    def _read_edge_ai_savings_data(self) -> Optional[Dict[int, Dict]]:
        """
        Edge AI가 PLC에 쓴 절감 데이터 읽기

        PLC 레지스터:
        - 5100-5109: 개별 장비 절감 전력 (kW × 10)
        - 5110-5119: 개별 장비 절감률 (% × 10)

        Returns:
            {장비인덱스: {"saved_kwh": 값, "saved_ratio": 값}}
        """
        if self.use_simulation:
            return self._simulate_edge_ai_savings_data()

        try:
            # 개별 장비 절감 전력 읽기 (5100-5109)
            equipment_savings_raw = self.read_holding_registers(5100, 10)
            if not equipment_savings_raw:
                logger.warning("Edge AI 장비별 절감 데이터 읽기 실패")
                return None

            # 개별 장비 절감률 읽기 (5110-5119) - Edge Computer에서 계산한 개별 절감률
            equipment_ratio_raw = self.read_holding_registers(5110, 10)
            if not equipment_ratio_raw:
                logger.warning("Edge AI 장비별 절감률 읽기 실패")
                equipment_ratio_raw = [0] * 10

            result = {}
            for i in range(10):
                saved_kw = equipment_savings_raw[i] / 10.0
                saved_ratio = equipment_ratio_raw[i] / 10.0

                result[i] = {
                    "saved_kwh": round(saved_kw, 1),
                    "saved_ratio": round(saved_ratio, 1)
                }

            return result

        except Exception as e:
            logger.error(f"Edge AI 절감 데이터 읽기 오류: {e}")
            return None

    def _simulate_edge_ai_savings_data(self) -> Dict[int, Dict]:
        """시뮬레이션 모드용 Edge AI 절감 데이터"""
        # 장비별 정격 전력 (kW)
        MOTOR_CAPACITY = [132, 132, 132, 75, 75, 75, 54.3, 54.3, 54.3, 54.3]

        result = {}
        for i in range(10):
            name = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                    "FAN1", "FAN2", "FAN3", "FAN4"][i]
            state = self.sim_equipment_states.get(name, {})

            # 운전 여부 확인
            if i < 6:
                is_running = state.get("running", False)
            else:
                is_running = state.get("running_fwd", False) or state.get("running_bwd", False)

            if is_running:
                frequency = state.get("frequency", 0)
                motor_capacity = MOTOR_CAPACITY[i]

                # 실제 전력 (큐빅 법칙)
                actual_power = motor_capacity * ((frequency / 60) ** 3)
                # 60Hz 기준 전력
                power_at_60hz = motor_capacity
                # 절감 전력
                saved_power = power_at_60hz - actual_power
                # 절감률
                saved_ratio = (saved_power / power_at_60hz * 100) if power_at_60hz > 0 else 0
                # 누적 절감량 (운전시간 기반)
                run_hours = state.get("run_hours", 0)
                saved_kwh = saved_power * (run_hours / 1000) if run_hours > 0 else saved_power * 0.5
            else:
                # 정지 중인 장비는 절감 없음
                saved_kwh = 0
                saved_ratio = 0

            result[i] = {
                "saved_kwh": round(saved_kwh, 1),
                "saved_ratio": round(saved_ratio, 1),
                "is_running": is_running  # 운전 상태 포함
            }

        return result

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
        """시뮬레이션 센서 데이터 - 정상 범위 값만 반환 (알람 시뮬레이션 제거됨)

        알람 발생은 PLC Simulator에서만 담당합니다.
        HMI Backend는 PLC에서 받은 데이터를 그대로 사용합니다.
        """
        elapsed = time.time() - self.sim_start_time

        # 모든 센서 정상 범위 값
        data = {
            "TX1": round(25.0 + random.uniform(-2, 2), 1),                             # CSW PP Disc Temp (정상: 23~27°C)
            "TX2": round(22.0 + random.uniform(-1, 1) + 2 * (elapsed % 10) / 10, 1),  # CSW PP Suc Temp (22~25°C)
            "TX3": round(20.0 + random.uniform(-1, 1), 1),                            # FW Cooler 2 SW Out (19~21°C)
            "TX4": round(45.0 + random.uniform(-2, 3), 1),                            # FW Cooler FW In (43~48°C)
            "TX5": round(35.0 + random.uniform(-1, 1), 1),                            # FW Cooler FW Out (34~36°C)
            "TX6": round(35.0 + random.uniform(-3, 3), 1),                            # E/R Inside Temp (32~38°C)
            "TX7": round(28.0 + random.uniform(-2, 2), 1),                            # E/R Outside Temp (26~30°C)
            "DPX1": round(2.5 + random.uniform(-0.1, 0.1), 2),                        # CSW PP Disc Press (2.4~2.6 bar)
            "DPX2": round(100.0 + random.uniform(-10, 10), 1),                        # E/R Diff Press (90~110 Pa)
            "PU1": round(60.0 + random.uniform(-10, 10), 1),                          # M/E Load (50~70%)
        }

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

    def read_edge_ai_results(self) -> Dict[str, Any]:
        """
        Edge AI가 PLC에 쓴 계산 결과를 읽어옴
        (HMI는 계산하지 않고 Edge Computer가 PLC에 쓴 데이터만 읽음)

        Returns:
            Edge AI 계산 결과 (에너지 절감률)
        """
        if self.use_simulation:
            # 시뮬레이션 모드: 더미 데이터 반환
            return self._simulate_edge_ai_results()

        try:
            # 5300-5303: 시스템 절감률 (% × 10)
            system_savings_raw = self.read_holding_registers(5300, 4)
            if not system_savings_raw:
                logger.warning("Edge AI 시스템 절감률 읽기 실패")
                return None

            # 5500-5503: 60Hz 고정 전력 (kW × 10)
            power_60hz_raw = self.read_holding_registers(5500, 4)
            if not power_60hz_raw:
                logger.warning("Edge AI 60Hz 전력 읽기 실패, 0으로 설정")
                power_60hz_raw = [0, 0, 0, 0]

            # 5510-5513: VFD 가변 전력 (kW × 10)
            power_vfd_raw = self.read_holding_registers(5510, 4)
            if not power_vfd_raw:
                logger.warning("Edge AI VFD 전력 읽기 실패, 0으로 설정")
                power_vfd_raw = [0, 0, 0, 0]

            # 5520-5523: 절감 전력 (kW × 10)
            savings_kw_raw = self.read_holding_registers(5520, 4)
            if not savings_kw_raw:
                logger.warning("Edge AI 절감 전력 읽기 실패, 0으로 설정")
                savings_kw_raw = [0, 0, 0, 0]

            # 실시간 절감률 데이터 (Edge AI가 계산해서 PLC에 쓴 값)
            realtime = {
                "total": {
                    "savings_rate": system_savings_raw[0] / 10.0,
                    "power_60hz": power_60hz_raw[0] / 10.0,
                    "power_vfd": power_vfd_raw[0] / 10.0,
                    "savings_kw": savings_kw_raw[0] / 10.0,
                },
                "swp": {
                    "savings_rate": system_savings_raw[1] / 10.0,
                    "power_60hz": power_60hz_raw[1] / 10.0,
                    "power_vfd": power_vfd_raw[1] / 10.0,
                    "savings_kw": savings_kw_raw[1] / 10.0,
                },
                "fwp": {
                    "savings_rate": system_savings_raw[2] / 10.0,
                    "power_60hz": power_60hz_raw[2] / 10.0,
                    "power_vfd": power_vfd_raw[2] / 10.0,
                    "savings_kw": savings_kw_raw[2] / 10.0,
                },
                "fan": {
                    "savings_rate": system_savings_raw[3] / 10.0,
                    "power_60hz": power_60hz_raw[3] / 10.0,
                    "power_vfd": power_vfd_raw[3] / 10.0,
                    "savings_kw": savings_kw_raw[3] / 10.0,
                },
            }

            # 5400-5401: 누적 절감량 (kWh × 10) - 오늘/이번달
            accumulated_kwh_raw = self.read_holding_registers(5400, 2)
            today_kwh = 0.0
            month_kwh = 0.0

            if accumulated_kwh_raw:
                today_kwh = accumulated_kwh_raw[0] / 10.0
                month_kwh = accumulated_kwh_raw[1] / 10.0
            else:
                logger.warning("Edge AI 누적 절감량 읽기 실패, 0으로 설정")

            return {
                "realtime": realtime,
                "today": {
                    "total_kwh_saved": today_kwh,
                    "avg_savings_rate": realtime["total"]["savings_rate"],
                },
                "month": {
                    "total_kwh_saved": month_kwh,
                    "avg_savings_rate": realtime["total"]["savings_rate"],
                }
            }

        except Exception as e:
            logger.error(f"Edge AI 결과 읽기 오류: {e}")
            return None

    def _simulate_edge_ai_results(self) -> Dict[str, Any]:
        """시뮬레이션 모드용 Edge AI 결과 (간단한 더미 데이터)"""
        # HMI는 계산하지 않음 - Edge Computer에서 계산한 값을 시뮬레이션
        return {
            "realtime": {
                "total": {
                    "power_60hz": 837.2,
                    "power_vfd": 410.2,
                    "savings_kw": 427.0,
                    "savings_rate": 51.0
                },
                "swp": {
                    "power_60hz": 396.0,
                    "power_vfd": 203.9,
                    "savings_kw": 192.1,
                    "savings_rate": 48.5
                },
                "fwp": {
                    "power_60hz": 225.0,
                    "power_vfd": 107.3,
                    "savings_kw": 117.7,
                    "savings_rate": 52.3
                },
                "fan": {
                    "power_60hz": 217.2,
                    "power_vfd": 101.8,
                    "savings_kw": 115.4,
                    "savings_rate": 53.1
                },
            },
            "today": {
                "total_kwh_saved": 123.4,  # 시뮬레이션 더미값
                "avg_savings_rate": 51.0,
                "start_time": "2025-11-24T00:00:00"
            },
            "month": {
                "total_kwh_saved": 3456.7,  # 시뮬레이션 더미값
                "avg_savings_rate": 51.0,
                "start_time": "2025-11-01T00:00:00"
            }
        }

    def read_edge_ai_target_frequencies(self, equipment_list: List[Dict]) -> List[Dict]:
        """
        Edge AI가 계산한 목표 주파수 읽기

        Args:
            equipment_list: 장비 리스트 (이름 정보 필요)

        Returns:
            AI 목표 주파수 데이터
        """
        if self.use_simulation:
            return self._simulate_ai_target_frequencies(equipment_list)

        try:
            # 5000-5009: AI 목표 주파수 (Hz × 10)
            target_freqs_raw = self.read_holding_registers(5000, 10)
            if not target_freqs_raw:
                logger.warning("Edge AI 목표 주파수 읽기 실패")
                return []

            result = []
            for i, eq in enumerate(equipment_list):
                target_freq = target_freqs_raw[i] / 10.0
                actual_freq = eq.get("frequency", 0.0)
                deviation = actual_freq - target_freq

                # 상태 판단
                if abs(deviation) <= 0.3:
                    status = "정상"
                elif abs(deviation) < 1.0:
                    status = "주의"
                else:
                    status = "경고"

                # 그룹 결정
                name = eq["name"]
                if name.startswith("SWP"):
                    group = "SW 펌프"
                elif name.startswith("FWP"):
                    group = "FW 펌프"
                else:
                    group = "E/R 팬"

                # 모드 결정 (운전 중이면 AI 제어)
                is_running = eq.get("running", False)
                mode = "AI 제어" if is_running else "정지"

                result.append({
                    "name": name,
                    "group": group,
                    "mode": mode,
                    "target_frequency": round(target_freq, 1),
                    "actual_frequency": round(actual_freq, 1),
                    "deviation": round(deviation, 2),
                    "status": status
                })

            return result

        except Exception as e:
            logger.error(f"Edge AI 목표 주파수 읽기 오류: {e}")
            return []

    def _simulate_ai_target_frequencies(self, equipment_list: List[Dict]) -> List[Dict]:
        """시뮬레이션 모드용 AI 목표 주파수"""
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

    def read_equipment_savings_summary(self, equipment_list: List[Dict]) -> List[Dict]:
        """
        PLC에서 Edge AI가 쓴 장비별 에너지 절감 데이터 읽기

        Args:
            equipment_list: 장비 데이터 리스트 (이름과 기본 정보용)

        Returns:
            각 장비별 에너지 절감 상세 데이터 리스트
        """
        if self.use_simulation:
            # 시뮬레이션 모드: 더미 데이터 반환
            return self._simulate_equipment_savings_summary(equipment_list)

        try:
            # PLC 레지스터에서 개별 장비 절감 전력 읽기 (5100-5109, kW × 10)
            equipment_savings_raw = self.read_holding_registers(5100, 10)
            if not equipment_savings_raw:
                logger.warning("장비별 절감 데이터 읽기 실패")
                return self._simulate_equipment_savings_summary(equipment_list)

            # 장비별 정격 전력 (kW)
            MOTOR_CAPACITY = {
                "SWP": 132.0,
                "FWP": 75.0,
                "FAN": 54.3,
            }

            result = []
            for i, eq in enumerate(equipment_list):
                # 장비 타입에 따른 정격 전력
                if i < 3:
                    motor_capacity = MOTOR_CAPACITY["SWP"]
                elif i < 6:
                    motor_capacity = MOTOR_CAPACITY["FWP"]
                else:
                    motor_capacity = MOTOR_CAPACITY["FAN"]

                # PLC에서 읽은 절감 전력 (kW)
                saved_kw = equipment_savings_raw[i] / 10.0

                # VFD 데이터에서 실제 정보 가져오기
                actual_freq = eq.get("frequency", 0.0)
                actual_power = motor_capacity * ((actual_freq / 60) ** 3) if actual_freq > 0 else 0.0
                run_hours = eq.get("run_hours", 0)
                saved_kwh = eq.get("saved_kwh", 0)
                saved_ratio = eq.get("saved_ratio", 0)

                result.append({
                    "name": eq["name"],
                    "motor_capacity": round(motor_capacity, 1),
                    "actual_freq": round(actual_freq, 1),
                    "actual_power": round(actual_power, 1),
                    "kw_average": round(actual_power, 1),
                    "saved_kwh": round(saved_kwh, 1),
                    "saved_ratio": round(saved_ratio, 1),
                    "run_hours_ess": run_hours
                })

            return result

        except Exception as e:
            logger.error(f"장비별 절감 데이터 읽기 오류: {e}")
            return self._simulate_equipment_savings_summary(equipment_list)

    def _simulate_equipment_savings_summary(self, equipment_list: List[Dict]) -> List[Dict]:
        """시뮬레이션 모드용 장비별 절감 데이터"""
        MOTOR_CAPACITY = {
            "SWP": 132.0,
            "FWP": 75.0,
            "FAN": 54.3,
        }

        result = []
        for i, eq in enumerate(equipment_list):
            if i < 3:
                motor_capacity = MOTOR_CAPACITY["SWP"]
            elif i < 6:
                motor_capacity = MOTOR_CAPACITY["FWP"]
            else:
                motor_capacity = MOTOR_CAPACITY["FAN"]

            actual_freq = eq.get("frequency", 0.0)
            actual_power = motor_capacity * ((actual_freq / 60) ** 3) if actual_freq > 0 else 0.0
            power_at_60hz = motor_capacity if (eq.get("running") or eq.get("running_fwd") or eq.get("running_bwd")) else 0.0
            saved_power = power_at_60hz - actual_power
            saved_ratio = (saved_power / power_at_60hz * 100) if power_at_60hz > 0 else 0.0

            # 누적 절감량 계산 (운전시간 기반 추정)
            run_hours = eq.get("run_hours", 0)
            # 평균 절감 전력 (kW) × 운전 시간 (h) = 절감 에너지 (kWh)
            saved_kwh = saved_power * (run_hours / 1000) if run_hours > 0 else saved_power * 0.5

            result.append({
                "name": eq["name"],
                "motor_capacity": round(motor_capacity, 1),
                "actual_freq": round(actual_freq, 1),
                "actual_power": round(actual_power, 1),
                "kw_average": round(actual_power, 1),
                "saved_kwh": round(saved_kwh, 1),
                "saved_ratio": round(saved_ratio, 1),
                "run_hours_ess": run_hours
            })

        return result

    def read_vfd_diagnosis(self) -> Optional[Dict]:
        """
        Edge Computer가 계산한 VFD 진단 결과를 PLC에서 직접 읽기

        PLC 레지스터:
        - 5200-5209: 건강도 점수 (0-100, 100=정상)
        - 5210-5219: 중증도 레벨 (0=정상, 1=주의, 2=경고, 3=위험)

        Returns:
            {
                'health_scores': [10개 장비 건강도 점수],
                'severity_levels': [10개 장비 중증도 레벨]
            }
        """
        if not self.connected:
            self.connect()

        if not self.connected:
            logger.warning("PLC 연결 안됨 - VFD 진단 결과 읽기 실패")
            return None

        try:
            # 건강도 점수 읽기 (레지스터 5200-5209)
            scores_raw = self.read_holding_registers(5200, 10)
            if not scores_raw:
                logger.warning("VFD 건강도 점수 읽기 실패")
                return None

            # 중증도 레벨 읽기 (레지스터 5210-5219)
            levels_raw = self.read_holding_registers(5210, 10)
            if not levels_raw:
                logger.warning("VFD 중증도 레벨 읽기 실패")
                return None

            logger.debug(f"VFD 진단 읽기 성공: scores={scores_raw}, levels={levels_raw}")

            return {
                'health_scores': list(scores_raw),
                'severity_levels': list(levels_raw)
            }

        except Exception as e:
            logger.error(f"VFD 진단 결과 읽기 오류: {e}")
            return None

    def read_ess_data(self) -> Optional[Dict]:
        """
        Edge Computer가 계산한 ESS 운전/에너지 데이터를 PLC에서 읽기

        PLC 레지스터:
        - 5700-5709: 개별 장비 ESS 운전시간 (hours × 10)
        - 5710-5719: 개별 장비 총 운전시간 (hours × 10)
        - 5720-5729: 개별 장비 ESS 모드 소비 전력량 (kWh × 10)
        - 5730-5739: 개별 장비 60Hz 기준 전력량 (kWh × 10)
        - 5740-5749: 개별 장비 절감 전력량 (kWh × 10)
        - 5750-5759: 개별 장비 절감률 (% × 10)
        - 5800-5803: 그룹별 ESS 운전시간 [SWP, FWP, FAN, TOTAL]
        - 5804-5807: 그룹별 총 운전시간
        - 5816-5819: 그룹별 절감량
        - 5820-5823: 그룹별 절감률
        - 5900-5909: 오늘 개별 ESS 운전시간 (hours × 100)
        - 5910-5919: 오늘 개별 절감량 (kWh × 10)
        - 5920-5923: 오늘 그룹별 절감량 [SWP, FWP, FAN, TOTAL]

        Returns:
            {
                'equipment': [10개 장비 데이터],
                'groups': {'SWP': {...}, 'FWP': {...}, 'FAN': {...}, 'TOTAL': {...}},
                'today': {'equipment': [...], 'groups': {...}}
            }
        """
        if self.use_simulation:
            return self._simulate_ess_data()

        if not self.connected:
            self.connect()

        if not self.connected:
            logger.warning("PLC 연결 안됨 - ESS 데이터 읽기 실패")
            return None

        try:
            equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                               "FAN1", "FAN2", "FAN3", "FAN4"]

            # === 개별 장비 누적 데이터 ===
            ess_hours_raw = self.read_holding_registers(5700, 10) or [0] * 10
            total_hours_raw = self.read_holding_registers(5710, 10) or [0] * 10
            ess_kwh_raw = self.read_holding_registers(5720, 10) or [0] * 10
            baseline_kwh_raw = self.read_holding_registers(5730, 10) or [0] * 10
            saved_kwh_raw = self.read_holding_registers(5740, 10) or [0] * 10
            savings_rate_raw = self.read_holding_registers(5750, 10) or [0] * 10

            equipment = []
            for i in range(10):
                equipment.append({
                    'name': equipment_names[i],
                    'ess_hours': ess_hours_raw[i] / 10.0,
                    'total_hours': total_hours_raw[i] / 10.0,
                    'ess_kwh': ess_kwh_raw[i] / 10.0,
                    'baseline_kwh': baseline_kwh_raw[i] / 10.0,
                    'saved_kwh': saved_kwh_raw[i] / 10.0,
                    'savings_rate': savings_rate_raw[i] / 10.0
                })

            # === 그룹별 데이터 ===
            group_ess_hours = self.read_holding_registers(5800, 4) or [0] * 4
            group_total_hours = self.read_holding_registers(5804, 4) or [0] * 4
            group_saved_kwh = self.read_holding_registers(5816, 4) or [0] * 4
            group_savings_rate = self.read_holding_registers(5820, 4) or [0] * 4

            group_names = ['SWP', 'FWP', 'FAN', 'TOTAL']
            groups = {}
            for i, name in enumerate(group_names):
                groups[name] = {
                    'ess_hours': group_ess_hours[i] / 10.0,
                    'total_hours': group_total_hours[i] / 10.0,
                    'saved_kwh': group_saved_kwh[i] / 10.0,
                    'savings_rate': group_savings_rate[i] / 10.0
                }

            # === 오늘 데이터 ===
            today_ess_hours = self.read_holding_registers(5900, 10) or [0] * 10
            today_saved_kwh = self.read_holding_registers(5910, 10) or [0] * 10
            today_group_saved = self.read_holding_registers(5920, 4) or [0] * 4

            today_equipment = []
            for i in range(10):
                today_equipment.append({
                    'name': equipment_names[i],
                    'ess_hours': today_ess_hours[i] / 100.0,  # hours × 100
                    'saved_kwh': today_saved_kwh[i] / 10.0
                })

            today_groups = {}
            for i, name in enumerate(group_names):
                today_groups[name] = {
                    'saved_kwh': today_group_saved[i] / 10.0
                }

            return {
                'equipment': equipment,
                'groups': groups,
                'today': {
                    'equipment': today_equipment,
                    'groups': today_groups
                }
            }

        except Exception as e:
            logger.error(f"ESS 데이터 읽기 오류: {e}")
            return None

    def _simulate_ess_data(self) -> Dict:
        """시뮬레이션 모드용 ESS 데이터"""
        import random

        equipment_names = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3",
                           "FAN1", "FAN2", "FAN3", "FAN4"]

        # 개별 장비 데이터 (시뮬레이션)
        equipment = []
        for i, name in enumerate(equipment_names):
            state = self.sim_equipment_states.get(name, {})
            running = state.get("running", False) or state.get("running_fwd", False)

            # 운전 중인 장비는 ESS 시간과 절감량 있음
            if running:
                ess_hours = random.uniform(50, 200)
                total_hours = ess_hours + random.uniform(10, 50)
                saved_kwh = random.uniform(100, 500)
                baseline_kwh = saved_kwh * random.uniform(1.3, 1.6)
                savings_rate = (saved_kwh / baseline_kwh) * 100 if baseline_kwh > 0 else 0
            else:
                ess_hours = random.uniform(0, 50)
                total_hours = ess_hours
                saved_kwh = random.uniform(0, 100)
                baseline_kwh = saved_kwh * 1.5
                savings_rate = 0

            equipment.append({
                'name': name,
                'ess_hours': round(ess_hours, 1),
                'total_hours': round(total_hours, 1),
                'ess_kwh': round(saved_kwh * 0.8, 1),
                'baseline_kwh': round(baseline_kwh, 1),
                'saved_kwh': round(saved_kwh, 1),
                'savings_rate': round(savings_rate, 1)
            })

        # 그룹별 집계
        groups = {
            'SWP': {'ess_hours': 0, 'total_hours': 0, 'saved_kwh': 0, 'savings_rate': 0},
            'FWP': {'ess_hours': 0, 'total_hours': 0, 'saved_kwh': 0, 'savings_rate': 0},
            'FAN': {'ess_hours': 0, 'total_hours': 0, 'saved_kwh': 0, 'savings_rate': 0},
            'TOTAL': {'ess_hours': 0, 'total_hours': 0, 'saved_kwh': 0, 'savings_rate': 0}
        }

        for eq in equipment:
            name = eq['name']
            if name.startswith('SWP'):
                group = 'SWP'
            elif name.startswith('FWP'):
                group = 'FWP'
            else:
                group = 'FAN'

            groups[group]['ess_hours'] += eq['ess_hours']
            groups[group]['total_hours'] += eq['total_hours']
            groups[group]['saved_kwh'] += eq['saved_kwh']

        for g in ['SWP', 'FWP', 'FAN']:
            for key in groups[g]:
                if key != 'savings_rate':
                    groups['TOTAL'][key] += groups[g][key]

        # 절감률 계산
        for g in groups:
            if groups[g]['total_hours'] > 0:
                groups[g]['savings_rate'] = round(random.uniform(35, 55), 1)

        # 오늘 데이터
        today_equipment = []
        for eq in equipment:
            today_equipment.append({
                'name': eq['name'],
                'ess_hours': round(eq['ess_hours'] * 0.1, 2),
                'saved_kwh': round(eq['saved_kwh'] * 0.1, 1)
            })

        today_groups = {}
        for g in groups:
            today_groups[g] = {
                'saved_kwh': round(groups[g]['saved_kwh'] * 0.1, 1)
            }

        return {
            'equipment': equipment,
            'groups': groups,
            'today': {
                'equipment': today_equipment,
                'groups': today_groups
            }
        }
