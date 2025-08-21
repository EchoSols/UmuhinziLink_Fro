# 🌱 UmuhinziLink - Connect Farmers to Digital Markets

[![Live Demo](https://img.shields.io/badge/Live%20Demo-umuhinzilink.vercel.app-green?style=for-the-badge&logo=vercel)](https://umuhinzilink.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Empowering smallholder farmers in Rwanda with Technology to access markets, get AI-powered farming advice and secure agricultural loans**

## 🚀 Live Application

🌐 **Visit the live application:** [umuhinzilink.vercel.app](https://umuhinzilink.vercel.app)

## 📖 About UmuhinziLink

UmuhinziLink is Rwanda's first comprehensive digital agriculture platform, designed specifically for smallholder farmers. We combine cutting-edge technology with deep understanding of local farming practices to create sustainable solutions that bridge the gap between farmers and digital markets.

### 🎯 Mission

To empower Rwandan farmers through digital agriculture solutions, providing access to markets, AI-powered farming advice, and financial services.

## 🛠️ Technology Stack

### **Frontend**

- **Framework:** Next.js 15.2.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Fonts:** Geist Sans & Mono

### **Features**

- **Authentication:** localStorage-based demo system
- **State Management:** React hooks
- **Responsive Design:** Mobile-first approach
- **Theme Support:** Light/Dark mode with next-themes
- **Deployment:** Vercel (Serverless)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/EchoSols/FarmLink-Fro.git
   cd FarmLink-Fro
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 👥 Demo Accounts

Try the platform with these demo farmer accounts:

| Name           | Phone         | Password  | Location  | Crops                |
| -------------- | ------------- | --------- | --------- | -------------------- |
| Marie Uwimana  | +250788123456 | farmer123 | Nyagatare | Maize, Beans         |
| Jean Baptiste  | +250788654321 | farmer456 | Nyagatare | Beans, Potatoes      |
| Agnes Mukamana | +250788987654 | farmer789 | Nyagatare | Vegetables, Tomatoes |

## 📱 Application Structure

```
app/
├── (auth)/
│   └── login/              # Authentication system
├── dashboard/              # Protected farmer dashboard
│   ├── products/          # My Products management
│   ├── credit/            # Input credit requests
│   ├── ai-tips/           # AI farming recommendations
│   ├── analytics/         # Market analytics
│   └── orders/            # Order management
├── components/
│   ├── ui/                # Reusable UI components
│   └── dashboard-sidebar.tsx
└── globals.css            # Global styles
```

## 🌟 Key Pages

### 🏠 **Landing Page**

- Hero section with agriculture imagery
- Feature showcase
- User type sections (Farmers, Suppliers, Buyers)
- Success stories from Nyagatare pilot
- Call-to-action sections

### 🚪 **Authentication**

- Phone number + password login
- Demo account access
- Secure session management
- Automatic dashboard redirect

### 📊 **Farmer Dashboard**

- Personalized welcome with user data
- Weather widget with local forecasts
- AI farming tips in Kinyarwanda
- Market price trends
- Recent orders tracking
- Quick stats overview

### 🌾 **Products Management**

- Visual product catalog
- Agriculture-specific imagery
- Price and quantity tracking
- Location-based listings
- Status management (Available/Sold)

### **Build Command**

```bash
npm run build
```

### **Environment**

- No environment variables required
- All data is client-side for demo purposes
- Ready for production API integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">

**Built with ❤️ for Rwandan farmers**

🌱 **UmuhinziLink** - _Connecting Farmers to Digital Markets_

[![GitHub](https://img.shields.io/badge/GitHub-EchoSols/FarmLink--Fro-black?style=flat&logo=github)](https://github.com/EchoSols/FarmLink-Fro)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-umuhinzilink.vercel.app-green?style=flat&logo=vercel)](https://umuhinzilink.vercel.app)

</div>
