@echo off
echo ========================================
echo Starting TerraTrack Complete System
echo ========================================
echo.
echo This will start:
echo   1. Satellite Backend (Port 8000)
echo   2. TerraTrack Server (Port 8080)
echo   3. TerraTrack Client (Port 5173)
echo.
echo Three terminal windows will open.
echo.
echo IMPORTANT: Make sure you have set your Gemini API key in .env file!
echo Get your key from: https://aistudio.google.com/app/apikey
echo.
pause

REM Start satellite backend
start "Satellite Backend" cmd /k "start-satellite-backend.bat"

REM Wait 5 seconds
timeout /t 5 /nobreak > nul

REM Start TerraTrack server
start "TerraTrack Server" cmd /k "cd server && npm start"

REM Wait 3 seconds
timeout /t 3 /nobreak > nul

REM Start TerraTrack client
start "TerraTrack Client" cmd /k "cd client && npm run dev"

echo.
echo ========================================
echo All servers are starting...
echo ========================================
echo.
echo Satellite Backend: http://localhost:8000
echo TerraTrack Server: http://localhost:8080
echo TerraTrack Client: http://localhost:5173
echo.
echo Open http://localhost:5173 in your browser
echo Navigate to TerraBot → Satellite Analysis
echo.
echo REMEMBER: Set your Gemini API key in .env file!
echo.
pause
