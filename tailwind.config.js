/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "primary-light": "#F5F8FF",
        "secondary-gray": "#657178",
        "purple": "#585EE3",
        "black-900": "#1D2D35",
      },
      screens: {
        "lg-desktop": { "max": "1920px"},
        "md-desktop": { "max": "1240px"},
        "tablet": { "max": "1024px"},
        "mobile": { "max": "560px"},
        "xl-desktop": { "min": "1920px"},
        "xl": "1312px",
        "lg": "1128px",
        "md": "928px",
        "sm": "500px",
      },
      fontFamily: {
        medium: 'Helvetica Neue LT GEO'
      }
    },
  },
  plugins: [],
};
