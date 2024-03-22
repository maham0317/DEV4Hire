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
      width: {
        'checkbox': '18px',
      },
      height: {
        'checkbox': '18px',
      },
    },
  },
  plugins: [],
};
