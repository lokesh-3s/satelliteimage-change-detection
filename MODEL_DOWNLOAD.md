# 📦 Model File Download Instructions

## ⚠️ Model File Not Included

The trained AI model file (`best_model.pth`, ~282 MB) is **not included** in this repository due to its large size.

---

## 🔽 How to Get the Model

### Option 1: Download Pre-trained Model

**Coming Soon**: We'll provide a download link for the pre-trained model.

For now, you'll need to train the model yourself (see Option 2).

---

### Option 2: Train the Model Yourself

#### Requirements:
- Python 3.8+
- PyTorch with CUDA (recommended) or CPU
- Training dataset (Onera Satellite Change Detection)

#### Steps:

1. **Download the Dataset**:
   - Visit: https://ieee-dataport.org/open-access/oscd-onera-satellite-change-detection
   - Download the Onera Satellite Change Detection dataset
   - Extract to: `satellite-backend/dataset/`

2. **Install Dependencies**:
   ```bash
   cd satellite-backend
   pip install -r requirements.txt
   ```

3. **Train the Model**:
   ```bash
   python train.py
   ```

4. **Training Details**:
   - **Time**: 4-8 hours (GPU) or 24-48 hours (CPU)
   - **Epochs**: 50 (default)
   - **Output**: `satellite-backend/models/best_model.pth`
   - **Size**: ~282 MB

5. **Monitor Training**:
   - Training progress will be displayed in console
   - Model checkpoints saved automatically
   - Best model saved based on validation loss

---

## 📁 Model File Location

After training or downloading, place the model file here:

```
satellite-backend/
└── models/
    └── best_model.pth  ← Place model here
```

---

## ✅ Verify Model Installation

Run this command to check if the model is properly installed:

```bash
cd satellite-backend
python -c "import os; print('✅ Model found!' if os.path.exists('models/best_model.pth') else '❌ Model not found')"
```

---

## 🚀 Alternative: Use Without Model

You can still use the system for environmental analysis without the AI model:

- ✅ NDVI, NDBI, NDWI calculations
- ✅ Environmental metrics
- ✅ Basic change detection
- ❌ AI-powered change detection (requires model)
- ❌ Vegetation classification (requires model)

---

## 📊 Model Specifications

- **Architecture**: Siamese U-Net
- **Input**: 13-band Sentinel-2 imagery (256x256)
- **Output**: Change detection mask + classifications
- **Parameters**: ~31 million
- **Size**: 282 MB
- **Format**: PyTorch (.pth)

---

## 🔧 Training Configuration

Default training settings (in `config.py`):

```python
IMG_SIZE = 256
BATCH_SIZE = 4
NUM_EPOCHS = 50
LEARNING_RATE = 0.0001
```

Adjust these based on your hardware:
- **GPU with 6GB VRAM**: Use default settings
- **GPU with 4GB VRAM**: Reduce BATCH_SIZE to 2
- **CPU only**: Reduce BATCH_SIZE to 1, expect long training time

---

## 📞 Need Help?

If you have issues with model training or download:

1. Check the training logs for errors
2. Ensure dataset is properly extracted
3. Verify PyTorch installation
4. Check GPU/CUDA availability

---

## 🎯 Quick Start Without Model

If you want to test the system without training:

1. Skip the model file
2. The system will run in "analysis-only" mode
3. You'll get environmental metrics but not AI predictions
4. Train the model later when ready

---

**Note**: The model file is essential for full functionality, but the system can still provide valuable environmental analysis without it.
