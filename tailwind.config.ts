/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Ensure dark mode works properly
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
