module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
    './**/*.css',
    './**/*.twig'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'screen-1/2': '50vh',
        'screen-4/5': '80vh',
        'screen-9/10': '90vh',
      },
      minWidth: {
        '1/3': '33.33333333%',
        '3/10': '30%',
      },
      maxWidth: {
        '9/10': '90%',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
