# HMI_V1 알람 히스토리 사용 가이드

## 📋 개요

HMI_V1에 **알람 히스토리** 기능이 추가되었습니다. Edge Computer의 HTTP API를 통해 과거 알람 로그를 조회하고 출력할 수 있습니다.

---

## 🎯 주요 기능

### 1. **실시간 알람** (기존)
- **탭**: 🔔 알람
- **기능**: WebSocket으로 실시간 알람 모니터링
- **확인**: 알람 확인 버튼으로 즉시 확인 처리

### 2. **알람 히스토리** (신규 추가) ⭐
- **탭**: 📋 알람 히스토리
- **기능**: Edge Computer에 저장된 과거 알람 로그 조회
- **필터링**: 기간, 센서, 알람 타입으로 검색
- **통계**: 전체/미확인/확인됨 알람 개수
- **다운로드**: CSV 파일로 저장

---

## 🏗️ 시스템 아키텍처

```
┌──────────────────────┐
│   PLC Simulator      │
│  - 알람 판단 로직     │
│  - 레지스터 7000-7279│
└──────────┬───────────┘
           │ Modbus TCP (502)
           ↓
┌──────────────────────┐
│   Edge Computer      │
│  - 알람 모니터링      │
│  - CSV 저장 (logs/)  │
│  - HTTP API (8000)   │
└──────────┬───────────┘
           │ HTTP
           ↓
┌──────────────────────┐
│      HMI_V1          │
│  - 실시간 알람        │
│  - 알람 히스토리 ⭐   │
│  - 통계 및 필터링     │
└──────────────────────┘
```

---

## 📂 추가된 파일

### HMI_V1 Frontend

1. **src/components/AlarmHistory.jsx** (신규)
   - 알람 히스토리 컴포넌트
   - HTTP API 통신
   - 필터링 및 통계 표시

2. **src/components/AlarmHistory.css** (신규)
   - HMI V1 다크 테마 스타일
   - 테이블, 배지, 통계 카드

3. **src/App.jsx** (수정)
   - `import AlarmHistory` 추가
   - 탭 버튼 추가: `📋 알람 히스토리`
   - 컨텐츠 렌더링 추가

---

## 🚀 실행 방법

### 전체 시스템 시작

1. **PLC Simulator 시작**:
   ```bash
   cd C:\Users\my\Desktop\PLC_Simulator
   START_PLC.bat
   ```

2. **Edge Computer 시작**:
   ```bash
   cd C:\Users\my\Desktop\Edge_Computer_V1
   START_FULL_SYSTEM.bat
   ```
   - 포트 8000에서 HTTP API 서버 자동 시작

3. **HMI_V1 시작**:
   ```bash
   cd C:\Users\my\Desktop\HMI_V1
   START_HMI_V1.bat
   ```

4. **브라우저 접속**:
   - HMI_V1: `http://localhost:5173`
   - Dashboard (개발용): `http://localhost:8501`

---

## 📖 사용 방법

### 알람 히스토리 탭 사용

1. **탭 선택**:
   - HMI_V1 상단 탭에서 **📋 알람 히스토리** 클릭

2. **필터 설정**:
   - **기간**: 최근 1일 / 7일 / 30일 / 90일
   - **센서**: 전체, TX1-TX7, PX1, PU1
   - **타입**: 전체, HIGH, LOW
   - **개수**: 20 / 50 / 100 / 200개

3. **통계 확인**:
   - **전체**: 조회된 총 알람 개수
   - **미확인**: 확인되지 않은 알람
   - **확인됨**: 확인된 알람

4. **알람 테이블**:
   - 시간, 센서, 타입, 센서값, 임계값, 상태 표시
   - 미확인 알람은 빨간색으로 강조

5. **센서별 통계**:
   - 각 센서별 알람 발생 횟수 표시

6. **CSV 다운로드**:
   - **📥 CSV 다운로드** 버튼 클릭
   - `alarm_history_YYYYMMDD_YYYYMMDD.csv` 파일 저장

7. **새로고침**:
   - **🔄 새로고침** 버튼으로 최신 데이터 조회

---

## 🌐 HTTP API 엔드포인트

HMI_V1은 다음 Edge Computer API를 사용합니다:

### 1. GET /alarms (알람 목록 조회)

**URL**:
```
http://localhost:8000/alarms?start_date=20251118&end_date=20251125&sensor_id=TX6&alarm_type=HIGH&limit=50
```

