/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(30, 41, 59)",
        secondary: "rgb(250 250 249)",
        "secondary-hover": "#c0a0b9",
      },
    },
  },
  plugins: [],
};
