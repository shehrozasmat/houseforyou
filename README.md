# 🏠 House-4-You - Construction Company Website

A modern, professional website for House-4-You, a premier construction company specializing in single-family homes in Poland. Built with React, TypeScript, and Bootstrap 5.3.7 with stunning interactive animations.

![House-4-You Homepage](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple)

## ✨ Features

- 🏡 **Professional Design** - Pixel-perfect implementation based on Figma specifications
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Interactive Animations** - Smooth hover effects, transitions, and micro-interactions
- 🎨 **Bootstrap 5.3.7** - Modern CSS framework with utility classes
- 🔧 **TypeScript** - Type-safe development with full IntelliSense
- 🚀 **Vite** - Lightning-fast development and build tooling
- 🎯 **SEO Optimized** - Semantic HTML structure and meta tags
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎪 **Modern Effects** - Pulse animations, hover states, and smooth scrolling

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Library |
| **TypeScript** | 5.0+ | Type Safety |
| **Bootstrap** | 5.3.7 | CSS Framework |
| **Vite** | 7.0.5 | Build Tool |
| **Manrope Font** | Latest | Typography |

## 📁 Project Structure

```
houseforyou/
├── public/                    # Static assets
│   ├── Header background.png
│   ├── promo banner desktop.png
│   ├── project images/
│   └── testimonial photos/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Navigation component
│   │   │   └── Footer.tsx     # Footer component
│   │   └── ui/
│   │       ├── Button.tsx     # Reusable button component
│   │       └── index.ts       # Component exports
│   ├── sections/              # Homepage sections
│   │   ├── HeroSection.tsx    # Main hero banner
│   │   ├── MissionSection.tsx # Company mission & trust
│   │   ├── StatsSection.tsx   # Company statistics
│   │   ├── FeaturesSection.tsx # Service features
│   │   ├── BuildingStepsSection.tsx # Construction process
│   │   ├── TestimonialsSection.tsx  # Client testimonials
│   │   ├── GallerySection.tsx       # Project portfolio
│   │   ├── ImageGallerySection.tsx  # 30 years experience
│   │   ├── ContactSection.tsx       # Contact CTA
│   │   ├── AboutSection.tsx         # Company info
│   │   └── BlogSection.tsx          # Blog section
│   ├── App.tsx               # Main application
│   ├── main.tsx             # Application entry point
│   ├── index.css           # Global styles & animations
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # HTML template with Bootstrap CDN
├── package.json           # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0+ 
- npm or yarn
- Git for version control

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/houseforyou.git
   cd houseforyou
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### 🌐 Deploy to GitHub Pages

The project is **ready for GitHub Pages deployment**! 

#### Quick Deploy Steps:
1. **Create GitHub repository** (public)
2. **Push code** to GitHub
3. **Enable GitHub Pages** with GitHub Actions in repository settings
4. **Automatic deployment** on every push to main branch

#### Detailed Instructions:
See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step guide.

#### Manual Deployment:
```bash
npm run predeploy  # Builds the project
npm run deploy     # Deploys to GitHub Pages
```

Your site will be live at: `https://yourusername.github.io/houseforyou`

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-dark: #0A332D;      /* Dark Green */
--primary-light: #103D36;     /* Medium Green */
--accent-orange: #FFA74E;     /* Brand Orange */
--accent-gray: #6C8581;       /* Muted Green */

/* Background Colors */
--bg-white: #FFFFFF;
--bg-cream: #FFFBF8;
--bg-light: #F9F6F1;
```

### Typography
- **Font Family:** Manrope (Google Fonts)
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Responsive:** Fluid typography scales across devices

### Interactive Effects
- **Hover Animations:** Lift effects with shadows
- **Button States:** Color transitions and scaling
- **Image Hovers:** Zoom effects (scale 1.05x)
- **Navigation:** Underline animations
- **Loading:** Fade-in and slide-up animations

## 📄 Website Sections

### 1. 🌟 Hero Section
- Full-screen background with overlay
- Animated text appearance
- Pulsing CTA button
- Professional company tagline

### 2. 🤝 Mission Section  
- Trust-building content
- Interactive cards with hover effects
- Company phone number and house size info
- Clear value proposition

### 3. 📊 Statistics Section
- Animated number counters
- Company achievements (150+ houses, 30 years experience)
- Gradient text effects
- Professional stat cards

### 4. 🔧 Features Section
- Service highlights with icons
- Promotional banner image
- Three-column feature grid
- Interactive hover states

### 5. 🏗️ Building Process
- Step-by-step construction guide
- Interactive step boxes
- Central process image
- Detailed process description

### 6. 💬 Testimonials
- Client feedback carousel
- Professional headshots
- Hover animations
- Carousel indicators

### 7. 🏘️ Project Gallery
- Portfolio showcase
- Image hover effects
- Project descriptions
- Responsive grid layout

### 8. 📅 Experience Showcase
- 30 years company history
- Six-image horizontal gallery
- Company story and challenges
- Professional timeline

### 9. 📞 Contact Section
- Call-to-action overlay
- Background image with dark overlay
- Conversion-focused messaging
- Contact button with effects

### 10. 🔗 Footer
- Company navigation
- Professional links
- Copyright information
- Responsive layout

## ⚙️ Configuration

### Bootstrap Customization
Bootstrap 5.3.7 is loaded via CDN for optimal performance:
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js">
```

### Custom Animations
All animations are defined in `src/index.css`:
- Fade-in effects
- Hover transitions
- Button animations
- Loading states

## 🌐 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single column, stacked sections |
| Tablet | 768px - 1199px | Two-column layout |
| Desktop | 1200px+ | Full multi-column design |
| Large Desktop | 1400px+ | Optimized spacing |

## 🎯 Performance Features

- **Lazy Loading:** Images load on demand
- **Code Splitting:** Optimized bundle sizes
- **Modern JavaScript:** ES2020+ features
- **CSS Optimization:** Minimized stylesheets
- **Image Optimization:** WebP format support

## 📈 SEO Features

- Semantic HTML5 structure
- Meta tags and Open Graph
- Structured data markup
- Optimized images with alt tags
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📞 Contact & Support

**House-4-You Construction Company**
- 📱 Phone: 606 730 239
- 🌐 Website: [House-4-You.pl](https://house-4-you.pl)
- 📧 Email: contact@house-4-you.pl

## 📄 License

© 2024 House-4-You Sp. z o.o. All rights reserved.

---

**Built with ❤️ for modern construction companies in Poland** 🇵🇱
# Force deployment - Wed Jul 23 02:30:09 PKT 2025
