/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Make sure this matches your actual project files
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        purple: "#312849",
        green: "#45BF87",
        pink: "#C13F81",
        red: "#FF8070",
        white: "#FFFFFF",
        black: "#000000",
        primary: '#121212', // dark shade for primary elements
        secondary: '#FF6347', // vibrant color for secondary elements
        accent: '#4CAF50', // accent color for interactive elements
        background: '#f0f0f0', // background color for general areas
        text: '#444444', // default text color
        light: '#717171', // light text color
        dark: '#040404', // almost black text color
        border: '#eaeaea', // border color for elements
        'theme-light': '#f6f6f6', // light version of theme
        'theme-dark': '' // dark version of theme, define if needed
      },
      fontSize: {
        base: '16px', // base font size
        h1: '2.488rem',
        h2: '2.074rem',
        h3: '1.728rem',
        h4: '1.44rem',
        h5: '1.2rem',
        h6: '1rem', // h6 to base scale
      },
      fontFamily: {
        primary: ['Heebo', 'sans-serif'], // Primary font family
        secondary: ['Signika', 'sans-serif'] // Secondary font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For rich text formatting
    require('@tailwindcss/forms'), // For better forms styling
    require('tailwind-bootstrap-grid')({ // Optional: if you need bootstrap grid system
      generateContainer: false,
      gridGutterWidth: '2rem',
    }),
  ],
};