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
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-foreground text-background px-5 py-2 text-xs font-sans font-semibold tracking-wider">
                Fresh Updates
              </div>
              <div className="relative h-80 md:h-[360px] lg:h-[400px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.tag}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? undefined : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-primary/80 text-primary-foreground text-[11px] px-3 py-1 rounded font-sans tracking-wider mb-2">
                        {slide.tag}
                      </span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">
                        {slide.text}{" "}
                        <span className="text-df-gold cursor-pointer hover:underline">Know more</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-foreground w-5" : "bg-foreground/40"
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
