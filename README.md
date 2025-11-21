# HMI V1 - ESS Engine Room Ventilation System

HMI (Human-Machine Interface) V1 시스템입니다.

## 📋 개요

이 시스템은 **3개 장비 분리 구조**를 위해 설계되었습니다:

1. **PLC Simulator** - 센서 데이터 생성 및 Edge AI 결과 저장
2. **Edge Computer** - AI 계산 수행 (에너지 절감, 목표 주파수, VFD 진단)
3. **HMI (이 프로그램)** - PLC로부터 데이터를 읽어와 시각화

## 🏗️ 시스템 아키텍처

```
┌─────────────┐      Modbus TCP      ┌─────────────┐
│   PLC       │◄─────────────────────┤ Edge AI     │
│  Simulator  │  센서 읽기 / 결과 쓰기  │  Computer   │
└─────────────┘                      └─────────────┘
       ▲
       │ Modbus TCP (센서 + Edge AI 결과 읽기)
       │
┌─────────────┐
│   HMI V1    │
│  (이 시스템)  │
└─────────────┘
```

## ✨ 주요 변경 사항 (HMI_REAL → HMI_V1)

### Backend 수정:
1. **AI 계산 로직 제거**
   - `calculate_energy_savings_from_edge()` → `read_edge_ai_results()`
   - `calculate_ai_target_frequency()` → `read_edge_ai_target_frequencies()`

2. **Edge AI 결과 읽기**
   - PLC 레지스터 5000-5303에서 Edge AI 계산 결과 읽기
   - 에너지 절감률, AI 목표 주파수, VFD 진단 점수

3. **환경 변수 지원**
   - `PLC_HOST`: PLC IP 주소 (기본값: localhost)
   - `PLC_PORT`: PLC 포트 (기본값: 502)
   - `PLC_SLAVE_ID`: PLC Slave ID (기본값: 3)

### Frontend:
- 변경 없음 (기존 HMI_REAL과 동일)

## 📦 필수 요구사항

### Backend
- Python 3.8 이상
- pip (Python 패키지 관리자)

### Frontend
- Node.js 16 이상
- npm (Node 패키지 관리자)

## 🚀 빠른 시작

### 1. 전체 시스템 실행 (권장)

```batch
START_HMI_V1.bat
```

이 스크립트는 자동으로:
- Backend 가상환경 생성 및 의존성 설치
- Frontend 의존성 설치
- Backend 서버 시작 (port 8000)
- Frontend 서버 시작 (port 5173)
- 브라우저 자동 열기

### 2. 개별 실행

#### Backend 실행
```batch
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

#### Frontend 실행
```batch
cd frontend
npm install
npm run dev
```

## ⚙️ 설정

### PLC 연결 설정

**방법 1: 환경 변수 (권장)**
```batch
set PLC_HOST=192.168.1.10
set PLC_PORT=502
set PLC_SLAVE_ID=3
python main.py
```

**방법 2: Backend 코드 수정**
`backend/main.py` Line 40:
```python
plc_client = PLCClient(host="192.168.1.10", port=502, slave_id=3)
```

### 시뮬레이션 모드

PLC 없이 테스트하려면 `backend/main.py` Line 40:
```python
plc_client = PLCClient(use_simulation=True)
```

## 📡 Edge AI 레지스터 맵

HMI는 다음 PLC 레지스터에서 Edge AI 결과를 읽어옵니다:

| 레지스터 | 개수 | 설명 | 단위 |
|---------|------|------|------|
| 5000-5009 | 10 | AI 목표 주파수 | Hz × 10 |
| 5100-5109 | 10 | 절감 전력 | kW × 10 |
| 5200-5209 | 10 | VFD 진단 점수 | 0-100 |
| 5300-5303 | 4 | 시스템 절감률 (Total, SWP, FWP, FAN) | % × 10 |

## 🔗 통합 테스트

### 3개 장비 연동 테스트

1. **PLC Simulator 실행**
   ```batch
   cd C:\Users\my\Desktop\PLC_Simulator
   START.bat
   ```

2. **Edge Computer 실행**
   ```batch
   cd C:\Users\my\Desktop\Edge_Computer_V1
   START.bat
   ```

3. **HMI V1 실행**
   ```batch
   cd C:\Users\my\Desktop\HMI_V1
   START_HMI_V1.bat
   ```

4. **브라우저 접속**
   - http://localhost:5173

### 확인 사항
- ✅ PLC Simulator: 센서 데이터 정상 생성
- ✅ Edge AI: PLC 연결 성공, AI 계산 수행
- ✅ HMI: 대시보드에 실시간 데이터 표시
- ✅ 에너지 절감 현황: Edge AI 계산 결과 표시
- ✅ AI 목표 주파수: Edge AI 목표값 vs 실제값 비교

## 🛠️ 개발

### Backend 개발 서버
```batch
cd backend
venv\Scripts\activate
python main.py
```

### Frontend 개발 서버
```batch
cd frontend
npm run dev
```

### Frontend 빌드
```batch
cd frontend
npm run build
```

## 📂 프로젝트 구조

```
HMI_V1/
├── backend/                # Backend (Python FastAPI)
│   ├── main.py            # 메인 서버
│   ├── modbus_client.py   # PLC Modbus 클라이언트 (Edge AI 결과 읽기)
│   ├── requirements.txt   # Python 의존성
│   └── venv/              # Python 가상환경
├── frontend/              # Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   └── node_modules/
├── START_HMI_V1.bat       # 전체 시스템 시작 스크립트
├── STOP_HMI.bat           # 시스템 중지 스크립트
└── README.md              # 이 파일
```

## 🔄 HMI_REAL과의 차이점

| 기능 | HMI_REAL | HMI_V1 |
|------|----------|--------|
| AI 계산 | Backend에서 수행 | Edge AI에서 수행 |
| 데이터 소스 | PLC (센서) + 자체 계산 | PLC (센서 + Edge AI 결과) |
| 배포 형태 | 단일 시스템 | 3개 시스템 분리 |
| PLC 연결 | 하드코딩 | 환경 변수 지원 |

## 📝 라이선스

Proprietary

## 👥 지원

문의사항이 있으시면 시스템 관리자에게 연락하세요.
