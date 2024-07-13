import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Courses', href: '#courses' },
    { label: 'Books', href: '#books' },
    { label: 'Resources', href: '#resources' },
    { label: 'Projects', href: '#projects' },
    { label: 'Dev Tools', href: '#dev_tools' },
    { label: 'People', href: '#people' },
    { label: 'Events', href: '#events' }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden'); 
    }
  
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } fixed  dark:bg-black bg-white w-full flex-col text-center z-50 lg:static lg:flex lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block lg:inline-block p-4 text-lg lg:text-base uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
