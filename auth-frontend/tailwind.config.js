/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        "base": ["Rajdhani, serif"],
        "sofia": ["Sofia", "cursive"]
      }
    },
  },
  plugins: [],
}

