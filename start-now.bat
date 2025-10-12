@echo off
echo ========================================
echo    ServiceHub - Start Now
echo ========================================
echo.

echo Adding Node.js to PATH...
set PATH=%PATH%;C:\Program Files\nodejs

echo.
echo Starting ServiceHub...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.

npm run dev
