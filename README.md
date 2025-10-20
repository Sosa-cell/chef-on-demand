# 🍳 Chef On Demand - Modern Restaurant Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

A modern, responsive restaurant website built with cutting-edge technologies. Features online ordering, menu management, integrated payments, and a sleek user experience designed specifically for food businesses.

**✨ Live Demo**: [Coming Soon]

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sosa-cel/chef-on-demand.git
   cd chef-on-demand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔑 Environment Setup

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe Configuration  
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 🔧 Getting API Keys

| Service | Where to Get Keys | Documentation |
|---------|------------------|---------------|
| **Supabase** | [Dashboard → Settings → API](https://app.supabase.com) | [Docs](https://supabase.com/docs) |
| **Stripe** | [Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys) | [Docs](https://stripe.com/docs) |
| **NextAuth** | Generate random string | [Generator](https://generate-secret.vercel.app/32) |

## � Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Alternative Platforms
- **Netlify**: Connect Git repository
- **Railway**: One-click deployment  
- **DigitalOcean**: App Platform deployment

## 📁 Project Structure

```
chef-on-demand/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── layout.tsx             # Root layout component
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css            # Global styles
│   │   └── 📂 order/              # Order page
│   │       └── page.tsx
│   ├── 📂 components/             # Reusable components
│   │   ├── Header.tsx             # Navigation header
│   │   └── Footer.tsx             # Site footer
│   ├── 📂 lib/                    # Utility functions
│   │   └── config.ts              # Environment config
│   └── 📂 types/                  # TypeScript definitions
│       └── index.ts               # Type definitions
├── 📂 public/                     # Static assets
├── 📄 .env.example                # Environment template
├── 📄 .env.local                  # Your environment variables
├── 📄 next.config.js              # Next.js configuration
├── 📄 tailwind.config.js          # Tailwind configuration
├── 📄 package.json                # Dependencies
└── 📄 README.md                   # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f17444) - Warm, food-focused
- **Secondary**: Blue-gray (#6b7b91) - Professional, clean
- **Accents**: Complementary shades for UI elements

### Typography
- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Responsive**: Mobile-first approach

## 📖 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding Features

1. **New Components**: Create in `src/components/`
2. **New Pages**: Add to `src/app/`
3. **API Routes**: Create in `src/app/api/`
4. **Types**: Update `src/types/index.ts`
5. **Styles**: Use Tailwind classes or update globals.css

## 🧪 Testing & Quality

- **TypeScript**: Full type safety
- **ESLint**: Code quality and consistency
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images and lazy loading
- **SEO**: Meta tags and structured data

## � Features

### 🍽️ Restaurant Focused
- **Modern Design**: Clean, professional layout optimized for food businesses
- **Menu Management**: Dynamic menu display with categories and filtering
- **Online Ordering**: Complete cart and checkout functionality
- **Mobile First**: Responsive design that works perfectly on all devices

### 💳 E-commerce Ready
- **Stripe Integration**: Secure payment processing with industry standards
- **Real-time Cart**: Dynamic cart updates and order management
- **Order Tracking**: Customer order status and delivery tracking
- **Admin Dashboard**: Menu and order management interface

### ⚡ Performance & SEO
- **Server-Side Rendering**: Fast loading with Next.js App Router
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Image Optimization**: Automatic image compression and lazy loading
- **Type Safety**: Full TypeScript implementation for reliability

### 🔧 Developer Experience
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Database Ready**: Supabase integration for scalable backend
- **Authentication**: User accounts and order history
- **Deployment Ready**: One-click Vercel deployment

## �️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | React Framework | 14.x |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | Styling | 3.x |
| [Supabase](https://supabase.com/) | Database & Auth | Latest |
| [Stripe](https://stripe.com/) | Payments | Latest |
| [Vercel](https://vercel.com/) | Hosting | Latest |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. **Fork the repository**
2. **Create your feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Documentation

- **Next.js**: [Official Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)
- **Supabase**: [Documentation](https://supabase.com/docs)
- **Stripe**: [Documentation](https://stripe.com/docs)

## 🏆 Roadmap

- [ ] User authentication system
- [ ] Admin dashboard for menu management
- [ ] Real-time order tracking
- [ ] Customer reviews and ratings
- [ ] Multi-location support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard

---

**⭐ If you found this project helpful, please give it a star!**

**🍽️ Built with ❤️ for the restaurant industry**