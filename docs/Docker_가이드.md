# Docker 완벽 가이드

## 목차
1. [Docker란 무엇인가?](#docker란-무엇인가)
2. [왜 Docker를 사용하나?](#왜-docker를-사용하나)
3. [가상머신 vs Docker](#가상머신-vs-docker)
4. [핵심 개념](#핵심-개념)
5. [HMI 프로젝트에서 Docker 사용하기](#hmi-프로젝트에서-docker-사용하기)
6. [Docker 설치 및 실행](#docker-설치-및-실행)
7. [주요 명령어](#주요-명령어)
8. [개발 워크플로우](#개발-워크플로우)
9. [배포 방법](#배포-방법)
10. [FAQ](#faq)

---

## Docker란 무엇인가?

**Docker**는 컨테이너 기반 가상화 플랫폼입니다. 애플리케이션과 모든 실행 환경(OS, 라이브러리, 설정)을 하나의 패키지로 만들어 어디서든 동일하게 실행할 수 있게 해줍니다.

### 간단히 말하면

```
Docker = 프로그램 + 실행 환경을 하나의 박스에 포장
         → 어떤 PC에서든 동일하게 실행
```

### 실생활 비유

```
🍱 도시락 비유:
   집에서 만든 도시락 = 완성된 음식 + 용기
   → 어디서든 (학교, 회사, 공원) 동일하게 먹을 수 있음

📦 Docker:
   Docker 컨테이너 = 프로그램 + 실행 환경
   → 어디서든 (개발 PC, 서버, 고객사 PC) 동일하게 실행
```

---

## 왜 Docker를 사용하나?

### 문제 상황: "내 컴퓨터에서는 잘 되는데요?"

```
개발자 PC:
├── Python 3.10 ✅
├── Node.js 18 ✅
└── 프로그램 정상 작동 ✅

고객사 PC:
├── Python 3.8 ⚠️ (버전 다름)
├── Node.js 16 ⚠️ (버전 다름)
└── 프로그램 에러 발생 ❌

문제:
- 환경이 달라서 작동 안 함
- 설정이 복잡함
- 디버깅 어려움
```

### Docker 사용 시

```
개발자 PC:
└── Docker 컨테이너 (Python 3.10 + Node.js 18 포함)
    → 프로그램 정상 작동 ✅

고객사 PC:
└── 같은 Docker 컨테이너
    → 프로그램 정상 작동 ✅

해결:
✅ 환경이 동일함
✅ 설정 간단함
✅ 문제 없음
```

---

## 가상머신 vs Docker

### 구조 비교

```
┌─────────────────────────────────┐  ┌─────────────────────────────────┐
│      가상머신 (VM)                │  │         Docker                   │
├─────────────────────────────────┤  ├─────────────────────────────────┤
│  App A  │  App B  │  App C       │  │  App A  │  App B  │  App C      │
│  Libs   │  Libs   │  Libs        │  │  Libs   │  Libs   │  Libs       │
├─────────┼─────────┼──────────────┤  ├─────────┴─────────┴─────────────┤
│ Guest OS│ Guest OS│ Guest OS     │  │    Docker Engine                │
├─────────┴─────────┴──────────────┤  ├─────────────────────────────────┤
│      Hypervisor                  │  │    Host OS (Windows/Linux)      │
├─────────────────────────────────┤  ├─────────────────────────────────┤
│      Host OS                     │  │    Hardware                     │
└─────────────────────────────────┘  └─────────────────────────────────┘
```

### 성능 비교

| 항목 | 가상머신 (VM) | Docker |
|------|--------------|--------|
| **무게** | 무거움 (GB 단위) | 가벼움 (MB 단위) |
| **시작 시간** | 수 분 | 수 초 |
| **메모리 사용** | 많음 (OS 전체) | 적음 (앱만) |
| **성능** | 느림 (가상화 오버헤드) | 빠름 (거의 네이티브) |
| **격리** | 완전 격리 | 프로세스 수준 격리 |

---

## 핵심 개념

### 1. 이미지 (Image)

**이미지 = 실행 파일의 스냅샷 (설계도)**

```
예시:
- python:3.10       → Python 3.10이 설치된 이미지
- node:18           → Node.js 18이 설치된 이미지
- nginx:latest      → Nginx 웹서버 이미지

특징:
- 읽기 전용
- 레이어 구조 (효율적)
- 한 번 만들면 여러 컨테이너 생성 가능
```

### 2. 컨테이너 (Container)

**컨테이너 = 이미지를 실행한 인스턴스 (실제 실행 중인 프로그램)**

```
이미지 vs 컨테이너:
- 이미지 = 프로그램 파일 (.exe)
- 컨테이너 = 실행 중인 프로그램 (프로세스)

예시:
python:3.10 이미지 → 컨테이너 1 (백엔드)
                   → 컨테이너 2 (시뮬레이터)
                   → 컨테이너 3 (테스트)
```

### 3. Dockerfile

**Dockerfile = 이미지를 만드는 설명서**

```dockerfile
# 예시: backend/Dockerfile
FROM python:3.10              # 베이스 이미지
WORKDIR /app                  # 작업 디렉토리
COPY requirements.txt .       # 파일 복사
RUN pip install -r requirements.txt  # 명령 실행
CMD ["python", "main.py"]     # 실행 명령
```

### 4. Docker Compose

**Docker Compose = 여러 컨테이너를 한 번에 관리**

```yaml
# 예시: docker-compose.yml
version: '3.8'
services:
  backend:
    build: ./backend
    ports: ["8000:8000"]

  frontend:
    build: ./frontend
    ports: ["5173:5173"]

  simulator:
    build: ./simulator
    ports: ["502:502"]
```

```
docker-compose up 한 번 실행
    ↓
3개 컨테이너 동시 시작
- backend
- frontend
- simulator
```

---

## HMI 프로젝트에서 Docker 사용하기

### 현재 방식 vs Docker 방식

#### 현재 방식 (START_HMI.bat)

```
새로운 PC에서 실행하려면:

1. Python 3.10 설치 (10분)
2. Node.js 18 설치 (5분)
3. 프로젝트 복사
4. 가상환경 생성 (5분)
   cd backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
5. npm 패키지 설치 (10분)
   cd frontend
   npm install
6. START_HMI.bat 실행

총 소요시간: 30~40분
문제 발생 가능성: 높음
```

#### Docker 방식 (START_DOCKER.bat)

```
새로운 PC에서 실행하려면:

1. Docker Desktop 설치 (10분, 최초 1회만)
2. 프로젝트 복사
3. START_DOCKER.bat 더블클릭
   - 처음: 5~10분 (이미지 빌드)
   - 이후: 10초 이내

총 소요시간:
- 처음: 15~20분
- 이후: 10초

문제 발생 가능성: 거의 없음
```

### 프로젝트 구조

```
HMI_REAL/
├── START_HMI.bat              ← 기존 방식
├── START_DOCKER.bat           ← Docker 방식 (새로 추가)
├── STOP_DOCKER.bat            ← Docker 종료
├── LOGS_DOCKER.bat            ← Docker 로그
├── RESTART_DOCKER.bat         ← Docker 재시작
├── docker-compose.yml         ← Docker 설정
├── .dockerignore              ← 제외 파일
├── backend/
│   ├── Dockerfile             ← 백엔드 Docker 설정
│   ├── requirements.txt
│   └── main.py
├── frontend/
│   ├── Dockerfile             ← 프론트엔드 Docker 설정
│   ├── package.json
│   └── src/
└── simulator/
    ├── Dockerfile             ← 시뮬레이터 Docker 설정
    └── plc_simulator.py
```

---

## Docker 설치 및 실행

### 1. Docker Desktop 설치

```
1. 다운로드
   https://www.docker.com/products/docker-desktop

2. 설치 실행
   - Docker Desktop Installer.exe 실행
   - 설치 완료 후 재부팅

3. 확인
   - 작업 표시줄에 Docker 아이콘 확인
   - 초록색 불이 들어오면 준비 완료
```

### 2. HMI 프로젝트 실행

#### 처음 실행

```batch
1. Docker Desktop 실행
   → 작업 표시줄 아이콘 초록색 확인

2. START_DOCKER.bat 더블클릭

3. 진행 과정 (5~10분)
   [Docker] 이미지 빌드 중...

   [1/3] 시뮬레이터 이미지 빌드 중...
   ✓ Python 3.10 다운로드
   ✓ 패키지 설치
   ✓ 완료

   [2/3] 백엔드 이미지 빌드 중...
   ✓ Python 3.10 다운로드
   ✓ FastAPI, WebSocket 등 설치
   ✓ 완료

   [3/3] 프론트엔드 이미지 빌드 중...
   ✓ Node.js 18 다운로드
   ✓ npm install 실행
   ✓ 완료

   [완료] 컨테이너 시작 중...
   ✓ 시뮬레이터 시작 완료
   ✓ 백엔드 시작 완료
   ✓ 프론트엔드 시작 완료

   브라우저 자동 실행...

4. 개발 시작!
```

#### 두 번째 이후 실행

```batch
1. Docker Desktop 실행 (자동 시작 가능)

2. START_DOCKER.bat 더블클릭

3. 즉시 실행 (5~10초)
   ✓ 시뮬레이터 시작
   ✓ 백엔드 시작
   ✓ 프론트엔드 시작

   브라우저 자동 실행...

4. 개발 시작!
```

---

## 주요 명령어

### 기본 명령어 (BAT 파일 사용 권장)

```batch
# 시작
START_DOCKER.bat

# 종료
STOP_DOCKER.bat

# 재시작
RESTART_DOCKER.bat

# 로그 확인
LOGS_DOCKER.bat
```

### Docker Compose 명령어 (직접 사용)

```batch
# 컨테이너 시작 (포그라운드)
docker-compose up
→ 터미널에 로그 출력
→ Ctrl+C로 종료

# 컨테이너 시작 (백그라운드)
docker-compose up -d
→ 백그라운드 실행
→ 터미널 닫아도 계속 실행

# 컨테이너 중지
docker-compose down

# 컨테이너 재시작
docker-compose restart

# 로그 확인
docker-compose logs -f

# 특정 서비스 로그만 보기
docker-compose logs -f backend

# 실행 중인 컨테이너 확인
docker-compose ps

# 이미지 재빌드
docker-compose up --build
```

### Docker 명령어

```bash
# 이미지 목록
docker images

# 이미지 삭제
docker rmi <이미지ID>

# 실행 중인 컨테이너
docker ps

# 모든 컨테이너 (중지된 것 포함)
docker ps -a

# 컨테이너 중지
docker stop <컨테이너ID>

# 컨테이너 삭제
docker rm <컨테이너ID>

# 컨테이너 내부 접속
docker exec -it <컨테이너ID> /bin/bash

# 로그 확인
docker logs -f <컨테이너ID>

# 사용하지 않는 리소스 정리
docker system prune -a

# 디스크 사용량 확인
docker system df
```

---

## 개발 워크플로우

### 코드 수정 → 자동 반영

Docker는 **볼륨 마운트** 기능으로 코드 수정 시 자동 반영됩니다.

```batch
1. Docker 실행 (최초 1회)
   > START_DOCKER.bat

2. 브라우저 자동 실행
   http://localhost:5173

3. 코드 수정
   backend\main.py 수정
   → 저장 (Ctrl+S)

   터미널 출력:
   INFO: Detected file change, reloading...
   INFO: Application startup complete.

   → 1~2초 후 자동 반영!

4. 프론트엔드 수정
   frontend\src\App.jsx 수정
   → 저장 (Ctrl+S)

   브라우저 자동 새로고침 (1초 이내)

   → 즉시 변경 사항 확인!

5. 계속 개발...
   수정 → 저장 → 자동 반영 → 테스트 → 반복
```

### 일반 개발과 동일

```
Docker 사용 시:
- 일반 에디터로 코드 수정
- 저장만 하면 자동 반영
- Docker 사용 여부를 의식할 필요 없음

→ 일반 개발과 완전히 동일한 경험!
```

---

## 배포 방법

### 방법 1: USB로 배포

```batch
# 준비물
- USB
- HMI_REAL 폴더 (venv, node_modules 제외)

# 배포 절차
1. USB에 HMI_REAL 폴더 복사
   (용량: 약 10MB)

2. 고객사 PC에서:
   a. Docker Desktop 설치 (최초 1회)
   b. USB에서 폴더 복사
   c. START_DOCKER.bat 더블클릭

3. 완료!
   - 처음: 10분
   - 이후: 10초
```

### 방법 2: Docker Hub 업로드

```bash
# 1. Docker Hub 로그인
docker login

# 2. 이미지에 태그 추가
docker tag hmi-backend myusername/hmi-backend:latest
docker tag hmi-frontend myusername/hmi-frontend:latest
docker tag hmi-simulator myusername/hmi-simulator:latest

# 3. 업로드
docker push myusername/hmi-backend:latest
docker push myusername/hmi-frontend:latest
docker push myusername/hmi-simulator:latest

# 4. 다른 PC에서 다운로드 및 실행
docker pull myusername/hmi-backend:latest
docker pull myusername/hmi-frontend:latest
docker pull myusername/hmi-simulator:latest
docker-compose up
```

### 방법 3: 이미지 파일로 저장

```bash
# 1. 이미지를 파일로 저장
docker save -o hmi-images.tar hmi-backend hmi-frontend hmi-simulator

# 2. USB에 복사
- hmi-images.tar (약 500MB)
- docker-compose.yml

# 3. 새 PC에서 이미지 로드
docker load -i hmi-images.tar

# 4. 실행
docker-compose up -d

# 5. 브라우저로 접속
http://localhost:5173
```

---

## FAQ

### Q1. Docker와 venv의 차이는?

```
venv (Python 가상환경):
✅ Python 패키지만 격리
❌ Python 자체는 시스템에 설치 필요
❌ Node.js는 별도 설치 필요
❌ 경로 의존적 (다른 PC에서 재생성 필요)

Docker:
✅ Python, Node.js, 모든 환경 포함
✅ 완전히 독립적
✅ 어떤 PC에서든 동일하게 작동
✅ 배포 간편
```

### Q2. USB에서 직접 실행 가능한가?

```
현재 방식 (venv):
❌ USB에서 직접 실행 시 매우 느림 (5~10분)
❌ 경로 문제 발생
✅ PC에 복사 후 실행 권장

Docker 방식:
⚠️ USB에서 실행 가능하지만 느림
✅ PC에 복사 후 실행 권장
✅ 복사 시간: 1분 이내
```

### Q3. 코드 수정 시 재빌드 필요한가?

```
❌ 재빌드 불필요!

이유:
- 볼륨 마운트로 실시간 동기화
- 코드 수정 → 저장 → 자동 반영 (1~2초)
- 일반 개발과 동일한 경험
```

### Q4. Docker 없이 USB 복사만으로 실행 가능한가?

```
❌ 불가능

이유:
- Python이 다른 PC에 없음
- Node.js가 다른 PC에 없음
- venv는 절대 경로 참조

해결:
✅ Docker Desktop 설치 (최초 1회, 10분)
→ 이후 어디서든 실행 가능
```

### Q5. Docker 설치가 부담스럽다면?

```
대안:
1. 다른 PC에 Python, Node.js 직접 설치
2. venv 생성 및 패키지 설치
3. START_HMI.bat 실행

하지만:
- Docker 설치 (10분) < 환경 설정 (30~40분)
- Docker가 장기적으로 더 편리함
```

### Q6. Docker 사용 시 성능 저하가 있나?

```
성능 비교:
- CPU/메모리: 거의 동일 (5% 이내 차이)
- 디스크 I/O: Windows에서 약간 느림 (WSL2)
- 네트워크: 거의 동일

실사용:
- 개발 시: 차이 없음
- 프로덕션: 충분히 빠름
- HMI 시스템에서는 영향 없음
```

### Q7. 용량은 얼마나 차지하나?

```
Docker 이미지:
- 백엔드: 약 200MB
- 프론트엔드: 약 300MB
- 시뮬레이터: 약 150MB
- 총: 약 650MB

비교:
- venv + node_modules: 약 500MB
- 큰 차이 없음
```

### Q8. 여러 프로젝트 사용 시 충돌 발생하나?

```
❌ 충돌 없음!

이유:
- 각 컨테이너는 완전히 격리됨
- 포트만 다르게 설정하면 됨
- 프로젝트마다 독립적인 환경

예시:
프로젝트 A: 포트 5173, 8000
프로젝트 B: 포트 5174, 8001
→ 동시 실행 가능
```

### Q9. Docker Desktop 라이선스 문제는?

```
Docker Desktop 라이선스:
- 개인 사용: 무료 ✅
- 소규모 기업 (<250명, 연매출 <$10M): 무료 ✅
- 대기업: 유료 ($7~$21/user/month)

대안 (대기업용):
- Docker Engine (Linux, 무료)
- Podman (Docker 호환, 무료)
- Rancher Desktop (무료)
```

### Q10. 학습 곡선이 높지 않나?

```
학습 난이도:
- 사용자 입장: ⭐ (매우 쉬움)
  → START_DOCKER.bat 더블클릭만

- 개발자 입장: ⭐⭐ (쉬움)
  → docker-compose.yml 수정
  → Dockerfile 이해

- 고급 사용: ⭐⭐⭐⭐ (어려움)
  → 네트워킹, 볼륨, 오케스트레이션

HMI 프로젝트:
- 제가 설정 파일 모두 제공
- 더블클릭만 하면 됨
- 추가 학습 불필요
```

---

## 정리

### Docker의 장점 (HMI 프로젝트 기준)

```
✅ 환경 독립성
   - 어떤 PC에서든 동일하게 실행
   - Python, Node.js 설치 불필요

✅ 배포 간편
   - USB 복사 + Docker Desktop만 설치
   - 10초~10분 이내 실행

✅ 개발 편의성
   - 코드 수정 자동 반영
   - 일반 개발과 동일

✅ 유지보수
   - 환경 설정 코드화
   - 버전 관리 용이

✅ 확장성
   - 서버 배포 쉬움
   - 클라우드 호환
```

### 권장 사용 방법

```
개발 시:
- Docker 사용 (볼륨 마운트)
- 코드 수정 → 자동 반영
- 빠른 개발 사이클

배포 시:
- Docker 이미지 빌드
- USB 또는 Docker Hub로 전달
- 즉시 실행 가능

협업 시:
- docker-compose.yml 공유
- 모든 팀원이 동일한 환경
- 환경 설정 문제 없음
```

---

## 다음 단계

1. **Docker Desktop 설치**
   - https://www.docker.com/products/docker-desktop
   - 재부팅

2. **Docker 설정 파일 생성 요청**
   - Dockerfile (backend, frontend, simulator)
   - docker-compose.yml
   - START_DOCKER.bat
   - STOP_DOCKER.bat
   - LOGS_DOCKER.bat
   - RESTART_DOCKER.bat

3. **실행 테스트**
   - START_DOCKER.bat 더블클릭
   - 브라우저에서 확인

4. **개발 시작**
   - 코드 수정
   - 자동 반영 확인
   - 정상 개발

---

## 참고 자료

- Docker 공식 문서: https://docs.docker.com/
- Docker Compose 문서: https://docs.docker.com/compose/
- Docker Hub: https://hub.docker.com/
- 한글 튜토리얼: https://www.44bits.io/ko/keyword/docker

---

**작성일:** 2025-01-18
**버전:** 1.0
**작성자:** Claude (HMI 프로젝트용)
