const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ], // Corrected file paths

  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
