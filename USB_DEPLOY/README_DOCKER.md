# ESS HMI - Docker 사용 가이드

## 빠른 시작

### 1. Docker Desktop 설치 (최초 1회만)

```
다운로드: https://www.docker.com/products/docker-desktop
설치 후 재부팅
```

### 2. 프로그램 실행

```
START_DOCKER.bat 더블클릭
→ 처음: 5~10분 소요 (이미지 빌드)
→ 이후: 10초 이내
```

### 3. 브라우저로 접속

```
자동으로 브라우저가 열립니다
http://localhost:5173
```

---

## 주요 명령어

| 파일 | 기능 |
|------|------|
| **START_DOCKER.bat** | Docker 컨테이너 시작 |
| **STOP_DOCKER.bat** | Docker 컨테이너 종료 |
| **RESTART_DOCKER.bat** | Docker 컨테이너 재시작 |
| **LOGS_DOCKER.bat** | 실시간 로그 확인 |

---

## 개발 워크플로우

### 코드 수정 시

```
1. 코드 수정 (VSCode, 메모장 등)
2. 저장 (Ctrl+S)
3. 자동 반영!
   - 백엔드: 1~2초
   - 프론트엔드: 즉시 (브라우저 자동 새로고침)
```

### 일반 개발과 동일

```
Docker 사용 여부를 의식할 필요 없음
→ 코드 수정 → 저장 → 테스트 → 반복
```

---

## 프로젝트 구조

```
HMI_REAL/
├── docker-compose.yml          ← Docker 설정 (메인)
├── START_DOCKER.bat            ← 시작
├── STOP_DOCKER.bat             ← 종료
├── LOGS_DOCKER.bat             ← 로그
├── RESTART_DOCKER.bat          ← 재시작
├── .dockerignore               ← 제외 파일
├── backend/
│   ├── Dockerfile              ← 백엔드 Docker 설정
│   ├── .dockerignore
│   └── ...
├── frontend/
│   ├── Dockerfile              ← 프론트엔드 Docker 설정
│   ├── .dockerignore
│   └── ...
└── simulator/
    ├── Dockerfile              ← 시뮬레이터 Docker 설정
    ├── .dockerignore
    └── ...
```

---

## 포트 정보

| 서비스 | 포트 | 접속 URL |
|--------|------|----------|
| 프론트엔드 | 5173 | http://localhost:5173 |
| 백엔드 API | 8000 | http://localhost:8000 |
| PLC 시뮬레이터 | 502 | 컨테이너 내부 |

---

## 문제 해결

### Docker Desktop이 실행되지 않음

```
증상:
[오류] Docker Desktop이 실행되지 않았습니다.

해결:
1. Docker Desktop 실행
2. 작업 표시줄에서 Docker 아이콘 확인
3. 초록색 불이 들어올 때까지 대기
4. START_DOCKER.bat 재실행
```

### 포트가 이미 사용 중

```
증상:
Bind for 0.0.0.0:5173 failed: port is already allocated

해결:
1. STOP_DOCKER.bat 실행
2. 기존 HMI 프로그램 종료 (START_HMI.bat)
3. START_DOCKER.bat 재실행
```

### 코드 수정이 반영 안 됨

```
해결:
1. RESTART_DOCKER.bat 실행
2. 여전히 안 되면:
   STOP_DOCKER.bat
   START_DOCKER.bat --build
```

### 컨테이너 로그 확인

```
방법 1:
LOGS_DOCKER.bat 실행

방법 2:
docker-compose logs -f

방법 3 (특정 서비스만):
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f plc-simulator
```

---

## 배포 방법

### USB로 다른 PC에 배포

```
1. HMI_REAL 폴더 전체 복사
   (venv, node_modules 제외 - 자동 제외됨)

2. 다른 PC에서:
   a. Docker Desktop 설치
   b. 폴더 복사
   c. START_DOCKER.bat 더블클릭

3. 완료!
```

### 필요 없는 파일 제외 (용량 절약)

```
복사하지 않아도 되는 폴더:
- backend/venv/
- frontend/node_modules/
- frontend/dist/
- test_results/
- docs/ (선택)

→ 전체 용량: 약 10~20MB
```

---

## 고급 사용법

### 수동으로 명령어 실행

```bash
# 컨테이너 시작 (포그라운드)
docker-compose up

# 컨테이너 시작 (백그라운드)
docker-compose up -d

# 컨테이너 중지
docker-compose down

# 이미지 재빌드
docker-compose up --build

# 특정 서비스만 재시작
docker-compose restart backend

# 컨테이너 상태 확인
docker-compose ps

# 실행 중인 컨테이너 내부 접속
docker exec -it hmi-backend /bin/bash
docker exec -it hmi-frontend /bin/sh
```

### 프로덕션 배포용 빌드

```dockerfile
# Dockerfile 수정 (소스 코드 포함)

# 개발용 (볼륨 마운트)
# COPY . .  ← 주석 처리됨

# 프로덕션용 (이미지에 포함)
COPY . .  ← 주석 해제
```

### Docker Hub에 업로드

```bash
# 로그인
docker login

# 이미지에 태그 추가
docker tag hmi-backend myusername/hmi-backend:latest
docker tag hmi-frontend myusername/hmi-frontend:latest
docker tag hmi-simulator myusername/hmi-simulator:latest

# 업로드
docker push myusername/hmi-backend:latest
docker push myusername/hmi-frontend:latest
docker push myusername/hmi-simulator:latest

# 다른 PC에서 다운로드
docker pull myusername/hmi-backend:latest
docker-compose up
```

---

## 성능 최적화

### Windows에서 성능 향상

```
Docker Desktop 설정:
1. Resources → Advanced
2. CPU: 4 cores 이상 권장
3. Memory: 4GB 이상 권장
4. Swap: 1GB
5. Apply & Restart
```

### 빌드 캐시 활용

```
Dockerfile에서 자주 변경되는 파일은 나중에 COPY:

# 좋은 예:
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

# 나쁜 예:
COPY . .
RUN pip install -r requirements.txt
```

---

## 기존 방식과 비교

| 항목 | 기존 (START_HMI.bat) | Docker (START_DOCKER.bat) |
|------|---------------------|--------------------------|
| 초기 설정 | Python, Node.js 설치 필요 | Docker Desktop만 설치 |
| 첫 실행 시간 | 30~40분 | 15~20분 |
| 이후 실행 시간 | 10~30초 | 5~10초 |
| 배포 | 복잡 (환경 설정 필요) | 간단 (Docker만) |
| 환경 독립성 | 낮음 | 높음 |
| 코드 수정 반영 | 즉시 | 즉시 |

---

## 참고 자료

- **Docker 가이드**: docs/Docker_가이드.md
- **Docker 공식 문서**: https://docs.docker.com/
- **Docker Compose 문서**: https://docs.docker.com/compose/

---

## 라이선스

- Docker Desktop: 개인/소규모 기업 무료
- HMI 프로젝트: 내부 프로젝트

---

**작성일:** 2025-01-18
**버전:** 1.0
