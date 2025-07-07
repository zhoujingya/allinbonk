/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'dark-gold': '#B7952E',
        'light-gold': '#F4D03F',
      },
      animation: {
        'gold-pulse': 'gold-pulse 3s infinite',
        'shine': 'shine 3s infinite linear',
      },
      keyframes: {
        'gold-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'shine': {
          '0%': { transform: 'translateX(-100%) rotate(15deg)' },
          '100%': { transform: 'translateX(100%) rotate(15deg)' },
        },
      },
    },
  },
  plugins: [],
} 