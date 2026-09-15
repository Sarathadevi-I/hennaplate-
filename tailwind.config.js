/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        henna: {
          950: "#0B2E1D",
          900: "#0F3D26",
          800: "#14522F",
          700: "#1B6B3D",
          600: "#237F49",
          500: "#2F9459",
          300: "#8FC7A6",
          200: "#C3E2CF",
          100: "#E3F1E8",
        },
        pastel: {
          DEFAULT: "#FAF8F2",
          dim: "#F1ECE1",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
