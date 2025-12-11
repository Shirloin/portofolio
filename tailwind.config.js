/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-bg": "var(--primary-bg)",
      },
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "black",
        },
      },
    },
    animation: {
      typing: "typing 3s steps(8) infinite alternate, blink 0.7s infinite",
    },
  },
  plugins: [],
};
