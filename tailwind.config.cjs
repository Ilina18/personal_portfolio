module.exports = {
  darkMode: 'class', // <-- Add this line to enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff9f1c", // soft rose
        accent: "#ffbf69",  // teal blue
        neutral: "#869499", // grayish tone
        bg: "#f1faee",      // light background
        card: "#1d3557", 
        secondary:"#e63946"   // white card
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        18: "4.5rem", // example of custom margin/padding
      },
    },
  },
  plugins: [],
}
