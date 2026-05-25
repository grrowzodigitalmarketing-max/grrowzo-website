export default function LogoMarquee() {
  const logos = [
    "Google",
    "Meta",
    "Spotify",
    "Netflix",
    "Adobe",
    "Shopify",
    "Amazon",
    "Microsoft",
  ];

  return (
    <section className="py-20 overflow-hidden border-y border-white/10">

      <div className="flex whitespace-nowrap animate-marquee gap-16">

        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="text-4xl font-bold text-white/20 hover:text-cyan-400 transition duration-300"
          >
            {logo}
          </div>
        ))}

      </div>

    </section>
  );
}