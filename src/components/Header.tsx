"use client"; // This directive marks the component as a Client Component
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaStar } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import Link from "next/link";
import { SiGithub, SiRust } from "react-icons/si";

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
      className={`flex justify-between items-center md:p-4 p-4 space-x-4 sticky top-0 z-40 sm:pl-0 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-70 bg-transparent border-b border-black/30 dark:border-white/30"
          : "bg-white dark:bg-[#121212] border-b-0"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="sm:hidden">
          <MobileNav />
        </div>

        <Link
          href="/"
          className="hidden sm:flex items-center gap-1 font-bold text-xl md:text-2xl cursor-pointer"
        >
          <SiRust size={24} className="text-orange-600 dark:text-orange-400" />
          <span>Rustcrab</span>
        </Link>
        <div className="hidden sm:block">
          <Navbar />
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
          className="flex items-center space-x-2 text-2xl bg-black/10 dark:bg-white/20 py-1 px-2 lg:py-1 lg:px-2 rounded-md"
          title="GitHub repository"
        >
          <SiGithub className="w-5 h-5" />
          {starsCount !== null && (
            <span className="text-base font-medium flex items-center gap-1 justify-center">{starsCount} <FaStar className="text-yellow-500 dark:text-yellow-400"/></span>
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
