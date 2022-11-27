/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons'
      },
      colors: {
        'main-red': '#DA0037',
        'darkest-gray': '#171717',
        'dark-gray': '#1c1c1c',
        'medium-gray': '#444444',
        'lightest-gray': '#EDEDED'
      },
      animation: {
        'slight-rotate': 'slight-rotation 2s ease-out',
        'appear': 'in-left 1s ease-out',
      },
      keyframes: {
        'slight-rotation': {
          '0%': { transform: 'rotate(0deg)', width:'0%' },
          '50%': { transform: 'rotate(0deg)', width:'100%' },
          '100%': { transform: 'rotate(-6deg)', width:'100%' }
        },
        'in-left': {
          '0%': { transform: 'translateX(-10px)', opacity:'0%' },
          '100%': { transform: 'translateX(0px)', opacity:'100%' },
        }
      }
    },
  },
  plugins: [],
}