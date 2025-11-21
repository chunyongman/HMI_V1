@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================================
echo    USB 배포용 파일 준비
echo ============================================================
echo.

set "USB_FOLDER=%~dp0USB_DEPLOY"

echo USB 배포용 폴더를 생성합니다: %USB_FOLDER%
echo.

REM 기존 폴더 삭제
if exist "%USB_FOLDER%" (
    echo 기존 USB_DEPLOY 폴더 삭제 중...
    rmdir /s /q "%USB_FOLDER%"
)

REM 새 폴더 생성
mkdir "%USB_FOLDER%"

echo.
echo 필수 파일 복사 중...
echo.

REM 루트 파일들
echo [1/6] 루트 설정 파일 복사 중...
copy docker-compose.yml "%USB_FOLDER%\" >nul
copy START_DOCKER.bat "%USB_FOLDER%\" >nul
copy STOP_DOCKER.bat "%USB_FOLDER%\" >nul
copy LOGS_DOCKER.bat "%USB_FOLDER%\" >nul
copy RESTART_DOCKER.bat "%USB_FOLDER%\" >nul
copy README_DOCKER.md "%USB_FOLDER%\" >nul
copy .dockerignore "%USB_FOLDER%\" >nul
echo     ✓ 완료

REM Backend
echo [2/6] Backend 파일 복사 중...
mkdir "%USB_FOLDER%\backend"
mkdir "%USB_FOLDER%\backend\data"
copy backend\Dockerfile "%USB_FOLDER%\backend\" >nul
copy backend\.dockerignore "%USB_FOLDER%\backend\" >nul
copy backend\requirements.txt "%USB_FOLDER%\backend\" >nul
copy backend\*.py "%USB_FOLDER%\backend\" >nul
copy backend\data\*.json "%USB_FOLDER%\backend\data\" >nul 2>nul
echo     ✓ 완료

REM Frontend
echo [3/6] Frontend 파일 복사 중...
mkdir "%USB_FOLDER%\frontend"
copy frontend\Dockerfile "%USB_FOLDER%\frontend\" >nul
copy frontend\.dockerignore "%USB_FOLDER%\frontend\" >nul
copy frontend\package*.json "%USB_FOLDER%\frontend\" >nul
copy frontend\vite.config.js "%USB_FOLDER%\frontend\" >nul
copy frontend\index.html "%USB_FOLDER%\frontend\" >nul
echo     ✓ 완료

REM Frontend src
echo [4/6] Frontend 소스 복사 중...
xcopy frontend\src "%USB_FOLDER%\frontend\src" /E /I /Q >nul
echo     ✓ 완료

REM Frontend public
echo [5/6] Frontend public 복사 중...
xcopy frontend\public "%USB_FOLDER%\frontend\public" /E /I /Q >nul 2>nul
echo     ✓ 완료

REM Simulator
echo [6/6] Simulator 파일 복사 중...
mkdir "%USB_FOLDER%\simulator"
copy simulator\Dockerfile "%USB_FOLDER%\simulator\" >nul
copy simulator\.dockerignore "%USB_FOLDER%\simulator\" >nul
copy simulator\*.py "%USB_FOLDER%\simulator\" >nul
echo     ✓ 완료

echo.
echo ============================================================
echo    ✓ USB 배포 파일 준비 완료!
echo ============================================================
echo.
echo 생성된 폴더: %USB_FOLDER%
echo.
echo [다음 단계]
echo    1. USB_DEPLOY 폴더를 USB에 복사하세요
echo    2. USB를 다른 PC에 연결하세요
echo    3. USB_DEPLOY 폴더를 PC에 복사하세요
echo    4. START_DOCKER.bat를 실행하세요
echo.

REM 폴더 용량 확인
echo [폴더 정보]
dir "%USB_FOLDER%" /s | find "File(s)"
echo.

echo USB_DEPLOY 폴더를 열까요? (Y/N)
choice /c YN /n /m "Y: 열기, N: 닫기"
if errorlevel 2 goto :end
if errorlevel 1 explorer "%USB_FOLDER%"

:end
pause
