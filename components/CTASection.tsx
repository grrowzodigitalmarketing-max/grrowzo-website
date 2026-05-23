export default function CTASection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-700/30 to-cyan-500/20 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-xl">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Ready To Scale Your Brand?
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Let’s create a powerful digital experience that grows your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            Book Free Consultation
          </button>

          <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition">
            Chat On WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}