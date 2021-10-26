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
      backgroundSize: {
        'full': '100% 100%',
      },
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/5': '60vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      },
      maxHeight: {
        'screen-1/2': '50vh',
        'screen-3/5': '60vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
      },
      minWidth: {
        'screen-1/2': '50vw',
        'screen-3/5': '60vw',
        'screen-3/4': '75vw',
        'screen-4/5': '80vw',
      },
      maxWidth: {
        'screen-1/2': '50vw',
        'screen-3/5': '60vw',
        'screen-3/4': '75vw',
        'screen-4/5': '80vw',
        '9/10': '90%',
      },
      zIndex: {
        '-10': '-10'
      },
      transform: ['hover', 'focus']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
