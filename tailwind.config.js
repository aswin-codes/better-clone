/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(0, 71, 51)",
        inversePrimary: "rgb(7, 49, 38)",
        textPrimary: "rgb(41, 43, 41)",
        textHighlight: "rgb(1, 120, 72)",
        successGreen : "rgb(240, 247, 241)",
        activeGreen: "rgb(30, 224, 127)",
        backgroundInverseSecondary: "rgb(1, 120, 72)",
        accentSecondary: "rgb(223, 224, 220)",
        textSecondary: "rgb(86, 93, 90)"
      },
      fontFamily: {
        poppins : ["Poppins",],
      }
    },
  },
  plugins: [],
};
