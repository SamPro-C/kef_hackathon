import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KEF - Sponsor a Dream",
  description: "Interactive prototype for the KEF Alumni Hack-a-thon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <footer className="mt-8 py-6 text-center text-sm text-gray-500">
          Prototype for KEF Alumni Hack-a-thon. This demo uses placeholder avatars and KEF public stats for storytelling.
        </footer>
      </body>
    </html>
  );
}