**파라미터**:
- `start_date`: 시작 날짜 (YYYYMMDD)
- `end_date`: 종료 날짜 (YYYYMMDD)
- `sensor_id`: 센서 ID (TX1, TX6, PX1_HIGH, ...)
- `alarm_type`: 알람 타입 (HIGH, LOW)
- `limit`: 최대 개수 (기본 100)

**응답**:
```json
{
  "total": 25,
  "start_date": "20251118",
  "end_date": "20251125",
  "alarms": [
    {
      "timestamp": "2025-11-25 14:35:22",
      "sensor_id": "TX6",
      "alarm_type": "HIGH",
      "sensor_value": "45.3",
      "threshold": "40.0",
      "status": "미확인",
      "ack_timestamp": ""
    }
  ]
}
```

### 2. GET /alarms/latest (최근 알람)

**URL**:
```
http://localhost:8000/alarms/latest?count=10
```

### 3. GET /alarms/stats (알람 통계)

**URL**:
```
http://localhost:8000/alarms/stats?days=7
```

**응답**:
```json
{
  "total_alarms": 25,
  "unacknowledged": 3,
  "acknowledged": 22,
  "by_sensor": {
    "TX6": 10,
    "PX1_LOW": 5
  },
  "by_type": {
    "HIGH": 20,
    "LOW": 5
  }
}
```

### 4. GET /alarms/export (CSV 다운로드)

**URL**:
```
http://localhost:8000/alarms/export?start_date=20251118&end_date=20251125
```

**응답**: CSV 파일 다운로드

---

## 🔧 네트워크 설정

### 동일 PC (로컬 테스트)

HMI_V1과 Edge Computer가 같은 PC에서 실행:

```javascript
// AlarmHistory.jsx
<AlarmHistory edgeComputerIP="localhost" />
```

### 다른 PC (실제 운영)

HMI_V1 터치스크린과 Edge Computer가 다른 PC:

```javascript
// App.jsx 수정
<AlarmHistory edgeComputerIP="192.168.1.100" />
```

**Edge Computer IP 확인**:
```bash
# Edge Computer PC에서 실행
ipconfig
```

**방화벽 설정**:
- Edge Computer PC: 포트 8000 허용
- Windows 방화벽 → 인바운드 규칙 → 새 규칙
  - 포트: TCP 8000
  - 허용

---

## 🎨 화면 구성

### 필터 섹션
```
┌─────────────────────────────────────────────────────────┐
│ 기간: [최근 7일 ▼] 센서: [전체 ▼] 타입: [전체 ▼]        │
│ 개수: [50개 ▼]  [📥 CSV 다운로드] [🔄 새로고침]         │
└─────────────────────────────────────────────────────────┘
```

### 통계 카드
```
┌──────────┬──────────┬──────────┐
│  전체    │  미확인  │  확인됨  │
│   25     │    3     │   22     │
└──────────┴──────────┴──────────┘
```

### 알람 테이블
```
┌────────────────────┬────────┬──────┬──────┬──────┬──────┐
│ 시간               │ 센서   │ 타입 │ 값   │ 임계 │ 상태 │
├────────────────────┼────────┼──────┼──────┼──────┼──────┤
│ 2025-11-25 14:35   │ TX6    │ HIGH │ 45.3 │ 40.0 │ 미확인│ ← 빨간색
│ 2025-11-25 14:30   │ PX1    │ LOW  │ 1.3  │ 1.5  │ 확인 │
└────────────────────┴────────┴──────┴──────┴──────┴──────┘
```

### 센서별 통계
```
┌──────────┬──────────┬──────────┐
│ TX6: 10회│ PX1: 5회 │ PU1: 10회│
└──────────┴──────────┴──────────┘
```

---

## 🧪 테스트 시나리오

### 시나리오 1: 최근 알람 조회

1. HMI_V1 → **📋 알람 히스토리** 탭
2. 기간: **최근 7일**
3. 센서: **전체**
4. 조회 버튼 (자동 조회됨)
5. 결과: 최근 7일간의 모든 알람 표시

### 시나리오 2: TX6 온도 알람만 필터링

1. HMI_V1 → **📋 알람 히스토리** 탭
2. 센서: **TX6**
3. 타입: **HIGH**
4. 결과: TX6 온도 상한 알람만 표시

### 시나리오 3: CSV 다운로드 및 출력

1. 필터 설정 (예: 최근 30일)
2. **📥 CSV 다운로드** 클릭
3. `alarm_history_20251101_20251125.csv` 파일 저장
4. Excel이나 프린터로 출력

### 시나리오 4: 실시간 알람 발생 후 히스토리 확인

1. **🔔 알람** 탭에서 실시간 알람 확인
2. 알람 확인 처리
3. **📋 알람 히스토리** 탭으로 전환
4. 방금 확인한 알람이 **확인됨** 상태로 표시

