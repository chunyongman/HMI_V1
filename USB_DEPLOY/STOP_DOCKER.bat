@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================================
echo    ESS HMI Docker 컨테이너 종료
echo ============================================================
echo.

echo Docker 컨테이너를 종료하는 중...
docker-compose down

if errorlevel 1 (
    echo.
    echo [오류] 컨테이너 종료 실패
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo    ✓ 모든 컨테이너가 종료되었습니다
echo ============================================================
echo.
echo [참고]
echo    - 다시 시작하려면: START_DOCKER.bat
echo    - 컨테이너와 볼륨까지 삭제: docker-compose down -v
echo.
pause
