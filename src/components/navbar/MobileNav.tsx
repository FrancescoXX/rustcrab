"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface menuObject {
  items: string;
  link: string;
}

export const menuItems: menuObject[] = [
  { items: "Home", link: "/" },
  { items: "Books", link: "#books" },
  { items: "Projects", link: "#projects" },
  { items: "Dev Tools", link: "#dev_tools" },
  { items: "Lesson", link: "#lesson" },
  { items: "People", link: "#people" },
  { items: "DSA", link: "#dsa" },
];

const MobileNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (link: string) => {
    setMenuOpen(false); // Close the menu after clicking an item
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ''; 
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ''; 
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <button onClick={handleMenuToggle} className="text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={handleMenuToggle} // Close menu on click outside
          ></div>
          <ul
            ref={menuRef}
            className="fixed left-0 top-12 bottom-0 left-0 right-0 min-h-screen bg-white py-2  text-center space-y-8 py-5 bg-white dark:bg-black border rounded-lg shadow-lg z-50"
          >
            {menuItems.map((item, index) => (
              <Link
                href={`${item.link}`}
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 block"
                onClick={() => handleMenuItemClick(item.link)}
              >
                {item.items}
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MobileNav;