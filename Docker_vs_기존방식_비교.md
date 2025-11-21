# Docker 방식 vs 기존 방식 비교

## 이전 테스트에서 사용한 방식

### START_HMI.bat (기존 방식)

```batch
실행 구조:

1. Python venv 사용
   backend\venv\Scripts\python.exe

2. Node.js npm 사용
   frontend\node_modules\

3. 직접 프로세스 실행
   - Python 프로세스 (백엔드)
   - Python 프로세스 (시뮬레이터)
   - Node.js 프로세스 (프론트엔드)
```

### 특징

```
✅ 장점:
- Docker 설치 불필요
- 빠른 시작 (이미 설치되어 있으면)
- 직접 제어 가능

❌ 단점:
- Python, Node.js 사전 설치 필요
- venv, node_modules 설정 필요
- 환경마다 다르게 동작 가능
- 배포 시 설정 복잡
```

---

## Docker 방식

### START_DOCKER.bat (Docker 방식)

```batch
실행 구조:

1. Docker 컨테이너 사용
   - 독립된 가상 환경

2. 모든 것이 이미지에 포함
   - Python 3.10
   - Node.js 18
   - 모든 패키지

3. 컨테이너로 실행
   - 격리된 환경
   - 포트만 연결
```

### 특징

```
✅ 장점:
- 환경 완전 독립
- 배포 매우 간편
- 어디서든 동일하게 작동
- 업데이트 쉬움

❌ 단점:
- Docker 설치 필요 (최초 1회)
- 약간의 성능 오버헤드 (미미)
- 초기 빌드 시간 (5~10분, 최초만)
```

---

## 실제 비교

### 시나리오: 새로운 PC에 배포

#### 기존 방식 (START_HMI.bat)

```
1단계: 환경 설정 (30~40분)
├── Python 3.10 설치 (10분)
├── Node.js 18 설치 (5분)
├── venv 생성 (5분)
│   cd backend
│   python -m venv venv
│   venv\Scripts\activate
│   pip install -r requirements.txt
└── npm install (10분)
    cd frontend
    npm install

2단계: 프로그램 복사
└── HMI_REAL 폴더 복사 (venv, node_modules 포함)
    용량: 약 500MB

3단계: 실행
└── START_HMI.bat 실행
    ✓ 즉시 실행 (10~30초)

문제점:
⚠️ Python 버전 다르면?
   → pip install 실패 가능
⚠️ Node.js 버전 다르면?
   → npm install 실패 가능
⚠️ Windows 버전 다르면?
   → 호환성 문제 가능
```

#### Docker 방식 (START_DOCKER.bat)

```
1단계: Docker 설치 (10분, 최초 1회)
└── Docker Desktop 설치 및 재부팅

2단계: 프로그램 복사
└── HMI_REAL 폴더 복사 (venv, node_modules 제외)
    용량: 약 10~50MB

3단계: 실행
├── START_DOCKER.bat 실행
├── 처음: 이미지 빌드 (5~10분)
│   - Python 3.10 다운로드
│   - Node.js 18 다운로드
│   - 패키지 자동 설치
└── 이후: 즉시 실행 (5~10초)

장점:
✅ Python 버전 무관
   → 컨테이너에 Python 3.10 포함
✅ Node.js 버전 무관
   → 컨테이너에 Node.js 18 포함
✅ Windows 버전 무관
   → Docker만 작동하면 OK
```

---

## 구체적인 차이점

### 1. 실행 환경

#### 기존 방식
```
┌─────────────────────────────────┐
│  Windows PC                      │
├─────────────────────────────────┤
│  ┌────────┐  ┌────────┐         │
│  │Python  │  │Node.js │         │
│  │3.10    │  │18      │         │
│  └────────┘  └────────┘         │
│      ↓            ↓              │
│  ┌────────┐  ┌────────┐         │
│  │Backend │  │Frontend│         │
│  │(venv)  │  │(npm)   │         │
│  └────────┘  └────────┘         │
└─────────────────────────────────┘

문제:
- PC마다 Python/Node 버전 다름
- PATH 설정 필요
- 환경 변수 설정 필요
```

