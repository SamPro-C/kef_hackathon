import Link from 'next/link';
import { Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-600 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} Kenya Education Fund. All rights reserved.</p>
          <p className="mt-1">Prototype for KEF Alumni Hack-a-thon.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-primary transition-colors">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Youtube size={20} />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
