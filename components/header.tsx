'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 text-white z-50 shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[90px] h-[30px]">
            <Image
              src="/images/psmlogo.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-light tracking-wide">
          {menuItems.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="relative group"
            >
              {title}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 pt-2 space-y-2 text-sm font-light">
          {menuItems.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="block hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
