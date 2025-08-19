'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contacts'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="px-6 py-4 flex items-center justify-between md:px-[114px] md:pt-6 md:pb-4 relative z-50">
      {/* Mobile: Hamburger menu (left) */}
      <div className="md:hidden flex-1 flex justify-start">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} className="text-white" />
        </button>
      </div>

      {/* Logo (center) */}
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src="/assets/2-removebg-preview.png"
          alt="Makwin Dion Logo"
          className="transition-transform hover:scale-110 duration-300"
          width={200}
          height={125}
        />
      </div>

      {/* Desktop nav links */}
      <nav className="hidden md:flex flex-1 justify-center gap-[41px] text-white font-medium text-[20px]">
        {navItems.map((item, idx) => {
          const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              key={idx}
              href={href}
              className={`hover:text-white relative transition-all duration-300 ${
                isActive
                  ? 'after:absolute after:h-[2px] after:w-5 after:bg-white after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2'
                  : ''
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      {/* Location & time (desktop only) */}
      <div className="hidden md:flex flex-1 justify-end items-center text-white text-sm">
        <span className="mr-2">📍 Mangalore, India</span>
        <span className="mr-2">|</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🕒 {new Date().toLocaleTimeString('en-IN', { hour12: true })}
        </motion.span>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-black px-6 pt-6 pb-10 flex flex-col gap-6 text-white font-poppins z-40"
          >
            {/* Close button (top right) */}
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} className="text-white" />
              </button>
            </div>

            {/* Nav links */}
            {navItems.map((item, idx) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={idx}
                  href={href}
                  className={`text-lg border-b border-white/10 py-2 ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            {/* Location and Time */}
            <div className="pt-6 border-t border-white/10 text-sm text-white flex flex-col gap-1">
              <span>📍 Mangalore, India</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                🕒 {new Date().toLocaleTimeString('en-IN', { hour12: true })}
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
