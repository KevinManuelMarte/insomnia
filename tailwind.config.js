const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'noche': {
        100: '#e2dbf0',
        200: '#c5b7e1',
        300: '#a893d2',
        400: '#8b6fc3',
        500: '#6e4bb4',
        600: '#583c90',
        700: '#422d6c',
        800: '#2c1e48',
        900: '#160f24'
      },
      'ocaso': {
        900: '#240f23',
        800: '#481e46',
        700: '#6c2d69',
        600: '#903c8c',
        500: '#b44baf',
        400: '#c36fbf',
        300: '#d293cf',
        200: '#e1b7df',
        100: '#f0dbef'
      }
    },
  },
  plugins: [],
}
