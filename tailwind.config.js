const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1: "10px",
      2: "20px",
      3: "30px",
      4: "40px",
      5: "50px",
      6: "60px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      mediumGray: "#656565",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
