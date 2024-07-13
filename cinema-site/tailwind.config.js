/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'inner': 'min(100ch, calc(100% - 2rem))',
      },
      margin: {
        'auto-inline': 'auto',
      }
    },
  },
  plugins: [],
}

