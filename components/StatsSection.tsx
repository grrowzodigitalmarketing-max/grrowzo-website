"use client";

import CountUp from "react-countup";
import FadeUp from "./FadeUp";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 12,
    suffix: "M+",
    label: "Reach Generated",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 5,
    suffix: "X",
    label: "ROI Campaigns",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (
  <FadeUp key={index}>
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-500/40 transition duration-300"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <>
  <CountUp end={item.value} duration={3} />
  {item.suffix}
</>
            </h3>

            <p className="text-gray-400 mt-4">
              {item.label}
            </p>
          </div>
  </FadeUp>
))
}

      </div>
    </section>
  );
}