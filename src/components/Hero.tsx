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
    <section className="min-h-screen flex items-center pt-20">
      <div className="section-wrapper w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight italic">
              What's your next brilliant move?
            </h1>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <button className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary transition-colors duration-300 group">
              <ArrowRight className="text-foreground group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-foreground text-background px-4 py-1.5 text-xs font-sans font-semibold tracking-wider">
                Fresh Updates
              </div>
              <div className="relative h-64 md:h-72">
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
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block bg-primary/80 text-primary-foreground text-[10px] px-3 py-1 rounded font-sans tracking-wider mb-2">
                        {slide.tag}
                      </span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">
                        {slide.text}{" "}
                        <span className="text-df-gold cursor-pointer">Know more</span>
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
                      i === current ? "bg-foreground w-4" : "bg-foreground/40"
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
