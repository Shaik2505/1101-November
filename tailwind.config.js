/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Light Blue
        secondary: "#28A745", // Green
        accent: "#FFC107", // Amber
        background: "#F8F9FA", // Light Grey
        text: "#343A40", // Dark Grey
        border: "#E0E0E0", // Light Grey
        highlight: "#FFD700", // Gold
        darkPrimary: "#1E1E1E", // Dark Grey
        darkBackground: "#1E1E1E", // Dark Grey for dark mode
        darkText: "#FFFFFF", // White for dark mode
        darkHighlight: "#FFD700", // Gold for dark mode
      },
      fontSize: {
        cXS: ".75rem",
        cSM: ".875rem",
        cMD: "1rem",
        cLG: "1.125rem",
        cXL: "1.25rem",
        c2XL: "1.5rem",
        c3XL: "1.875rem",
        c4XL: "2.25rem",
        C5XL: "3rem",
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateX(100%)", opacity: 0 }, // Start from the right off-screen
          to: { transform: "translateX(0%)", opacity: 1 }, // Move to its original position
        },
        slideOut: {
          from: { transform: "translateX(0)", opacity: 1 }, // Start from its position
          to: { transform: "translateX(100%)", opacity: 0 }, // Move off to the right
        },
        gradientMove: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100% 50%" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        
        
      },
      animation: {
        slideIn: "slideIn 1.5s ease-out", // Apply the slide-in animation
        slideOut: "slideOut 1s ease-in", // Apply the slide-out animation
        gradientMove: "gradientMove 6s ease infinite", // Add the gradient move animation
        typing: 'typing 3s steps(30, end) infinite', // Adjust timing and steps for text length
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
