import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import PageTransition from "@/components/PageTransition";

import {
  FaCode,
  FaSearch,
  FaBullhorn,
  FaPalette,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaCode />,
    description:
      "Modern responsive websites designed for speed, branding, and conversions.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    description:
      "Rank higher on Google and generate organic traffic with advanced SEO strategies.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description:
      "Performance-driven campaigns across Meta, Google, and social platforms.",
  },
  {
    title: "Branding Design",
    icon: <FaPalette />,
    description:
      "Premium branding solutions including logos, identity, and visual systems.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    description:
      "Scalable mobile applications with modern UI and smooth performance.",
  },
  {
    title: "AI Automation",
    icon: <FaRobot />,
    description:
      "Smart AI workflows and automation systems to streamline operations.",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
    <main className="bg-black text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

        <FadeUp>

          <div className="max-w-7xl mx-auto text-center relative z-10">

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
              Our Services
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Premium Digital
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We help brands grow with premium websites, marketing,
              branding, automation, and scalable digital strategies.
            </p>

          </div>

        </FadeUp>

      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <FadeUp key={index}>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:scale-[1.02] transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>

      </section>

      {/* Process */}
      <section className="py-24 px-6 relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">

          <FadeUp>

            <div className="text-center mb-16">

              <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                Our Process
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">
                How We Work
              </h2>

            </div>

          </FadeUp>

          <div className="grid lg:grid-cols-4 gap-6">

            {[
              "Research",
              "Strategy",
              "Development",
              "Launch",
            ].map((step, index) => (
              <FadeUp key={index}>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {step}
                  </h3>

                </div>

              </FadeUp>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <FadeUp>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-700/20 to-cyan-500/10 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-xl">

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready To Grow Your Brand?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Let’s build powerful digital experiences that drive real results.
            </p>

            <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              Start Your Project
            </button>

          </div>

        </FadeUp>

      </section>

      <Footer />

    </main>
    </PageTransition>
  );
}