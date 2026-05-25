import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10 px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand */}
        <div>

          <Image
            src="/images/logo.png"
            alt="Grrowzo"
            width={220}
            height={90}
            className="object-contain mb-4"
          />

          <p className="text-gray-400 leading-relaxed">
            Premium digital growth agency helping brands scale with
            websites, branding, marketing, and automation.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Services
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <p>Website Development</p>
            <p>SEO Optimization</p>
            <p>Branding Design</p>
            <p>Social Media Marketing</p>
            <p>AI Automation</p>

          </div>

        </div>

        {/* Social */}
<div>

  <h3 className="text-xl font-semibold mb-6">
    Connect With Us
  </h3>

  <div className="flex gap-4">

    {/* Instagram */}
    <a
      href="https://instagram.com/grrowzo"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 transition duration-300"
    >
      <FaInstagram size={20} />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/company/grrowzo-digital-marketing"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 transition duration-300"
    >
      <FaLinkedinIn size={20} />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/918989866593"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 transition duration-300"
    >
      <FaWhatsapp size={20} />
    </a>

  </div>

</div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm relative z-10">

        © 2026 Grrowzo. All Rights Reserved.

      </div>

    </footer>
  );
}