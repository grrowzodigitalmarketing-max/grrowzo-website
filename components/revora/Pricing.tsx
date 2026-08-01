"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    badge: "Demo",
    highlighted: false,
    features: [
      "1 Business",
      "25 AI Reviews",
      "QR Review Collection",
      "Basic Dashboard",
      "Email Support",
    ],
  },
  {
    name: "Business",
    price: "₹999",
    period: "/month",
    badge: "Most Popular",
    highlighted: true,
    features: [
      "Unlimited Reviews",
      "AI Review Generator",
      "Analytics Dashboard",
      "Multiple Team Members",
      "Priority Support",
      "QR Review Collection",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    badge: "Enterprise",
    highlighted: false,
    features: [
      "Unlimited Businesses",
      "Dedicated Manager",
      "API Access",
      "Custom Branding",
      "Priority Support",
      "Enterprise Security",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Simple &
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Transparent Pricing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Choose a plan that fits your business and start collecting
            more Google Reviews today.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300
              ${
                plan.highlighted
                  ? "border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
                  {plan.badge}
                </div>
              )}

              {!plan.highlighted && (
                <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-8 text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="pb-2 text-gray-400">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-10 space-y-5">
                {plan.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check className="h-5 w-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https:///revora/login"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition
                ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105"
                    : "border border-white/10 text-white hover:border-cyan-400"
                }`}
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}