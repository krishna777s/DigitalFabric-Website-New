import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";

const slides = [
  { image: carousel1, tag: "ENTERPRISE CONSULTING", text: "Enabling enterprises to transform and grow through strategic technology and business consulting." },
  { image: carousel2, tag: "AI & DIGITAL", text: "Designing ideas into powerful digital experiences that drive innovation." },
  { image: carousel3, tag: "MARKET INSIGHTS", text: "Understanding AI capabilities and maturity for enterprises." },
  { image: carousel4, tag: "CREATIVE DESIGN", text: "Driving enterprise growth through strategy, creativity, and digital impact." },
  { image: carousel5, tag: "RESEARCH", text: "Bridging technology and business to accelerate enterprise transformation." },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif text-foreground leading-[1.1] italic font-normal tracking-tight">
              What's your next brilliant move?
            </h1>
          </div>

          {/* Center: Arrow Button */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <button className="w-[72px] h-[72px] rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group">
              <ArrowRight className="text-foreground group-hover:translate-x-1 transition-transform" size={26} />
            </button>
          </div>

          {/* Right: Carousel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Fresh Updates pill */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-foreground/95 text-background px-5 py-1.5 text-[10px] font-sans font-semibold tracking-[0.15em] uppercase rounded-b-lg">
                Fresh Updates
              </div>

              <div className="relative h-80 md:h-[360px] lg:h-[400px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.tag}
                      className="w-full h-full object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-105"
                      style={{ transform: i === current ? 'scale(1.0)' : undefined }}
                      loading={i === 0 ? undefined : "lazy"}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
                      <span className="inline-block bg-primary/90 text-primary-foreground text-[10px] px-3 py-1 rounded-md font-sans font-semibold tracking-wider uppercase mb-3">
                        {slide.tag}
                      </span>
                      <p className="text-[15px] text-foreground font-sans leading-relaxed max-w-md">
                        {slide.text}
                      </p>
                      <span className="inline-block mt-2 text-sm text-df-gold cursor-pointer hover:underline font-medium">
                        Know more →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-foreground w-6" : "bg-foreground/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
