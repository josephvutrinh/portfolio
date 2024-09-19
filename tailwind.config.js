/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#9A854E',
      'purple': {
        100: '#6461AC',
        200: '#A1A1D2',
      },
      'white':  {
        100: '#FFFFFF',
        200: '#D9D9D9',
        300: '#e6e6e6',
      },
      'black': {
        100: '#4C5B61',
        200: '#2F3130',
        300: '#1E2120',
        400: '#000000',
      }
    },
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
    }
  },
  plugins: [],
}