# 🌍 TerraTrack - Environmental Impact Platform
TerraTrack is a cutting-edge environmental monitoring and AR visualization platform that combines real-time environmental data tracking, immersive 3D plant experiences, and comprehensive campaign management for environmental conservation efforts.

# Demo Video

https://github.com/user-attachments/assets/12da07fa-7ddc-43d3-8281-0baf4f016594


## ✨ Key Features

### 🎯 *Environmental Tracking & Analytics*
- *Interactive Dashboard*: Real-time environmental metrics and data visualization
- *Google Maps Integration*: Interactive mapping with point-and-click environmental analysis
- *Campaign Management*: Create, track, and manage environmental conservation campaigns
- *Donation System*: Integrated Stripe payment system for environmental funding
- *Advanced Analytics*: Charts and reports for environmental impact tracking

### 🌱 *AR Plant Experience*
- *Camera-based AR*: Place virtual plants in real environments using device camera
- *High-quality 3D Models*: Detailed plant models with realistic materials and animations
- *Environmental Benefits*: Learn about each plant's CO₂ removal and air purification capabilities
- *Cross-device Compatibility*: Optimized for both desktop and mobile devices
- *Performance Adaptive*: Automatically adjusts quality based on device capabilities

### 🤖 *AI-Powered Features*
- *TerraBot Chat*: AI assistant for environmental questions and guidance using Google Gemini
- *Smart Analysis*: AI-powered environmental data interpretation
- *Personalized Recommendations*: Tailored suggestions for environmental actions

## 🛠 Tech Stack

### *Frontend*
- *Framework*: React 19+ with functional components and hooks
- *Build Tool*: Vite (ultra-fast build system with HMR)
- *Styling*: Tailwind CSS with custom design system
- *Routing*: React Router DOM for SPA navigation
- *State Management*: React Context API + hooks
- *Icons*: Lucide React (modern icon library)

### *3D Graphics & AR*
- *3D Engine*: Three.js (WebGL-based 3D graphics)
- *React Integration*: @react-three/fiber (React renderer for Three.js)
- *3D Utilities*: @react-three/drei (helpers and abstractions)
- *Model Loading*: GLTF/GLB model support with fallbacks
- *AR Technology*: Camera-based AR using getUserMedia API
- *Performance*: Adaptive quality and device-specific optimizations

### *Backend & Database*
- *Runtime*: Node.js with Express.js framework
- *Database*: MongoDB with Mongoose ODM
- *Authentication*: JWT tokens with refresh token system
- *File Upload*: Multer with Cloudinary integration
- *Email Service*: Nodemailer for transactional emails

### *Integrations & APIs*
- *Maps*: Google Maps API for interactive mapping
- *AI*: Google Gemini API for chat functionality  
- *Payments*: Stripe API for donation processing
- *Charts*: Chart.js with React wrapper for data visualization
- *Animations*: Framer Motion for smooth transitions

### *Development Tools*
- *Package Manager*: npm
- *Code Quality*: ESLint with custom configuration
- *Version Control*: Git
- *Development*: Hot Module Replacement (HMR)
- *Build*: Optimized production builds with code splitting

## 🚀 Getting Started

### *Prerequisites*
- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)
- Git for version control

Important: this repo contains frontend and backend services in client/ and server/ respectively. The demo video at the top demonstrates the main workflows.

### *Installation*

1. *Clone the repository*
   bash
   git clone https://github.com/ebrahimgamdiwala/TerraTrack_BitNBuild.git
   cd TerraTrack_BitNBuild
   

2. *Install Frontend Dependencies*
   bash
   cd client
   npm install
   

3. *Install Backend Dependencies*
   bash
   cd ../server
   npm install
   

