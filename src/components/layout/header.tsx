'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookHeart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/journey', label: 'The Journey' },
  { href: '/stories', label: 'Stories' },
  { href: '/impact', label: 'Impact' },
  { href: '/sponsor', label: 'Sponsor' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookHeart className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-lg">KEF Journey</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-primary font-medium',
                pathname === item.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex">
                <Link href="/sponsor">Sponsor a Student</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="grid gap-6 text-lg font-medium mt-8">
                      <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" onClick={() => setIsOpen(false)}>
                          <BookHeart className="h-6 w-6 text-primary" />
                          <span>KEF Journey</span>
                      </Link>
                      {navItems.map((item) => (
                          <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                  'hover:text-primary transition-colors',
                                  pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                              )}
                          >
                              {item.label}
                          </Link>
                      ))}
                  </nav>
                  <Button asChild className="absolute bottom-8 left-6 right-6">
                      <Link href="/sponsor" onClick={() => setIsOpen(false)}>Sponsor a Student</Link>
                  </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
