/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "var(--primaryDark)",
        primaryLight: "var(--primaryLight)",
        accentColor: "var(--accentColor)",
        secondaryDark: "var(--secondaryDark)",
        secondaryLight: "var(--secondaryLight)",
        hoverColor: "var(--hoverColor)",
      },
    },
  },
  plugins: [],
};