#### Docker 방식
```
┌─────────────────────────────────┐
│  Windows PC                      │
├─────────────────────────────────┤
│  Docker Desktop                  │
│  ├─────────────────────────┐    │
│  │ 컨테이너 1: Backend      │    │
│  │ ├── Python 3.10         │    │
│  │ ├── FastAPI             │    │
│  │ └── 패키지 모두 포함     │    │
│  ├─────────────────────────┤    │
│  │ 컨테이너 2: Frontend     │    │
│  │ ├── Node.js 18          │    │
│  │ ├── Vite                │    │
│  │ └── 패키지 모두 포함     │    │
│  ├─────────────────────────┤    │
│  │ 컨테이너 3: Simulator    │    │
│  │ ├── Python 3.10         │    │
│  │ └── pymodbus            │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘

장점:
- 완전 격리된 환경
- 버전 고정
- 설정 불필요
```

### 2. 파일 구조

#### 기존 방식
```
HMI_REAL/
├── START_HMI.bat               ← 실행
├── backend/
│   ├── venv/                   ← 500MB (필수!)
│   │   └── Scripts/python.exe
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── node_modules/           ← 200MB (필수!)
│   ├── src/
│   └── package.json
└── simulator/
    └── plc_simulator.py

총 용량: 약 500MB
필수 파일: venv, node_modules 포함
```

#### Docker 방식
```
HMI_REAL/
├── START_DOCKER.bat            ← 실행
├── docker-compose.yml          ← Docker 설정
├── backend/
│   ├── Dockerfile              ← 환경 정의
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile              ← 환경 정의
│   ├── src/
│   └── package.json
└── simulator/
    ├── Dockerfile              ← 환경 정의
    └── plc_simulator.py

총 용량: 약 10~50MB (소스 코드만)
필수 파일: Dockerfile, docker-compose.yml
실제 환경: Docker 이미지 (650MB, 자동 생성)
```

### 3. 배포 프로세스

#### 기존 방식
```
개발 PC → 배포 PC

[개발 PC]
1. HMI_REAL 폴더 전체 복사
   - venv 포함 (500MB)
   - node_modules 포함 (200MB)

2. USB 또는 네트워크로 전송

[배포 PC]
3. 폴더 복사
4. Python 3.10 설치 확인
5. Node.js 18 설치 확인
6. venv 경로 문제 해결
   - 절대 경로 문제
   - 재생성 필요할 수 있음
7. START_HMI.bat 실행

문제 가능성: 높음 ⚠️
- Python 버전 차이
- Node.js 버전 차이
- PATH 설정
- venv 경로 문제
```

#### Docker 방식
```
개발 PC → 배포 PC

[개발 PC]
1. HMI_REAL 폴더 복사 (10~50MB)
   - 소스 코드만
   - venv, node_modules 제외

2. USB 또는 네트워크로 전송

[배포 PC]
3. Docker Desktop 설치 (최초 1회)
4. 폴더 복사
5. START_DOCKER.bat 실행
   - 자동으로 이미지 빌드
   - 모든 패키지 설치
   - 컨테이너 시작

문제 가능성: 낮음 ✅
- Docker만 작동하면 OK
- 환경 완전 동일
```

---

## 왜 두 가지 방식을 모두 제공하나?

### 상황별 적합성

#### 기존 방식 (START_HMI.bat) 적합한 경우:

```
✅ 개발 중
   - 빠른 테스트
   - 직접 디버깅

✅ Docker 설치 불가
   - 제한된 환경
   - 권한 없음

✅ 이미 환경 구축됨
   - Python, Node.js 이미 설치
   - venv, node_modules 준비됨

✅ 성능 중요
   - 네이티브 실행
   - 오버헤드 없음
```

