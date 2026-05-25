import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
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
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              We Build Brands
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}That Stand Out
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Grrowzo is a premium digital growth agency helping businesses
              scale with high-performance websites, branding, digital marketing,
              automation, and creative strategies.
            </p>

          </div>

        </FadeUp>

      </section>

      {/* Story Section */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <FadeUp>

            <div>

              <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                Our Story
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Driven By Creativity & Innovation
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We started Grrowzo with one mission — to help businesses grow
                digitally with premium experiences and result-driven strategies.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                From startups to established brands, we deliver powerful
                websites, marketing campaigns, and automation solutions that
                create measurable impact.
              </p>

            </div>

          </FadeUp>

          <FadeUp>

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-black/40 rounded-3xl p-8 border border-white/10 text-center">
                  <h3 className="text-5xl font-bold text-cyan-400">
                    100+
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Projects Delivered
                  </p>
                </div>

                <div className="bg-black/40 rounded-3xl p-8 border border-white/10 text-center">
                  <h3 className="text-5xl font-bold text-purple-400">
                    98%
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Client Satisfaction
                  </p>
                </div>

                <div className="bg-black/40 rounded-3xl p-8 border border-white/10 text-center">
                  <h3 className="text-5xl font-bold text-purple-400">
                    5X
                  </h3>

                  <p className="text-gray-400 mt-3">
                    ROI Growth
                  </p>
                </div>

                <div className="bg-black/40 rounded-3xl p-8 border border-white/10 text-center">
                  <h3 className="text-5xl font-bold text-cyan-400">
                    24/7
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </FadeUp>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative overflow-hidden">

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">

          <FadeUp>

            <div className="text-center mb-16">

              <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">
                What Makes Grrowzo Different
              </h2>

            </div>

          </FadeUp>

          <div className="grid lg:grid-cols-3 gap-6">

            <FadeUp>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  Premium Design
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  We create modern high-converting experiences with stunning UI.
                </p>

              </div>

            </FadeUp>

            <FadeUp>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  Growth Focused
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Every strategy is designed to increase ROI and engagement.
                </p>

              </div>

            </FadeUp>

            <FadeUp>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  Complete Solutions
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  From development to automation — everything under one roof.
                </p>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>

      <Footer />

    </main>
    </PageTransition>
  );
}