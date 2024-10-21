"use client"; // This directive marks the component as a Client Component
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

import Navbar from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import Link from "next/link";
import DarkModeToggle from "./navbar/DarkModeToggle";
import { Button } from "./ui/button";
import { UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [starsCount, setStarsCount] = useState<number | null>(null);
  const { isSignedIn } = useUser();

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
    <header className="flex justify-around items-center md:p-4 p-4  h-24 top-0 border-b-2 border-b-foreground/10  z-40 sm:pl-0 bg-foreground/5 backdrop-blur-5 ">
     <div>
  <Link
    href="/"
    className="text-2xl md:text-4xl font-medium cursor-pointer hidden md:block sm:text-base text-foreground"
  >
    Rustcrab
  </Link>
</div>

<div className="flex items-center space-x-4">
  {/* Show MobileNav for small (mobile) and medium (iPad) screens */}
  <div className="flex items-center lg:hidden">
    <MobileNav />
  </div>

  {/* Show Navbar for large screens (lg and above), hide on smaller screens */}
  <div className="hidden lg:flex">
    <Navbar />
  </div>
</div>

      <div className="flex justify-between items-center p-4">
        {/* I am shifiting this daily.dev to the blog button */}
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
          <FaGithub className="w-7 h-7" />
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
        {isSignedIn ? (
            <UserButton 
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '100%',
                  },
                },
              }}
            />
          ) : (
        <>   
        <Link href="/sign-in" passHref>
        <Button
          variant="default"
          className=" rounded-full bg-gradient-to-r from-[#F5742E] to-[#D93A29]  h-11 w-full sm:w-auto text-base font-semibold"
        >
          Log In
        </Button>
        </Link>
        <Link href="/sign-up" passHref>
        {/* I don't want to give the signup button so that i comment this. */}
        {/* <Button
          variant="default"
          className="rounded-full bg-gradient-to-r from-[#F5742E] to-[#D93A29] h-11 w-full sm:w-auto text-base font-semibold"
        >
          Sign Up
        </Button> */}
        </Link>
        </> 
          )}
      </div>
    </header>
  );
}
