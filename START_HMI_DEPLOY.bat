@echo off
chcp 65001 >nul

REM 관리자 권한 확인 및 자동 요청
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo [알림] 관리자 권한이 필요합니다. 관리자 권한으로 다시 시작합니다...
    echo.
    timeout /t 2 /nobreak >nul
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

cd /d "%~dp0"

echo ============================================================
echo    ESS HMI 시스템 시작 (배포 버전)
echo ============================================================
echo.

REM 가상환경 확인
if not exist "backend\venv\Scripts\python.exe" (
    echo [오류] Python 가상환경이 없습니다.
    echo        backend\venv\Scripts\python.exe 를 찾을 수 없습니다.
    echo.
    echo [해결방법] INSTALL_DEPENDENCIES.bat 를 실행하세요.
    echo.
    pause
    exit /b 1
)

REM dist 폴더 확인
if not exist "frontend\dist\index.html" (
    echo [오류] 빌드된 프론트엔드 파일이 없습니다.
    echo        frontend\dist\index.html 을 찾을 수 없습니다.
    echo.
    echo [해결방법] 개발 PC에서 빌드를 완료하고 다시 배포하세요.
    echo.
    pause
    exit /b 1
)

echo [1/3] PLC 시뮬레이터 시작 중...
start "PLC 시뮬레이터" cmd /k "cd /d %~dp0 && backend\venv\Scripts\python.exe simulator\plc_simulator.py"
timeout /t 5 /nobreak >nul
echo     ✓ 시뮬레이터 시작 완료
echo.

echo [2/3] 백엔드 서버 시작 중...
start "백엔드 서버" cmd /k "cd /d %~dp0backend && venv\Scripts\python.exe main.py"
timeout /t 5 /nobreak >nul
echo     ✓ 백엔드 시작 완료
echo.

echo [3/3] 프론트엔드 서버 시작 중...
start "프론트엔드 서버" cmd /k "cd /d %~dp0frontend\dist && %~dp0backend\venv\Scripts\python.exe -m http.server 5173"
timeout /t 3 /nobreak >nul
echo     ✓ 프론트엔드 시작 완료
echo.

echo ============================================================
echo    ✓ HMI 시스템이 시작되었습니다!
echo ============================================================
echo.
echo [접속 정보]
echo    - PLC 시뮬레이터: 192.168.0.130:502
echo    - 백엔드 API: http://localhost:8000
echo    - HMI 화면: http://localhost:5173
echo.
echo [사용 방법]
echo    브라우저에서 http://localhost:5173 을 열어주세요
echo    (자동으로 브라우저가 실행됩니다)
echo.
echo [종료 방법]
echo    - STOP_HMI.bat 파일을 실행하거나
echo    - 각 창(시뮬레이터, 백엔드, 프론트엔드)을 닫으면 됩니다
echo    - 또는 각 창에서 Ctrl+C를 눌러 종료하세요
echo.
echo [자동 브라우저 실행]
timeout /t 8 /nobreak >nul
start http://localhost:5173
echo.
pause
