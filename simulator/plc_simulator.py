#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ESS HMI PLC 시뮬레이터
Engine Room Ventilation System PLC를 시뮬레이션합니다.
"""

import sys
import io
import time
import random
import threading
from datetime import datetime

# Windows 콘솔 인코딩 문제 해결
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

try:
    from pymodbus.datastore import ModbusSlaveContext, ModbusServerContext
    from pymodbus.datastore import ModbusSequentialDataBlock
    from pymodbus.server import StartTcpServer
    from pymodbus.device import ModbusDeviceIdentification
except ImportError:
    print("ERROR: pymodbus library is required.")
    print("Install: pip install pymodbus")
    sys.exit(1)


class ESSPLCSimulator:
    """ESS (Engine Room Ventilation) PLC 시뮬레이터"""

    def __init__(self):
        print("=" * 70)
        print("  ESS HMI PLC 시뮬레이터")
        print("  Engine Room Ventilation System")
        print("=" * 70)

        # Modbus 데이터 스토어 초기화 (65535개 레지스터/코일)
        self.store = ModbusSlaveContext(
            di=ModbusSequentialDataBlock(0, [0]*65535),    # Discrete Inputs
            co=ModbusSequentialDataBlock(0, [0]*65535),    # Coils
            hr=ModbusSequentialDataBlock(0, [0]*65535),    # Holding Registers
            ir=ModbusSequentialDataBlock(0, [0]*65535)     # Input Registers
        )

        # 시뮬레이션 상태
        self.running = True

        # 장비 상태 (3 SWP, 3 FWP, 4 Fans)
        self.equipment = {
            # Sea Water Pumps
            'SWP1': {'running': True, 'ess_on': True, 'abnormal': False, 'hz': 45.5},
            'SWP2': {'running': True, 'ess_on': True, 'abnormal': False, 'hz': 46.2},
            'SWP3': {'running': False, 'ess_on': False, 'abnormal': False, 'hz': 0.0},

            # Fresh Water Pumps
            'FWP1': {'running': True, 'ess_on': True, 'abnormal': False, 'hz': 48.1},
            'FWP2': {'running': True, 'ess_on': True, 'abnormal': False, 'hz': 47.8},
            'FWP3': {'running': False, 'ess_on': False, 'abnormal': False, 'hz': 0.0},

            # E/R Fans
            'FAN1': {'running_fwd': True, 'running_bwd': False, 'abnormal': False, 'hz': 50.0},
            'FAN2': {'running_fwd': True, 'running_bwd': False, 'abnormal': False, 'hz': 49.5},
            'FAN3': {'running_fwd': False, 'running_bwd': False, 'abnormal': False, 'hz': 0.0},
            'FAN4': {'running_fwd': False, 'running_bwd': False, 'abnormal': False, 'hz': 0.0}
        }

        # 센서 베이스 값
        self.base_temps = {
            'TX1': 32.5,  # CSW PP Disc Temp
            'TX2': 28.0,  # CSW PP Suc Temp
            'TX3': 70.0,  # FW CLNG In Temp
            'TX4': 55.0,  # FW CLNG Out Temp
            'TX5': 50.0,  # ESS Batt Temp
            'TX6': 40.0,  # E/R Inside Temp
            'TX7': 25.0   # E/R Outside Temp
        }

        self.base_pressure = {
            'DPX1': 3.5,  # CSW PP Disc Press (kg/cm²)
            'DPX2': 15.0  # E/R Diff Press (Pa)
        }

        self.me_load = 60.0  # M/E Load %

        print("[OK] 데이터 스토어 초기화 완료")
        print("[INFO] Modbus TCP 서버: 192.168.0.130:502")
        print("[INFO] Node ID: 3")
        print("-" * 70)

    def temperature_to_raw(self, temp_celsius):
        """온도를 PLC raw 값으로 변환 (-24.3~100°C -> -243~1000)"""
        return int(temp_celsius * 10)

    def pressure_kgcm2_to_raw(self, pressure):
        """압력(kg/cm²)을 raw 값으로 변환 (0~6 -> 0~27648)"""
        return int(pressure * 4608)

    def pressure_pa_to_raw(self, pressure):
        """압력(Pa)을 raw 값으로 변환"""
        return int(pressure * 10)

    def percentage_to_raw(self, percentage):
        """퍼센트를 raw 값으로 변환 (0~100% -> 0~27648)"""
        return int(percentage * 276.48)

    def hz_to_raw(self, hz):
        """주파수를 raw 값으로 변환 (0~100Hz -> 0~1000)"""
        return int(hz * 10)

    def simulate_sensor_values(self):
        """센서 값 실시간 시뮬레이션"""
        print("[시작] 센서 데이터 시뮬레이션 스레드")

        while self.running:
            try:
                # 온도 센서 (K400010~K400016)
                tx1 = self.base_temps['TX1'] + random.uniform(-1.5, 1.5)
                tx2 = self.base_temps['TX2'] + random.uniform(-1.0, 1.0)
                tx3 = self.base_temps['TX3'] + random.uniform(-2.0, 2.0)
                tx4 = self.base_temps['TX4'] + random.uniform(-1.5, 1.5)
                tx5 = self.base_temps['TX5'] + random.uniform(-1.0, 1.0)
                tx6 = self.base_temps['TX6'] + random.uniform(-2.0, 2.0)
                tx7 = self.base_temps['TX7'] + random.uniform(-0.5, 0.5)

                # Holding Registers에 쓰기 (address 10~16)
                self.store.setValues(3, 10, [
                    self.temperature_to_raw(tx1),
                    self.temperature_to_raw(tx2),
                    self.temperature_to_raw(tx3),
                    self.temperature_to_raw(tx4),
                    self.temperature_to_raw(tx5),
                    self.temperature_to_raw(tx6),
                    self.temperature_to_raw(tx7)
                ])

                # 압력 센서 (K400017~K400018)
                dpx1 = self.base_pressure['DPX1'] + random.uniform(-0.1, 0.1)
                dpx2 = self.base_pressure['DPX2'] + random.uniform(-2.0, 2.0)

                self.store.setValues(3, 17, [
                    self.pressure_kgcm2_to_raw(dpx1),
                    self.pressure_pa_to_raw(dpx2)
                ])

                # M/E Load (K400019)
                self.me_load += random.uniform(-1.0, 1.0)
                self.me_load = max(20, min(100, self.me_load))
                self.store.setValues(3, 19, [self.percentage_to_raw(self.me_load)])

                # 장비 상태 업데이트
                self.update_equipment_status()

                # VFD 데이터 업데이트
                self.update_vfd_data()

                time.sleep(1)  # 1초마다 업데이트

            except Exception as e:
                print(f"[ERROR] 센서 시뮬레이션 오류: {e}")
                time.sleep(1)

    def update_equipment_status(self):
        """장비 상태 비트 업데이트 (K4000~K4001)"""

        # K4000 (Word 0) - 비트 0~15
        word_4000 = 0
        if self.equipment['SWP1']['running']: word_4000 |= (1 << 0)
        if self.equipment['SWP1']['ess_on']: word_4000 |= (1 << 1)
        if self.equipment['SWP1']['abnormal']: word_4000 |= (1 << 2)
        if self.equipment['SWP2']['running']: word_4000 |= (1 << 3)
        if self.equipment['SWP2']['ess_on']: word_4000 |= (1 << 4)
        if self.equipment['SWP2']['abnormal']: word_4000 |= (1 << 5)
        if self.equipment['SWP3']['running']: word_4000 |= (1 << 6)
        if self.equipment['SWP3']['ess_on']: word_4000 |= (1 << 7)
        if self.equipment['SWP3']['abnormal']: word_4000 |= (1 << 8)
        if self.equipment['FWP1']['running']: word_4000 |= (1 << 9)
        if self.equipment['FWP1']['ess_on']: word_4000 |= (1 << 10)
        if self.equipment['FWP1']['abnormal']: word_4000 |= (1 << 11)
        if self.equipment['FWP2']['running']: word_4000 |= (1 << 12)
        if self.equipment['FWP2']['ess_on']: word_4000 |= (1 << 13)
        if self.equipment['FWP2']['abnormal']: word_4000 |= (1 << 14)
        if self.equipment['FWP3']['running']: word_4000 |= (1 << 15)

        # K4001 (Word 1) - 비트 0~15
        word_4001 = 0
        if self.equipment['FWP3']['ess_on']: word_4001 |= (1 << 0)
        if self.equipment['FWP3']['abnormal']: word_4001 |= (1 << 1)
        if self.equipment['FAN1']['running_fwd']: word_4001 |= (1 << 2)
        if self.equipment['FAN1']['running_bwd']: word_4001 |= (1 << 3)
        if self.equipment['FAN1']['abnormal']: word_4001 |= (1 << 4)
        if self.equipment['FAN2']['running_fwd']: word_4001 |= (1 << 5)
        if self.equipment['FAN2']['running_bwd']: word_4001 |= (1 << 6)
        if self.equipment['FAN2']['abnormal']: word_4001 |= (1 << 7)
        if self.equipment['FAN3']['running_fwd']: word_4001 |= (1 << 8)
        if self.equipment['FAN3']['running_bwd']: word_4001 |= (1 << 9)
        if self.equipment['FAN3']['abnormal']: word_4001 |= (1 << 10)
        if self.equipment['FAN4']['running_fwd']: word_4001 |= (1 << 11)
        if self.equipment['FAN4']['running_bwd']: word_4001 |= (1 << 12)
        if self.equipment['FAN4']['abnormal']: word_4001 |= (1 << 13)

        # Coil 주소: K4000.x = address 64000 + bit
        # 하지만 Modbus는 Word 단위로 저장하므로 Holding Register 사용
        self.store.setValues(3, 4000, [word_4000, word_4001])

    def update_vfd_data(self):
        """VFD 운전 데이터 업데이트 (K400160~K400238)"""

        # SWP1~3, FWP1~3, FAN1~4 각 8개 레지스터
        vfd_configs = [
            ('SWP1', 160), ('SWP2', 168), ('SWP3', 176),
            ('FWP1', 184), ('FWP2', 192), ('FWP3', 200),
            ('FAN1', 208), ('FAN2', 216), ('FAN3', 224), ('FAN4', 232)
        ]

        for eq_name, start_addr in vfd_configs:
            eq = self.equipment[eq_name]
            running = eq.get('running', False) or eq.get('running_fwd', False) or eq.get('running_bwd', False)

            # Frequency (Hz * 10)
            frequency = self.hz_to_raw(eq['hz'])

            # Power (kW)
            if running:
                power = int(eq['hz'] * 0.8 + random.uniform(0, 5))
            else:
                power = 0

            # Savings (kWh) - 누적값
            current_savings = self.store.getValues(3, start_addr + 3, 1)[0]
            if running:
                savings = current_savings + random.randint(0, 2)
            else:
                savings = current_savings

            # Data: [Frequency, Power, AvgPower, Savings_L, Savings_H, Ratio, Hours_L, Hours_H]
            vfd_data = [
                frequency,              # Hz * 10
                power,                  # kW
                power,                  # Avg kW
                savings & 0xFFFF,       # Savings Low Word
                (savings >> 16) & 0xFFFF,  # Savings High Word
                80,                     # Savings Ratio %
                12345 & 0xFFFF,         # Run Hours Low
                0                       # Run Hours High
            ]

            self.store.setValues(3, start_addr, vfd_data)

    def monitor_commands(self):
        """PLC 명령 모니터링 (HMI에서 전송하는 명령 처리)"""
        print("[시작] 명령 모니터링 스레드")

        while self.running:
            try:
                # K4004~K4005: 제어 명령
                # 실제 구현은 HMI에서 Coil Write 명령을 받아 처리
                time.sleep(0.5)
            except Exception as e:
                print(f"[ERROR] 명령 모니터링 오류: {e}")
                time.sleep(1)

    def print_status(self):
        """주기적으로 시뮬레이터 상태 출력"""
        while self.running:
            try:
                time.sleep(10)
                print(f"\n[상태] {datetime.now().strftime('%H:%M:%S')}")
                print(f"  운전 중: SWP1={self.equipment['SWP1']['running']}, "
                      f"SWP2={self.equipment['SWP2']['running']}, "
                      f"FWP1={self.equipment['FWP1']['running']}, "
                      f"FWP2={self.equipment['FWP2']['running']}, "
                      f"FAN1={self.equipment['FAN1']['running_fwd']}, "
                      f"FAN2={self.equipment['FAN2']['running_fwd']}")
                print(f"  온도: TX1={self.base_temps['TX1']:.1f}°C, "
                      f"TX6={self.base_temps['TX6']:.1f}°C")
                print(f"  압력: DPX1={self.base_pressure['DPX1']:.2f} kg/cm², "
                      f"DPX2={self.base_pressure['DPX2']:.1f} Pa")
            except Exception as e:
                print(f"[ERROR] 상태 출력 오류: {e}")

    def start(self):
        """시뮬레이터 시작"""
        # 백그라운드 스레드 시작
        sensor_thread = threading.Thread(target=self.simulate_sensor_values, daemon=True)
        command_thread = threading.Thread(target=self.monitor_commands, daemon=True)
        status_thread = threading.Thread(target=self.print_status, daemon=True)

        sensor_thread.start()
        command_thread.start()
        status_thread.start()

        # Modbus TCP 서버 시작
        context = ModbusServerContext(slaves={3: self.store}, single=False)

        # 서버 식별 정보
        identity = ModbusDeviceIdentification()
        identity.VendorName = 'OMTech'
        identity.ProductCode = 'ESS-HMI'
        identity.VendorUrl = 'http://www.omtech.com'
        identity.ProductName = 'ESS PLC Simulator'
        identity.ModelName = 'ESS-SIM-001'
        identity.MajorMinorRevision = '1.0.0'

        print("\n[시작] Modbus TCP 서버 구동 중...")
        print("[INFO] HMI에서 192.168.0.130:502 (Node ID: 3) 으로 연결하세요")
        print("[INFO] 종료: Ctrl+C\n")

        try:
            StartTcpServer(
                context=context,
                identity=identity,
                address=("0.0.0.0", 502)
            )
        except KeyboardInterrupt:
            print("\n[종료] 사용자가 중단했습니다")
            self.running = False
        except Exception as e:
            print(f"\n[ERROR] 서버 오류: {e}")
            self.running = False


if __name__ == "__main__":
    simulator = ESSPLCSimulator()
    simulator.start()
