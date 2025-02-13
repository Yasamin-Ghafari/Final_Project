/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./pages/*.html"],
  theme: {
    fontSize:{
      "cc" : "17px"
    },
    extend: {
      colors:{
        'regal-blue': '#243c5a',
      }
    },
  },
  plugins: [],
}

