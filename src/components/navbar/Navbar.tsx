"use client";
import React from "react";

interface menuObject {
  items: string;
  link: string;
}

interface NavbarProps {
  setSection: (section: string) => void;
}

export const menuItems: menuObject[] = [
  { items: "Books", link: "books" },
  { items: "Projects", link: "projects" },
  { items: "Dev Tools", link: "dev tools" },
  { items: "DSA Example", link: "dsas" },
  { items: "People", link: "people" },
];

const Navbar: React.FC<NavbarProps> = ({ setSection }) => {
  return (
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
  );
};

export default Navbar;
