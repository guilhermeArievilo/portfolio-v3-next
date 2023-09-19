import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#CCDAFF',
        200: '#ABBFF5',
        300: '#8CA1DB',
        400: '#7089CC',
        500: '#5971B2',
        600: '#42568F',
        700: '#1F2B4D'
      },
      secondary: {
        100: '#FFE5F5',
        200: '#F5CEE5',
        300: '#E5B8D3',
        400: '#D098BA',
        500: '#C2699F',
        600: '#B24788',
        700: '#99256B'
      },
      grey: {
        100: '#CCD5E5',
        200: '#B2BED4',
        300: '#8793A8',
        400: '#616C80',
        500: '#455166',
        600: '#333C4D',
        700: '#1B2029'
      }
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
