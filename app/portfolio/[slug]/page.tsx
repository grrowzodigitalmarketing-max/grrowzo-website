const projects = [
  {
    slug: "sr-electrical-contractor",
    title: "SR Electrical & Contractor",
    category: "Corporate Website",
    image: "/images/sr-electrical-cover.jpg",

    description:
      "Corporate website developed for SR Electrical & Contractor featuring project management, admin dashboard, project galleries and responsive design.",

    industry: "Electrical Infrastructure",

    services:
      "Website Development, Admin Panel, Project Management",

    timeline: "3 Weeks",

    website: "https://srelectricalandcontractor.com",

    overview1:
      "SR Electrical & Contractor required a modern digital presence to showcase government, industrial, hospital and infrastructure electrical projects.",

    overview2:
      "We developed a scalable Next.js platform with project categories, image galleries, admin dashboard and responsive design.",

    features: [
      "Project Management System",
      "Admin Dashboard",
      "Project Categories",
      "Gallery Image Upload",
      "SEO Optimized Pages",
      "Mobile Responsive Design",
    ],

    results: [
      { value: "50+", label: "Projects Managed" },
      { value: "100%", label: "Responsive Design" },
      { value: "Admin", label: "Control Panel" },
    ],
  },

  {
    slug: "revora-ai-review-system",
    title: "Revora AI Review System",
    category: "AI SaaS Platform",
    image: "/images/revora-cover.png",

    description:
      "AI-powered review generation and reputation management platform designed to help businesses collect more Google reviews and improve local SEO.",

    industry: "AI & Local SEO",

    services:
      "AI Development, Review Automation, Dashboard Development",

    timeline: "4 Weeks",

    website: "https:///revora",

    overview1:
      "Revora AI is an intelligent review management platform developed to help businesses generate AI-powered Google reviews and improve local SEO performance.",

    overview2:
      "The platform includes AI review generation, QR code review collection, business dashboard, plan management and analytics for reputation growth.",

    features: [
      "AI Review Generator",
      "Google Review Integration",
      "QR Code Review Collection",
      "Business Dashboard",
      "Subscription Management",
      "Review Analytics",
    ],

    results: [
      { value: "3X", label: "Review Growth" },
      { value: "80%", label: "Time Saved" },
      { value: "AI", label: "Automation" },
    ],
  },
  {
  slug: "wellness-insight-stock-management",

  title: "Wellness Insight Stock Management",

  category: "Inventory Management Software",

  image: "/images/wellness-stock-cover.png",

  description:
    "Custom inventory and sales management software developed for Wellness Insights to streamline product tracking, stock control, partner management and business reporting.",

  industry: "Health & Wellness",

  services:
    "Web Application Development, Inventory Management, Admin Dashboard",

  timeline: "2 Weeks",

  website: "https://wellnessinsights.grrowzo.com",

  overview1:
    "Wellness Insights required a centralized system to manage products, inventory, partners, orders and sales operations from a single dashboard.",

  overview2:
    "We developed a custom web-based stock management platform with product tracking, category management, partner management, billing and reporting modules.",

  features: [
    "Inventory Management",
    "Product Management",
    "Category & Brand Management",
    "Stock Tracking",
    "Partner Management",
    "Order Management",
    "Invoice & Billing",
    "Sales Reports Dashboard",
    "Revenue Analytics",
    "Admin Panel"
  ],

  results: [
    { value: "30+", label: "Products Managed" },
    { value: "23+", label: "Partners Managed" },
    { value: "100%", label: "Digital Inventory" }
  ]
},
{
  slug: "sor-billing-management-system",

  title: "SOR Billing Management System",

  category: "Business ERP Software",

  image: "/images/sor-billing-cover.png",

  description:
    "Custom Sales Order & Billing Management System developed to streamline quotations, sales orders, invoicing, inventory tracking and business operations.",

  industry: "Business Automation",

  services:
    "ERP Development, Billing Software, Inventory Management",

  timeline: "3 Weeks",

  website: "https://sor.srelectricalandcontractor.com/",

  overview1:
    "The SOR Billing Management System was developed to simplify sales order processing, invoice generation, customer management and inventory tracking from a single centralized platform.",

  overview2:
    "We created a scalable web-based ERP solution with quotation management, billing workflows, stock monitoring, reporting and role-based access control to improve operational efficiency.",

  features: [
    "Sales Order Management",
    "Quotation Management",
    "Invoice Generation",
    "Inventory Tracking",
    "Customer Management",
    "Stock Management",
    "Business Reports",
    "Role Based Access Control",
    "Revenue Analytics",
    "Admin Dashboard"
  ],

  results: [
    { value: "80%", label: "Faster Order Processing" },
    { value: "100%", label: "Digital Billing Workflow" },
    { value: "Real-Time", label: "Inventory Tracking" }
  ]
},
{
  slug: "jaora-pet-mall",

  title: "Jaora Pet Mall",

  category: "E-Commerce Website",

  image: "/images/jaora-petmall-cover.png",

  description:
    "Complete e-commerce website developed for Jaora Pet Mall featuring product catalog, online shopping experience, responsive design and secure customer engagement.",

  industry: "E-Commerce & Retail",

  services:
    "WordPress Development, E-Commerce Setup, UI/UX Design",

  timeline: "2 Weeks",

  website: "https://jaorapetmall.in",

  overview1:
    "Jaora Pet Mall required a professional online store to showcase products, improve customer reach and enable seamless shopping experience across devices.",

  overview2:
    "We developed a modern WordPress-based e-commerce platform with product categories, attractive layouts, responsive design and customer-friendly navigation.",

  features: [
    "WordPress Website",
    "E-Commerce Store",
    "Product Catalog",
    "Category Management",
    "Responsive Design",
    "Mobile Friendly Layout",
    "SEO Optimization",
    "Secure Checkout",
    "Customer Inquiry System",
    "Fast Loading Pages"
  ],

  results: [
    { value: "100+", label: "Products Listed" },
    { value: "100%", label: "Mobile Responsive" },
    { value: "24/7", label: "Online Availability" }
  ]
}
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
<p className="text-gray-400 text-lg leading-relaxed mb-6">
  {project.overview1}
</p>

<p className="text-gray-400 text-lg leading-relaxed">
  {project.overview2}
</p>

        </div>

        {/* Right Stats */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl space-y-8">

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Industry
            </p>

            <h3 className="text-2xl font-semibold">
              {project.industry}
            </h3>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Services
            </p>

            <h3 className="text-2xl font-semibold">
              {project.services}
            </h3>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Timeline
            </p>

            <h3 className="text-2xl font-semibold">
              {project.timeline}
            </h3>
          </div>

        </div>
<a
  href={project.website}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex justify-center items-center py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold"
>
  🌐 Visit Live Website
</a>
      </div>

    </section>
<section className="pb-24 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      Key Features
    </h2>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {project.features?.map((feature, index) => (
    <div
      key={index}
      className="bg-white/5 p-6 rounded-3xl"
    >
      {feature}
    </div>
  ))}

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

  {project.results?.map((item, index) => (

    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center"
    >

      <h3 className="text-6xl font-bold text-cyan-400 mb-4">
        {item.value}
      </h3>

      <p className="text-gray-400">
        {item.label}
      </p>

    </div>
  ))
}

        </div>

      </div>

    </section>

  </main>
);
  
}