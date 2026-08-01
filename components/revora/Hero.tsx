"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  QrCode,
  Building2,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
>
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/15 blur-[160px]" />
    </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-20 px-6 lg:flex-row">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI Reputation Management Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
            Generate More{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
              Google Reviews
            </span>{" "}
            Using AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Revora AI helps businesses collect authentic Google Reviews,
            generate AI-powered review suggestions, improve local SEO,
            and manage multiple business locations from one powerful dashboard.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https:///revora/register"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              Book Demo
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 text-sm text-gray-300">
            <Feature icon={<Star />} text="AI Review Generator" />
            <Feature icon={<QrCode />} text="QR Review Collection" />
            <Feature icon={<Building2 />} text="Multi Business" />
            <Feature icon={<BarChart3 />} text="Review Analytics" />
          </div>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Badge text="AI Powered" />
            <Badge text="Secure Platform" />
            <Badge text="SEO Optimized" />
            <Badge text="Google Reviews" />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center"
        >
            <div className="absolute inset-0 flex items-center justify-center">
  <div className="h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]" />
</div>
          <div className="relative w-full max-w-[720px] rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <Image
  src="/images/revora-dashboard.png"
  alt="Revora Dashboard"
  width={1400}
  height={900}
  className="w-full rounded-2xl"
/>
          </div>

          {/* Floating Cards */}

          <FloatingCard
            className="-left-14 top-8"
            title="4.9 Rating"
            subtitle="Google Reviews"
          />

          <FloatingCard
            className="-right-12 top-1/2 -translate-y-1/2"
            title="AI Powered"
            subtitle="Review Generator"
          />

          <FloatingCard
            className="left-10 -bottom-8"
            title="QR Reviews"
            subtitle="Scan & Review"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg">
      <div className="text-cyan-400">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
      {text}
    </div>
  );
}

function FloatingCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className={`absolute rounded-2xl border border-white/10 bg-[#11131f]/90 px-5 py-4 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-2 text-cyan-400">
        <ShieldCheck className="h-5 w-5" />
        <span className="text-xs uppercase tracking-widest">
          Revora
        </span>
      </div>

      <h3 className="mt-2 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="text-sm text-gray-400">{subtitle}</p>
    </motion.div>
  );
}