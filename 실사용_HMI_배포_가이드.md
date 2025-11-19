# Production용 Docker Compose 설정
# 실사용 HMI 장비에서 사용

services:
  # PLC 시뮬레이터 (개발/테스트용, 실제 PLC 사용 시 비활성화)
  plc-simulator:
    build:
      context: ./simulator
      dockerfile: Dockerfile
    container_name: hmi-plc-simulator
    ports:
      - "502:502"
    restart: always  # 오류 시 자동 재시작
    environment:
      - PYTHONUNBUFFERED=1
    networks:
      - hmi-network
    # 프로덕션: 소스 코드 포함
    # volumes 제거 (이미지에 포함)

  # 백엔드 서버
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.production
    container_name: hmi-backend
    ports:
      - "8000:8000"
    restart: always  # 오류 시 자동 재시작
    environment:
      - PYTHONUNBUFFERED=1
      - PLC_HOST=plc-simulator  # 실제 PLC IP로 변경
      - PLC_PORT=502
      - ENVIRONMENT=production
    depends_on:
      - plc-simulator
    networks:
      - hmi-network
    volumes:
      # 데이터 영속화만 유지
      - ./data:/app/data
    # 프로덕션: 소스 코드 포함 (volumes에서 제외)

  # 프론트엔드 (프로덕션 빌드)
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.production
    container_name: hmi-frontend
    ports:
      - "80:80"  # 프로덕션은 80번 포트 사용
    restart: always  # 오류 시 자동 재시작
    depends_on:
      - backend
    networks:
      - hmi-network
    # 프로덕션: Nginx로 정적 파일 서빙

networks:
  hmi-network:
    driver: bridge
