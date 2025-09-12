import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
              KEF
            </div>
            <span className="font-bold text-lg">Sponsor a Dream</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-orange-500 transition-colors">
              KEF Stories
            </Link>
            <Link href="/impact" className="text-gray-600 hover:text-orange-500 transition-colors">
              Impact
            </Link>
            <Link href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
