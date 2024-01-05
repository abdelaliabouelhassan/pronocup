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
      },
      backgroundColor: {
        'cardblack': 'radial-gradient(63.52% 128.46% at 14.81% 80.9%, rgba(105, 218, 199, 0.15) 17.8%, rgba(0, 0, 0, 0.08) 54.17%, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.09) 100%), linear-gradient(95deg, rgba(13, 13, 13, 0.20) 1.82%, rgba(0, 0, 0, 0.20) 46.78%, rgba(0, 0, 0, 0.20) 100%), #111',
        'cardlight': 'radial-gradient(63.52% 128.46% at 14.81% 80.9%, rgba(105, 218, 199, 0.15) 17.8%, rgba(0, 0, 0, 0.08) 54.17%, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.09) 100%), #FFF;',
      },
    },
  },
  plugins: [],
}

