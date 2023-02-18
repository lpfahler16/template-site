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
      },
      keyframes: {
      }
    },
  },
  plugins: [],
}