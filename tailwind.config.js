/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      cyan: colors.cyan
    },
    extend: {
      backgroundImage: {
        'no-tasks': "url('/public/images/swim.jpg')",
        'filter': "url('/public/images/filter.svg')",
        'calendar': "url('/public/images/calendar.svg')",
        'list': "url('/public/images/list-tick.svg')",
        'trash': "url('/public/images/trash.svg')",
      }
    },
  },
  plugins: [],
}

