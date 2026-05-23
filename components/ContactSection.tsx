import FadeUp from "./FadeUp";
export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <FadeUp>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Ready to scale your business with premium digital solutions?
            Let’s discuss your next project.
          </p>

        </div>
        

        {/* Right Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>
    <input
  type="hidden"
  name="access_key"
  value="68a20719-87d9-43fb-9e53-710a15f26fd6"
/>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="Your Project"
                placeholder="Your Project"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 rounded-2xl font-medium hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
      </FadeUp>
    </section>
  );
}