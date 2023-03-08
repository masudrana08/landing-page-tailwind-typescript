/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '370px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'pm': '#0099A3',
      },
      fontFamily: {
        "hero": ["Abril Fatface", "cursive"],
        "cursive": ["Grape Nuts", "cursive"]
      },
      backgroundImage: {
        'popular': "url('./assets/img/popularbg.jpg')",
        'clock': "url('./assets/img/clockbg.png')",
        'why': "url('./assets/img/why.jpg')",
      },
     
    },
  },
  plugins: [],
  darkMode: "class"
}