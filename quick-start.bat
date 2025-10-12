@echo off
echo ServiceHub Quick Start Setup
echo ============================

echo.
echo 1. Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: npm install failed. Please install Node.js first.
    pause
    exit /b 1
)

echo.
echo 2. Installing client dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo Error: Client dependencies installation failed.
    pause
    exit /b 1
)
cd ..

echo.
echo 3. Setting up environment...
if not exist .env (
    copy env.example .env
    echo Created .env file. Please edit it with your MongoDB URI and JWT secret.
) else (
    echo .env file already exists.
)

echo.
echo 4. Setup complete!
echo.
echo Next steps:
echo 1. Edit .env file with your MongoDB URI and JWT secret
echo 2. Start MongoDB (local or use MongoDB Atlas)
echo 3. Run: npm run dev
echo.
echo Access the application at:
echo - Frontend: http://localhost:3000
echo - Backend: http://localhost:5000
echo.
pause
