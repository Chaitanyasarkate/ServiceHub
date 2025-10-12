@echo off
echo ========================================
echo    ServiceHub Quick Test
echo ========================================
echo.

echo Testing Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
) else (
    echo Node.js: OK
    node --version
)

echo.
echo Testing npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available!
    pause
    exit /b 1
) else (
    echo npm: OK
    npm --version
)

echo.
echo Testing project files...
if not exist package.json (
    echo ERROR: package.json not found!
    pause
    exit /b 1
) else (
    echo package.json: OK
)

if not exist client/package.json (
    echo ERROR: client/package.json not found!
    pause
    exit /b 1
) else (
    echo client/package.json: OK
)

echo.
echo ========================================
echo    All tests passed! Ready to go!
echo ========================================
echo.
echo Next steps:
echo 1. Run: setup-complete.bat
echo 2. Or run: start-servicehub.bat
echo.
pause
