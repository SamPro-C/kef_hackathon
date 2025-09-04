
import Link from 'next/link';
import { BookHeart, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookHeart className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">KEF Journey</span>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} KEF Journey 98%.</p>
            <p className="text-sm text-background/70">A hackathon entry for KEF.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-background hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-background hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-background hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
