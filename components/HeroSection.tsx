
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center pt-32 md:pt-24 px-6 overflow-hidden"
>

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

  {/* Gradient Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
{/* Floating Badges */}

<div className="absolute top-32 left-10 hidden lg:flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full animate-pulse z-20">

  <div className="w-3 h-3 rounded-full bg-cyan-400" />

  <p className="text-sm text-white">
    Reliable Agency
  </p>

</div>

<div className="absolute bottom-32 right-10 hidden lg:flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full animate-pulse z-20">

  <div className="w-3 h-3 rounded-full bg-purple-400" />

  <p className="text-sm text-white">
    100+ Projects Delivered
  </p>

</div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>

          

          <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
>

  We Build{" "}

  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
    Digital Experiences
  </span>

  <br />

  That Drive Growth

</motion.h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
            We help brands grow with premium websites, branding,
            marketing, automation, and scalable digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <a
  href="https://wa.me/918989866593?text=Hi%20Grrowzo%2C%20I%20want%20to%20start%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 px-6 sm:px-8 py-4 rounded-full font-medium text-base sm:text-lg hover:scale-105 active:scale-95 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.7)] whitespace-nowrap text-center"
>
  Start Your Project
</a>

            <Link
  href="/portfolio"
  className="border border-white/20 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition duration-300 hover:scale-105 active:scale-95 whitespace-nowrap text-center"
>
  View Portfolio
</Link>

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
      {/* Scroll Indicator */}

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3">

  <p className="text-xs tracking-[4px] uppercase text-gray-400">
    Scroll
  </p>

  <div className="w-[2px] h-16 bg-white/20 relative overflow-hidden rounded-full">

    <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-cyan-400 to-purple-500 animate-bounce rounded-full" />

  </div>

</div>
    </section>
  );
}