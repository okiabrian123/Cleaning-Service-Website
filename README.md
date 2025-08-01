# Yeldy Cleaning Services Website

A modern, responsive cleaning service website built with React, TypeScript, and GSAP animations. This project showcases pixel-perfect implementation of a Figma design with smooth animations and professional user experience.

## 🌟 Live Demo

**Website:** [View Live Demo](https://860625238f7842a09ffd6831739069f6-e0ddeea6a07c49588b2c995aa.fly.dev/)

## 📸 Screenshots

### Desktop View

![Yeldy Homepage](https://via.placeholder.com/800x600/397F77/FFFFFF?text=Yeldy+Homepage)

### Mobile View

![Mobile Responsive](https://via.placeholder.com/400x800/397F77/FFFFFF?text=Mobile+View)

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Faithful implementation of Figma design
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- 🚀 **Smooth Animations** - GSAP-powered scroll animations and interactions
- ⚡ **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS
- 🎯 **Professional UX** - Clean navigation and intuitive user flow
- 📧 **Contact Form** - Functional contact form with validation
- 🌟 **SEO Optimized** - Clean HTML structure and meta tags

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **React Router 6** - SPA routing

### Backend

- **Express.js** - Node.js web framework
- **TypeScript** - Server-side type safety

### Design & Styling

- **Montserrat Font** - Custom Google Fonts integration
- **Custom Color Palette** - Yeldy brand colors
- **Responsive Grid** - Mobile-first design approach

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/yeldy-cleaning-website.git
   cd yeldy-cleaning-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

## 📦 Build & Deployment

### Development

```bash
npm run dev          # Start dev server with hot reload
npm run typecheck    # Run TypeScript type checking
npm test            # Run test suite
```

### Production Build

```bash
npm run build       # Build for production
npm start          # Start production server
```

### Build Output

- `dist/spa/` - Static client files
- `dist/server/` - Server build files

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section with logo
│   │   ├── Services.tsx   # Services showcase
│   │   ├── YourNeeds.tsx  # Benefits section
│   │   ├── PricesVary.tsx # Pricing factors
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Site footer
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── About.tsx      # About page
│   │   ├── Gallery.tsx    # Gallery page
│   │   └── ContactPage.tsx # Contact page
│   ├── App.tsx            # App routing setup
│   └── global.css         # Global styles & theme
├── server/                # Express API backend
│   ├── routes/           # API endpoints
│   └── index.ts          # Server configuration
├── shared/               # Shared TypeScript types
└── public/              # Static assets
```

## 🎨 Design System

### Colors

```css
--yeldy-teal: #397f77 /* Primary brand color */ --yeldy-green: #569f96
  /* Secondary brand color */ --yeldy-lightgreen: #adfff6 /* Accent color */;
```

### Typography

- **Primary Font:** Montserrat (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800, 900

### Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ⚡ Animations

The website features smooth GSAP animations including:

- **Header slide-in** on page load
- **Hero logo elastic entrance** with rotation
- **Scroll-triggered animations** for each section
- **Staggered text animations** for better UX
- **Number scale animations** in pricing section
- **Form field focus animations**

## 📱 Pages

1. **Homepage** - Complete landing page with all sections
2. **About Us** - Company information (placeholder)
3. **Gallery** - Portfolio showcase (placeholder)
4. **Contact** - Dedicated contact page with form

## 🔧 Customization

### Adding New Sections

1. Create component in `client/components/`
2. Import and add to `client/pages/Index.tsx`
3. Style with Tailwind CSS classes

### Modifying Colors

1. Update `tailwind.config.ts` color definitions
2. Update CSS variables in `client/global.css`

### Adding Animations

```typescript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Add your animations
gsap.fromTo(
  element,
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 0.8 },
);
```

## 🚀 Deployment Options

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist/spa`

### Vercel

1. Import from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist/spa` folder to your host
3. Configure server for SPA routing

## 📈 Performance

- ⚡ **Fast Loading** - Optimized with Vite bundling
- 🖼️ **Image Optimization** - Compressed images via Builder.io CDN
- 📦 **Code Splitting** - Automatic route-based splitting
- 🎯 **SEO Ready** - Clean HTML structure and meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Oki Abrian**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Design inspiration from modern cleaning service websites
- GSAP for incredible animation capabilities
- Tailwind CSS for rapid styling
- React community for excellent documentation

---

### 📞 Get In Touch

If you're interested in hiring me for similar projects or have any questions about this implementation, feel free to reach out!

**Made with ❤️ for portfolio demonstration**
