const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        samitra: {
          500: "#D1D1D1",
          600: "#F1DABF",
          700: "#1C3144",
          800: "#658458",
          900: "#6DAA47",
        },
      },
      fontFamily: {
        sree: ["Sree Krushnadevaraya"],
        poppins: ["Poppins"],
        noto: ["Noto Sans"],
      },
    },
  },
  plugins: [],
});
