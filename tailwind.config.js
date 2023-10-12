const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html',],
  theme: {
    screens: {
      'xs': '600px',
      'md': '800px',
      'lg': '1000px',
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
      },
    },
  },
  plugins: [],
}

