"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Urban Salon & Spa",
    owner: "Salon Owner",
    rating: 5,
    review:
      "Revora AI made collecting Google Reviews incredibly easy. Within a month our reviews increased by more than 40%.",
  },
  {
    name: "Prestige Auto Decor",
    owner: "Business Owner",
    rating: 5,
    review:
      "The QR Review feature is fantastic. Customers scan, write a review, and we're seeing much better engagement.",
  },
  {
    name: "Divya Hospital",
    owner: "Hospital Manager",
    rating: 5,
    review:
      "The dashboard is simple and the AI Review Generator saves time while helping patients leave meaningful feedback.",
  },
  {
    name: "Elite Fitness Gym",
    owner: "Gym Owner",
    rating: 5,
    review:
      "Our Google Business Profile has become much stronger since using Revora. Highly recommended.",
  },
  {
    name: "Royal Residency Hotel",
    owner: "Hotel Manager",
    rating: 5,
    review:
      "Review collection became effortless. We now receive consistent positive reviews every week.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Growing Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Businesses across different industries trust Revora AI to collect
            authentic Google Reviews and strengthen their online reputation.
          </p>
        </motion.div>

        <div className="relative mt-20 overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[380px] shrink-0 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mt-6 leading-8 text-gray-300">
                  "{item.review}"
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-xl font-bold text-white">
                    {item.name}
                  </h4>

                  <p className="text-gray-400">
                    {item.owner}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">

          <div className="text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              500+
            </h3>
            <p className="mt-2 text-gray-400">
              Businesses
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              50K+
            </h3>
            <p className="mt-2 text-gray-400">
              Reviews Generated
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              4.9★
            </h3>
            <p className="mt-2 text-gray-400">
              Average Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}