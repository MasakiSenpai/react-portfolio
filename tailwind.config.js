/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'dim-grey': '#686868',
        'lapis': '#2d5d7b',
        'steel': '#457eac',
        'tropical': '#9191e9',
        'mauve': '#c2aff0',
        'raisin': '#2d2d34',
        'rose': '#b97375',
        'thistle': '#ceb1be',
        'lavender': '#f1e4e8',
        'platinum': '#e2dcde',
      },
      fontFamily: {
        'neon': ['Titl Neon']
      }
    },
  },
  plugins: [],
}
