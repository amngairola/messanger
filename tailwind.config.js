/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5755FE",
        secondry: "#8B93FF",
        background: "#FFF7FC",
        DarkBlue: "#14171A",
        LightBlue: "#E1F5FE",
        Txt: "#657786",
        LightGray: "#E8F0F3",
      },
    },
  },
  plugins: [],
};
