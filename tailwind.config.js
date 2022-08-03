/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cotford: "'Cotford', serif",
        eloquiaxbold: "'Eloquia-Extrabld', sans",
        eloquialght: "'Eloquia-Extralght', sans",
      },
    },
  },
  plugins: [],
};
