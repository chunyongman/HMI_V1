# 실제 PLC 교체 가이드
## PLC Simulator → 실제 PLC 전환 절차

---

## 개요

이 문서는 개발/테스트 환경에서 사용하던 **PLC Simulator**를 **실제 PLC 하드웨어**로 교체하는 절차를 설명합니다.

**장점:**
- 최소한의 설정 변경만으로 교체 가능
- Edge Computer와 HMI 코드는 변경 불필요
- 핫스왑(Hot-swap) 가능

---

## 사전 준비 사항

### 1. 실제 PLC 정보 확인

다음 정보를 미리 확인하세요:

- **PLC IP 주소**: 예) `192.168.1.100`
- **Modbus TCP 포트**: 일반적으로 `502` (표준)
- **Slave/Unit ID**: 일반적으로 `1` 또는 `3`
- **네트워크 설정**: PLC가 같은 서브넷에 있는지 확인

### 2. PLC 레지스터 맵 확인

**중요!** 실제 PLC가 다음 레지스터 맵을 지원해야 합니다:

| 레지스터 범위 | 개수 | 용도 | 데이터 형식 |
|--------------|------|------|-----------|
| 10-19 | 10 | 센서 데이터 (온도, 압력, 부하율 등) | INT16 |
| 4000-4001 | 2 | 장비 상태 비트 (ON/OFF, ESS 모드) | UINT16 |
| 160-239 | 80 | VFD 운전 데이터 (10개 장비 × 8 레지스터) | INT16 |
| 5000-5009 | 10 | AI 목표 주파수 (Hz × 10) | INT16 |
| 5100-5109 | 10 | 절감 전력 (kW × 10) | INT16 |
| 5200-5209 | 10 | VFD 진단 점수 (0-100) | INT16 |
| 5300-5303 | 4 | 시스템 절감률 (% × 10) | INT16 |

**참고:** PLC 프로그램이 위 레지스터 맵과 일치하도록 작성되어야 합니다.

---

## 교체 절차

### 1단계: 기존 시스템 종료

#### ① HMI V1 종료
```batch
# HMI PC에서
# Frontend 브라우저 창 닫기
# Backend 터미널에서 Ctrl+C
```

#### ② Edge Computer 종료
```batch
# Edge Computer PC에서
# 터미널에서 Ctrl+C
```

#### ③ PLC Simulator 종료
```batch
# PLC Simulator PC에서
# 터미널에서 Ctrl+C
```

---

### 2단계: 실제 PLC 연결

#### ① 물리적 연결
1. 실제 PLC를 네트워크 스위치에 이더넷 케이블로 연결
2. PLC 전원 켜기
3. PLC 초기화 완료 대기 (약 30초)

#### ② 네트워크 연결 확인
Edge Computer PC 또는 HMI PC에서:
```batch
ping 192.168.1.100
```
→ 응답이 오는지 확인

**응답 예시:**
```
Reply from 192.168.1.100: bytes=32 time<1ms TTL=128
Reply from 192.168.1.100: bytes=32 time<1ms TTL=128
```

#### ③ Modbus TCP 포트 확인
```batch
telnet 192.168.1.100 502
```
또는
```batch
Test-NetConnection -ComputerName 192.168.1.100 -Port 502
```

**성공 시:** 연결됨 (Connection successful)
**실패 시:** PLC Modbus 서버 설정 확인 필요

---

### 3단계: Edge Computer 설정 변경

#### 방법 1: 환경 변수 사용 (권장)

**START_WITH_REAL_PLC.bat** 파일 생성:
```batch
@echo off
chcp 65001 > nul
echo ======================================
echo   Edge AI - 실제 PLC 연결 모드
echo ======================================
echo.

REM 실제 PLC IP 설정
set PLC_HOST=192.168.1.100
set PLC_PORT=502
set PLC_SLAVE_ID=3

echo [설정] PLC IP: %PLC_HOST%
echo [설정] PLC Port: %PLC_PORT%
echo [설정] Slave ID: %PLC_SLAVE_ID%
echo.

cd /d "%~dp0"
call START.bat

pause
```

**실행:**
```batch
cd C:\Users\my\Desktop\Edge_Computer_V1
START_WITH_REAL_PLC.bat
```

---

#### 방법 2: config.py 직접 수정

`C:\Users\my\Desktop\Edge_Computer_V1\config.py` 파일 열기:

