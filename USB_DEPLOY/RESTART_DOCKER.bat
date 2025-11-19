@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================================
echo    ESS HMI Docker 컨테이너 재시작
echo ============================================================
echo.

echo Docker 컨테이너를 재시작하는 중...
docker-compose restart

if errorlevel 1 (
    echo.
    echo [오류] 재시작 실패
    echo        로그를 확인하세요: LOGS_DOCKER.bat
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo    ✓ 재시작 완료!
echo ============================================================
echo.
echo [접속 정보]
echo    - 프론트엔드: http://localhost:5173
echo    - 백엔드 API: http://localhost:8000
echo.
pause
