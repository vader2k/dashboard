/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        primary : '#111c43',
        secondary : '#1d294c',
        default : '#f0f1f7,'
      }
    },
  },
  plugins: [],
}

