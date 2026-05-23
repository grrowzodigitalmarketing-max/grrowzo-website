import FadeUp from "./FadeUp";
const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Tech Startup",
    review:
      "Grrowzo completely transformed our digital presence and helped us scale faster.",
  },
  {
    name: "Priya Verma",
    company: "Fashion Brand",
    review:
      "Amazing design quality and marketing strategy. Highly recommended.",
  },
  {
    name: "Aman Gupta",
    company: "Education Institute",
    review:
      "Professional team with premium execution and excellent support.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (
  <FadeUp key={index}>
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/40 transition duration-300"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                {testimonial.review}
              </p>

              <div>
                <h4 className="font-semibold text-lg">
                  {testimonial.name}
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
  </FadeUp>
))
}

        </div>
      </div>
    </section>
  );
}