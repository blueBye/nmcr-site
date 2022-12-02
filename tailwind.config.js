const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.gray[600],
      },
    },
  },
  variants: {
    extend: {},
  },
    plugins: [
        require('@tailwindcss/typography'), 
        require('@tailwindcss/aspect-ratio')
    ],
};
