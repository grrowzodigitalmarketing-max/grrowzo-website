"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/revora" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-lg font-bold text-white">
            R
          </div>

          <div>
            <h2 className="text-xl font-black text-white">
              Revora
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}AI
              </span>
            </h2>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <Link
            href="/revora/login"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400"
          >
            Login
          </Link>

          <Link
            href="/revora/register"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Start Free Trial
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-6 px-6 py-8">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="block text-lg text-gray-300 hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}

              <div className="space-y-4 pt-4">

                <Link
                  href="/login"
                  className="block rounded-xl border border-white/10 py-3 text-center font-medium text-white"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 text-center font-semibold text-white"
                >
                  Start Free Trial
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}