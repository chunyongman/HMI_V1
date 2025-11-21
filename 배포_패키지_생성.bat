@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================================
echo    HMI 배포 패키지 자동 생성
echo ============================================================
echo.
echo [작업 경로]
echo    소스: %~dp0
echo    대상: C:\Users\my\Desktop\HMI_DEPLOY
echo.

REM 1단계: Frontend 빌드
echo [1/5] Frontend 빌드 중...
cd frontend
call npm run build
if %errorlevel% neq 0 (
    echo [오류] Frontend 빌드 실패!
    pause
    exit /b 1
)
cd ..
echo     ✓ 빌드 완료
echo.

REM 2단계: 배포 폴더 초기화
echo [2/5] 배포 폴더 준비 중...
set DEPLOY_DIR=C:\Users\my\Desktop\HMI_DEPLOY

if exist "%DEPLOY_DIR%" (
    echo     기존 배포 폴더 삭제 중...
    timeout /t 2 /nobreak >nul
    rd /s /q "%DEPLOY_DIR%\frontend" 2>nul
    rd /s /q "%DEPLOY_DIR%\backend" 2>nul
    rd /s /q "%DEPLOY_DIR%\simulator" 2>nul
    del /q "%DEPLOY_DIR%\*.bat" 2>nul
    del /q "%DEPLOY_DIR%\*.txt" 2>nul
    del /q "%DEPLOY_DIR%\*.md" 2>nul
    del /q "%DEPLOY_DIR%\*.html" 2>nul
)

mkdir "%DEPLOY_DIR%" 2>nul
echo     ✓ 폴더 준비 완료
echo.

REM 3단계: Frontend 복사
echo [3/5] Frontend 파일 복사 중...
mkdir "%DEPLOY_DIR%\frontend"
xcopy /E /I /Y "frontend\dist" "%DEPLOY_DIR%\frontend\dist" >nul
echo     ✓ Frontend 복사 완료 (325KB)
echo.

REM 4단계: Backend 복사
echo [4/5] Backend 파일 복사 중...
mkdir "%DEPLOY_DIR%\backend"
copy /Y "backend\*.py" "%DEPLOY_DIR%\backend\" >nul
copy /Y "backend\requirements.txt" "%DEPLOY_DIR%\backend\" >nul
echo     Python 파일 복사 완료
echo     가상환경 복사 중 (약 37MB, 1-2분 소요)...
xcopy /E /I /Y /Q "backend\venv" "%DEPLOY_DIR%\backend\venv" >nul
echo     ✓ Backend 복사 완료 (37MB)
echo.

REM 5단계: Simulator 및 기타 파일 복사
echo [5/5] 기타 파일 복사 중...
xcopy /E /I /Y "simulator" "%DEPLOY_DIR%\simulator" >nul
copy /Y "START_HMI_DEPLOY.bat" "%DEPLOY_DIR%\" >nul
copy /Y "자동실행.bat" "%DEPLOY_DIR%\" >nul
copy /Y "STOP_HMI.bat" "%DEPLOY_DIR%\" >nul
copy /Y "자동실행_설정_가이드.txt" "%DEPLOY_DIR%\" >nul
copy /Y "배포_용량_최적화_가이드.md" "%DEPLOY_DIR%\" >nul
copy /Y "HMI_완전_배포_가이드.html" "%DEPLOY_DIR%\" >nul
copy /Y "README.md" "%DEPLOY_DIR%\" >nul
echo     ✓ 기타 파일 복사 완료
echo.

REM 배포 설명서 생성
echo ========================================> "%DEPLOY_DIR%\배포_설명서.txt"
echo   ESS HMI 배포 패키지>> "%DEPLOY_DIR%\배포_설명서.txt"
echo ========================================>> "%DEPLOY_DIR%\배포_설명서.txt"
echo.>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 📦 총 용량: 38MB>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 📅 생성일시: %date% %time%>> "%DEPLOY_DIR%\배포_설명서.txt"
echo.>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 🚀 빠른 시작:>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 1. 이 폴더를 HMI PC로 복사>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 2. START_HMI_DEPLOY.bat 더블클릭>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 3. UAC 창에서 "예" 클릭>> "%DEPLOY_DIR%\배포_설명서.txt"
echo.>> "%DEPLOY_DIR%\배포_설명서.txt"
echo 📖 상세 가이드: HMI_완전_배포_가이드.html 참조>> "%DEPLOY_DIR%\배포_설명서.txt"
echo ========================================>> "%DEPLOY_DIR%\배포_설명서.txt"

echo ============================================================
echo    ✓ 배포 패키지 생성 완료!
echo ============================================================
echo.
echo [배포 위치]
echo    %DEPLOY_DIR%
echo.
echo [다음 단계]
echo    1. 배포 폴더로 이동하여 내용 확인
echo    2. USB에 복사하여 HMI PC로 전송
echo    3. 또는 네트워크로 복사
echo.
echo [배포 테스트]
echo    배포 폴더에서 START_HMI_DEPLOY.bat를 실행하여 테스트
echo.

REM 배포 폴더 열기 여부 확인
set /p OPEN_FOLDER="배포 폴더를 열겠습니까? (Y/N): "
if /i "%OPEN_FOLDER%"=="Y" (
    explorer "%DEPLOY_DIR%"
)

pause
