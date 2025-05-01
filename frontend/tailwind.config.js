// tailwind.config.js
export default {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html", // Optional: in case you use plain HTML too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
