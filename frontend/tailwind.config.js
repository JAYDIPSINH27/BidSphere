const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      fontSize: {
        h1: [
          'clamp(2.25rem, 4vw, 3.375rem)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        h2: [
          'clamp(2rem, 4vw, 2.75rem)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
        h3: [
          'clamp(1.75rem, 4vw, 2.25rem)',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        primary: {
          10: '#535c11',
          20: '#75811f',
          30: '#98a72c',
          40: '#bacc3a',
          50: '#ddf247',
          60: '#e4f56c',
          70: '#ebf791',
          80: '#f1fab5',
          90: '#f8fcda',
        },
        gray: {
          10: '#292c32',
          20: '#393e45',
          30: '#4a4f59',
          40: '#5a616c',
          50: '#6a7280',
          60: '#7d8491',
          70: '#9096a1',
          80: '#a4a9b2',
          90: '#b7bbc2',
        },
        dark: {
          primary: '#1D3557',
          secondary: '#457B9D',
        },
        light: {
          primary: '#A8DADC',
          secondary: '#F1FAEE',
        },
        logo: {
          primary: '#00008e',
        },
        bsnavyblue: '#1D3557',
        bslightgreen: '#A8DADC',
        bslightblue: '#457B9D',
        bsbase: '#F1FAEE',
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
});
