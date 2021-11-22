module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fira Code', 'sans-serif']
      },
      colors: {
        blue: {
          DEFAULT: '#0A192F',
          light: '#112240',
          white: '#607496'
        },
        grey: {
          DEFAULT: '#CCD6F6',
          dark: '#8892B0'
        },
        green: {
          DEFAULT: '#64FFDA'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
