import Link from 'next/link';
import React from 'react';

interface MenuObject {
  items: string;
  link: string;
}

const menuItems = [
  { items: "Books", link: "/#books" },
  { items: "Projects", link: "/#projects" },
  { items: "Lessons", link: "/#lessons" },
  { items: "Dev Tools", link: "/#dev_tools" },
  { items: "DSA Example", link: "/#dsas" },
  { items: "People", link: "/#people" },
];


const Navbar: React.FC = () => {
  return (
    <ul className="flex space-x-4 small-medium:space-x-2 capitalize md:text-base text-base sm:text-sm">
      {menuItems.map((item, index) => (
        <Link href={item.link} key={index} className="cursor-pointer transition ease-in-out">
          <span className="hover:text-orange-500">{item.items}</span>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
