# 🌍 TerraTrack - Climate Action Platform with Satellite Analysis

Complete climate action platform with AI-powered satellite change detection, environmental monitoring, and community engagement features.

---

## ⚠️ IMPORTANT: First Time Setup

**Your Gemini API key was leaked and blocked. You MUST get a new one!**

### Get Your New API Key:
1. Visit: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy your new key
4. Open `.env` file in this folder
5. Replace `your-new-gemini-api-key-here` with your actual key
6. Save the file

---

## 🚀 Quick Start

### Step 1: Set API Key
```
1. Get key from: https://aistudio.google.com/app/apikey
2. Edit: .env file
3. Replace: your-new-gemini-api-key-here
4. Save file
```

### Step 2: Start All Servers
```
Double-click: START_ALL_SERVERS.bat
```

### Step 3: Access Application
```
Open browser: http://localhost:5173
```

---

## 📁 Project Structure

```
TerraTrack_BitNBuild/
├── .env                          ← YOUR API KEY HERE!
├── START_ALL_SERVERS.bat         ← ONE-CLICK STARTUP
│
├── satellite-backend/            ← AI Backend (Python/FastAPI)
│   ├── main.py                   ← API server
│   ├── models/                   ← AI model files
│   ├── dataset/                  ← Training data
│   └── ...                       ← Python files
│
├── server/                       ← Express Backend (Node.js)
│   ├── index.js                  ← Main server
│   ├── routes/                   ← API routes
│   └── ...                       ← Server files
│
└── client/                       ← React Frontend
    ├── src/                      ← Source code
    ├── public/                   ← Static assets
    └── ...                       ← Frontend files
```

---

## 🎯 Features

### 🛰️ Satellite Change Detection
- AI-powered change detection (Siamese U-Net)
- LLM-generated insights (Google Gemini)
- Environmental analysis (NDVI, NDBI, NDWI)
- 12-panel visualizations
- Dual upload modes (RGB/Multi-band)

### 🌱 Climate Action Platform
- Campaign management
- Donation system
- Environmental alerts
- Data visualization
- Community engagement

### 🤖 TerraBot AI Assistant
- Climate data analysis
- Natural language queries
- Web scraping
- Visualizations
- Source citations

---

## 📚 Documentation

### Quick Start:
- **START_HERE.txt** - Read this first!
- **QUICK_VISUAL_GUIDE.txt** - Step-by-step visual guide

### Complete Guides:
- **SETUP_GUIDE.md** - Full setup instructions
- **README_SATELLITE.md** - Satellite feature documentation
- **GET_YOUR_API_KEY.txt** - API key instructions

### Reference:
- **PROJECT_STRUCTURE.txt** - Folder structure
- **CHANGES_MADE.md** - What was changed
- **SYSTEM_STATUS.md** - Current status

---

## 🔧 Manual Setup

### Install Dependencies:

**Satellite Backend:**
```bash
cd satellite-backend
pip install -r requirements.txt
```

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

### Start Servers:

**Terminal 1 - Satellite Backend:**
```bash
cd satellite-backend
python main.py
```

**Terminal 2 - Server:**
```bash
cd server
npm start
```

**Terminal 3 - Client:**
```bash
cd client
npm run dev
```

---

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Server**: http://localhost:8080
- **Satellite Backend**: http://localhost:8000

---

## 📊 Tech Stack

### Frontend:
- React + Vite
- Framer Motion
- Three.js (3D Globe)
- Tailwind CSS
- Axios

### Backend:
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### AI Backend:
- FastAPI
- PyTorch
- Google Gemini API
- Rasterio
- Matplotlib

---

## 🎨 Key Features

### Satellite Analysis:
1. Navigate to TerraBot page
2. Click "🛰️ Satellite Analysis" tab
3. Upload before/after images
4. Get AI-powered analysis in 20-40 seconds

### Climate Campaigns:
- Create and manage campaigns
- Track donations
- View impact metrics
- Community engagement

### Environmental Monitoring:
- Real-time alerts
- Data visualization
- Trend analysis
- Predictive insights

---

## ⚠️ Troubleshooting

### "API key not configured"
- Get new key: https://aistudio.google.com/app/apikey
- Update `.env` file
- Restart servers

### "Satellite backend not available"
- Check if backend window is open
- Look for "✅ Model loaded"
- Restart START_ALL_SERVERS.bat

### Blank page
- Press F12 (DevTools)
- Check Console for errors
- Ensure all 3 servers running
- Hard refresh (Ctrl+Shift+R)

---

## 🔒 Security

### API Key Security:
- ✅ Keep in .env file
- ✅ Add .env to .gitignore
- ✅ Never commit to Git
- ✅ Never share publicly

### If Key is Leaked:
1. Create new key immediately
2. Delete old key from Google Console
3. Update .env file
4. Restart servers

---

## 📝 Environment Variables

### Root .env:
```
GEMINI_API_KEY=your-key-here
```

### server/.env:
```
PORT=8080
MONGODB_URI=your-mongodb-uri
FRONTEND_URL=http://localhost:5173
```

### client/.env:
```
VITE_API_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your-stripe-key
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

---

## 📞 Quick Reference

### Get API Key:
https://aistudio.google.com/app/apikey

### Start Application:
```
START_ALL_SERVERS.bat
```

### Access:
http://localhost:5173

### Documentation:
- START_HERE.txt
- SETUP_GUIDE.md
- README_SATELLITE.md

---

## 🚀 Ready to Start!

1. **Get API key**: https://aistudio.google.com/app/apikey
2. **Update .env**: Replace placeholder with your key
3. **Start servers**: Double-click START_ALL_SERVERS.bat
4. **Open browser**: http://localhost:5173
5. **Start analyzing**: TerraBot → Satellite Analysis

---

**Everything is ready! Just get your API key and start!** 🌍

For detailed instructions, read **START_HERE.txt**
