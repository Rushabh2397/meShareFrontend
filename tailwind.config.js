module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        twitter: "#26c6da"
      }
    },
  },
  variants: {
    display: ['group-hover'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
