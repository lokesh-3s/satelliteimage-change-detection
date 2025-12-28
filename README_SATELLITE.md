# 🛰️ TerraTrack Satellite Change Detection

Complete satellite image analysis system integrated into TerraTrack with AI-powered change detection and LLM explanations.

---

## 🚀 Quick Start

### 1. Set Up Gemini API Key (REQUIRED!)

Your previous API key was leaked and blocked. You need a new one:

1. Go to: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy your new API key
4. Open `TerraTrack_BitNBuild/.env`
5. Replace `your-new-gemini-api-key-here` with your actual key

Example:
```
GEMINI_API_KEY=AIzaSyABC123YourNewKeyHere
```

### 2. Start All Servers

Double-click: `START_ALL_SERVERS.bat`

This will open 3 terminals:
- Satellite Backend (Port 8000)
- TerraTrack Server (Port 8080)
- TerraTrack Client (Port 5173)

### 3. Access the Application

Open your browser: **http://localhost:5173**

Navigate to: **TerraBot → 🛰️ Satellite Analysis**

---

## 📁 Project Structure

```
TerraTrack_BitNBuild/
├── .env                          # Gemini API key (IMPORTANT!)
├── START_ALL_SERVERS.bat         # One-click startup
├── start-satellite-backend.bat   # Satellite backend only
│
├── satellite-backend/            # AI Backend
│   ├── main.py                   # FastAPI server
│   ├── predict.py                # Prediction engine
│   ├── llm_explainer.py          # Gemini integration
│   ├── analyzer.py               # Environmental analysis
│   ├── visualization.py          # Image generation
│   ├── image_converter.py        # RGB to multi-band
│   ├── model.py                  # AI model architecture
│   ├── config.py                 # Configuration
│   ├── dataset.py                # Data loading
│   ├── requirements.txt          # Python dependencies
│   ├── backend/                  # Upload storage
│   ├── models/                   # AI model files
│   │   └── best_model.pth        # Trained model (282 MB)
│   └── results/                  # Analysis results
│
├── server/                       # Express Backend
│   ├── index.js                  # Main server
│   ├── routes/
│   │   └── satellite.routes.js  # Satellite API proxy
│   └── .env                      # Server config
│
└── client/                       # React Frontend
    ├── src/
    │   ├── components/
    │   │   └── SatelliteAnalysis.jsx  # Main UI component
    │   ├── pages/
    │   │   └── TerraBotPage.jsx       # TerraBot page
    │   └── services/
    │       └── geminiService.js       # Gemini API client
    └── .env                      # Client config
```

---

## 🎯 Features

### AI Model
- **Siamese U-Net** architecture
- Change detection
- Vegetation classification
- Urban development analysis
- GPU/CPU automatic fallback

### LLM Integration (Google Gemini)
- Natural language insights
- Executive summaries
- Detailed analysis
- Recommendations
- Key insights

### Environmental Analysis
- **NDVI** (Vegetation Index)
- **NDBI** (Built-up Index)
- **NDWI** (Water Index)
- **SAVI** (Soil-adjusted Vegetation)
- Area calculations (km²)
- Percentage changes

### Dual Upload Modes
- **Simple Mode**: PNG/JPEG images (user-friendly)
- **Advanced Mode**: 13-band .tif files (precise)

### Visualizations
- 12-panel comprehensive image
- RGB before/after comparison
- Change detection heatmaps
- NDVI/NDBI/NDWI overlays
- Interactive metrics cards

---

## 📸 How to Use

### Simple Mode (Recommended)
1. Click "📸 Simple Mode"
2. Upload 1 before image (PNG/JPEG)
3. Upload 1 after image (PNG/JPEG)
4. Enter location name
5. Click "🚀 Analyze Changes"
6. Wait 20-40 seconds
7. View AI-powered results!

### Advanced Mode
1. Click "🛰️ Advanced Mode"
2. Upload 13 .tif files for before (B01-B12, B8A)
3. Upload 13 .tif files for after
4. Enter location and dates
5. Click "🚀 Analyze Changes"
6. Get precise satellite analysis!

---

## 🔧 Manual Setup (If Needed)

### Install Dependencies

#### Satellite Backend:
```bash
cd satellite-backend
pip install -r requirements.txt
```

#### TerraTrack Server:
```bash
cd server
npm install
```

#### TerraTrack Client:
```bash
cd client
npm install
```

### Start Servers Manually

#### Terminal 1 - Satellite Backend:
```bash
cd satellite-backend
python main.py
```

