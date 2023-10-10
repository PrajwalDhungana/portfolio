/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif'],
      righte: ['Righteous', 'cursive'],
      istokWeb: ['Istok Web', 'sans-serif'],
    },
    extend: {
      colors: {  
        charcoal: "#40434E",
        midnight: "#4f5d75",
        deep: "#2d3142",
        clay: "#ef8354",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
}
