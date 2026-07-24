import FadeUp from "./FadeUp";
import {
  FaCode,
  FaSearch,
  FaBullhorn,
  FaPalette,
  FaMobileAlt,
  FaRobot,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaCode />,
    description:
      "Custom Next.js websites with premium UI, lightning-fast performance, SEO optimization, and scalable architecture.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    description:
      "Boost your Google rankings with technical SEO, keyword research, local SEO, and performance optimization.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
    description:
      "Grow your brand with engaging content, strategic campaigns, audience engagement, and consistent social media management.",
  },
  {
    title: "Meta Ads",
    icon: <FaBullhorn />,
    description:
      "Generate high-quality leads and sales using data-driven Facebook & Instagram advertising campaigns.",
  },
  {
    title: "Branding Design",
    icon: <FaPalette />,
    description:
      "Professional logos, brand identity, packaging, social creatives, and marketing materials that build trust.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    description:
      "Custom Android, iOS, and web applications designed for speed, security, and business growth.",
  },
  {
    title: "AI Automation",
    icon: <FaRobot />,
    description:
      "AI-powered chatbots, workflow automation, CRM integration, review systems, and smart business solutions.",
  },
  {
    title: "Content Creation",
    icon: <FaVideo />,
    description:
      "Premium reels, UGC ads, product photography, promotional videos, and creative content for every platform.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Digital Services
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Complete growth solutions for modern businesses and ambitious brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeUp key={index}>
              <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 mb-6 flex items-center justify-center text-2xl text-white">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}