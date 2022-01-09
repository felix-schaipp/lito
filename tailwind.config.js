const { customColors } = require('./config')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    colors: {
      ...customColors,
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
    screens: {
      sm: '380px',
      md: '420px',
      lg: '680px',
      // or maybe name them after devices for `tablet:flex-row`
      tablet: '1024px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
