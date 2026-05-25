import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import PageTransition from "@/components/PageTransition";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <PageTransition>
    <main className="bg-black text-white overflow-hidden min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />

        <FadeUp>

          <div className="max-w-7xl mx-auto text-center relative z-10">

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-6">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Let’s Build Something
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Amazing
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to grow your business with premium digital solutions?
              Let’s connect and discuss your next project.
            </p>

          </div>

        </FadeUp>

      </section>

      {/* Contact Grid */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Left Info */}
          <FadeUp>

            <div className="space-y-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-2xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Email Us
                    </h3>

                    <p className="text-gray-400">
                      Support@grrowzo.com
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-2xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Call Us
                    </h3>

                    <p className="text-gray-400">
                      +91 89898 66593
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-2xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      Office
                    </h3>

                    <p className="text-gray-400">
                      Prosperity Tower, Janjeerwala Square, 201, opposite Bansi Trade Centre, New Palasia, Indore, Madhya Pradesh 452003
                    </p>
                  </div>

                </div>

              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">

                <a
                  href="https://wa.me/918989866593"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-purple-600 transition"
                target="_blank"
rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://instagram.com/grrowzo"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-pink-500 transition"
                target="_blank"
rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/company/grrowzo-digital-marketing/"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-cyan-500 transition"
                target="_blank"
rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </FadeUp>

          {/* Form */}
          <FadeUp>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">

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
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="project"
                    placeholder="Your Project"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 rounded-2xl text-lg font-medium hover:scale-[1.02] active:scale-95 transition duration-300 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                >
                  Send Message
                </button>

              </form>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Map Placeholder */}
      <section className="pb-24 px-6 relative overflow-hidden">

  {/* Glow */}
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

  <FadeUp>

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Heading */}
      <div className="text-center mb-12">

        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
          Our Location
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Visit Our Office
        </h2>

      </div>

      {/* Map Container */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-4 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.08)]">

        <div className="rounded-[30px] overflow-hidden h-[500px]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.00685919319224!2d75.8822132600183!3d22.724161882944426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdf2a6758ed3%3A0xcbb0eed06c0606ce!2sGrrowzo%20Digital%20Marketing!5e0!3m2!1sen!2sus!4v1779536043221!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </div>

  </FadeUp>

</section>

      <Footer />

    </main>
    </PageTransition>
  );
}