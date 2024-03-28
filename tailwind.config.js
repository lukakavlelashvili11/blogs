/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F5F8FF",
        "secondary-gray": "#657178",
        "purple": "#585EE3",
      },
      screens: {
        "lg-desktop": "1920px",
        "md-desktop": "1240px",
      },
      width: {
        "lg": "1312px",
        "md": "1128px",
      },
    },
  },
  plugins: [],
};
