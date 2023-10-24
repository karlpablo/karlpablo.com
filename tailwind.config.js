const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html',],
  theme: {
    screens: {
      'sm': '600px',
      'md': '780px',
      'lg': '960px',
    },
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#2A9D8F', // persian-green (teal)
        'secondary': '#264653', // charcoal (dark gray green)
        'action': '#774C60', // eggplant (flat purple, for buttons, terms)
        'accent': '#E9C46A', // saffron (flat yellow)
      },
    },
  },
  plugins: [],
}

