/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      animation: {
        "pulse": "pulse 0.8s linear infinite ",
      },
      colors:{
        'main-color':'#d30a40'
      }
    },
  },
  plugins: [],
};
