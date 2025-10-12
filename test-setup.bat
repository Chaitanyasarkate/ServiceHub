@echo off
echo ServiceHub Setup Test
echo ====================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
) else (
    echo Node.js is installed: 
    node --version
)

echo.
echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available!
    echo Please reinstall Node.js
    echo.
    pause
    exit /b 1
) else (
    echo npm is installed: 
    npm --version
)

echo.
echo Checking project files...
if not exist package.json (
    echo ERROR: package.json not found!
    echo Make sure you're in the correct directory
    pause
    exit /b 1
) else (
    echo package.json found ✓
)

if not exist client/package.json (
    echo ERROR: client/package.json not found!
    echo Make sure you're in the correct directory
    pause
    exit /b 1
) else (
    echo client/package.json found ✓
)

echo.
echo Setup test completed successfully!
echo.
echo Next steps:
echo 1. Run: npm install
echo 2. Run: cd client && npm install && cd ..
echo 3. Run: create-env.bat
echo 4. Run: npm run dev
echo.
pause
