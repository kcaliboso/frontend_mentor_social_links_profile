/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "social-green": "#c0e74d",
        "social-gray": "#333333",
        "social-bg": "#1F1F1F",
        "root-bg": "#141414",
      },
    },
  },
  plugins: [],
};
