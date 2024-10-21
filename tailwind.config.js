/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
        'gilroy': ['"SVN Gilroy"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}