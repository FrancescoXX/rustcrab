'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface menuObject {
  items: string;
  link: string;
}

interface MobileNavProps {
  setSection: (section: string) => void;
}

export const menuItems: menuObject[] = [
  { items: 'Home', link: 'home' },
  { items: 'Books', link: 'books' },
  { items: 'Projects', link: 'projects' },
  { items: 'Dev Tools', link: 'dev tools' },
];

const MobileNav: React.FC<MobileNavProps> = ({ setSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (link: string) => {
    setSection(link);
    setMenuOpen(false); // Close the menu after clicking an item
  };

  return (
    <div className="relative flex items-center">
      <button onClick={handleMenuToggle} className="text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {menuOpen && (
        <ul className="absolute left-0 mt-2 py-2 w-48 bg-white dark:bg-black border rounded-lg shadow-lg z-50">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleMenuItemClick(item.link)}
            >
              {item.items}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
