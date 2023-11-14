/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans:["'Sora'", 'ui-sans-serif', 'system-ui',]
    },
    colors: {
      ...colors,
      'blue': {
        100: '#b7daff',
        200: '#7cbbff',
        300: '#55a7ff',
        400: '#2e93ff',
        500: '#0075f2',
        600: '#0062cb',
        700: '#004fa4',
        800: '#003c7c',
        900: '#002955',
      },
    },
    extend: {},
  },
  plugins: [],
};
