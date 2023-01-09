/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: [
    {
      light: {
        primary: "#831843",
        secondary: "#CA8A04",
        accent: "#CBD5E1",
        neutral: "#E5E7EB"
      },
      dark: {
        primary: "#0F6182",
        secondary: "#CA8A04",
        accent: "#CBD5E1",
        neutral: "#9CA3AF"
      }
    }
  ],
  plugins: [],
}
