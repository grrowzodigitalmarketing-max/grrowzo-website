"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Revora AI?",
    answer:
      "Revora AI is an AI-powered reputation management platform that helps businesses collect more Google Reviews, manage customer feedback, and improve local SEO.",
  },
  {
    question: "How does the AI Review Generator work?",
    answer:
      "Customers answer a few simple questions and Revora AI generates a natural review suggestion that they can edit before posting on Google.",
  },
  {
    question: "Can I manage multiple businesses?",
    answer:
      "Yes. Business and Enterprise plans allow you to manage multiple business locations from a single dashboard.",
  },
  {
    question: "Does Revora improve local SEO?",
    answer:
      "Yes. More authentic Google Reviews, consistent ratings, and customer engagement help strengthen your Google Business Profile over time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription whenever you want.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "No. Setup takes only a few minutes. Simply connect your Google Review link, generate your QR code, and start collecting reviews.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#070914] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Frequently Asked
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Everything you need to know before getting started with Revora AI.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-7 pb-7 leading-8 text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}