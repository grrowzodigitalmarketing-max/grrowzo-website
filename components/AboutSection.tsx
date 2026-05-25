import FadeUp from "./FadeUp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <FadeUp>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Content */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
              About Grrowzo
            </p>

            <h2 className="text-4xl md:text-4xl sm:text-6xl font-bold leading-tight mb-6">
              We Create Digital Experiences That Drive Results
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Grrowzo is a modern digital growth agency helping businesses
              scale with premium websites, branding, digital marketing,
              automation, and result-driven strategies.
            </p>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2" />

                <div>
                  <h4 className="text-xl font-semibold">
                    Result Driven Strategy
                  </h4>

                  <p className="text-gray-400 mt-2">
                    We focus on real growth, engagement, and ROI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-purple-500 mt-2" />

                <div>
                  <h4 className="text-xl font-semibold">
                    Premium User Experience
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Modern interfaces designed for conversions and branding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2" />

                <div>
                  <h4 className="text-xl font-semibold">
                    Full Digital Solutions
                  </h4>

                  <p className="text-gray-400 mt-2">
                    From development to marketing — everything under one roof.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Card */}
          <div className="relative">

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

              <div className="grid grid-cols-2 gap-4 w-full gap-6">

                <div className="bg-black/40 border border-white/10 rounded-3xl p-4 sm:p-6 min-w-0 overflow-hidden">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold break-words leading-none text-cyan-400">
                    <span className="whitespace-nowrap">100+</span>
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Projects
                  </p>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-3xl p-4 sm:p-6 min-w-0 overflow-hidden">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold break-words leading-none text-purple-400">
                    <span className="whitespace-nowrap">98%</span>
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Satisfaction
                  </p>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-3xl p-4 sm:p-6 min-w-0 overflow-hidden">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold break-words leading-none text-purple-400">
                    5X
                  </h3>

                  <p className="text-gray-400 mt-3">
                    ROI Growth
                  </p>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-3xl p-4 sm:p-6 min-w-0 overflow-hidden">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold break-words leading-none text-cyan-400">
                    <span className="whitespace-nowrap">24/7</span>
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </FadeUp>

    </section>
  );
}