'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/resources', label: 'Resources' },
    { href: '/cv.pdf', label: 'CV' },
  ];

  return (
    <nav className="bg-secondary text-secondary-foreground shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <span className="cursor-pointer">Gavin Thomas</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="cursor-pointer text-lg hover:text-primary transition duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 hover:text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? '' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-primary-foreground">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
