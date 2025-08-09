module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      screens: {
        "2xl": "1536px",
        "3xl": "1682px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