**수정 전:**
```python
# PLC 연결 설정
PLC_HOST = os.getenv("PLC_HOST", "localhost")  # 기본값: localhost
PLC_PORT = int(os.getenv("PLC_PORT", "502"))
PLC_SLAVE_ID = int(os.getenv("PLC_SLAVE_ID", "3"))
```

**수정 후:**
```python
# PLC 연결 설정
PLC_HOST = os.getenv("PLC_HOST", "192.168.1.100")  # 실제 PLC IP로 변경
PLC_PORT = int(os.getenv("PLC_PORT", "502"))
PLC_SLAVE_ID = int(os.getenv("PLC_SLAVE_ID", "3"))
```

**저장 후 실행:**
```batch
cd C:\Users\my\Desktop\Edge_Computer_V1
START.bat
```

---

### 4단계: HMI V1 설정 변경

#### 방법 1: 환경 변수 사용 (권장)

**START_WITH_REAL_PLC.bat** 파일 생성:
```batch
@echo off
chcp 65001 > nul
echo ======================================================================
echo   HMI V1 - 실제 PLC 연결 모드
echo ======================================================================
echo.

REM 실제 PLC IP 설정
set PLC_HOST=192.168.1.100
set PLC_PORT=502
set PLC_SLAVE_ID=3

echo [설정] PLC IP: %PLC_HOST%
echo [설정] PLC Port: %PLC_PORT%
echo [설정] Slave ID: %PLC_SLAVE_ID%
echo.

cd /d "%~dp0"
call START_HMI_V1.bat

pause
```

**실행:**
```batch
cd C:\Users\my\Desktop\HMI_V1
START_WITH_REAL_PLC.bat
```

---

#### 방법 2: main.py 직접 수정

`C:\Users\my\Desktop\HMI_V1\backend\main.py` 파일 열기 (약 40번째 줄):

**수정 전:**
```python
plc_client = PLCClient(
    host=None,           # 환경 변수 또는 localhost
    port=502,
    slave_id=3,
    use_simulation=False
)
```

**수정 후:**
```python
plc_client = PLCClient(
    host="192.168.1.100",  # 실제 PLC IP 직접 지정
    port=502,
    slave_id=3,
    use_simulation=False   # 반드시 False!
)
```

**중요:** `use_simulation=False` 확인!

---

### 5단계: 시스템 시작 (순서 중요!)

#### ① 실제 PLC 준비 확인
- PLC 전원이 켜져 있는지 확인
- PLC 초기화 완료 (RUN 모드)
- 네트워크 연결 정상 (`ping` 테스트)

#### ② Edge Computer 시작
```batch
cd C:\Users\my\Desktop\Edge_Computer_V1
START_WITH_REAL_PLC.bat
```

**확인 사항:**
```
[INFO] PLC 연결 시도: 192.168.1.100:502
[SUCCESS] PLC 연결 성공
[INFO] AI 계산 시작
```

**에러 발생 시:**
- PLC IP 주소 재확인
- 네트워크 케이블 연결 확인
- PLC Modbus 서버 활성화 여부 확인

#### ③ HMI V1 시작 (10초 후)
```batch
cd C:\Users\my\Desktop\HMI_V1
START_WITH_REAL_PLC.bat
```

**확인 사항:**
- Backend: "PLC 연결 성공" 메시지
- Frontend: 브라우저 자동 열림
- 대시보드에 **실제 PLC 데이터** 표시

---

## 동작 확인

### 1. Edge Computer 로그 확인

**정상 동작 시:**
```
[2025-01-21 12:00:00] PLC 연결 성공 (192.168.1.100:502)
[2025-01-21 12:00:01] 센서 데이터 읽기 성공
[2025-01-21 12:00:01] 장비 상태 읽기 성공 (10개)
[2025-01-21 12:00:01] AI 계산 완료 - 절감률: 48.5%
[2025-01-21 12:00:01] PLC에 AI 결과 쓰기 성공
```

**에러 발생 시:**
```
[ERROR] PLC 연결 실패: Connection timeout
[ERROR] Modbus 읽기 실패: Invalid register address
```
→ 트러블슈팅 섹션 참조

---

### 2. HMI 대시보드 확인

브라우저에서 `http://localhost:5173` 접속 후:

