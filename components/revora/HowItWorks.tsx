"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  Bot,
  Star,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Customer Scans QR",
    description:
      "Customers scan your unique Revora QR code placed at your business.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Bot,
    title: "AI Generates Review",
    description:
      "Revora AI helps customers write a natural and professional review.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Star,
    title: "Review Posted",
    description:
      "The customer publishes the review directly on your Google Business Profile.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Business Grows",
    description:
      "More reviews improve your ranking, trust and customer conversions.",
    color: "from-emerald-500 to-green-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#070914] py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
            Process
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            How
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Revora Works
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Collect authentic Google Reviews in four simple steps using AI,
            automation and QR technology.
          </p>
        </motion.div>

        <div className="relative mt-24 grid gap-10 lg:grid-cols-4">

          {/* Timeline */}

          <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color}`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            From QR Scan to Google Review in Under 60 Seconds
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-gray-400">
            Revora removes friction from the review process, helping businesses
            collect more authentic Google Reviews and improve their online
            reputation faster.
          </p>
        </motion.div>

      </div>
    </section>
  );
}