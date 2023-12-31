/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url(./components/pokemon.png)"
      }
    },
  },
  plugins: [],
}
