'use client';
import React from 'react';

interface menuObject {
  items: string;
  link: string;
}

interface NavbarProps {
  setSection: (section: string) => void;
}

export const menuItems: menuObject[] = [
  {
    items: 'Courses',
    link: 'courses',
  },
  {
    items: 'books',
    link: 'books',
  },
  {
    items: 'resources',
    link: 'resources',
  },
  {
    items: 'projects',
    link: 'projects',
  },
  {
    items: 'dev tools',
    link: 'dev tools',
  },
  {
    items: 'people',
    link: 'people',
  },
  {
    items: 'events',
    link: 'events',
  },
];

const Navbar: React.FC<NavbarProps> = ({ setSection }) => {
  return (
    <div className="hidden sm:block">
      <ul className="flex space-x-4 capitalize">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer transition ease-in-out"
            onClick={() => setSection(item.link)}
          >
            <span className="hover:text-orange-500">{item.items}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
