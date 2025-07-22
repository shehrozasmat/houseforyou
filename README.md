# House-4-You Homepage

A modern, responsive homepage for House-4-You, a house building company in Poland, built with React, TypeScript, and Tailwind CSS.

## Features

- 🏠 Modern, professional design based on Figma specifications
- 📱 Fully responsive layout for all device sizes
- ⚡ Built with React 19 and TypeScript for type safety
- 🎨 Styled with Tailwind CSS for optimal performance
- 🔧 Modular component architecture
- 🚀 Optimized for performance and SEO

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast development and build tool
- **Manrope Font** - Professional typography

## Project Structure

```
src/
├── components/
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # Reusable UI components (Button, etc.)
├── sections/           # Homepage sections
│   ├── HeroSection.tsx
│   ├── MissionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── GallerySection.tsx
│   ├── StatsSection.tsx
│   └── ContactSection.tsx
├── styles/            # Global styles and CSS variables
└── App.tsx           # Main application component
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Design System

### Colors
- **Primary:** #0A332D (Dark Green)
- **Secondary:** #FFA74E (Orange)
- **Accent:** #6C8581 (Light Green)
- **Text:** #082924, #103D36, #6C8581
- **Background:** #FFFFFF, #FFFBF8, #F9F6F1

### Typography
- **Font Family:** Manrope
- **Weights:** 400, 500, 600, 700, 800

## Sections

1. **Hero Section** - Main banner with company tagline
2. **Mission Section** - Company mission and values
3. **Features Section** - Key benefits (Experience, Comprehensive service, 10-year warranty)
4. **Gallery Section** - Project showcase
5. **Stats Section** - Company achievements and numbers
6. **Contact Section** - Call-to-action for potential clients
7. **Footer** - Navigation and company information

## Customization

### Adding Images
Replace placeholder images in the `public/` folder:
- `hero-bg.jpg` - Hero section background
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Gallery images

### Modifying Content
Edit the respective section components in `src/sections/` to update text content, add new features, or modify layouts.

### Styling
The design uses Tailwind CSS with custom color variables defined in `tailwind.config.js`. Modify the configuration to update the design system.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## License

© 2024 House-4-You. All rights reserved.
