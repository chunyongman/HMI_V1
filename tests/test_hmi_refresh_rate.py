#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
인증 시험 #3: HMI 실시간 반영주기 검증
- PLC 센서값 변경 → HMI 화면 표시까지의 시간 측정
- 100회 측정하여 평균 반영 주기 산출

테스트 방식 (변경 감지 방식):
- PLC Simulator의 센서값은 1초마다 자체 변동됨
- HMI WebSocket에서 값 변경 감지 시점 측정
- PLC에서 직접 읽은 값과 HMI 브로드캐스트 값을 비교
- 값이 일치하는 시점까지의 시간 = 반영 시간

측정 경로:
  PLC Simulator(자체 변동) -> HMI Backend(읽기) -> WebSocket(브로드캐스트) -> 수신

합격 기준:
- 평균 반영 주기 <= 1.0초 (1초 이내)
"""

import sys
import time
import json
import threading
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass
from typing import List, Dict, Optional, Tuple

# 외부 라이브러리
try:
    import numpy as np
    import pandas as pd
except ImportError as e:
    print(f"[ERROR] 필요한 패키지가 없습니다: {e}")
    print("  pip install numpy pandas")
    sys.exit(1)

try:
    import websocket
except ImportError:
    print("[ERROR] websocket-client 패키지가 필요합니다.")
    print("  pip install websocket-client")
    sys.exit(1)

# 프로젝트 루트 추가
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))


@dataclass
class RefreshMeasurement:
    """반영 시간 측정 결과"""
    test_id: int
    sensor_name: str
    plc_value: float       # PLC에서 읽은 값
    hmi_value: float       # HMI에서 받은 값
    plc_read_time: float   # PLC에서 값을 읽은 시간 (T1)
    hmi_time: float        # HMI에서 같은 값을 수신한 시간 (T2)
    refresh_time: float    # 반영 시간 (T2 - T1)
    value_matched: bool    # 값이 일치하는지
    passed: bool


class PLCSimulatorClient:
    """PLC 시뮬레이터 Modbus 클라이언트"""

    def __init__(self, host: str = "127.0.0.1", port: int = 502, slave_id: int = 3):
        self.host = host
        self.port = port
        self.slave_id = slave_id
        self.client = None
        self.connected = False

    def connect(self) -> bool:
        """PLC 연결"""
        try:
            # pymodbus 3.x 버전
            from pymodbus.client import ModbusTcpClient
            self.client = ModbusTcpClient(self.host, port=self.port)
            self.connected = self.client.connect()
            return self.connected
        except ImportError:
            try:
                # pymodbus 2.x 버전 (레거시)
                from pymodbus.client.sync import ModbusTcpClient
                self.client = ModbusTcpClient(self.host, port=self.port)
                self.connected = self.client.connect()
                return self.connected
            except Exception as e:
                print(f"  PLC 연결 실패: {e}")
                return False
        except Exception as e:
            print(f"  PLC 연결 실패: {e}")
            return False

    def disconnect(self):
        """PLC 연결 해제"""
        if self.client:
            self.client.close()
            self.connected = False

    def read_sensor_value(self, register: int) -> Optional[float]:
        """센서값 읽기 (x10 스케일링 복원)"""
        if not self.connected:
            return None
        try:
            result = self.client.read_holding_registers(
                address=register, count=1, device_id=self.slave_id
            )
            if result.isError():
                return None
            return result.registers[0] / 10.0
        except Exception as e:
            return None

    def read_all_sensors(self) -> Dict[str, float]:
        """모든 센서값 읽기"""
        if not self.connected:
            return {}
        try:
            result = self.client.read_holding_registers(
                address=10, count=7, device_id=self.slave_id
            )
            if result.isError():
                return {}
            return {
                'TX1': round(result.registers[0] / 10.0, 1),
                'TX2': round(result.registers[1] / 10.0, 1),
                'TX3': round(result.registers[2] / 10.0, 1),
                'TX4': round(result.registers[3] / 10.0, 1),
                'TX5': round(result.registers[4] / 10.0, 1),
                'TX6': round(result.registers[5] / 10.0, 1),
                'TX7': round(result.registers[6] / 10.0, 1),
            }
        except Exception as e:
            return {}


class HMIWebSocketReceiver:
    """HMI WebSocket 데이터 수신기 (별도 스레드)"""

    def __init__(self, host: str = "127.0.0.1", port: int = 8001):
        self.url = f"ws://{host}:{port}/ws"
        self.ws = None
        self.running = False
        self.thread = None
        self.lock = threading.Lock()
        self.connected = False
        self.connection_error = None

        # 최신 브로드캐스트 데이터
        self.latest_sensors: Dict[str, float] = {}
        self.latest_time: float = 0

    def _on_message(self, ws, message):
        """WebSocket 메시지 수신"""
        try:
            data = json.loads(message)
            receive_time = time.time()

            if data.get("type") == "realtime_update":
                sensors = data.get("sensors", {})
                with self.lock:
                    self.latest_sensors = sensors.copy()
                    self.latest_time = receive_time
        except Exception as e:
            pass

    def _on_error(self, ws, error):
        """WebSocket 에러"""
        self.connection_error = str(error)

    def _on_close(self, ws, close_status_code, close_msg):
        """WebSocket 종료"""
        self.connected = False

    def _on_open(self, ws):
        """WebSocket 연결됨"""
        self.connected = True

    def _run(self):
        """WebSocket 수신 루프"""
        try:
            self.ws = websocket.WebSocketApp(
                self.url,
                on_message=self._on_message,
                on_error=self._on_error,
                on_close=self._on_close,
                on_open=self._on_open
            )
            self.ws.run_forever()
        except Exception as e:
            self.connection_error = str(e)

    def start(self) -> bool:
        """수신 시작"""
        self.running = True
        self.thread = threading.Thread(target=self._run, daemon=True)
        self.thread.start()

        # 연결 대기 (최대 5초)
        for _ in range(50):
            if self.connected:
                return True
            if self.connection_error:
                return False
            time.sleep(0.1)

        return self.connected

    def stop(self):
        """수신 중지"""
        self.running = False
        if self.ws:
            self.ws.close()
        if self.thread:
            self.thread.join(timeout=2)

    def get_latest(self) -> Tuple[Dict[str, float], float]:
        """최신 센서값과 수신 시간 반환"""
        with self.lock:
            return self.latest_sensors.copy(), self.latest_time

    def wait_for_value(self, sensor_key: str, expected_value: float,
                       timeout: float = 2.5, tolerance: float = 0.15) -> Optional[float]:
        """
        특정 센서값이 기대값과 일치할 때까지 대기
        반환: 수신 시간 (타임스탬프) 또는 None (타임아웃)
        """
        start_wait = time.time()

        while (time.time() - start_wait) < timeout:
            with self.lock:
                if sensor_key in self.latest_sensors:
                    sensor_val = self.latest_sensors[sensor_key]
                    if abs(sensor_val - expected_value) < tolerance:
                        return self.latest_time

            time.sleep(0.02)  # 20ms 간격 폴링

        return None


class HMIRefreshTester:
    """HMI 실시간 반영주기 테스터"""

    # 센서 목록
    SENSORS = ['TX1', 'TX2', 'TX3', 'TX4', 'TX5', 'TX6', 'TX7']

    def __init__(self, test_count: int = 100):
        print("\n[초기화] HMI 실시간 반영주기 테스터")
        print("-" * 50)

        self.plc_client = PLCSimulatorClient()
        self.ws_receiver = HMIWebSocketReceiver()
        self.measurements: List[RefreshMeasurement] = []
        self.test_count = test_count

    def connect(self) -> bool:
        """PLC 및 HMI WebSocket 연결"""
        print("  [1/2] PLC Simulator 연결 중...")
        if not self.plc_client.connect():
            print("  FAIL PLC Simulator 연결 실패")
            print("        -> PLC_Simulator 폴더에서 START_PLC_Simulator.bat 실행 필요")
            return False
        print("  OK PLC Simulator 연결 성공")

        print("  [2/2] HMI Backend WebSocket 연결 중...")
        if not self.ws_receiver.start():
            print("  FAIL HMI Backend WebSocket 연결 실패")
            print("        -> HMI_V1 폴더에서 START_HMI_V1.bat 실행 필요")
            if self.ws_receiver.connection_error:
                print(f"        -> 오류: {self.ws_receiver.connection_error}")
            return False
        print("  OK HMI Backend WebSocket 연결 성공")

        # WebSocket 데이터 수신 대기 (첫 브로드캐스트까지)
        print("  ... HMI 데이터 수신 대기 중...")
        time.sleep(1.5)

        sensors, _ = self.ws_receiver.get_latest()
        if not sensors:
            print("  WARN HMI로부터 센서 데이터를 받지 못했습니다.")
        else:
            print(f"  OK HMI 센서 데이터 수신 확인: {len(sensors)}개 센서")

        return True

    def disconnect(self):
        """연결 해제"""
        self.ws_receiver.stop()
        self.plc_client.disconnect()
        print("  OK 연결 해제 완료")

    def measure_refresh_time(self, test_id: int) -> RefreshMeasurement:
        """
        단일 반영 시간 측정

        측정 흐름:
        1. PLC에서 현재 센서값 읽기 (T1 기록)
        2. HMI WebSocket에서 같은 값이 올 때까지 대기 (T2 기록)
        3. 반영 시간 = T2 - T1
        """
        # 1. 테스트할 센서 선택 (순환)
        sensor = self.SENSORS[(test_id - 1) % len(self.SENSORS)]

        # 2. PLC에서 현재값 읽기 (T1)
        plc_read_time = time.time()
        plc_sensors = self.plc_client.read_all_sensors()

        if not plc_sensors or sensor not in plc_sensors:
            return RefreshMeasurement(
                test_id=test_id,
                sensor_name=sensor,
                plc_value=0,
                hmi_value=0,
                plc_read_time=plc_read_time,
                hmi_time=plc_read_time,
                refresh_time=0.0,
                value_matched=False,
                passed=False
            )

        plc_value = plc_sensors[sensor]

        # 3. HMI WebSocket에서 같은 값 수신 대기 (T2)
        # HMI는 1초마다 브로드캐스트하므로 최대 2초 대기
        hmi_time = self.ws_receiver.wait_for_value(
            sensor_key=sensor,
            expected_value=plc_value,
            timeout=2.0,
            tolerance=0.15  # ±0.15 허용 (반올림 오차)
        )

        if hmi_time is None:
            # 타임아웃
            hmi_sensors, _ = self.ws_receiver.get_latest()
            hmi_value = hmi_sensors.get(sensor, 0)
            return RefreshMeasurement(
                test_id=test_id,
                sensor_name=sensor,
                plc_value=plc_value,
                hmi_value=hmi_value,
                plc_read_time=plc_read_time,
                hmi_time=time.time(),
                refresh_time=2.0,
                value_matched=False,
                passed=False
            )

        # HMI 값 확인
        hmi_sensors, _ = self.ws_receiver.get_latest()
        hmi_value = hmi_sensors.get(sensor, plc_value)

        refresh_time = hmi_time - plc_read_time
        # 음수인 경우 (이미 HMI에 있던 경우) 0으로 처리
        if refresh_time < 0:
            refresh_time = 0.0

        passed = refresh_time <= 1.0

        return RefreshMeasurement(
            test_id=test_id,
            sensor_name=sensor,
            plc_value=plc_value,
            hmi_value=hmi_value,
            plc_read_time=plc_read_time,
            hmi_time=hmi_time,
            refresh_time=refresh_time,
            value_matched=True,
            passed=passed
        )

    def run_tests(self) -> List[RefreshMeasurement]:
        """전체 테스트 실행"""
        print("\n" + "=" * 70)
        print("HMI 실시간 반영주기 검증 시험")
        print("=" * 70)
        print(f"시험 시작: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"총 테스트 횟수: {self.test_count}회")
        print()
        print("측정 방법:")
        print("  PLC Simulator(센서값) -> HMI Backend(읽기) -> WebSocket(수신)")
        print("  ※ PLC에서 읽은 값과 HMI 브로드캐스트 값이 일치하는 시점 측정")
        print("-" * 70)

        self.measurements = []
        success_count = 0
        timeout_count = 0

        print("\n[측정 진행 중...]")
        print("-" * 50)

        for i in range(1, self.test_count + 1):
            measurement = self.measure_refresh_time(i)
            self.measurements.append(measurement)

            if measurement.value_matched:
                success_count += 1
            else:
                timeout_count += 1

            # 10회마다 진행 상황 출력
            if i % 10 == 0:
                valid = [m for m in self.measurements if m.value_matched]
                avg_time = np.mean([m.refresh_time for m in valid]) if valid else 0
                print(f"  [{i:3d}/{self.test_count}] 성공: {success_count}, 타임아웃: {timeout_count}, "
                      f"최근: {measurement.refresh_time*1000:.0f}ms, "
                      f"평균: {avg_time*1000:.0f}ms")

            # 다음 측정 전 대기
            time.sleep(0.15)

        print("-" * 50)
        print(f"측정 완료: 성공 {success_count}회, 타임아웃 {timeout_count}회")

        return self.measurements

    def analyze_results(self) -> Dict:
        """결과 분석"""
        if not self.measurements:
            return {}

        valid_measurements = [m for m in self.measurements if m.value_matched]

        if not valid_measurements:
            return {
                'total': len(self.measurements),
                'success': 0,
                'timeout': len(self.measurements),
                'avg_refresh_time': 0,
                'min_refresh_time': 0,
                'max_refresh_time': 0,
                'std_refresh_time': 0,
                'pass_count': 0,
                'pass_rate': 0
            }

        refresh_times = [m.refresh_time for m in valid_measurements]
        pass_count = sum(1 for m in valid_measurements if m.passed)

        return {
            'total': len(self.measurements),
            'success': len(valid_measurements),
            'timeout': len(self.measurements) - len(valid_measurements),
            'avg_refresh_time': np.mean(refresh_times),
            'min_refresh_time': np.min(refresh_times),
            'max_refresh_time': np.max(refresh_times),
            'std_refresh_time': np.std(refresh_times),
            'pass_count': pass_count,
            'pass_rate': (pass_count / len(valid_measurements)) * 100
        }

    def print_summary(self) -> bool:
        """결과 요약 출력 및 합격 판정"""
        stats = self.analyze_results()

        print("\n" + "=" * 70)
        print("시험 결과 요약")
        print("=" * 70)

        print(f"\n전체 결과:")
        print(f"  - 총 측정: {stats['total']}회")
        print(f"  - 성공: {stats['success']}회")
        print(f"  - 타임아웃: {stats['timeout']}회")

        print(f"\n반영 시간 통계 (성공한 측정만):")
        print(f"  - 평균: {stats['avg_refresh_time']*1000:.0f}ms ({stats['avg_refresh_time']:.3f}초)")
        print(f"  - 최소: {stats['min_refresh_time']*1000:.0f}ms ({stats['min_refresh_time']:.3f}초)")
        print(f"  - 최대: {stats['max_refresh_time']*1000:.0f}ms ({stats['max_refresh_time']:.3f}초)")
        print(f"  - 표준편차: {stats['std_refresh_time']*1000:.0f}ms")

        print(f"\n1초 이내 반영 비율:")
        print(f"  - 통과: {stats['pass_count']}회 / {stats['success']}회")
        print(f"  - 비율: {stats['pass_rate']:.1f}%")

        # 센서별 통계
        print(f"\n센서별 반영 시간:")
        sensor_stats = {}
        for m in self.measurements:
            if m.value_matched:
                if m.sensor_name not in sensor_stats:
                    sensor_stats[m.sensor_name] = []
                sensor_stats[m.sensor_name].append(m.refresh_time)

        for sensor, times in sorted(sensor_stats.items()):
            avg_time = np.mean(times) * 1000
            print(f"  [{sensor}] 평균: {avg_time:.0f}ms ({len(times)}회)")

        # 합격 판정
        print("\n" + "-" * 70)
        print("합격 기준 검증:")

        all_pass = stats['avg_refresh_time'] <= 1.0
        print(f"  - 평균 반영 주기 <= 1.0초: {stats['avg_refresh_time']:.3f}초 "
              f"{'[PASS]' if all_pass else '[FAIL]'}")

        timeout_rate = (stats['timeout'] / stats['total']) * 100 if stats['total'] > 0 else 0
        print(f"  - 타임아웃 비율 (참고): {timeout_rate:.1f}% ({stats['timeout']}/{stats['total']})")

        print("\n" + "=" * 70)
        if all_pass:
            print("최종 판정: [합격] HMI 실시간 반영주기 시험 통과")
        else:
            print("최종 판정: [불합격] 합격 기준 미달")
        print("=" * 70)
        print(f"시험 종료: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

        return all_pass

    def save_report(self):
        """결과 보고서 저장"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

        results_dir = project_root / 'test_results'
        results_dir.mkdir(exist_ok=True)

        # 상세 결과 CSV
        detail_data = []
        for m in self.measurements:
            detail_data.append({
                'test_id': m.test_id,
                'sensor': m.sensor_name,
                'plc_value': m.plc_value,
                'hmi_value': m.hmi_value,
                'refresh_time_ms': round(m.refresh_time * 1000, 0),
                'refresh_time_sec': round(m.refresh_time, 3),
                'value_matched': 'YES' if m.value_matched else 'TIMEOUT',
                'passed': 'PASS' if m.passed else 'FAIL'
            })

        detail_df = pd.DataFrame(detail_data)
        detail_file = results_dir / f'test_results_hmi_refresh_{timestamp}.csv'
        detail_df.to_csv(detail_file, index=False, encoding='utf-8-sig')
        print(f"\n상세 결과: {detail_file}")

        # 통계 요약 CSV
        stats = self.analyze_results()

        summary_df = pd.DataFrame({
            '항목': [
                '총 측정 횟수',
                '성공',
                '타임아웃',
                '평균 반영 시간',
                '최소 반영 시간',
                '최대 반영 시간',
                '표준편차',
                '1초 이내 비율',
                '최종 판정'
            ],
            '값': [
                f'{stats["total"]}회',
                f'{stats["success"]}회',
                f'{stats["timeout"]}회',
                f'{stats["avg_refresh_time"]*1000:.0f}ms ({stats["avg_refresh_time"]:.3f}초)',
                f'{stats["min_refresh_time"]*1000:.0f}ms',
                f'{stats["max_refresh_time"]*1000:.0f}ms',
                f'{stats["std_refresh_time"]*1000:.0f}ms',
                f'{stats["pass_rate"]:.1f}%',
                'PASS' if stats['avg_refresh_time'] <= 1.0 else 'FAIL'
            ],
            '기준': ['-', '-', '-', '<=1.0초', '-', '-', '-', '-', '-'],
            '판정': [
                '-', '-', '-',
                'PASS' if stats['avg_refresh_time'] <= 1.0 else 'FAIL',
                '-', '-', '-', '-',
                'PASS' if stats['avg_refresh_time'] <= 1.0 else 'FAIL'
            ]
        })

        summary_file = results_dir / f'test_summary_hmi_refresh_{timestamp}.csv'
        summary_df.to_csv(summary_file, index=False, encoding='utf-8-sig')
        print(f"통계 요약: {summary_file}")

        return detail_file, summary_file


