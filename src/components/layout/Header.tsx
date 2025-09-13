'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  
  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isHeaderVisible = !isHomePage || isScrolled || isMenuOpen;

  const linkClasses = `transition-colors hover:text-primary`;
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/stories', label: 'KEF Stories' },
    { href: '/impact', label: 'Impact' },
    { href: '/game', label: 'The Game' },
  ];

  return (
    <>
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
            <Link href="/" className="flex items-center gap-2 z-50">
              <Image
                  src="https://picsum.photos/seed/logo/120/40"
                  alt="KEF Logo"
                  width={120}
                  height={40}
                  className="rounded-lg"
                  data-ai-hint="logo"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              ))}
              <Link href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">
                Donate
              </Link>
            </nav>
            <div className="md:hidden z-50">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isMenuOpen && (
             <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-0 bg-background z-40 p-4 pt-20 md:hidden"
             >
                <nav className="flex flex-col items-center justify-center h-full text-center gap-6">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <Link href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn text-lg mt-6 px-8 py-3">
                        Donate Now
                    </Link>
                </nav>
             </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
