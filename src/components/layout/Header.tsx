'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClasses = `transition-colors hover:text-primary ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`;
  const brandTextClasses = `font-bold text-lg transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`;

  // On transparent background, links were hard to read. Defaulting to dark text.
  const initialLinkClasses = `transition-colors hover:text-primary text-gray-800`;


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
              KEF
            </div>
            <span className={brandTextClasses}>Sponsor a Dream</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={isScrolled ? linkClasses : initialLinkClasses}>
              Home
            </Link>
            <Link href="/stories" className={isScrolled ? linkClasses : initialLinkClasses}>
              KEF Stories
            </Link>
            <Link href="/impact" className={isScrolled ? linkClasses : initialLinkClasses}>
              Impact
            </Link>
            <Link href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="px-4 py-2 bg-accent text-white font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
