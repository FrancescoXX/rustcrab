"use client"; // This directive marks the component as a Client Component

import { useState, useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';

const DAILY_DEV_URL = "https://app.daily.dev/squads/rustdevs";
const GITHUB_URL = "https://github.com/FrancescoXX/rustcrab";
const IMAGE_SRC = "/rust_lgo_720.png";
const ALT_TEXT = "daily.dev";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-end items-center p-4 space-x-4">
      <a 
        href={DAILY_DEV_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-2xl" 
        title="Rustdevs on daily.dev" 
        aria-label="Rustdevs on daily.dev"
      >
        <Image 
          src={IMAGE_SRC} 
          alt={ALT_TEXT} 
          width={24} 
          height={24} 
          onError={(e) => e.target.style.display='none'} 
        />
      </a>
      <a 
        href={GITHUB_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-2xl" 
        title="GitHub repository" 
        aria-label="GitHub repository"
      >
        <FaGithub />
      </a>
      <button 
        onClick={toggleDarkMode} 
        className="text-2xl" 
        title="Toggle Dark/Light mode" 
        aria-label="Toggle Dark/Light mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
        }