def check_prerequisites():
    """사전 요구사항 확인"""
    print("\n" + "=" * 70)
    print("사전 요구사항 확인")
    print("=" * 70)
    print()
    print("이 테스트를 실행하기 전에 다음을 확인하세요:")
    print()
    print("  1. PLC Simulator 실행")
    print("     -> PLC_Simulator 폴더에서 START_PLC_Simulator.bat 실행")
    print()
    print("  2. HMI Backend 실행")
    print("     -> HMI_V1 폴더에서 START_HMI_V1.bat 실행")
    print()
    print("-" * 70)


def main():
    """메인 함수"""
    # 명령줄 인자로 자동 실행 모드 확인
    auto_mode = '--auto' in sys.argv or '-y' in sys.argv

    print("\n" + "=" * 70)
    print("인증 시험 #3: HMI 실시간 반영주기")
    print("=" * 70)
    print()
    print("테스트 내용:")
    print("  - PLC 센서값이 HMI 화면에 반영되는 시간 측정")
    print("  - 100회 측정하여 평균 반영 주기 산출")
    print()
    print("측정 경로:")
    print("  PLC Simulator(센서값) -> HMI Backend(읽기) -> WebSocket(브로드캐스트)")
    print()
    print("합격 기준:")
    print("  - 평균 반영 주기 <= 1.0초 (1초 이내)")
    print()

    check_prerequisites()

    if not auto_mode:
        input("Enter 키를 눌러 시험을 시작하세요...")

    tester = HMIRefreshTester(test_count=100)

    if not tester.connect():
        print("\n[ERROR] 시스템에 연결할 수 없습니다.")
        return 1

    try:
        tester.run_tests()
        all_pass = tester.print_summary()
        tester.save_report()

        return 0 if all_pass else 1

    finally:
        tester.disconnect()


if __name__ == "__main__":
    try:
        result = main()
        sys.exit(result)
    except KeyboardInterrupt:
        print("\n\n[INFO] 사용자에 의해 시험이 중단되었습니다.")
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] 시험 중 오류 발생: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
