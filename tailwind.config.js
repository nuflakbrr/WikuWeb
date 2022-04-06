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
      }
    },
  },
  plugins: [],
}
