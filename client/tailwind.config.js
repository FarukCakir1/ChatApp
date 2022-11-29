/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#8424BC",
        brandYellow: "#FCE16C"
      },
      backgroundImage: {
        'chat': "url('./src/assets/img/bg.jpeg')"
      }
    },
  },
  plugins: [],
}
