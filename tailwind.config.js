/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A332D',
        secondary: '#FFA74E',
        accent: '#6C8581',
        'text-dark': '#082924',
        'text-light': '#103D36',
        'text-muted': '#6C8581',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#FFFBF8',
        'bg-accent': '#F9F6F1',
        border: '#9DADAB',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1660px',
      },
      boxShadow: {
        card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        soft: '0px 4px 10px rgba(16, 61, 54, 0.1)',
      },
    },
  },
  plugins: [],
} 