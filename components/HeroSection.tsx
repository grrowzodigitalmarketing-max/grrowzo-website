"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-8">
            Premium Digital Growth Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Build
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Digital Experiences
            </span>
            <br />
            That Drive Growth
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
            We help brands grow with premium websites, branding,
            marketing, automation, and scalable digital solutions.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full font-medium hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-transform">
              Start Your Project
            </button>

            <button className="border border-white/20 bg-white/5 backdrop-blur-lg px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition">
              View Portfolio
            </button>

          </div>
        </div>

        {/* Right Card */}
        <motion.div
          className="relative"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-gray-400 text-sm">
                  Campaign Analytics
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  +387%
                </h3>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500" />

            </div>

            <div className="space-y-4">

              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>

              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[70%] h-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>

              <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                <div className="w-[92%] h-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">

                <p className="text-gray-400 text-sm">
                  Revenue
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  $128K
                </h4>

              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5">

                <p className="text-gray-400 text-sm">
                  Growth
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  5X
                </h4>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}