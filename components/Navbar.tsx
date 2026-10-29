import React from 'react';
import Link from 'next/link';

export const Navbar = ({ onOpenInquiry }: { onOpenInquiry: () => void }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/80 border-b border-amber-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-amber-500 group-hover:text-amber-400 transition">
            SEMA<span className="text-stone-100">AFRICA</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#interpreters" className="hover:text-amber-400 transition">Interpreters</a>
          <a href="#tourism" className="hover:text-amber-400 transition">Destinations</a>
          <a href="#about" className="hover:text-amber-400 transition">About Us</a>
        </nav>
        <button
          onClick={onOpenInquiry}
          className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-900/20 transition transform active:scale-95 text-sm"
        >
          Book an Interpreter
        </button>
      </div>
    </header>
  );
};
