'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-4 rtl:space-x-reverse">
          <Image
            src="/zzzbees.png"
            alt="Zzz Bees Logo"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </Link>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="md:flex md:space-x-6">
                <li><Link href="/about" className="hover:text-amber-600 text-lg font-bold">About Us</Link></li>
                <li><Link href="/store" className="hover:text-amber-600 text-lg font-bold">Store</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}