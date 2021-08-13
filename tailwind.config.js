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
      7: "70px",
      "1px": "1px",
      "200px": "200px",
      "260px": "260px",
      avatar: "64px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      orange: "#ee7c0d",
      mediumGray: "#656565",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
