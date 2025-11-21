@echo off
chcp 65001 > nul
setlocal EnableDelayedExpansion

echo ======================================================================
echo   HMI V1 시작
echo   ESS Engine Room Ventilation System
echo ======================================================================
echo.

REM 현재 디렉토리 설정
cd /d "%~dp0"

REM 환경 변수 설정 (선택 사항)
REM set PLC_HOST=localhost
REM set PLC_PORT=502
REM set PLC_SLAVE_ID=3

echo [1/3] Backend 서버 시작 중...
echo.

REM Backend 가상환경 확인
if not exist "backend\venv" (
    echo [설치] Backend Python 가상환경 생성 중...
    cd backend
    python -m venv venv
    if errorlevel 1 (
        echo [ERROR] Python 가상환경 생성 실패
        echo [INFO] Python 3.8 이상이 설치되어 있는지 확인하세요
        pause
        exit /b 1
    )

    echo [설치] Backend 의존성 패키지 설치 중...
    venv\Scripts\pip install -r requirements.txt
    if errorlevel 1 (
        echo [ERROR] 패키지 설치 실패
        pause
        exit /b 1
    )
    cd ..
)

REM Backend 실행 (백그라운드)
echo [실행] Backend 서버 시작...
start "HMI V1 Backend" cmd /k "cd /d "%~dp0backend" && venv\Scripts\python.exe main.py"

REM Backend 시작 대기
echo [대기] Backend 서버 초기화 중... (5초)
timeout /t 5 /nobreak > nul

echo.
echo [2/3] Frontend 서버 시작 중...
echo.

REM Frontend 의존성 확인
if not exist "frontend\node_modules" (
    echo [설치] Frontend 의존성 패키지 설치 중...
    cd frontend
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install 실패
        echo [INFO] Node.js가 설치되어 있는지 확인하세요
        pause
        exit /b 1
    )
    cd ..
)

REM Frontend 실행 (백그라운드)
echo [실행] Frontend 서버 시작...
start "HMI V1 Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

REM Frontend 시작 대기
echo [대기] Frontend 서버 초기화 중... (10초)
timeout /t 10 /nobreak > nul

echo.
echo [3/3] 브라우저 열기...
echo.

REM 브라우저 자동 열기
start http://localhost:5173

echo.
echo ======================================================================
echo   ✅ HMI V1 시작 완료!
echo ======================================================================
echo.
echo   브라우저 주소: http://localhost:5173
echo   Backend 서버: http://localhost:8000
echo.
echo   종료하려면:
echo   1. 이 창을 닫으세요
echo   2. 또는 STOP_HMI.bat을 실행하세요
echo.
echo ======================================================================
echo.

pause
