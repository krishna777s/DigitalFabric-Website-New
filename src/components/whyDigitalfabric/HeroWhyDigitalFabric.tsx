import React, { useEffect, useRef, useState } from "react";
import dfVideo from "@/assets/Why DIGITALFABRIC.mov";

const HeroWhyDigitalFabric: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0,
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] md:min-h-[calc(100vh-78px)] lg:min-h-[calc(110vh-78px)] flex items-center overflow-hidden text-[#f4f3ef] bg-[#0a0f1f]"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
      >
        <source src={dfVideo} type="video/quicktime" />
        <source src={dfVideo} type="video/mp4" />
      </video>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-[#081229]/60 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/80 to-transparent pointer-events-none" />

      {/* Inner grid */}
      <div className="relative z-[2] w-full px-[20px] sm:px-[36px] md:px-[60px] py-[60px] md:py-[80px] grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-[40px] items-center">

        {/* LEFT – copy */}
        <div
          className="self-center max-w-[800px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition:
              "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform, opacity",
          }}
        >
          <h1
            className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold mb-[24px] leading-[1.15] flex items-start flex-wrap"
            style={{ fontFamily: "'Abhaya Libre', serif" }}
          >
            Why DIGITALFABRIC<span className="text-[0.6em] font-normal font-serif ml-[4px] leading-none mt-[8px] md:mt-[12px]">®</span>?
          </h1>

          <p
            className="max-w-[700px] mt-6 text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed font-serif opacity-90"
          >
            This segment is related to the derived ideology of
            DIGITALFABRIC<span className="text-[1.1em] font-normal font-serif align-top relative top-[0.1em] leading-none">®</span> from various technology and business
            domains to assist enterprises in scaling the digital business
            transformation initiative.
          </p>
        </div>

        {/* RIGHT – art (Empty for now to match current layout) */}
      </div>
    </section>
  );
};

export default HeroWhyDigitalFabric;
