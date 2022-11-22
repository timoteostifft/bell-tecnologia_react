/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white_100: '#FFFFFF',
      blue_400: '#4772D7',

      background: '#FAFAFA',
      title: '#314149',
      text: '#7895A5',
      strong: '#628293',
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif;"
    },
  },
  plugins: [],
}