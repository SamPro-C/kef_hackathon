import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { SidebarInset } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'EduConnect Kenya',
  description: 'Your gateway to Kenyan higher education resources.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen">
            <AppSidebar />
            <SidebarInset className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                {children}
              </main>
            </SidebarInset>
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
