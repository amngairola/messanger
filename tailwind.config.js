/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5755FE",
        secondary: "#8B93FF",
        background: "#FFF7FC",
        darkBlue: "#14171A",
        lightBlue: "#E1F5FE",
        txt: "#657786",
        lightGray: "#E8F0F3",
        // Dark mode colors
        backgroundDark: "#14171A",
        surfaceDark: "#1A202C",
        primaryDark: "#5755FE",
        secondaryDark: "#8B93FF",
        txtDark: "#E8E8E8", // Adjusted for readability
        lightGrayDark: "#657786",
      },
    },
  },
  plugins: [],
};
