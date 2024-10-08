/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        '60':'60',
        '70':'70',
        '80':'80',
        '90':'90',
        '100':'100',
        '1000':'1000' //problema do z-index foi resolvido aqui!

      }
    },
  },
  plugins: [],
}