4. *Environment Configuration*
   
   Create .env files in both client and server directories:
   
   *Client (.env):*
   env
   The base URL for API requests from the frontend (points at server)
   VITE_API_URL=http://localhost:5000

   Google Maps JavaScript API Key - used by interactive maps
   Make sure Maps JavaScript API is enabled in Google Cloud Console and
   add your development origins to HTTP referrers (e.g., http://localhost:5173/*)
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

   Stripe publishable key for client-side payment tokenization
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

   Optional: other API keys used by the demo app (set if you have them)
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   
   
   *Server (.env):*
   env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_ACCESS_SECRET=your_jwt_access_secret
   JWT_REFRESH_SECRET=your_jwt_refresh_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password
   

   Notes about keys and restrictions:
   - Keep production keys out of version control. Use a secrets manager or CI/CD secrets.
   - For Google Maps, ensure billing is enabled on the Google Cloud project and the Maps JavaScript API is enabled. If you see an "InvalidKeyMapError" in the browser console, check key restrictions and referrers.


### *Running the Application*

1. *Start the Backend Server*
   bash
   cd server
   npm run dev
   
   Backend will run on http://localhost:5000

2. *Start the Frontend (in a new terminal)*
   bash
   cd client  
   npm run dev
   
   Frontend will run on http://localhost:5173

If you change .env in client/ or server/, restart the respective dev server so the values are reloaded.

Quick troubleshooting:
- Invalid or restricted Google Maps key will produce an "InvalidKeyMapError" in the browser console and the maps will not initialize. Verify the full key (no truncation), API enabled, and allowed referrers.
- If window.google is undefined but you don't see InvalidKey errors, ensure the Maps script is loaded before code that accesses google.maps. Use a script loader or a React loader hook (e.g. @react-google-maps/api).

Development tips:
- To test payments use Stripe test keys only. Do not use live keys in local development.
- To preview frontend static assets (including the demo video) you can use Vite's dev server or npm run preview after building.

3. *Access the Application*
   Open your browser and navigate to http://localhost:5173

## 📱 Features Overview

### *Dashboard*
- Environmental metrics visualization
- Interactive charts and graphs
- Campaign progress tracking
- Real-time data updates

### *AR Plants Experience*
- Camera-based augmented reality
- High-quality 3D plant models
- Environmental impact calculations
- Mobile-optimized performance

### *Campaign Management*
- Create environmental campaigns
- Track donations and progress
- Share campaign details
- Analytics and reporting

### *TerraBot Chat*
- AI-powered environmental assistant
- Natural language processing
- Contextual responses
- Environmental education

---

## 🏗 Project Structure

```
TerraTrack_BitNBuild/
├── client/                         # React frontend application
│   ├── public/                     # Static assets (logos, icons, manifest, etc.)
│   ├── src/                        # Source files
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages and routes
│   │   ├── services/               # API service functions and utilities
│   │   ├── context/                # React Context providers for global state
│   │   ├── routes/                 # Route configurations
│   │   ├── utils/                  # Helper functions and utilities
│   │   ├── assets/                 # Local media, 3D models, and textures
│   │   └── App.jsx                 # Root application component
│   ├── index.html                  # HTML entry point
│   ├── package.json                # Frontend dependencies and scripts
│   ├── vite.config.js              # Vite configuration
│   └── .env.example                # Example environment variables (frontend)
│
├── server/                         # Node.js backend application
│   ├── config/                     # Configuration files (DB, email, cloud)
│   ├── controllers/                # Business logic and route controllers
│   ├── models/                     # MongoDB models (Mongoose schemas)
│   ├── routes/                     # API endpoints and route definitions
│   ├── middlewares/                # Middleware (auth, validation, error handling)
│   ├── utils/                      # Utility modules and helpers
│   ├── server.js                   # Entry point for backend server
│   ├── package.json                # Backend dependencies and scripts
│   └── .env.example                # Example environment variables (backend)
│
├── .gitignore                      # Files and directories ignored by Git
├── LICENSE                         # Open-source license file
└── README.md                       # Project documentation
```

## 🔧 Available Scripts

### *Frontend (client/)*
- npm run dev - Start development server with HMR
- npm run build - Build for production
- npm run preview - Preview production build
- npm run lint - Run ESLint

### *Backend (server/)*
- npm run dev - Start development server with nodemon
- npm start - Start production server
- npm run debug - Start with debugging enabled

## 🌐 Browser Support

- *Desktop*: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- *Mobile*: Chrome Mobile, Safari Mobile, Samsung Internet
- *WebGL*: Required for 3D graphics and AR features
- *Camera*: Required for AR plant placement feature

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂ Support

For support, email ebrahimgamdiwala@gmail.com jenithjain09@gmail.com or create an issue in the GitHub repository.

## 🔗 Links

- *Live Demo*: [Coming Soon]
- *Documentation*: [Coming Soon]
- *API Docs*: [Coming Soon]

---

Made with 🌱 for a greener planet by the TerraTrack team
