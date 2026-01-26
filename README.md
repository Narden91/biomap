# BIOMAP 2026

> **Bio-Inspired Intelligence for Adaptive Pattern Recognition: From Evolutionary Computing to Self-Organising Vision Systems**

A modern, multi-page React website for the BIOMAP Workshop at a Scientific Conference 2026. Built with React, Vite, and Tailwind CSS, featuring a bio-inspired design aesthetic.

## 🧬 About BIOMAP

The BIOMAP workshop focuses on bio-inspired intelligence as a core approach for future pattern recognition systems, gathering perspectives from:
- Evolutionary Computation
- Swarm Intelligence
- Artificial Life
- Neuromorphic Computing

## ✨ Features

### Multi-Page Architecture
- **Home**: Workshop overview, motivation, and topics
- **Committees**: Program Co-Chairs profiles
- **Invited Speakers**: Keynote information
- **Schedule**: Event timeline
- **Important Dates**: Key deadlines
- **Submission**: Author guidelines
- **Venue**: Location details
- **Special Session**: Featured tracks

### Design System
- **Bio-Inspired Palette**: Soft Sage, Pale Lavender, and Muted Coral
- **Modern Typography**: Outfit (headings) and Inter (body)
- **Professional Icons**: lucide-react SVG icons
- **Flat Design**: Clean, minimal aesthetic without gradients
- **Responsive**: Mobile-first, works on all devices

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Access the application at http://localhost:5173/biomap/

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 📁 Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageHeader.jsx
│   ├── layout/          # Layout wrapper
│   │   └── Layout.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Committees.jsx
│   │   ├── Invited.jsx
│   │   ├── Schedule.jsx
│   │   ├── Dates.jsx
│   │   ├── Submission.jsx
│   │   ├── Venue.jsx
│   │   └── SpecialSession.jsx
│   ├── App.jsx          # Main App with routing
│   └── index.css        # Global styles & theme
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design Tokens

### Colors
- **Sage** (Primary): Bio/Natural elements - `#84A98C`
- **Lavender** (Secondary): Technology/Neural - `#D8D8F6`
- **Coral** (Accent): Highlights - `#F4978E`
- **Canvas** (Background): `#FDFCF8`
- **Surface** (Cards): `#FFFFFF`

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🌐 Deployment

### GitHub Pages Setup

This project is pre-configured for deployment to GitHub Pages.

**How to deploy:**
1. **Push** your latest code to the repository.
2. **Run** the deploy script:
   ```bash
   npm run deploy
   ```
   *This command rebuilds the project and pushes the `dist` folder to the `gh-pages` branch.*

**Configuration:**
- **Base Path**: `/biomap/` (configured in `vite.config.js`)
- **Homepage**: `https://narden91.github.io/biomap/` (configured in `package.json`)

**First-time Setup:**
If the command fails, verify:
- You are authenticated with Git.
- The `gh-pages` branch exists (if not, the script usually creates it).
- Under GitHub Repository **Settings > Pages**, the **Source** is set to `gh-pages` branch.

## 📝 Workshop Topics

The workshop covers 15 main areas including:
1. Evolutionary neural architecture discovery
2. Swarm intelligence for distributed patterns
3. Self-organising and adaptive vision
4. Artificial life and emergent patterns
5. Evolutionary multi-objective optimisation
6. Bio-inspired learning paradigms
7. Hybrid evolutionary-gradient methods
8. Neuromorphic evolutionary systems
9. Collective intelligence for large-scale analysis
10. Dynamic and online evolutionary adaptation
11. Evolutionary robotics and embodied vision
12. Quantum-inspired evolutionary recognition
13. Evolutionary explainability
14. Bio-inspired hardware-software co-evolution
15. Applications and grand challenges

## 👥 Program Co-Chairs

- **Francesco Fontanella** - University of Cassino and Southern Lazio
- **Leonardo Vanneschi** - NOVA IMS, Universidade Nova de Lisboa
- **Emanuele Nardone** - University of Cassino and Southern Lazio

## 🤝 Contributing

To update content:
1. Edit the relevant page component in `src/pages/`
2. Update placeholder content (Invited, Schedule, Venue)
3. Add images to `public/` if needed
4. Rebuild and redeploy

## 📝 License

Open source - MIT License

---

**Built with bio-inspired principles and modern web technologies** 🧬
