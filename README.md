# XRP Ledger Platform

A modern React application for XRP Ledger wallet management and payments on the testnet. Built with React 19, Vite, and TailwindCSS, deployable to GitHub Pages.

## ✨ Features

### Wallet Management
- **Create New Wallets**: Generate new XRP wallets with automatic testnet funding
- **Import Existing Wallets**: Import wallets using seed phrases
- **Balance Tracking**: Real-time XRP balance monitoring with auto-refresh

### Payment Operations
- **Custom Payments**: Send XRP with custom amounts to any address
- **Quick Payments**: Pre-configured quick payment options
- **Transaction History**: Track all your payments with detailed status
- **Transaction Validation**: Real-time transaction result feedback

### Professional UI/UX
- **Modern Design**: Beautiful gradient-based interface with glass morphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: CSS animations and transitions throughout
- **Interactive Components**: Toast notifications, modals, and loading states

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: TailwindCSS 4 with custom animations
- **XRP Library**: xrpl.js 4.4.2 (direct connection to XRP Ledger)
- **Build Tool**: Vite for lightning-fast HMR
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

Access the application at http://localhost:5173

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
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Dashboard.jsx
│   │   ├── WalletCard.jsx
│   │   ├── PaymentModal.jsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   │   ├── useWallet.js      # XRP wallet operations
│   │   └── useGemWallet.js   # Gem Wallet integration
│   ├── config/         # Configuration
│   │   └── constants.js
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 UI Components

- **Header**: Sticky navigation with network status
- **Footer**: Rich footer with links and branding
- **WalletCard**: Display wallet info with copy-to-clipboard
- **ActionsPanel**: Quick actions for payments and wallet management
- **PaymentModal**: Custom payment form with validation
- **WalletImportModal**: Import existing wallets securely
- **TransactionHistory**: Beautiful transaction list
- **Toast**: Notification system for user feedback
- **LoadingOverlay**: Full-screen loading states

## 🔒 Security Notes

- This is a **TESTNET** environment - never use real funds
- Seeds are displayed for development purposes only
- In production, never expose wallet seeds in the UI

## 🌐 Network Information

- **Network**: XRP Ledger Testnet
- **WSS Endpoint**: wss://s.altnet.rippletest.net:51233
- **RPC Endpoint**: https://s.altnet.rippletest.net:51234/

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

Feel free to:
- Add new features
- Improve the UI/UX
- Optimize performance
- Add tests
- Enhance documentation

## 📝 License

Open source - feel free to use for your projects!

---

**Built with ❤️ using React and XRP Ledger**
