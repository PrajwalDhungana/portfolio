/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      colors: {  
        grey: "#878f9b",
        midnight: "#4f5d75",
        deep: "#2d3142",
        clay: "#ef8354",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
}
