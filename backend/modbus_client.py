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

        # 시뮬레이션 모드용 상태 변수
        if use_simulation:
            logger.info("🎮 시뮬레이션 모드 활성화")
            self.sim_start_time = time.time()
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

        # 사인파로 변동하는 온도/압력 시뮬레이션
        return {
            "TX1": round(25.0 + random.uniform(-2, 2) + 3 * (elapsed % 10) / 10, 1),  # CSW PP Disc Temp (25~30°C)
            "TX2": round(22.0 + random.uniform(-1, 1) + 2 * (elapsed % 10) / 10, 1),  # CSW PP Suc Temp (22~25°C)
            "TX3": round(20.0 + random.uniform(-1, 1), 1),                            # FW Cooler 2 SW Out (19~21°C)
            "TX4": round(45.0 + random.uniform(-2, 3), 1),                            # FW Cooler FW In (43~48°C)
            "TX5": round(35.0 + random.uniform(-1, 1), 1),                            # FW Cooler FW Out (34~36°C)
            "TX6": round(35.0 + random.uniform(-3, 3), 1),                            # E/R Inside Temp (32~38°C)
            "TX7": round(28.0 + random.uniform(-2, 2), 1),                            # E/R Outside Temp (26~30°C)
            "DPX1": round(2.5 + random.uniform(-0.1, 0.1), 2),                        # CSW PP Disc Press (2.4~2.6 kg/cm²)
            "DPX2": round(100.0 + random.uniform(-10, 10), 1),                        # E/R Diff Press (90~110 Pa)
            "PU1": round(60.0 + random.uniform(-10, 10), 1),                          # M/E Load (50~70%)
        }

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
