/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#171717'
      },
      fontFamily:{
        helvetica:'Helvetica Now Display'
      },
      screens: {
        'h-xl': '1444px',
        'h-lg': '1205px'
      },

    },
  },
  plugins: [],
}

