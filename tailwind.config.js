/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      colors: {
        primary: '#3b82f6',
        'dark-gray': '#74769C'
      }
    },
  },
  plugins: [],
};
