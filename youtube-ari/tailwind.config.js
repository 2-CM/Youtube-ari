/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // 기본 sans에 Roboto 설정
      },
    },
  },
  plugins: [],
};
