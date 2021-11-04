module.exports = {
  purge: {
    mode: 'all',
    enabled: true,
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
    content: [ './**/*.twig' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'screen-1/5': '20vh',
        'screen-1/2': '50vh',
        'screen-9/10': '90vh',
      },
      minWidth: {
        '3/10': '30%',
      },
      maxWidth: {
        '9/10': '90%',
      },
    }
  },
  variants: {
    extend: {
      width: ['focus'],
    },
  },
  plugins: [],
}
