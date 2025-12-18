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
        'off-white': '#f8f8f8',
        'deep-black': '#1a1a1a',
        'brand-yellow': '#FDBA3C',
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
