/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2C5BEB",
      },
      fontFamily: {
        Beba: ["Bebas Neue", "sans-serif"],
        Popins:["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
