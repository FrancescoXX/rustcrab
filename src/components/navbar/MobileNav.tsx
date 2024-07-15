'use client';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface menuObject {
  items: string;
  link: string;
}


export const menuItems: menuObject[] = [
  { items: 'Home', link: '/' },
  { items: 'Books', link: '#books' },
  { items: 'Projects', link: '#projects' },
  { items: 'Dev Tools', link: '#dev_tools' },
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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <button onClick={handleMenuToggle} className="text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && (
        <ul
          ref={menuRef}
          className="absolute left-0 top-12 py-2 w-48 bg-white dark:bg-black border rounded-lg shadow-lg z-50"
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
      )}
    </div>
  );
};

export default MobileNav;