#### Terminal 2 - TerraTrack Server:
```bash
cd server
npm start
```

#### Terminal 3 - TerraTrack Client:
```bash
cd client
npm run dev
```

---

## ⚠️ Troubleshooting

### Error: "Your API key was reported as leaked"

**Solution**: Your API key was exposed and blocked by Google.

1. Go to https://aistudio.google.com/app/apikey
2. Create a NEW API key
3. Update `TerraTrack_BitNBuild/.env`:
   ```
   GEMINI_API_KEY=your-new-key-here
   ```
4. Restart the satellite backend

### Error: "Gemini API key not configured"

**Solution**: Set your API key in `.env` file

1. Open `TerraTrack_BitNBuild/.env`
2. Replace `your-new-gemini-api-key-here` with your actual key
3. Save the file
4. Restart servers

### Error: "Model not found"

**Solution**: Ensure model file exists

Check that `satellite-backend/models/best_model.pth` exists (282 MB file)

### Error: "Port already in use"

**Solution**: Kill the process

```bash
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Blank Page / Frontend Not Loading

**Solution**: Check console for errors

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Ensure all servers are running
4. Check that API URL is correct in `client/.env`

---

## 📊 Performance

### GPU Mode (if available):
- Analysis: 8-12 seconds
- LLM: 2-5 seconds
- **Total: ~10-15 seconds**

### CPU Mode (current):
- Analysis: 20-40 seconds
- LLM: 2-5 seconds
- **Total: ~25-45 seconds**

---

## 🔒 Security Notes

### API Key Security:
- **NEVER** commit `.env` files to Git
- **NEVER** share your API key publicly
- **NEVER** hardcode API keys in code
- Use environment variables only

### If Your Key is Leaked:
1. Immediately create a new key
2. Delete the old key from Google Console
3. Update your `.env` file
4. Restart all servers

---

## 📝 API Endpoints

### Satellite Backend (Port 8000):
- `GET /` - API info
- `GET /health` - Health check
- `POST /api/analyze` - Upload and analyze images
- `GET /api/results/:id` - Get analysis results
- `GET /api/results/:id/image` - Get visualization

### TerraTrack Server (Port 8080):
- `POST /api/satellite/analyze` - Proxy to satellite backend
- `GET /api/satellite/results/:id` - Get results
- `GET /api/satellite/results/:id/image` - Get image
- `GET /api/satellite/health` - Check backend status

---

## 🎨 UI Features

- TerraTrack green/emerald theme
- Backdrop blur effects
- Smooth animations (Framer Motion)
- Responsive design
- Tab switcher (Chat | Satellite Analysis)
- Loading states
- Error handling
- Toast notifications

---

## 🔄 Data Flow

```
User uploads images
        ↓
SatelliteAnalysis.jsx (React)
        ↓
TerraTrack Server (Express proxy)
        ↓
Satellite Backend (FastAPI)
        ↓
Image Converter (if RGB)
        ↓
AI Model (Siamese U-Net)
        ↓
Environmental Analyzer
        ↓
LLM Explainer (Gemini)
        ↓
Visualization Generator
        ↓
Results displayed in UI
```

---

## 🎊 Success Indicators

### Backend Running:
```
✅ Model loaded successfully
✓ LLM explainer initialized
INFO: Uvicorn running on http://0.0.0.0:8000
```

### Server Running:
```
MongoDB Connected
Server is running on PORT 8080
```

### Client Running:
```
VITE ready in XXX ms
Local: http://localhost:5173/
```

### Analysis Complete:
```
✅ Analysis complete in XX.XXs
```

---

## 📞 Support

### Get Gemini API Key:
https://aistudio.google.com/app/apikey

### Documentation:
- FastAPI: https://fastapi.tiangolo.com/
- React: https://react.dev/
- Gemini API: https://ai.google.dev/

---

## ✅ Checklist Before Running

- [ ] Set Gemini API key in `.env`
- [ ] Model file exists (`satellite-backend/models/best_model.pth`)
- [ ] Python dependencies installed
- [ ] Node dependencies installed (server & client)
- [ ] Ports 8000, 8080, 5173 are available

---

## 🚀 You're Ready!

1. Set your Gemini API key in `.env`
2. Run `START_ALL_SERVERS.bat`
3. Open http://localhost:5173
4. Navigate to TerraBot → Satellite Analysis
5. Start analyzing! 🌍

---

**Remember: Get your new Gemini API key first!**
https://aistudio.google.com/app/apikey
