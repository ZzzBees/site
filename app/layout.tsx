import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 min-h-screen flex flex-col`}>
        <header className="bg-amber-400 text-black">
          <Navbar />
        </header>
        <main className="flex-grow container mx-auto px-4 py-4">
          {children}
        </main>
        <footer className="bg-amber-400 text-black text-center py-2">
          <p>&copy; 2024 zZz Bees. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
