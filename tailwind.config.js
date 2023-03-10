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
        'powder': '#a7bbec',
        'ash': '#cad2c5',
        'cambridge': '#84a98c',
        'green': '#52796f',
        'pale': '#f4d8cd',
        'ivory': '#fffff2',
        'pblue': '#acbed8'
      },
      fontFamily: {
        'neon': ['Titl Neon']
      }
    },
  },
  plugins: [],
}
