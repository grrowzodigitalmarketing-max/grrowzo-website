"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          GRROWZO
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full">
            Home
          </a>

          <a href="#services" className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full">
            Services
          </a>

          <a href="#portfolio" className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full">
            Portfolio
          </a>

          <a href="#about" className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full">
            About
          </a>

          <a href="#contact" className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-transform">
          Book Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <nav className="flex flex-col items-center gap-6 py-10 text-lg">

            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-full mt-4">
              Book Consultation
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}