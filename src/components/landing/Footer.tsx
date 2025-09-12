import Link from 'next/link';
import { Twitter, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                KEF
              </div>
              <span className="font-bold text-lg">Sponsor a Dream</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Self-reliance for people in Kenya through education.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/stories" className="text-muted-foreground hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
              <li><Link href="/game" className="text-muted-foreground hover:text-primary transition-colors">The Game</Link></li>
              <li><Link href="https://kenyaeducationfund.org" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">KEF Website</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/kenyaed" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://youtube.com/@kenyaeducationfund.?si=JKMCtb2lr6SJa5ds" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="https://instagram.com/kenyaeducationfund" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com/kenyaeducationfund" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/kenya-education-fund/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

           {/* Column 4: Legal */}
           <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://www.kenyaeducationfund.org/privacy-policy/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="https://www.kenyaeducationfund.org/terms-of-use/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kenya Education Fund. All rights reserved.</p>
          <p className="mt-1">This is an interactive prototype developed for the KEF Alumni Hack-a-thon.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