**확인 항목:**
- ✅ 센서 데이터 실시간 업데이트 (1초마다)
- ✅ 장비 상태 ON/OFF 정상 표시
- ✅ VFD 주파수 데이터 표시
- ✅ AI 목표 주파수 표시
- ✅ 에너지 절감 현황 표시

**비정상 징후:**
- ❌ 데이터가 업데이트되지 않음
- ❌ "시뮬레이션 모드" 표시 (use_simulation=True로 설정된 경우)
- ❌ 모든 값이 0 또는 null

---

### 3. PLC 레지스터 확인 (선택)

Edge Computer PC에서 테스트 스크립트 실행:
```batch
cd C:\Users\my\Desktop\Edge_Computer_V1
venv\Scripts\python test_connection.py
```

**출력 예시:**
```
======================================================================
  Modbus TCP 연결 테스트
======================================================================
[연결] PLC: 192.168.1.100:502
[성공] 연결 완료

[테스트 1] 센서 데이터 읽기 (레지스터 10-19)
  - 외기 온도: 28.5°C
  - M/E 부하율: 75.0%
  - FW 온도: 82.3°C
  ...

[테스트 2] Edge AI 결과 읽기 (레지스터 5000-5009)
  - AI 목표 주파수 SWP1: 48.4 Hz
  - AI 목표 주파수 SWP2: 48.2 Hz
  ...

모든 테스트 통과! ✅
```

---

## 트러블슈팅

### 문제 1: "PLC 연결 실패 - Connection timeout"

**원인:**
- PLC 전원 꺼짐
- 네트워크 케이블 연결 불량
- 잘못된 IP 주소
- 방화벽 차단

**해결 방법:**
```batch
# 1. Ping 테스트
ping 192.168.1.100

# 2. 포트 테스트
telnet 192.168.1.100 502

# 3. PLC 방화벽 확인
# PLC에서 포트 502 TCP 허용 확인

# 4. IP 주소 재확인
# PLC 설정 화면에서 IP 주소 확인
```

---

### 문제 2: "Modbus 읽기 실패 - Invalid register address"

**원인:**
- PLC 레지스터 맵이 다름
- PLC에 해당 레지스터가 없음

**해결 방법:**
1. PLC 프로그램 확인 - 레지스터 10-19 존재 확인
2. PLC Modbus 매핑 테이블 확인
3. Edge Computer의 `config.py`에서 레지스터 주소 수정

**예시:**
```python
# config.py
MODBUS_REGISTERS = {
    "SENSORS_START": 100,  # 10 → 100으로 변경 (PLC에 맞춰)
    "SENSORS_COUNT": 10,
}
```

---

### 문제 3: "데이터는 읽어지지만 값이 이상함"

**원인:**
- 데이터 스케일링 차이
- PLC 데이터 형식 차이 (INT16 vs FLOAT)

**해결 방법:**

예) PLC가 온도를 `285` (28.5°C × 10)로 저장하는 경우:

`Edge_Computer_V1\modbus_client.py` 수정:
```python
def read_sensors(self):
    # ...
    sensors = {
        "outside_air_temp": registers[0] / 10.0,  # 스케일 조정
        "me_load": registers[1] / 10.0,           # 스케일 조정
        # ...
    }
```

---

### 문제 4: "Edge AI가 PLC에 결과를 쓰지 못함"

**원인:**
- PLC 레지스터 5000-5303이 Read-Only
- PLC가 쓰기 요청 거부

**해결 방법:**
1. PLC 프로그램에서 레지스터 5000-5303을 **읽기/쓰기 모드**로 설정
2. PLC Modbus 설정에서 Write 권한 확인
3. Edge Computer 로그에서 에러 메시지 확인:
```
[ERROR] PLC 쓰기 실패: Illegal data address
```

---

### 문제 5: "HMI에 '시뮬레이션 모드' 표시됨"

**원인:**
- `use_simulation=True`로 설정됨

**해결 방법:**

`HMI_V1\backend\main.py` 수정:
```python
plc_client = PLCClient(
    host="192.168.1.100",
    use_simulation=False  # ← False로 변경!
)
```

Backend 재시작:
- Backend 터미널에서 Ctrl+C
- 다시 `START_WITH_REAL_PLC.bat` 실행

---

## 시뮬레이터로 되돌리기

테스트를 위해 다시 PLC Simulator로 돌아가려면:

### 1단계: Edge Computer와 HMI 종료

