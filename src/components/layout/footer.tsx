import Link from 'next/link';
import { BookHeart, Twitter, Linkedin, Facebook, Instagram, Youtube, HeartHandshake, UserPlus, Gift } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground/80 border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="flex flex-col gap-4 items-start">
            <Link href="/" className="flex items-center gap-2">
              <BookHeart className="h-8 w-8 text-primary" />
              <span className="font-headline font-bold text-xl text-foreground">KEF Journey</span>
            </Link>
            <p className="text-sm">
              Breaking the cycle of poverty in Kenya through education. We invest in futures.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <HeartHandshake className="h-4 w-4" />
                  <span>Sponsor a Student</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <UserPlus className="h-4 w-4" />
                  <span>Become a Mentor</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                   <Gift className="h-4 w-4" />
                  <span>Donate</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="font-headline font-semibold text-foreground mb-4">Follow Our Journey</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
               <Link href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
               <Link href="#" className="text-foreground/80 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
           <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Kenya Education Fund. All rights reserved.</p>
            <p className="text-xs mt-1">This website is a hackathon project entry and is not the official KEF website.</p>
           </div>
           <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
