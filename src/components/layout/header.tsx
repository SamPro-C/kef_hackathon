
'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react'; // Assuming a theme toggle might be added

export default function Header() {
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme(); // Example for theme toggle

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-headline text-xl font-semibold text-foreground">EduConnect Kenya</h1>
      </div>
      <div className="flex items-center gap-2">
        {/* Placeholder for theme toggle or other actions */}
        {/* {mounted && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        )} */}
      </div>
    </header>
  );
}
