# Backend Dockerfile for ESS HMI System
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

# 시스템 패키지 업데이트 및 필요한 도구 설치
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# requirements.txt 먼저 복사 (Docker 캐시 활용)
COPY requirements.txt .

# Python 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# 소스 코드는 볼륨 마운트로 관리 (개발 시)
# 프로덕션 배포 시에는 아래 주석 해제
# COPY . .

# 포트 노출
EXPOSE 8000

# 환경 변수 설정
ENV PYTHONUNBUFFERED=1

# uvicorn 서버 실행 (--reload 옵션으로 자동 재시작)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
