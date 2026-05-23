import Image from "next/image";
import FadeUp from "./FadeUp";
const projects = [
  {
    title: "Luxury Fashion Brand",
    category: "Branding",
    image: "/images/project2.png",
  },
  {
    title: "Modern SaaS Website",
    category: "Web Development",
    image: "/images/project1.png",
  },
  {
    title: "Restaurant Marketing",
    category: "Social Media",
    image: "/images/project3.png",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore some of our premium digital experiences and creative work.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
  <FadeUp key={index}>
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:scale-[1.02] transition duration-500"
            >

              <div className="relative h-[400px] overflow-hidden">

  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

    <div className="text-center p-6">
      <p className="text-cyan-400 text-sm uppercase tracking-[3px] mb-3">
        {project.category}
      </p>

      <h3 className="text-3xl font-bold">
        {project.title}
      </h3>
    </div>

  </div>
</div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">

                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                  View Project
                </button>

              </div>

         </div>
  </FadeUp>
))
}

        </div>
      </div>
    </section>
  );
}