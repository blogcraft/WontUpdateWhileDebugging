/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      flex: {
        full: "1 1 100%",
      },
    },
  },
  plugins: [],
  important: true,
};
