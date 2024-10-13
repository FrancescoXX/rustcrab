"use client"; // This directive marks the component as a Client Component
import { useState, useEffect } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import Link from "next/link";
import DarkModeToggle from "./navbar/DarkModeToggle";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [starsCount, setStarsCount] = useState<number | null>(null);

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

  return (
    <header className="flex justify-around items-center md:p-4 p-4 space-x-4 sticky  h-24 top-0 border-b-2 border-b-foreground/10 0 z-40 sm:pl-0 bg-foreground/5 backdrop-blur-5">
      <div>
      <Link
          href="/"
          className="text-2xl md:text-2xl font-medium cursor-pointer hidden sm:block sm:text-base text-foreground"
        >
          Rustcrab
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center sm:hidden">
          <MobileNav />
        </div>
        <div className="hidden sm:block">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        {/* <a
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
        </a> */}
        <a
          href="https://github.com/FrancescoXX/rustcrab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-2xl text-foreground"
          title="GitHub repository"
        >
          <FaGithub />
          {starsCount !== null && (
            <span className="text-xl flex items-center">
              {starsCount}
              <span className="bg-gradient-to-r from-[#FAD141] to-[#D93A29] bg-clip-text text-transparent pl-2">
                ★
              </span>
            </span>
          )}
        </a>

        <DarkModeToggle />
        <Button
          variant="default"
          className=" rounded-full bg-gradient-to-r from-[#F5742E] to-[#D93A29] h-11 w-full sm:w-auto text-base font-semibold"
        >
          Log In
        </Button>
      </div>
    </header>
  );
}
