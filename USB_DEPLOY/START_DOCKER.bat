@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================================
echo    ESS HMI 시스템 시작 (Docker)
echo ============================================================
echo.
echo [안내] Docker Desktop이 실행되어 있는지 확인하세요.
echo.

REM Docker 실행 확인
docker info >nul 2>&1
if errorlevel 1 (
    echo [오류] Docker Desktop이 실행되지 않았습니다.
    echo.
    echo [해결방법]
    echo    1. Docker Desktop을 실행하세요
    echo    2. 작업 표시줄에서 Docker 아이콘이 초록색인지 확인
    echo    3. 다시 이 파일을 실행하세요
    echo.
    echo Docker Desktop이 설치되지 않은 경우:
    echo    https://www.docker.com/products/docker-desktop
    echo.
    pause
    exit /b 1
)

echo [1/3] 기존 컨테이너 정리 중...
docker-compose down >nul 2>&1
echo     ✓ 정리 완료
echo.

echo [2/3] Docker 컨테이너 시작 중...
echo     (처음 실행 시 이미지 빌드로 5~10분 소요됩니다)
echo.
docker-compose up -d

if errorlevel 1 (
    echo.
    echo [오류] Docker 컨테이너 시작 실패
    echo        로그를 확인하세요: LOGS_DOCKER.bat
    echo.
    pause
    exit /b 1
)

echo.
echo [3/3] 컨테이너 상태 확인 중...
timeout /t 5 /nobreak >nul
docker-compose ps

echo.
echo ============================================================
echo    ✓ 모든 서비스가 시작되었습니다!
echo ============================================================
echo.
echo [접속 정보]
echo    - 프론트엔드: http://localhost:5173
echo    - 백엔드 API: http://localhost:8000
echo    - PLC 시뮬레이터: 192.168.0.130:502 (컨테이너 내부)
echo.
echo [유용한 명령어]
echo    - 로그 확인: LOGS_DOCKER.bat
echo    - 재시작: RESTART_DOCKER.bat
echo    - 종료: STOP_DOCKER.bat
echo    - 직접 로그 보기: docker-compose logs -f
echo.
echo [개발 팁]
echo    - 코드 수정 시 자동으로 반영됩니다
echo    - 백엔드: 저장 후 1~2초 내 반영
echo    - 프론트엔드: 저장 후 브라우저 자동 새로고침
echo.
echo [자동 브라우저 실행]
timeout /t 5 /nobreak >nul
start http://localhost:5173
echo.
pause
