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
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
  },
  {
    title: "Meta Ads",
    icon: <FaBullhorn />,
  },
  {
    title: "Branding Design",
    icon: <FaPalette />,
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
  },
  {
    title: "AI Automation",
    icon: <FaRobot />,
  },
  {
    title: "Content Creation",
    icon: <FaVideo />,
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
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 mb-6 flex items-center justify-center text-2xl text-white">
  {service.icon}
</div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Premium digital solutions designed to help businesses grow faster.
              </p>
            </div>
  </FadeUp>
))
}

        </div>
      </div>
    </section>
  );
}