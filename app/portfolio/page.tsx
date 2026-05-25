import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Fashion Brand",
    category: "Branding",
    image: "/images/Luxury Fashion Brand.png",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "luxury-fashion-brand",
  },

  {
    title: "Modern SaaS Website",
    category: "Web Development",
    image: "/images/Modern SaaS Website.png",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "modern-saas-website",
  },

  {
    title: "Marketing Dashboard",
    category: "UI/UX Design",
    image: "/images/Marketing Dashboard.png",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "marketing-dashboard",
  },

  {
    title: "Social Campaign",
    category: "Digital Marketing",
    image: "/images/Social Campaign.jpg",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "social-campaign",
  },

  {
    title: "AI Automation Platform",
    category: "Automation",
    image: "/images/AI Automation Platform.png",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "ai-automation-platform",
  },

  {
    title: "Startup Branding Identity",
    category: "Branding",
    image: "/images/Startup Branding Identity.png",
    tags: ["Branding", "UI Design", "Marketing"],
    slug: "startup-branding-identity",
  },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
        <main className="bg-black text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

        <FadeUp>

          <div className="max-w-7xl mx-auto text-center relative z-10">

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Our Creative
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Projects
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore premium digital experiences crafted for modern brands,
              startups, and businesses.
            </p>

          </div>

        </FadeUp>

      </section>
      {/* Filters */}
<section className="pb-16 px-6">

  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">

    {[
      "All",
      "Branding",
      "Web Development",
      "UI/UX Design",
      "Automation",
      "Marketing",
    ].map((item, index) => (
      <button
        key={index}
        className={`px-6 py-3 rounded-full border transition duration-300 ${
          index === 0
            ? "bg-gradient-to-r from-purple-600 to-cyan-500 border-transparent"
            : "bg-white/5 border-white/10 hover:border-cyan-400/40 hover:bg-white/10"
        }`}
      >
        {item}
      </button>
    ))}

  </div>

</section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <FadeUp key={index}>

              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.05)] hover:shadow-[0_0_60px_rgba(0,255,255,0.12)]">

                <div className="relative h-[400px] overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8">

                    <div>

                      <p className="text-cyan-400 text-xs uppercase tracking-[4px] mb-2">
                        {project.category}
                      </p>

                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {project.title}
                      </h3>
                      <Link
  href={`/portfolio/${project.slug}`}
  className="inline-block mt-5 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 hover:translate-x-1"
>
  View Case Study
</Link>
<div className="flex flex-wrap gap-2 mt-5">

  {project.tags.map((tag, i) => (
    <span
      key={i}
      className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300"
    >
      {tag}
    </span>
  ))}

</div>
                    </div>

                  </div>

                </div>

              </div>

            </FadeUp>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <FadeUp>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-700/20 to-cyan-500/10 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-xl">

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let’s Build Your Next Big Project
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              We create premium digital solutions designed for growth and impact.
            </p>

             <a
  href="https://wa.me/918989866593?text=Hi%20Grrowzo%2C%20I%20want%20to%20start%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full font-medium text-lg hover:scale-105 active:scale-95 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.7)]"
>
  Start Your Project
</a>

          </div>

        </FadeUp>

      </section>

      <Footer />

    </main>
   </PageTransition>
  );
}