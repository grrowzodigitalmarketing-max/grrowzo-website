"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (path: string) =>
    `transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${
      pathname === path
        ? "text-white after:w-full"
        : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
  src="/images/logo.png"
  alt="Grrowzo Logo"
  width={160}
  height={60}
  priority
  className="object-contain w-[120px] sm:w-[140px] md:w-[180px] h-auto"
/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>

          <Link href="/services" className={navLinkClass("/services")}>
            Services
          </Link>
          <div
  className="relative group"
  onMouseEnter={() => setProductsOpen(true)}
  onMouseLeave={() => setProductsOpen(false)}
>
  <button className="flex items-center gap-1 text-gray-300 hover:text-white transition">
    Products
    <ChevronDown
      size={16}
      className={`transition duration-300 ${
        productsOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  <div
    className={`absolute top-10 left-0 w-72 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
      productsOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
  >
    <Link
      href="/revora"
      className="block px-6 py-5 hover:bg-white/5 transition border-b border-white/10"
    >
      <div className="font-semibold text-white">
        Revora AI
      </div>

      <div className="text-sm text-gray-400 mt-1">
        AI Reputation Management Platform
      </div>
    </Link>

    <Link
      href="/ai-os"
      className="block px-6 py-5 hover:bg-white/5 transition"
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">
          GrrowZo AI OS
        </span>

        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
          BETA
        </span>
      </div>

      <div className="text-sm text-gray-400 mt-1">
        AI Agents • Automation • Workspace
      </div>
    </Link>
  </div>
</div>
          <Link href="/portfolio" className={navLinkClass("/portfolio")}>
            Portfolio
          </Link>

          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

        </nav>

        {/* Desktop CTA */}
       <div className="hidden md:flex items-center gap-4">

  <Link
  href="/revora"
  className="bg-white/10 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 px-5 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap"
>
  Revora AI
</Link>

  <a
    href="https://wa.me/918989866593?text=Hi%20Grrowzo%2C%20I%20want%20to%20book%20a%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-full hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] whitespace-nowrap"
  >
    Book Consultation
  </a>

</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={32} />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center gap-8 text-2xl font-semibold pt-20">

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-5xl text-white"
          >
            ×
          </button>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Services
          </Link>
          <div className="text-center">
  <p className="text-gray-400 text-base mb-3">
    Products
  </p>

  <div className="flex flex-col gap-4">

    <Link
      href="/revora"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      Revora AI
    </Link>

    <Link
      href="/ai-os"
      onClick={() => setMenuOpen(false)}
      className="hover:text-cyan-400 transition"
    >
      GrrowZo AI OS
    </Link>

  </div>
</div>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>
<a
  href="https://whatsappmarketing.grrowzo.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
  className="hover:text-cyan-400 transition"
>
  WhatsApp Marketing
</a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full text-lg hover:scale-105 active:scale-95 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            Book Consultation
          </Link>

        </div>
      )}
    </header>
  );
}