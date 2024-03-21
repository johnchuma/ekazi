/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2E58A6",
        secondary:"#D36314",
        background:"#DFE3E2"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}