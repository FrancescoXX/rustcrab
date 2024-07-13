"use client"; // This directive marks the component as a Client Component

import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

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
    <header className="flex justify-end items-center p-4 space-x-4">
      <a
        href="https://app.daily.dev/squads/rustdevs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl"
        title="Rustdevs on daily.dev"
      >
        <Image src="/rust_lgo_720.png" alt="daily.dev" width={24} height={24} />
      </a>
      <a
        href="https://github.com/FrancescoXX/rustcrab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl"
        title="GitHub repository"
      >
        <FaGithub />
      </a>
      <button
        onClick={toggleDarkMode}
        className="text-2xl"
        title="Dark/Light mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
