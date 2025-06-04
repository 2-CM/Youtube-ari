/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // 기본 sans에 Roboto 설정
      },
      colors: {
        bdDefault: "#c6c6c6",
        bdFocus: "#1c62b9",
        bgDefault: "#f2f2f2",
        bgHover: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
