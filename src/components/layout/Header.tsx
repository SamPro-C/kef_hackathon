'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookHeart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/impact', label: 'Our Impact' },
];

function renderLink(
  { href, label }: { href: string; label: string },
  pathname: string
) {
  const isActive = pathname === href;
  return (
    <Link
      key={href}
      href={href}
      className={cn(
        'transition-colors hover:text-primary',
        isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
      )}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();

  // Hide header on the impact page
  if (pathname === '/impact') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <Link href="/" className="flex items-center mr-6 gap-2">
          <BookHeart className="w-6 h-6 text-primary" />
          <span className="font-bold font-space-grotesk">KEF Journey</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => renderLink(link, pathname))}
        </nav>
      </div>
    </header>
  );
}
