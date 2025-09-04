
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Inter, Montserrat } from 'next/font/google';

// Font setup
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'KEF Journey 98%',
  description: 'A modern web application showcasing the impact of the Kenya Education Fund.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme: 'dark'}}>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
