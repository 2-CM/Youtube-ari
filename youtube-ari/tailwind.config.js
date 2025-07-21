/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // 기본 sans에 Roboto 설정
      },
      colors: {
        ytGray: {
          10: "var(--color-ytGray-10)",
          20: "var(--color-ytGray-20)",
          30: "var(--color-ytGray-30)",
          40: "var(--color-ytGray-40)",
          50: "var(--color-ytGray-50)",
          60: "var(--color-ytGray-60)",
          70: "var(--color-ytGray-70)",
          90: "var(--color-ytGray-90)",
        },
        darkBg: "#0F0F0F",
      },
    },
  },
  plugins: [],
};
