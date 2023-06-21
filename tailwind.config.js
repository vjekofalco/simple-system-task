/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#BCBCBC',
        greyDark: '#E5E5E5',
        white: '#FFFFFF',
        black: '#000000',
        primary: '#2A9DDA',
        warning: '#ff5d00',
      },
      spacing: {
        xxs: '0.25rem',
        xs: '0.5rem',
        s: '0.75rem',
        m: '1rem',
        l: '1.25rem',
        xl: '1.5rem',
        xxl: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
