'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden sm:fixed sm:top-5 sm:left-1/2 sm:-translate-x-1/2 sm:z-50">
        <nav className="glass px-6 py-3 rounded-full">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/80">
            <li className="text-white">MS</li>
            <li><a href="#work" className="hover:text-[#00ff00] transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-[#00ff00] transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-[#00ff00] transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-[#00ff00] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#00ff00]">MS</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-white transition-all ${ isOpen ? 'rotate-45 translate-y-2' : '' }`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${ isOpen ? 'opacity-0' : '' }`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${ isOpen ? '-rotate-45 -translate-y-2' : '' }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mt-4 pb-4 border-t border-white/10 pt-4">
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-white/80">
              <li><a href="#work" onClick={() => setIsOpen(false)} className="hover:text-[#00ff00] transition-colors">Work</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#00ff00] transition-colors">About</a></li>
              <li><a href="#services" onClick={() => setIsOpen(false)} className="hover:text-[#00ff00] transition-colors">Services</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#00ff00] transition-colors">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
