@echo off
REM ============================================================
REM  HMI 자동 실행 배치 파일
REM  Windows 시작 시 자동으로 HMI를 실행합니다
REM ============================================================

REM 관리자 권한 확인 및 자동 요청
net session >nul 2>&1
if %errorLevel% neq 0 (
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

cd /d "%~dp0"

REM 로그 파일 생성
echo [%date% %time%] HMI 자동 실행 시작 >> autostart.log

REM 5초 대기 (시스템 부팅 완료 대기)
timeout /t 5 /nobreak >nul

REM HMI 시작
call START_HMI_DEPLOY.bat

echo [%date% %time%] HMI 자동 실행 완료 >> autostart.log
