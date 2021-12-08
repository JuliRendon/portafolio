// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      inicio: '#24C6DC',
      final: '#514A9D',
    }),
    extend: {
      gradientColorStops: ['active', 'group-hover'],
    },
    textColor: {
      claro: '#00D5EB',
      oscuro: '#343434',
      white: '#fff',
      rojo: '#f1544e',
      uva: '#22192a',
    },
    backgroundColor: {
      DarkGray: '#121212',
      MediumGray: '#343434',
      LigthGray: '#565656',
      secundario: '#00D5EB',
      white: '#fff',
      rojo: '#f1544e ',
      uva: '#22192a',
    },
    // borderRadius: {
    //   circle: '50%',
    //   min: '20px 20px 20px 20px',
    // },
    borderColor: {
      primario: '#343434',
      secundario: '#00D5EB',
    },
    fontFamily: {
      plus: "'M PLUS Code Latin', sans-serif",
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px',
      circle: '50%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
