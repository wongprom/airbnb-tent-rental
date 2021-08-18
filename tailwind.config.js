module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        otr: {
          primaryPurple: '#8A07BD',
          primaryBlue: '#080AEF',
          primaryOrange: '#F56407',
          primaryWhite: '#F3F3F0',
          primaryBlack: '#0C0C0A',
          secondaryBeige: '#d0b280',
          secondaryLightOrange: '#a84600',
          secondaryDarkOrange: '#973529',
          secondaryDarkBlue: '#2a334f',
          secondaryGray: '#8c8c8c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
