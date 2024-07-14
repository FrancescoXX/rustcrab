'use client';
import React, { useState } from 'react';

interface menuObject {
  items: string;
  link: string;
}

interface NavbarProps {
  setSection: (section: string) => void;
}

export const menuItems: menuObject[] = [
  { items: 'Books', link: 'books' },
  { items: 'Projects', link: 'projects' },
  { items: 'Dev Tools', link: 'dev tools' },
  { items: 'DSA Example', link: 'dsas' }
];

const Navbar: React.FC<NavbarProps> = ({ setSection }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleClick = (link: string) => {
    setActiveLink(link);
    setSection(link);
  };

  return (
    <ul className="flex space-x-4 capitalize">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer transition ease-in-out ${activeLink === item.link ? 'underline' : ''}`}
          onClick={() => handleClick(item.link)}
        >
          <span className="hover:text-white dark:hover:text-black">{item.items}</span>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
