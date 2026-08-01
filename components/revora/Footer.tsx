"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const productLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Dashboard", href: "/login" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040611]">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-black text-white">
              Revora
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              AI-powered reputation management platform helping businesses
              collect more Google Reviews and grow their online presence.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                support@grrowzo.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-cyan-400" />
                +91 89898 66593
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-cyan-400" />
                India
              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">

              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                  >
                    {link.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CTA */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Get Started
            </h3>

            <p className="mt-6 text-gray-400 leading-7">
              Start collecting more Google Reviews today with Revora AI.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Start Free Trial
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Revora AI. All rights reserved.
          </p>

          <p>
            Built with ❤️ by <span className="text-cyan-400">GrrowZo IT Solutions</span>
          </p>

        </div>

      </div>

    </footer>
  );
}