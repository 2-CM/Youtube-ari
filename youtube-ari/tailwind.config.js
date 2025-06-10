/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // 기본 sans에 Roboto 설정
      },
      colors: {
        ytGray: {
          10: "#f8f8f8",
          20: "#f0f0f0",
          30: "#f2f2f2",
          40: "#e5e5e5",
          50: "#d9d9d9",
          60: "#d3d3d3",
          70: "#c6c6c6",
          90: "#616161",
        },
      },
    },
  },
  plugins: [],
};
