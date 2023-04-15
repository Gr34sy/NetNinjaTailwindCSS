/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
      },
    },
  },
  plugins: [],
}