@echo off
echo ========================================
echo    ServiceHub Complete Setup
echo ========================================
echo.

echo Step 1: Creating environment file...
if not exist .env (
    copy environment.env .env
    echo .env file created successfully!
) else (
    echo .env file already exists.
)

echo.
echo Step 2: Installing server dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Server dependencies installation failed!
    pause
    exit /b 1
)

echo.
echo Step 3: Installing client dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Client dependencies installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo Step 4: Setup complete!
echo.
echo ========================================
echo    ServiceHub is ready to run!
echo ========================================
echo.
echo To start the application, run:
echo   npm run dev
echo.
echo Then open your browser and go to:
echo   http://localhost:3000
echo.
echo Press any key to start the application now...
pause

echo.
echo Starting ServiceHub...
npm run dev
