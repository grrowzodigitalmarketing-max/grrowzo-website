"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Star,
  QrCode,
  Building2,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "Google Rating",
    value: "4.9★",
    desc: "Average customer rating",
  },
  {
    icon: QrCode,
    title: "QR Reviews",
    value: "2K+",
    desc: "Reviews collected",
  },
  {
    icon: Building2,
    title: "Businesses",
    value: "120+",
    desc: "Using Revora",
  },
  {
    icon: BarChart3,
    title: "Growth",
    value: "+38%",
    desc: "Average review growth",
  },
];

export default function DashboardPreview() {
  return (
    <section className="relative py-28 bg-[#070914] overflow-hidden">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="text-cyan-400 tracking-[0.3em] uppercase text-sm">
            Dashboard
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Everything You Need to Manage
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Google Reviews
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Manage reviews, QR codes, businesses, analytics and AI generated
            responses from one beautiful dashboard.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 font-semibold text-white">
                {item.title}
              </p>

              <p className="mt-2 text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/revora-dashboard.png"
            alt="Revora Dashboard"
            width={1800}
            height={1100}
            className="rounded-3xl"
          />
</div>
          {/* Floating Badge */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute left-10 top-10 rounded-2xl border border-white/10 bg-[#10131d]/95 p-5"
          >
            <p className="text-sm text-gray-400">
              Reviews Generated
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              +1,842
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: 1,
            }}
            className="absolute right-10 bottom-10 rounded-2xl border border-white/10 bg-[#10131d]/95 p-5"
          >
            <p className="text-sm text-gray-400">
              Average Rating
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-400">
              ★ 4.9
            </h3>
          </motion.div>
        </motion.div>

        {/* CTA */}

        <div className="mt-16 flex justify-center">
          <a
            href="https://revora.grrowzo.com/login"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Explore Dashboard

            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}