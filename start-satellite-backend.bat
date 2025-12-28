@echo off
echo ========================================
echo Starting Satellite Backend
echo ========================================
echo.

cd satellite-backend

REM Check if model exists
if not exist "models\best_model.pth" (
    echo WARNING: Model not found at models\best_model.pth
    echo Please ensure the model file is in the correct location
    echo.
    pause
    exit /b 1
)

echo Starting backend server...
echo Backend will run at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.

python main.py

pause
