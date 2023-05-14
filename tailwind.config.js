/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      dark: {
        900: "#000000",
        // 400: ' #333333',
        // 300: '#C4C4C4',
        // 200: '#787878',
        // 100: '#C4C4C4',
        // 50: '#E8E8E8',
        // 10: '#F7F7F7',
      },
      blue: "#0149B5",
      white: "#FFFDF9",
      accent: "#0149B5",
      grey: "#646464",
      black: "#1B1C1E",
      transparent: "transparent",
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
