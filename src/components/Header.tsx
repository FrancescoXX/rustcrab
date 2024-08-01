"use client"; // This directive marks the component as a Client Component
import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [starsCount, setStarsCount] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/repos/FrancescoXX/rustcrab")
      .then((response) => response.json())
      .then((data) => setStarsCount(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
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
    <header
      className={`flex justify-between items-center p-4 space-x-4 sticky top-0 border-b-2 0 z-40 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-70 bg-transparent"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center sm:hidden">
          <MobileNav />
        </div>
        <Link
          href="/"
          className="text-2xl font-bold cursor-pointer hidden sm:block"
        >
          Rustcrab
        </Link>
        <div className="hidden sm:block">
          <Navbar  />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://dly.to/vRJ9aTACP65"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
          title="Rustdevs on daily.dev"
        >
          <Image
            src="/icons/daily.dev-icon.png"
            alt="daily.dev"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://github.com/FrancescoXX/rustcrab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-2xl"
          title="GitHub repository"
        >
          <FaGithub />
          {starsCount !== null && (
            <span className="text-xl">{starsCount} ★</span>
          )}
        </a>
        <button
          onClick={toggleDarkMode}
          className="text-2xl"
          title="Dark/Light mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
