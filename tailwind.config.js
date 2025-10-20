/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fcd9bf',
          300: '#f9bd94',
          400: '#f59567',
          500: '#f17444',
          600: '#e25a2c',
          700: '#bc4423',
          800: '#963823',
          900: '#792f20',
          950: '#41160f',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b2bcc9',
          400: '#8998ab',
          500: '#6b7b91',
          600: '#566278',
          700: '#475162',
          800: '#3d4553',
          900: '#363c47',
          950: '#24272f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}