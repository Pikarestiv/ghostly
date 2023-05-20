import { pxToRem } from "./src/components/utils/pxToRem";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    fontSize: {
      xs: pxToRem(12),
      sm: pxToRem(14),
      base: pxToRem(16),
      lg: pxToRem(18),
      xl: pxToRem(20),
      "2xl": pxToRem(24),
      "3xl": pxToRem(30),
      "4xl": pxToRem(36),
      "5xl": pxToRem(40),
      "6xl": pxToRem(48),
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      light: "#FFFDF9",
      black: "#000000",
      dark: "#1B1C1E",
      grey: "#646464",
      accent: "#0149B5",
      blue: "#0149B5",
      red: "#FF576B",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      "2xl": "1440px",
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '15px',
    //     sm: '0',
    //     lg: '0',
    //     xl: '0',
    //     '2xl': '0',
    //   },
    //   screens: {
    //     sm: '540px',
    //     md: '720px',
    //     lg: '960px',
    //     xl: '1140px',
    //     '2xl': '1260px',
    //   },
    // },
  },
  plugins: [],
};
