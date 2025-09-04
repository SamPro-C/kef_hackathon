
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookHeart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/impact', label: 'Impact' },
];

export default function Header() {
  const pathname = usePathname();

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
                'transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex">
                <Link href="#">Sponsor a Student</Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                        <BookHeart className="h-6 w-6 text-primary" />
                        <span className="sr-only">KEF Journey</span>
                    </Link>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'hover:text-primary',
                                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
