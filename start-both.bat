@echo off
echo ========================================
echo    ServiceHub - Starting Both Services
echo ========================================
echo.
echo This will open two command windows:
echo 1. Backend server (port 5000)
echo 2. Frontend server (port 3000)
echo.
echo After both are running, open your browser and go to:
echo http://localhost:3000
echo.
echo Press any key to start both services...
pause

echo Starting backend...
start "ServiceHub Backend" cmd /k "node server/index.js"

echo Starting frontend...
start "ServiceHub Frontend" cmd /k "cd client && npm start"

echo.
echo Both services are starting...
echo Check the two new command windows for status.
echo.
echo When ready, open: http://localhost:3000
echo.
pause
