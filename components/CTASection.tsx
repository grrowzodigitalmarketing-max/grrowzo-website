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

          <a
  href="https://wa.me/918989866593?text=Hi%20Grrowzo%2C%20I%20want%20to%20book%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
>
  Book Free Consultation
</a>

          <a
  href="https://wa.me/918989866593?text=Hi%20Grrowzo%2C%20I%20want%20to%20discuss%20my%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/20 px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
>
  Chat On WhatsApp
</a>
        </div>
      </div>
    </section>
  );
}