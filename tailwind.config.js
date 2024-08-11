/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-custom": "550px", // Custom breakpoint at Viewport Width ≥ 550px
      },
    },
  },
  plugins: [],
};
