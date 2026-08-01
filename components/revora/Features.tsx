"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  QrCode,
  BarChart3,
  Building2,
  MessageSquareText,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Review Generator",
    description:
      "Generate natural, professional Google review suggestions in seconds using AI.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: QrCode,
    title: "QR Review Collection",
    description:
      "Customers simply scan your QR code and leave reviews directly on Google.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: BarChart3,
    title: "Review Analytics",
    description:
      "Track review performance, ratings, growth and customer engagement.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Building2,
    title: "Multi Business",
    description:
      "Manage multiple business locations from one centralized dashboard.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MessageSquareText,
    title: "Customer Feedback",
    description:
      "Collect structured customer feedback before requesting public reviews.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "AI Powered Automation",
    description:
      "Automate review collection and simplify your reputation management workflow.",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-28 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 tracking-[0.35em] uppercase text-sm">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Grow Your Reputation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Revora combines AI, automation and analytics into one modern
            platform to help local businesses earn more Google Reviews.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color}`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 transition-all duration-300 group-hover:border-cyan-400/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}