module.exports = {
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
