@echo off
echo ========================================
echo    ServiceHub - Fix and Install
echo ========================================
echo.

echo Step 1: Adding Node.js to PATH for this session...
set PATH=%PATH%;C:\Program Files\nodejs

echo Step 2: Testing npm...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm still not working. Please restart your computer.
    pause
    exit /b 1
)

echo Step 3: Installing server dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Server dependencies installation failed!
    pause
    exit /b 1
)

echo Step 4: Installing client dependencies...
cd client
npm install
if %errorlevel% neq 0 (
    echo ERROR: Client dependencies installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo    Installation Complete!
echo ========================================
echo.
echo Now you can run: npm run dev
echo.
echo Or just run: start-servicehub.bat
echo.
pause
