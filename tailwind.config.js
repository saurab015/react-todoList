module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purp: "#292929",
      },
      spacing: {
        //prettier-ignore
        "95": '23rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
