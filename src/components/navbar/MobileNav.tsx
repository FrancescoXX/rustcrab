'use client';
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface MenuItem {
  items: string;
  link?: string;
  hasSubmenu?: boolean;
  submenuItems?: { name: string; link: string }[];
}

const menuItems: MenuItem[] = [
  { items: "Books", link: "/#books" },
  { items: "Projects", link: "/#projects" },
  {
    items: "Lessons",
    hasSubmenu: true,
    submenuItems: [
      { name: "Rust Lesson", link: "/lessons" },
      { name: "Block Chain", link: "/" },
      { name: "Web Development", link: "/" },
      { name: "System Programming", link: "/" },
    ],
  },
  { items: "Dev Tools", link: "/#dev_tools" },
  { items: "DSA Example", link: "/#dsas" },
  { items: "Blog", link: "https://dly.to/vRJ9aTACP65" },
];

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when an item is clicked
  };

  const handleSubmenuToggle = (item: string) => {
    setActiveSubmenu(activeSubmenu === item ? null : item);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <Menu
          className="w-8 h-8 z-40 font-extralight cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-background transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isOpen && (
          <div className="absolute w-[100px] h-56 bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[150px] top-32 left-1/2 transform -translate-x-1/2 pointer-events-none"></div>
        )}
        <div className="p-6">
          <div className="flex justify-end items-center mb-8">
            <X
              onClick={() => setIsOpen(false)}
              className="text-2xl cursor-pointer"
            />
          </div>

          <nav className="flex flex-col items-center">
            <ul className="space-y-4 text-lg font-extralight text-center">
              <h1 className="text-2xl font-bold">Rustcrab</h1>
              {menuItems.map((item, index) => (
                <li key={index} className="w-full">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="flex justify-center items-center py-2 w-full text-center hover:underline"
                      onClick={handleMenuItemClick}
                    >
                      {item.items}
                    </Link>
                  ) : (
                    <div
                      className="group flex justify-center items-center cursor-pointer py-2 w-full text-center"
                      onClick={() => handleSubmenuToggle(item.items)}
                      data-state={activeSubmenu === item.items ? 'open' : 'closed'}
                    >
                      {item.items}
                      {item.hasSubmenu && 
                        <ChevronDownIcon
                          className="relative  ml-1 h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        />
                      }
                    </div>
                  )}
                  {item.hasSubmenu && activeSubmenu === item.items && (
                    <ul className="space-y-4 font-extralight pt-2  text-center text-sm text-muted-foreground no-underline">
                      {item.submenuItems?.map((submenuItem, submenuIndex) => (
                        <li key={submenuIndex}>
                          <Link
                            href={submenuItem.link}
                            onClick={handleMenuItemClick}
                            className="hover:underline"
                          >
                            {submenuItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
