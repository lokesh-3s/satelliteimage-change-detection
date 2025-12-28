import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const SatelliteAnalysis = () => {
  const [beforeFiles, setBeforeFiles] = useState([])
  const [afterFiles, setAfterFiles] = useState([])
  const [location, setLocation] = useState('')
  const [dateBefore, setDateBefore] = useState('')
  const [dateAfter, setDateAfter] = useState('')
  const [uploadMode, setUploadMode] = useState('rgb') // 'rgb' or 'multiband'
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

  const handleBeforeFiles = (e) => {
    const files = Array.from(e.target.files)
    setBeforeFiles(files)
  }

  const handleAfterFiles = (e) => {
    const files = Array.from(e.target.files)
    setAfterFiles(files)
  }

  const handleAnalyze = async () => {
    // Validation
    if (uploadMode === 'rgb') {
      if (beforeFiles.length !== 1 || afterFiles.length !== 1) {
        toast.error('Please upload 1 image for before and 1 for after')
        return
      }
    } else {
      if (beforeFiles.length !== 13 || afterFiles.length !== 13) {
        toast.error('Please upload exactly 13 .tif files for each time period')
        return
      }
    }

    if (!location.trim()) {
      toast.error('Please enter a location name')
      return
    }

    setIsAnalyzing(true)
    const loadingToast = toast.loading('Analyzing satellite images...')

    try {
      const formData = new FormData()
      
      beforeFiles.forEach(file => {
        formData.append('before_images', file)
      })

      afterFiles.forEach(file => {
        formData.append('after_images', file)
      })

      formData.append('location', location)
      if (dateBefore) formData.append('date_before', dateBefore)
      if (dateAfter) formData.append('date_after', dateAfter)

      const response = await axios.post(`${API_URL}/api/satellite/analyze`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 180000, // 3 minutes
      })

      setResults(response.data)
      toast.success('Analysis complete!', { id: loadingToast })
    } catch (error) {
      console.error('Analysis error:', error)
      toast.error(error.response?.data?.detail || 'Analysis failed', { id: loadingToast })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setResults(null)
    setBeforeFiles([])
    setAfterFiles([])
    setLocation('')
    setDateBefore('')
    setDateAfter('')
  }

  if (results) {
    return <ResultsView results={results} onReset={handleReset} apiUrl={API_URL} />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-green-500/20 p-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">🛰️ Satellite Change Detection</h2>
        <p className="text-green-300 text-sm">Upload before/after images to analyze environmental changes</p>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setUploadMode('rgb')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            uploadMode === 'rgb'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
              : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
          }`}
        >
          📸 Simple Mode (PNG/JPEG)
        </button>
        <button
          onClick={() => setUploadMode('multiband')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            uploadMode === 'multiband'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
              : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
          }`}
        >
          🛰️ Advanced Mode (13 bands)
        </button>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-green-300 mb-2">
            Location Name *
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Dubai, Milano"
            className="w-full px-4 py-2 bg-slate-700/50 border border-green-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-green-300 mb-2">
              Date Before (Optional)
            </label>
            <input
              type="text"
              value={dateBefore}
              onChange={(e) => setDateBefore(e.target.value)}
              placeholder="YYYYMMDD"
              className="w-full px-4 py-2 bg-slate-700/50 border border-green-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-300 mb-2">
              Date After (Optional)
            </label>
            <input
              type="text"
              value={dateAfter}
              onChange={(e) => setDateAfter(e.target.value)}
              placeholder="YYYYMMDD"
              className="w-full px-4 py-2 bg-slate-700/50 border border-green-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        {/* File Uploads */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-green-300 mb-2">
              Before Image{uploadMode === 'multiband' ? 's (13 .tif files)' : ' (1 PNG/JPEG)'}
            </label>
            <label className="flex items-center justify-center w-full px-4 py-6 bg-slate-700/30 border-2 border-dashed border-green-500/30 rounded-lg cursor-pointer hover:bg-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-2 text-sm text-green-300">
                  {beforeFiles.length > 0 ? `✓ ${beforeFiles.length} file(s) selected` : 'Click to upload'}
                </p>
              </div>
              <input
                type="file"
                multiple={uploadMode === 'multiband'}
                accept={uploadMode === 'rgb' ? '.png,.jpg,.jpeg' : '.tif,.tiff'}
                onChange={handleBeforeFiles}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-300 mb-2">
              After Image{uploadMode === 'multiband' ? 's (13 .tif files)' : ' (1 PNG/JPEG)'}
            </label>
            <label className="flex items-center justify-center w-full px-4 py-6 bg-slate-700/30 border-2 border-dashed border-green-500/30 rounded-lg cursor-pointer hover:bg-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-2 text-sm text-green-300">
                  {afterFiles.length > 0 ? `✓ ${afterFiles.length} file(s) selected` : 'Click to upload'}
                </p>
              </div>
              <input
                type="file"
                multiple={uploadMode === 'multiband'}
                accept={uploadMode === 'rgb' ? '.png,.jpg,.jpeg' : '.tif,.tiff'}
                onChange={handleAfterFiles}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-sm text-blue-300">
            {uploadMode === 'rgb' 
              ? '📸 Simple Mode: Upload regular PNG or JPEG images. Best for quick testing!'
              : '🛰️ Advanced Mode: Upload 13-band satellite imagery (B01-B12, B8A) for precise analysis.'
            }
          </p>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            '🚀 Analyze Changes'
          )}
        </button>
      </div>
    </motion.div>
  )
}

