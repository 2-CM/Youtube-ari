import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="mr-2 px-2">
      <button
        onClick={toggleTheme}
        className={`flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 outline outline-1 outline-white" : "bg-gray-300"}`}
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
