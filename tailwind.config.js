/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cotford: "'Cotford', serif",
        eloquiabold: "'Eloquia-Bold', sans",
        eloquialight: "'Eloquia-Light', sans",
        helveticamedium: "'HelveticaNow-Medium', sans",
        helveticabold: "'HelveticaNow-Bold', sans",
      },
      fontSize: {
        jumbo: "31.25rem",
      },
    },
  },
  plugins: [],
};
