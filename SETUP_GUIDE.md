# 🚀 TerraTrack Setup Guide

## ⚠️ IMPORTANT FIRST STEP

**Your Gemini API key was leaked and blocked. You MUST get a new one!**

### Get Your New API Key:

1. **Go to**: https://aistudio.google.com/app/apikey
2. **Click**: "Create API Key"
3. **Copy**: Your new key (starts with "AIza...")
4. **Open**: `TerraTrack_BitNBuild/.env`
5. **Replace**: `your-new-gemini-api-key-here` with your actual key
6. **Save**: The file

---

## 📁 New Project Structure

Everything is now organized inside `TerraTrack_BitNBuild/`:

```
TerraTrack_BitNBuild/
├── .env                          ← PUT YOUR API KEY HERE!
├── START_ALL_SERVERS.bat         ← DOUBLE-CLICK TO START
├── GET_YOUR_API_KEY.txt          ← Instructions
├── README_SATELLITE.md           ← Full documentation
│
├── satellite-backend/            ← AI Backend (Python)
│   ├── main.py
│   ├── models/best_model.pth
│   └── ... (all Python files)
│
├── server/                       ← Express Backend (Node.js)
│   ├── index.js
│   └── routes/satellite.routes.js
│
└── client/                       ← React Frontend
    ├── src/components/SatelliteAnalysis.jsx
    └── src/pages/TerraBotPage.jsx
```

---

## 🎯 Quick Start (3 Steps)

### Step 1: Get API Key
```
1. Visit: https://aistudio.google.com/app/apikey
2. Create new API key
3. Copy it
```

### Step 2: Update .env File
```
1. Open: TerraTrack_BitNBuild/.env
2. Replace: your-new-gemini-api-key-here
3. Save file
```

### Step 3: Start Servers
```
Double-click: START_ALL_SERVERS.bat
```

**That's it!** Open http://localhost:5173

---

## 🌐 Access the Application

1. **Open browser**: http://localhost:5173
2. **Navigate to**: TerraBot (in navigation menu)
3. **Click tab**: 🛰️ Satellite Analysis
4. **Upload images**: Before & After
5. **Click**: 🚀 Analyze Changes
6. **Wait**: 20-40 seconds
7. **View results**: AI insights, metrics, visualization

---

## 📸 Two Upload Modes

### Simple Mode (Recommended)
- Upload: 1 PNG/JPEG before + 1 PNG/JPEG after
- Best for: Testing, regular photos
- Processing: ~25-40 seconds

### Advanced Mode
- Upload: 13 .tif files before + 13 .tif files after
- Best for: Satellite imagery, precise analysis
- Processing: ~20-35 seconds

---

## 🔧 Manual Setup (If Needed)

### Install Python Dependencies:
```bash
cd TerraTrack_BitNBuild/satellite-backend
pip install -r requirements.txt
```

### Install Server Dependencies:
```bash
cd TerraTrack_BitNBuild/server
npm install
```

### Install Client Dependencies:
```bash
cd TerraTrack_BitNBuild/client
npm install
```

### Start Manually:

**Terminal 1 - Satellite Backend:**
```bash
cd TerraTrack_BitNBuild/satellite-backend
python main.py
```

**Terminal 2 - Server:**
```bash
cd TerraTrack_BitNBuild/server
npm start
```

**Terminal 3 - Client:**
```bash
cd TerraTrack_BitNBuild/client
npm run dev
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Your API key was reported as leaked"

**Cause**: Your API key was exposed publicly

**Solution**:
1. Get new key: https://aistudio.google.com/app/apikey
2. Update `.env` file
3. Restart servers

---

### Issue 2: "Gemini API key not configured"

**Cause**: API key not set or still has placeholder value

**Solution**:
1. Open `TerraTrack_BitNBuild/.env`
2. Check if key is set correctly
3. Should start with "AIza..."
4. No quotes needed
5. Save and restart

---

### Issue 3: "Model not found"

**Cause**: Model file missing or in wrong location

**Solution**:
Check that this file exists:
`TerraTrack_BitNBuild/satellite-backend/models/best_model.pth`

File size should be ~282 MB

---

### Issue 4: "Port already in use"

**Cause**: Server already running on that port

**Solution**:
```bash
# Find process
netstat -ano | findstr :8000

# Kill process (replace <PID> with actual number)
taskkill /PID <PID> /F
```

---

### Issue 5: Blank page or errors

**Cause**: Various frontend issues

**Solution**:
1. Open browser DevTools (F12)
2. Check Console for errors
3. Ensure all 3 servers are running
4. Check `.env` files are correct
5. Try hard refresh (Ctrl+Shift+R)

---

## 📊 What You'll Get

### AI-Generated Insights:
- Executive Summary
- Detailed Analysis
- Environmental Impact
- Recommendations
- Key Insights

### Environmental Metrics:
- Vegetation changes (NDVI)
- Urban development (NDBI)
- Water body changes (NDWI)
- Area calculations (km²)
- Percentage changes

### Visualizations:
- 12-panel comprehensive image
- RGB before/after comparison
- Change detection heatmap
- NDVI analysis
- Urban/vegetation overlays

---

## ✅ Verification Checklist

Before running, verify:

- [ ] Got new Gemini API key
- [ ] Updated `.env` file with new key
- [ ] Model file exists (282 MB)
- [ ] Python dependencies installed
- [ ] Node dependencies installed (server & client)
- [ ] Ports 8000, 8080, 5173 are free

---

## 🎊 Success Indicators

### When everything is working:

**Satellite Backend:**
```
✅ Model loaded successfully
✓ LLM explainer initialized
INFO: Uvicorn running on http://0.0.0.0:8000
```

**TerraTrack Server:**
```
MongoDB Connected
Server is running on PORT 8080
```

**TerraTrack Client:**
```
VITE ready in XXX ms
Local: http://localhost:5173/
```

**Analysis Complete:**
```
✅ Analysis complete in XX.XXs
```

---

## 📞 Quick Reference

### URLs:
- **Frontend**: http://localhost:5173
- **Server**: http://localhost:8080
- **Satellite Backend**: http://localhost:8000

### Get API Key:
- https://aistudio.google.com/app/apikey

### Files to Edit:
- **API Key**: `TerraTrack_BitNBuild/.env`
- **Server Config**: `TerraTrack_BitNBuild/server/.env`
- **Client Config**: `TerraTrack_BitNBuild/client/.env`

### Startup:
- **All Servers**: `START_ALL_SERVERS.bat`
- **Backend Only**: `start-satellite-backend.bat`

---

## 🔒 Security Reminders

### DO:
✅ Keep API keys in .env files
✅ Add .env to .gitignore
✅ Create new keys if leaked
✅ Use environment variables

### DON'T:
❌ Commit .env files to Git
❌ Share API keys publicly
❌ Post screenshots with keys
❌ Hardcode keys in code

---

## 🚀 Ready to Start!

1. **Get your API key**: https://aistudio.google.com/app/apikey
2. **Update .env**: `TerraTrack_BitNBuild/.env`
3. **Run**: `START_ALL_SERVERS.bat`
4. **Open**: http://localhost:5173
5. **Navigate**: TerraBot → Satellite Analysis
6. **Analyze**: Upload images and go! 🌍

---

**Need help? Check:**
- `README_SATELLITE.md` - Full documentation
- `GET_YOUR_API_KEY.txt` - API key instructions
- Browser console (F12) - Error messages

**Happy analyzing! 🎉**
