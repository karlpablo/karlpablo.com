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
        mono: ['Play', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'charcoal': '#264653',
        'persian-green': '#2A9D8F',
        'saffron': '#E9C46A',
        'sandy-brown': '#F4A261',
        'burnt-sienna': '#E76F51',
        'sublime': '#262335',
      },
    },
  },
  plugins: [],
}

