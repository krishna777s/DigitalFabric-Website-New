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
      className="relative min-h-[calc(120vh-78px)] flex items-center overflow-hidden text-[#f4f3ef] bg-[#0a0f1f]"
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
      <div className="relative z-[2] w-full max-w-[1760px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-[48px] grid grid-cols-[1.06fr_0.94fr] gap-[44px] items-center max-[1024px]:grid-cols-1 max-[1024px]:gap-8">

        {/* LEFT – copy */}
        <div
          className="self-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-72px)",
            transition:
              "opacity 760ms cubic-bezier(0.22,1,0.36,1), transform 760ms cubic-bezier(0.22,1,0.36,1)",
            willChange: "transform, opacity",
          }}
        >
          <h1
            className="font-serif text-[clamp(1.75rem,4.5vw,3.125rem)] font-bold mb-[30px] whitespace-nowrap max-[640px]:whitespace-normal flex items-start"
            style={{ fontFamily: "'Abhaya Libre', serif" }}
          >
            Why DIGITALFABRIC<span className="text-[0.9em] font-normal font-serif ml-[2px] leading-none mt-[14px]">®</span>?
          </h1>

          <p
            className="max-w-[750px] mt-7 text-[clamp(1.125rem,1.5vw,1.5rem)] leading-relaxed max-[640px]:mt-6 font-serif"
          >
            This segment is related to the derived ideology of
            DIGITALFABRIC<span className="text-[1.2em] font-normal font-serif align-top relative top-[0.2em] leading-none">®</span> from various technology and business
            domains to assist enterprises in scaling the digital business
            transformation initiative.
          </p>
        </div>

        {/* RIGHT – art */}

      </div>
    </section>
  );
};

export default HeroWhyDigitalFabric;
