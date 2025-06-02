/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'earth-background': '#f4f1ed',
        'earth-dark': '#3b2f2f',
        'earth-accent': '#a67c52',
        'earth-green': '#8a9a5b',
        'earth-blue': '#6a8caf',
      },
    },
  },
  plugins: [],
}
