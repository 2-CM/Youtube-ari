import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleSwitch() {
  // 1. 초기 테마 상태를 로컬 스토리지에서 불러오거나, 없으면 'light'로 설정
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // useEffect를 사용해 theme 상태가 변경될 때마다 dark 클래스를 추가하거나 제거하고, 로컬 스토리지에 저장함
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeToggleTitle =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <div className="mr-2 px-2">
      <button
        onClick={themeToggle}
        title={themeToggleTitle}
        className={`flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 ${theme === "dark" ? "bg-gray-700 outline outline-1 outline-white" : "bg-gray-200"}`}
      >
        <div
          className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-black" />
          ) : (
            <Sun className="h-4 w-4 text-black" />
          )}
        </div>
      </button>
    </div>
  );
}
