module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem'
        }
      },
      height: {
        96: '24rem'
      },
      backgroundColor: {
        muted: '#dbdbdb',
        default: '#fafafa'
      },
      fontFamily: {
        body: 'Rubik, sans-serif'
      },
      textColor: {
        highlight: '#0d3770',
        default: '#262626'
      }
    }
  }
}