### 2단계: PLC Simulator 시작
```batch
cd C:\Users\my\Desktop\PLC_Simulator
START.bat
```

### 3단계: Edge Computer 시작 (localhost 모드)
```batch
cd C:\Users\my\Desktop\Edge_Computer_V1
START.bat  # 환경 변수 없이 실행
```

### 4단계: HMI 시작 (localhost 모드)
```batch
cd C:\Users\my\Desktop\HMI_V1
START_HMI_V1.bat  # 환경 변수 없이 실행
```

또는 config.py와 main.py를 원래대로 수정:
```python
# Edge_Computer_V1\config.py
PLC_HOST = os.getenv("PLC_HOST", "localhost")

# HMI_V1\backend\main.py
plc_client = PLCClient(host=None, use_simulation=True)
```

---

## 설정 비교표

| 항목 | PLC Simulator 사용 | 실제 PLC 사용 |
|------|-------------------|--------------|
| **PLC_HOST** | `localhost` | `192.168.1.100` (실제 IP) |
| **use_simulation** | `True` (HMI만) | `False` |
| **PLC Simulator 실행** | 필요 ✅ | 불필요 ❌ |
| **물리적 PLC** | 불필요 ❌ | 필요 ✅ |
| **Edge Computer 코드** | 동일 | 동일 |
| **HMI 코드** | 동일 | 동일 |
| **네트워크** | 로컬호스트 | LAN |

---

## 체크리스트

교체 전 확인 사항:

- [ ] 실제 PLC IP 주소 확인
- [ ] PLC Modbus TCP 포트 확인 (502)
- [ ] PLC 레지스터 맵 확인 (10, 4000, 160, 5000번대)
- [ ] 네트워크 연결 확인 (`ping` 테스트)
- [ ] PLC 방화벽 설정 (포트 502 열기)

교체 후 확인 사항:

- [ ] Edge Computer 연결 성공 메시지
- [ ] HMI Backend 연결 성공 메시지
- [ ] HMI 대시보드 데이터 실시간 업데이트
- [ ] AI 계산 결과가 PLC에 쓰여지는지 확인
- [ ] 에너지 절감 데이터 정상 표시

---

## 주의 사항

### 1. 데이터 백업
교체 전 다음 데이터 백업 권장:
- PLC Simulator 로그
- Edge Computer 로그
- HMI 알람 이력 (`HMI_V1\backend\data\`)

### 2. 동시 실행 금지
**절대 PLC Simulator와 실제 PLC를 동시에 연결하지 마세요!**
- 포트 충돌 발생 가능
- 데이터 혼선 발생

### 3. Slave ID 확인
PLC의 Slave ID가 `3`이 아닐 수 있습니다. PLC 설정에서 확인 후:
```batch
set PLC_SLAVE_ID=1  # 또는 실제 Slave ID
```

### 4. 레지스터 오프셋
일부 PLC는 레지스터 주소에 오프셋을 적용합니다:
- Modbus 표준: 주소 10 = 40010
- 일부 PLC: 주소 10 = 40011

PLC 매뉴얼 참조 필요!

---

## 참고 자료

### PLC Modbus 설정 확인 항목

1. **통신 프로토콜**: Modbus TCP
2. **IP 주소**: 192.168.1.100 (예시)
3. **포트**: 502
4. **Slave/Unit ID**: 1 또는 3
5. **레지스터 타입**: Holding Register (Function Code 03/06/16)
6. **데이터 형식**: INT16 (부호 있는 16비트 정수)

### Modbus Function Code

Edge Computer와 HMI가 사용하는 Function Code:

| 코드 | 이름 | 용도 |
|------|------|------|
| 03 | Read Holding Registers | 센서 데이터, VFD 데이터 읽기 |
| 16 | Write Multiple Registers | Edge AI 결과 쓰기 |

---

## 요약

**교체는 간단합니다:**

1. PLC Simulator 종료
2. 실제 PLC 연결
3. IP 주소만 변경 (`PLC_HOST=192.168.1.100`)
4. 재시작

**코드 수정 불필요!**
- Edge Computer 프로그램: 그대로
- HMI 프로그램: 그대로
- 레지스터 맵: 그대로

**핵심은 PLC가 동일한 레지스터 맵을 사용해야 한다는 점입니다.**

---

**작성일:** 2025년 1월
**버전:** 1.0
**문의:** 시스템 관리자
