module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      gridTemplateColumns: {
        'profile-cards': 'repeat(auto-fit, minmax(20.25rem, 1fr))'
      },
      colors: {
        'carmine-pink': '#E74C3C',
        'philippine-silver': '#B6B6B6',
        'ghost-white': '#F9F9F9',
        'vampire-black': '#070708',
        'saffron': '#F8BC37'
      }
    },
  },
  plugins: [],
}
