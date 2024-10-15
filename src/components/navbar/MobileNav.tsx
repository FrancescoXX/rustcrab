'use client';
// import Link from 'next/link';
// import React, { useState, useRef, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// interface menuObject {
//   items: string;
//   link: string;
// }


// export const menuItems: menuObject[] = [
//   { items: 'Home', link: '/' },
//   { items: 'Books', link: '/#books' },
//   { items: 'Projects', link: '/#projects' },
//   { items: 'Dev Tools', link: '/#dev_tools' },
//   { items: 'Lesson', link: '/#lessons' },
//   { items: 'DSA', link: '/#dsas' }
// ];

// const MobileNav: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLUListElement>(null);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleMenuItemClick = (link: string) => {
//     setMenuOpen(false); // Close the menu after clicking an item
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <div className="relative">
//       <button onClick={handleMenuToggle} className="text-2xl">
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       {menuOpen && (
//         <ul
//           ref={menuRef}
//           className="absolute left-0 top-12 py-2 w-48 bg-white dark:bg-black border rounded-lg shadow-lg z-50"
//         >
//           {menuItems.map((item, index) => (
//             <Link
//               href={`${item.link}`}
//               key={index}
//               className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 block"
//               onClick={() => handleMenuItemClick(item.link)}
//             >
//               {item.items}
//             </Link>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MobileNav;
'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface MenuItem {
  items: string;
  link?: string;
  hasSubmenu?: boolean;
  submenuItems?: { name: string; link: string }[];
}

const menuItems: MenuItem[] = [
  { items: 'Books', link: '/#books' },
  { items: 'Projects', link: '/#projects' },
  {
    items: 'Lessons',
    hasSubmenu: true,
    submenuItems: [
      {name: 'Rust Lesson', link: '/lessons'},
      { name: 'Block Chain', link: '/' },
      { name: 'Web Devlopment', link: '/' },
      { name: 'System Programing', link: '/' },
    ],
  },
  { items: 'Dev Tools', link: '/#dev_tools' },
  { items: 'DSA Example', link: '/#dsas' },
  { items: 'Blog', link: 'https://dly.to/vRJ9aTACP65' },
];

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when an item is clicked
  };

  const handleSubmenuToggle = (item: string) => {
    if (activeSubmenu === item) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(item);
    }
  };

  return (
    <>
      <Menu className="w-8 h-8 flex justify-normal items-center mr-12 z-40 font-extralight" onClick={() => setIsOpen(true)} />
      <div
        className={`fixed top-0 right-0 w-full h-full bg-background transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {isOpen && (
          <div className="absolute w-[100px] h-56 bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[150px] top-32 left-1/2 transform -translate-x-1/2"></div>
        )}
        <div className="p-6">
          <div className="flex justify-end items-center mb-8">
            <X onClick={() => setIsOpen(false)} className="text-2xl" />
          </div>

          <nav className=''>
            <ul className="space-y-4 flex flex-col justify-around items-center text-lg font-extralight">
              <h1 className="text-2xl font-bold">Rustcrab</h1>
              {menuItems.map((item, index) => (
                <li key={index} className="py-2 w-full">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="flex justify-between items-center"
                      onClick={handleMenuItemClick}
                    >
                      {item.items}
                    </Link>
                  ) : (
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleSubmenuToggle(item.items)}>
                      {item.items}
                      {item.hasSubmenu && <FaChevronDown />}
                    </div>
                  )}
                  {item.hasSubmenu && activeSubmenu === item.items && (
                    <ul className="pl-4 space-y-2 font-thin pt-4 ">
                      {item.submenuItems?.map((submenuItem, submenuIndex) => (
                        <li key={submenuIndex}>
                          <Link href={submenuItem.link} onClick={handleMenuItemClick}>
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
