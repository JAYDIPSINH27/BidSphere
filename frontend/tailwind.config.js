/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bsnavyblue: "#1D3557",
        bslightgreen: "#A8DADC",
        bslightblue: "#457B9D",
        bsbase: "#F1FAEE",
      },
    },
  },
  plugins: [],
};
