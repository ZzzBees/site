import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zzz Bees",
  description: "Because bees are awesome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4">
                <Image
                  src="/zzzbees.png"
                  alt="Zzz Bees Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/about" className="text-black hover:text-yellow-600 text-lg font-bold">About Us</Link></li>
                <li><Link href="/store" className="text-black hover:text-yellow-600 text-lg font-bold">Store</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-black text-yellow-300 text-center py-4">
          <p>&copy; 2024 Zzz Bees. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
