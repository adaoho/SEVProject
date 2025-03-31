const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        samitra: {
          green: "#60865D",
          blackgreen: "#182825",
          orange: "#DE8F6E",
          white: "#E5F4E3",
          gray: "#222424",
          graybg: "#F6F6F6",
          brown: "#775B59",
          blue: "#4059AD",
          black: "#27272A",
          blackfooter: "#1A1A1A",
          blackcopyright: "#222424",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        sree: ["Sree Krushnadevaraya"],
        poppins: ["Poppins"],
        noto: ["Noto Sans"],
      },
    },
  },
  plugins: [],
});
