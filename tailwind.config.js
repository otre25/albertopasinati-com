/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F4EDE0', // carta calda: fondo base
        'paper': '#FAF6EE', // carta chiara: sezioni alternate, card
        'deep-black': '#1D1A16', // inchiostro caldo
        stone: {
          50: '#FAF6EE',
          100: '#F0E8D9',
          200: '#E3D8C4',
          300: '#D1C4AB',
          500: '#6B6560', // 5:1 su carta (lo stone-500 standard stava sotto 4.5:1)
        },
        'brand-yellow': '#FDBA3C',
        'brand-amber': '#8A5A00', // yellow leggibile su sfondo chiaro (contrasto ~5.8:1)
        'brand-terracotta': '#C1440E',
        'brand-dark': '#2D3436',
        'brand-light': '#636e72',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'ripple': 'ripple 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