// Results View Component
const ResultsView = ({ results, onReset, apiUrl }) => {
  const { data, analysis_id, location, processing_time, mode } = results
  const { metadata, vegetation_analysis, urban_analysis, water_analysis, summary, llm_explanations } = data

  const imageUrl = `${apiUrl}/api/satellite/results/${analysis_id}/image`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-green-500/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">📊 Analysis Results: {location}</h2>
            <p className="text-green-300 text-sm mt-1">
              {metadata.date_before} → {metadata.date_after} | {processing_time.toFixed(2)}s | Mode: {mode}
            </p>
          </div>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-slate-700/70 hover:bg-slate-600/80 text-white rounded-lg text-sm transition-all"
          >
            ← New Analysis
          </button>
        </div>
      </div>

      {/* LLM Insights */}
      {llm_explanations && (
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-md rounded-xl border border-green-500/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">🤖 AI-Generated Insights</h3>
          
          <div className="space-y-4">
            {llm_explanations.executive_summary && (
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-green-300 font-semibold mb-2">Executive Summary</h4>
                <p className="text-white/90 whitespace-pre-wrap">{llm_explanations.executive_summary}</p>
              </div>
            )}

            {llm_explanations.detailed_analysis && (
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-green-300 font-semibold mb-2">Detailed Analysis</h4>
                <p className="text-white/90 whitespace-pre-wrap">{llm_explanations.detailed_analysis}</p>
              </div>
            )}

            {llm_explanations.recommendations && (
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-green-300 font-semibold mb-2">Recommendations</h4>
                <p className="text-white/90 whitespace-pre-wrap">{llm_explanations.recommendations}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon="🌳"
          title="Vegetation Changes"
          data={[
            { label: 'Increase', value: `+${vegetation_analysis.vegetation_increase_percent.toFixed(2)}%`, positive: true },
            { label: 'Decrease', value: `-${vegetation_analysis.vegetation_decrease_percent.toFixed(2)}%`, positive: false },
            { label: 'NDVI Change', value: vegetation_analysis.mean_ndvi_change.toFixed(4) }
          ]}
        />
        <MetricCard
          icon="🏗️"
          title="Urban Development"
          data={[
            { label: 'Urbanization', value: `${urban_analysis.urbanization_percent.toFixed(2)}%` },
            { label: 'Construction', value: `${urban_analysis.construction_area_km2.toFixed(2)} km²` },
            { label: 'NDBI Change', value: urban_analysis.mean_ndbi_change.toFixed(4) }
          ]}
        />
        <MetricCard
          icon="💧"
          title="Water Bodies"
          data={[
            { label: 'Increase', value: `+${water_analysis.water_increase_percent.toFixed(2)}%`, positive: true },
            { label: 'Decrease', value: `-${water_analysis.water_decrease_percent.toFixed(2)}%`, positive: false },
            { label: 'Net Change', value: `${(water_analysis.water_gain_area_km2 - water_analysis.water_loss_area_km2).toFixed(2)} km²` }
          ]}
        />
      </div>

      {/* Visualization */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-green-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4">🗺️ Change Detection Visualization</h3>
        <img src={imageUrl} alt="Change Analysis" className="w-full rounded-lg" />
      </div>

      {/* Summary */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-green-500/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4">📝 Summary</h3>
        <ul className="space-y-2">
          {summary.map((item, index) => (
            <li key={index} className="flex items-start text-green-300">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// Metric Card Component
const MetricCard = ({ icon, title, data }) => (
  <div className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-green-500/20 p-6">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">{item.label}</span>
          <span className={`font-semibold ${
            item.positive === true ? 'text-green-400' : 
            item.positive === false ? 'text-red-400' : 
            'text-white'
          }`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default SatelliteAnalysis
