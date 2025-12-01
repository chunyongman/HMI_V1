# GitHub 프로젝트 클론 가이드

## 1. 사전 준비

### 필수 프로그램 설치
- **Git**: https://git-scm.com/downloads
- **Node.js**: https://nodejs.org (frontend 프로젝트용)
- **Python**: https://python.org (backend 프로젝트용)

### Git 설치 확인
```bash
git --version
```

---

## 2. 프로젝트 클론하기

### 기본 명령어
```bash
git clone [저장소 URL] [새 폴더명]
```

### ESS 프로젝트 클론 예시

#### HMI 프로젝트
```bash
git clone https://github.com/chunyongman/HMI_V1.git C:\Users\my\Desktop\새폴더\HMI_V1
```

#### PLC Simulator (별도 저장소인 경우)
```bash
git clone https://github.com/사용자명/PLC_Simulator.git C:\Users\my\Desktop\새폴더\PLC_Simulator
```

#### Edge Computer (별도 저장소인 경우)
```bash
git clone https://github.com/사용자명/Edge_Computer_V1.git C:\Users\my\Desktop\새폴더\Edge_Computer_V1
```

---

## 3. 의존성 설치

### 설치 필요 여부 확인

| 파일 존재 여부 | 설치 명령 | 설명 |
|---------------|-----------|------|
| `package.json` 있음 | `npm install` | Node.js 프로젝트 |
| `requirements.txt` 있음 | `pip install -r requirements.txt` | Python 프로젝트 |
| 둘 다 없음 | 설치 생략 | 바로 실행 가능 |

### HMI_V1 프로젝트 (frontend + backend)

#### Frontend 의존성 설치
```bash
cd C:\Users\my\Desktop\새폴더\HMI_V1\frontend
npm install
```

#### Backend 의존성 설치
```bash
cd C:\Users\my\Desktop\새폴더\HMI_V1\backend
pip install -r requirements.txt
```

### PLC Simulator (Python만)
```bash
cd C:\Users\my\Desktop\새폴더\PLC_Simulator
pip install -r requirements.txt
```

### Edge Computer (Python만)
```bash
cd C:\Users\my\Desktop\새폴더\Edge_Computer_V1
pip install -r requirements.txt
```

---

## 4. 프로젝트 실행

### 실행 순서 (권장)
1. PLC Simulator 실행
2. Edge Computer 실행
3. HMI Backend 실행
4. HMI Frontend 실행

### 각 프로그램 실행 명령

#### PLC Simulator
```bash
cd C:\Users\my\Desktop\새폴더\PLC_Simulator
python plc_simulator.py
```

#### Edge Computer
```bash
cd C:\Users\my\Desktop\새폴더\Edge_Computer_V1
python main.py
```

#### HMI Backend
```bash
cd C:\Users\my\Desktop\새폴더\HMI_V1\backend
python main.py
```

#### HMI Frontend
```bash
cd C:\Users\my\Desktop\새폴더\HMI_V1\frontend
npm run dev
```

---

## 5. 현재 저장소 URL 확인 방법

기존 프로젝트의 GitHub URL을 모르는 경우:
```bash
cd [프로젝트 폴더]
git remote -v
```

출력 예시:
```
origin  https://github.com/chunyongman/HMI_V1.git (fetch)
origin  https://github.com/chunyongman/HMI_V1.git (push)
```

---

## 6. 전체 과정 요약

```bash
# 1. 새 작업 폴더 생성
mkdir C:\Users\my\Desktop\새프로젝트

# 2. GitHub에서 클론
git clone https://github.com/chunyongman/HMI_V1.git C:\Users\my\Desktop\새프로젝트\HMI_V1

# 3. Frontend 의존성 설치 (package.json 있으면)
cd C:\Users\my\Desktop\새프로젝트\HMI_V1\frontend
npm install

# 4. Backend 의존성 설치 (requirements.txt 있으면)
cd ..\backend
pip install -r requirements.txt

# 5. 실행
python main.py
```

---

## 7. 자주 발생하는 문제

### 문제: git 명령어를 찾을 수 없음
**해결**: Git 설치 후 터미널 재시작

### 문제: npm install 실패
**해결**: Node.js 설치 확인, `node --version` 으로 확인

### 문제: pip install 실패
**해결**: Python 설치 확인, `python --version` 으로 확인

### 문제: 권한 오류
**해결**: 관리자 권한으로 터미널 실행

---

**문서 작성일**: 2025년 12월 1일
