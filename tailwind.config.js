/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
import { tailwindConfig } from "@storefront-ui/vue/tailwind-config";
module.exports = {
  presets: [tailwindConfig],
  theme: {
    colors: {
      twprimary: "#c33764",
      twsecondary: "#6658fe",
      twaccent: "#6171fe",
      "twaccent-purple": "#b79dfe",
      twcurrent: "currentColor",
      "twsubtitle-gray": "#e5e7eb",
      indigo: colors.indigo,
      slate: colors.slate,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      teal: colors.teal,
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./**/*.vue",
    "./node_modules/@storefront-ui/vue/**/*.{js,mjs}",
  ],
};
export default module.exports;
