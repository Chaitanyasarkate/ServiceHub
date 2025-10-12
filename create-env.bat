@echo off
echo Creating .env file for ServiceHub...
echo.

echo MONGODB_URI=mongodb://localhost:27017/servicehub > .env
echo JWT_SECRET=your-super-secret-jwt-key-change-this-in-production >> .env
echo PORT=5000 >> .env
echo NODE_ENV=development >> .env

echo.
echo .env file created successfully!
echo.
echo You can now run: npm run dev
echo.
pause
