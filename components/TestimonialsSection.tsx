"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    review:
      "Grrowzo completely transformed our online presence with a premium website and marketing strategy.",
  },
  {
    name: "Priya Verma",
    role: "Fashion Brand Owner",
    review:
      "The branding and creative quality were absolutely top-notch. Highly recommended.",
  },
  {
    name: "Amit Patel",
    role: "Business Consultant",
    review:
      "Professional team with exceptional design and development skills. Amazing experience.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            What Clients Say
          </h2>

        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="h-full bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:border-cyan-400/40 transition duration-300">

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.role}
                    </p>

                  </div>

                </div>

                <p className="text-gray-300 leading-relaxed">
                  “{item.review}”
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}