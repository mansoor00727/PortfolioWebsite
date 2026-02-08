/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient-flow 8s ease infinite",
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
