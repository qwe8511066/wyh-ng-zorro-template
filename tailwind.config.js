module.exports = {
  separator: '|',
  content: ['./src/**/*.ts', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#003D5C',
        secondary: '#6DB5CA',
        tertiary: '#4095EC',
        dark: '#061E36',
        black: '#000000',
        light: '#B8BBBD',
        lighter: '#F0F3FA',
        link: '#F1676F',
        white: '#FFF'
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: '#D8D8D8',
        base: '#D8D8D8',
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      borderRadius: {
        DEFAULT: '3px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        full: '9999px',
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1410px',
      },
      container: {
        center: true,
      },
      boxShadow: {
        DEFAULT: '0px 0px 47px 0px rgba(13, 37, 62, 0.1)',
      },
      zIndex: {
        '-1': '-1',
        '1': 1,
        '99': 99,
        '100': 100,
         'full': 9999,
      },
      spacing: (function () {
        const spacing = {}
        for (let i = 5; i <= 100; i = i + 5) {
          spacing[i] = i + 'px'
          spacing[-i] = -i + 'px'
        }
        return spacing
      })(),
      width: (function () {
        const spacing = {}
        for (let i = 5; i <= 1000; i = i + 5) {
          spacing[i] = i + 'px'
          spacing[-i] = -i + 'px'
        }
        return spacing
      })(),
      height: (function () {
        const spacing = {}
        for (let i = 5; i <= 1000; i = i + 5) {
          spacing[i] = i + 'px'
          spacing[-i] = -i + 'px'
        }
        return spacing
      })(),
      margin: (() => {
        const margin = {};
        const grids = 12;

        for (let i = 1; i <= grids; i++) {
          let property = i + '/' + grids;
          let value = 'calc(' + i + '/' + grids + ' * 100%)';
          let propertyMinus = '-' + i + '/' + grids;
          let valueMinus = 'calc(-' + i + '/' + grids + ' * 100%)';
          margin[property] = value;
          margin[propertyMinus] = valueMinus;
        }

        return margin;
      })(),
      fontFamily: {
       'openSans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '3xl': '1.75rem',
        h1: '3.75rem',
        h2: '2.25rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.125rem',
        h6: '1rem',
        h7: '0.875rem',
      },
      transitionProperty: {
       'inset': 'left, right, top, bottom',
      },
      maxWidth: {
        'full-screen': '100vw',
      },
      maxHeight: {
        'full-screen': '100vw',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