---

## 🔍 문제 해결

### 문제 1: "Edge Computer 접속 실패"

**원인**:
- Edge Computer가 실행되지 않음
- HTTP API 서버(포트 8000)가 시작되지 않음

**해결**:
```bash
# Edge Computer 터미널에서 확인
[API] HTTP 서버 시작됨 (포트 8000)
```

**테스트**:
```bash
# 브라우저에서 접속
http://localhost:8000/
```

### 문제 2: "알람이 표시되지 않음"

**원인**:
- CSV 파일이 없음 (알람이 발생하지 않음)
- 날짜 필터가 잘못됨

**해결**:
1. Edge Computer의 `logs/` 디렉토리 확인
2. `alarm_YYYYMMDD.csv` 파일 존재 확인
3. 날짜 필터를 **최근 90일**로 확대

### 문제 3: "CSV 다운로드 실패"

**원인**:
- Edge Computer와 네트워크 연결 끊김
- 방화벽 차단

**해결**:
```bash
# Edge Computer IP 확인
ping 192.168.1.100

# 포트 8000 확인
telnet 192.168.1.100 8000
```

### 문제 4: "통계가 0으로 표시됨"

**원인**:
- 선택한 기간에 알람이 없음

**해결**:
1. 기간을 확대 (최근 90일)
2. 필터 제거 (센서: 전체, 타입: 전체)

---

## 📊 데이터 흐름

### 알람 발생 → 저장 → 조회 전체 과정

```
1. PLC에서 알람 판단 (1초마다)
   ↓
2. Edge Computer 알람 모니터링 스레드
   - 레지스터 7103 읽기 (새 알람 플래그)
   - 플래그 = 1이면 알람 데이터 읽기
   ↓
3. CSV 파일 저장
   - logs/alarm_20251125.csv
   - 필드: timestamp, sensor_id, alarm_type, sensor_value, threshold, status
   ↓
4. HMI_V1에서 조회
   - HTTP GET /alarms 요청
   - Edge Computer가 CSV 파일 읽기
   - JSON 응답
   ↓
5. HMI_V1 화면 표시
   - 테이블, 통계, 센서별 발생 횟수
```

---

## 📝 추가 개발 아이디어

### 1. 알람 인쇄 기능
```javascript
const handlePrint = () => {
  window.print()
}
```

### 2. 알람 확인 기능 (히스토리에서)
```javascript
// AlarmHistory.jsx에 추가
const handleAcknowledge = async (timestamp, sensor_id) => {
  // PLC 레지스터 7200-7279 업데이트
}
```

### 3. 알람 차트 (시간대별 발생 추이)
```javascript
import { Line } from 'react-chartjs-2'

// by_date 데이터로 차트 생성
```

### 4. 이메일 알림
```python
# api_server.py에 추가
@app.post("/alarms/email")
async def send_alarm_email():
    # SMTP로 알람 이메일 발송
```

---

## ✅ 체크리스트

### 초기 설정
- [ ] PLC Simulator 실행
- [ ] Edge Computer 실행 (HTTP API 포트 8000 확인)
- [ ] HMI_V1 실행

### 기능 테스트
- [ ] 실시간 알람 표시 (🔔 알람 탭)
- [ ] 알람 히스토리 조회 (📋 알람 히스토리 탭)
- [ ] 필터링 (기간, 센서, 타입)
- [ ] CSV 다운로드
- [ ] 통계 표시

### 네트워크 설정 (실제 운영 시)
- [ ] Edge Computer IP 주소 확인
- [ ] `App.jsx`에서 `edgeComputerIP` 수정
- [ ] 방화벽 포트 8000 허용
- [ ] 네트워크 연결 테스트

---

## 📞 지원

문제 발생 시:

1. **Edge Computer 로그 확인**:
   ```
   [알람 모니터링] 시작
   [알람 감지] 새 알람 발생...
   [API] HTTP 서버 시작됨 (포트 8000)
   ```

2. **브라우저 콘솔 확인** (F12):
   ```
   🔍 알람 히스토리 조회: http://localhost:8000/alarms?...
   ✅ 알람 25개 조회 완료
   ```

3. **CSV 파일 확인**:
   ```
   C:\Users\my\Desktop\Edge_Computer_V1\logs\alarm_20251125.csv
   ```

---

**버전**: HMI_V1 Alarm History V1.0
**최종 업데이트**: 2025-11-25
**개발자**: Claude Code

🎉 HMI_V1에서 이제 과거 알람 로그를 조회하고 출력할 수 있습니다!
