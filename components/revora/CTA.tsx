"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#10131d] to-purple-500/10 p-14 backdrop-blur-xl"
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative text-center">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              🚀 Start Growing Today
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">
              Ready to Get More
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Google Reviews?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Join businesses using Revora AI to collect authentic Google
              Reviews, improve local SEO and build customer trust faster than
              ever.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="https:///revora/login"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-white/10"
              >
                <PlayCircle className="h-5 w-5" />
                Book Demo
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">

              <div>✅ No Credit Card Required</div>

              <div>⚡ Setup in Under 5 Minutes</div>

              <div>⭐ Trusted by Growing Businesses</div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}