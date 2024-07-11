// src/components/Header.tsx
"use client"; // This directive marks the component as a Client Component

import { useState, useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-end p-4">
      <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4">
        <FaGithub />
      </a>
      <button onClick={toggleDarkMode} className="text-2xl">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
