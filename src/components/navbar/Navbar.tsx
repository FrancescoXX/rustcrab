'use client';
import Link from 'next/link';
import React from 'react';

interface menuObject {
  items: string;
  link: string;
}

export const menuItems: menuObject[] = [
  { items: 'Books', link: '#books' },
  { items: 'Projects', link: '#projects' },
  { items: 'Dev Tools', link: '#dev_tools' },
];

const Navbar: React.FC = () => {
  return (
    <ul className="flex space-x-4 capitalize">
      {menuItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="cursor-pointer transition ease-in-out">
          <span className="hover:text-orange-500">{item.items}</span>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
