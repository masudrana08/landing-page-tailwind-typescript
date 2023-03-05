/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pm': '#0099A3',
      },
      fontFamily: {
        "hero": ["Abril Fatface", "cursive"],
        "cursive": ["Grape Nuts", "cursive"]
      },
    },
  },
  plugins: [],
  darkMode: "class"
}