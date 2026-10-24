"use client";

import FadeUp from "./FadeUp";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Star,
  ArrowRight,
  CheckCircle2,
  UtensilsCrossed,
} from "lucide-react";

const products = [
  {
    title: "Revora AI",
    badge: "LIVE",
    icon: <Star className="w-7 h-7" />,
    description:
      "AI-powered reputation management platform to generate better Google reviews, collect customer feedback, and grow local SEO.",
    features: [
      "AI Review Generator",
      "Google Review QR",
      "Multi Business Dashboard",
      "Review Analytics",
      "Team Management",
    ],
    href: "/revora",
    primary: "Explore Product",
    secondary: "Book Demo",
    external: false,
    gradient: "from-purple-600 to-cyan-500",
    border: "hover:border-cyan-400/40",
  },
  {
    title: "GrrowZo AI OS",
    badge: "BETA",
    icon: <Bot className="w-7 h-7" />,
    description:
      "A complete AI workspace for content creation, automation, AI agents, business operations and productivity.",
    features: [
      "AI Agents",
      "Content Studio",
      "AI Video Generator",
      "Workflow Automation",
      "Business Assistant",
    ],
    href: "/ai-os",
    primary: "Preview",
    secondary: "Coming Soon",
    external: false,
    gradient: "from-emerald-500 to-blue-500",
    border: "hover:border-emerald-400/40",
  },
  {
    title: "RestoPulse",
    badge: "LIVE",
    icon: <UtensilsCrossed className="w-7 h-7" />,
    description:
      "A smart restaurant ordering and loyalty platform that streamlines table ordering, kitchen operations, payments, and customer engagement.",
    features: [
      "QR-Based Table Ordering",
      "Real-Time Kitchen Dashboard",
      "GPay & PhonePe Payments",
      "Google Review Integration",
      "WhatsApp Loyalty & Sales Reports",
    ],
    href: "https://restopulse.grrowzo.com/",
    primary: "Explore RestoPulse",
    secondary: "Visit Live Platform",
    external: true,
    gradient: "from-orange-500 to-rose-500",
    border: "hover:border-orange-400/40",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
              Products
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Built By GrrowZo
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Powerful software products designed to help businesses automate
              operations, improve customer experience, and accelerate digital
              growth.
            </p>
          </div>
        </FadeUp>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <FadeUp key={product.title}>
              <div
                className={`group h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 ${product.border}`}
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                  >
                    {product.icon}
                  </div>

                  <span
                    className={`bg-gradient-to-r ${product.gradient} px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10 flex-grow">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-cyan-400 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {product.external ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${product.gradient} px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300`}
                    >
                      {product.primary}
                      <ArrowRight size={18} />
                    </a>
                  ) : (
                    <Link
                      href={product.href}
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${product.gradient} px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300`}
                    >
                      {product.primary}
                      <ArrowRight size={18} />
                    </Link>
                  )}

                  {product.external ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center border border-white/10 hover:border-orange-400 px-6 py-3 rounded-full transition duration-300"
                    >
                      {product.secondary}
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-center border border-white/10 hover:border-cyan-400 px-6 py-3 rounded-full transition duration-300"
                    >
                      {product.secondary}
                    </Link>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp>
          <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Discover GrrowZo&apos;s software products to streamline
              operations, improve customer experience, and grow your business
              faster.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://restopulse.grrowzo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 rounded-full hover:scale-105 transition duration-300"
              >
                Explore RestoPulse
                <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="border border-white/10 px-8 py-4 rounded-full hover:border-cyan-400 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}