/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "576px" },
      // => @media (max-width: 576px) { ... }
    },
    colors: {
      "transparent-black": "rgba(25, 25, 25, 0.297)",
      card: "rgb(34, 34, 34)",
      card2: "rgba(255, 255, 255, 0.193)",
      14: "#141414",
    },
  },
  plugins: [],
};

