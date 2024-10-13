'use client';
import { useEffect, useState } from "react";
import { SunMoon, Sun } from "lucide-react"; // Importing the icons from lucide-react

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode is enabled on initial load
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <button
        onClick={toggleDarkMode}
        className="relative w-14 h-14 flex items-center justify-center  border-gray-500 transition-transform duration-500"
      >
        <span
          className={`absolute transition-transform duration-500 ease-in-out ${
            darkMode ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <SunMoon className="text-black h-8 w-8 " />
        </span>
        <span
          className={`absolute transition-transform duration-500 ease-in-out ${
            darkMode ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
          }`}
        >
          <Sun className="text-white h-8 w-8" />
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;