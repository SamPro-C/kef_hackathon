'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isHeaderVisible = !isHomePage || isScrolled;

  const linkClasses = `transition-colors hover:text-primary`;
  const brandTextClasses = `font-bold text-lg transition-colors`;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderVisible ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
      style={{
        color: isHeaderVisible ? 'hsl(var(--foreground))' : 'white',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
                src="https://picsum.photos/seed/logo/40/40"
                alt="KEF Logo"
                width={40}
                height={40}
                className="rounded-lg"
                data-ai-hint="logo"
            />
            <span
              className={brandTextClasses}
              style={{
                color: isHeaderVisible ? 'hsl(var(--heading))' : 'white',
              }}
            >
              Sponsor a Dream
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className={linkClasses}>
              Home
            </Link>
            <Link href="/about" className={linkClasses}>
              About
            </Link>
            <Link href="/stories" className={linkClasses}>
              KEF Stories
            </Link>
            <Link href="/impact" className={linkClasses}>
              Impact
            </Link>
            <Link href="/game" className={linkClasses}>
              The Game
            </Link>
            <Link href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