#### Docker 방식 (START_DOCKER.bat) 적합한 경우:

```
✅ 배포
   - 여러 PC에 설치
   - 환경 통일 필요

✅ 테스트
   - 다양한 환경 테스트
   - 격리된 환경 필요

✅ 프로덕션
   - 안정적 운영
   - 자동 재시작

✅ 버전 관리
   - 환경까지 버전 관리
   - 재현 가능
```

---

## 실제 사용 예시

### 예시 1: 개발 단계

```
개발자 PC에서:

방법 1: 기존 방식 (빠른 개발)
1. START_HMI.bat 실행
2. 코드 수정
3. 자동 반영
4. 테스트

방법 2: Docker 방식 (환경 테스트)
1. START_DOCKER.bat 실행
2. 코드 수정
3. 자동 반영
4. 배포 환경과 동일한 조건에서 테스트
```

### 예시 2: 고객사 납품

```
고객사 PC (처음 설치):

❌ 기존 방식
1. Python 설치? (버전 확인)
2. Node.js 설치? (버전 확인)
3. venv 생성
4. npm install
5. 에러 발생...
→ 1~2시간 소요

✅ Docker 방식
1. Docker Desktop 설치 (10분)
2. USB에서 복사 (1분)
3. START_DOCKER.bat 실행
→ 20분 소요 (처음만)
→ 이후 10초
```

---

## 성능 비교

### 메모리 사용량

```
기존 방식:
- Python: 50MB
- Node.js: 100MB
- 총: 150MB

Docker 방식:
- Docker Desktop: 500MB (항상 실행)
- 컨테이너: 200MB
- 총: 700MB

→ Docker가 더 많이 사용
```

### CPU 사용률

```
기존 방식:
- 네이티브 실행
- 100% 성능

Docker 방식:
- 가상화 오버헤드
- 95~98% 성능

→ 실사용에서 차이 거의 없음
```

### 시작 시간

```
기존 방식:
- 처음: 30~40분 (환경 설정)
- 이후: 10초

Docker 방식:
- 처음: 15~20분 (Docker 설치 + 빌드)
- 이후: 5초

→ 처음은 Docker가 빠름
→ 이후는 비슷
```

---

## 결론

### 🎯 언제 무엇을 사용할까?

```
개발 중:
└── START_HMI.bat (기존 방식)
    - 이미 환경이 준비되어 있음
    - 빠른 테스트

배포 시:
└── START_DOCKER.bat (Docker 방식)
    - 환경 독립적
    - 어디서든 동일
    - 업데이트 쉬움

혼용:
└── 두 방식 모두 사용 가능
    - 개발: 기존 방식
    - 배포: Docker 방식
```

### 📋 비교 요약표

| 항목 | 기존 방식 | Docker 방식 |
|------|----------|------------|
| **설치 시간** | 30~40분 | 15~20분 (처음) |
| **실행 시간** | 10초 | 5초 |
| **용량** | 500MB | 10MB (소스) |
| **배포 난이도** | 어려움 | 쉬움 |
| **환경 독립성** | 낮음 | 높음 |
| **성능** | 100% | 95~98% |
| **디버깅** | 쉬움 | 보통 |
| **프로덕션** | 부적합 | 적합 |

---

## 최종 답변

**이전 테스트는 START_HMI.bat을 사용한 것입니다.**

```
이전 방식:
- Python venv 직접 사용
- Node.js npm 직접 사용
- Windows에서 프로세스 직접 실행

Docker 방식:
- 모든 것이 컨테이너 안에
- 격리된 환경
- 배포 시 편리

차이:
- 실행 결과는 동일
- 환경 구성 방식이 다름
- 배포 편의성이 다름
```

**두 방식 모두 정상 작동하며, 상황에 맞게 선택하시면 됩니다!**

---

**작성일:** 2025-01-18
**문서 버전:** 1.0
