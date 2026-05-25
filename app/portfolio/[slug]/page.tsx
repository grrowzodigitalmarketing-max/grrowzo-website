const projects = [
  {
    slug: "luxury-fashion-brand",
    title: "Luxury Fashion Brand",
    category: "Branding",
    image: "/images/Luxury Fashion Brand.png",
    description:
      "Premium branding and website experience designed for a modern luxury fashion label.",
  },

  {
    slug: "modern-saas-website",
    title: "Modern SaaS Website",
    category: "Web Development",
    image: "/images/Modern SaaS Website.png",
    description:
      "Modern SaaS platform with premium UI/UX and scalable architecture.",
  },

  {
    slug: "marketing-dashboard",
    title: "Marketing Dashboard",
    category: "UI/UX Design",
    image: "/images/Marketing Dashboard.png",
    description:
      "Advanced analytics dashboard with interactive data visualization.",
  },

  {
    slug: "social-campaign",
    title: "Social Campaign",
    category: "Digital Marketing",
    image: "/images/Social Campaign.jpg",
    description:
      "Creative social media campaign designed to maximize audience engagement.",
  },

  {
    slug: "ai-automation-platform",
    title: "AI Automation Platform",
    category: "Automation",
    image: "/images/AI Automation Platform.png",
    description:
      "AI-powered automation platform for scalable business operations.",
  },

  {
    slug: "startup-branding-identity",
    title: "Startup Branding Identity",
    category: "Branding",
    image: "/images/Startup Branding Identity.png",
    description:
      "Premium startup branding system with modern visual identity.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Project Not Found
      </div>
    );
  }

  return (
  <main className="min-h-screen bg-black text-white overflow-hidden">

    {/* Hero */}
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="max-w-4xl">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
            {project.category}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            {project.title}
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            {project.description}
          </p>

        </div>

      </div>

    </section>

    {/* Showcase Image */}
    <section className="pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.08)]">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />

        </div>

      </div>

    </section>

    {/* Overview */}
    <section className="pb-24 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Overview
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Premium Digital Experience
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We crafted a cinematic digital experience focused on luxury aesthetics,
            immersive visuals, smooth interactions, and premium branding.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            The project was designed to increase engagement, improve conversions,
            and deliver a memorable premium brand identity.
          </p>

        </div>

        {/* Right Stats */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl space-y-8">

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Industry
            </p>

            <h3 className="text-2xl font-semibold">
              Fashion
            </h3>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Services
            </p>

            <h3 className="text-2xl font-semibold">
              Branding & Web Design
            </h3>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Timeline
            </p>

            <h3 className="text-2xl font-semibold">
              6 Weeks
            </h3>
          </div>

        </div>

      </div>

    </section>

    {/* Results */}
    <section className="pb-32 px-6 relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Results
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Project Impact
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center">

            <h3 className="text-6xl font-bold text-cyan-400 mb-4">
              +387%
            </h3>

            <p className="text-gray-400">
              Engagement Growth
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center">

            <h3 className="text-6xl font-bold text-purple-400 mb-4">
              5X
            </h3>

            <p className="text-gray-400">
              Conversion Increase
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center">

            <h3 className="text-6xl font-bold text-cyan-400 mb-4">
              98%
            </h3>

            <p className="text-gray-400">
              Customer Satisfaction
            </p>

          </div>

        </div>

      </div>

    </section>

  </main>
);
  
}