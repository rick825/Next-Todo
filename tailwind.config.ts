/** @type {import('tailwindcss').Config} */
const config = {
    oxide: 'postcss',
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  export default config;
  