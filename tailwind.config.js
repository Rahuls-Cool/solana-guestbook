/* eslint-disable no-undef */
// const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
       Didact_Gothic: "Didact Gothic, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
],
};
