"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  UtensilsCrossed,
  Hospital,
  Hotel,
  ShoppingBag,
  Dumbbell,
  GraduationCap,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: Scissors,
    title: "Salon & Spa",
    description: "Collect more Google Reviews from happy customers.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Increase local visibility with authentic reviews.",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description: "Build trust with genuine patient feedback.",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Improve ratings and attract more bookings.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Stores",
    description: "Boost customer confidence and footfall.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    description: "Showcase member experiences through reviews.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Collect testimonials from students and parents.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Build credibility with verified client reviews.",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-[#070914] py-28 overflow-hidden">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
            Industries
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Built for
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Every Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Whether you run a local shop or manage multiple locations,
            Revora helps you collect more Google Reviews and build trust.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {industry.description}
                </p>

                <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}