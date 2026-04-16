import React, { useEffect, useRef, useState } from "react";
import dfVideo from "@/assets/Why DIGITALFABRIC.mov";
import questionImg from "@/assets/why df hero.png";

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
      className="relative min-h-[84vh] overflow-hidden text-[#f4f3ef] bg-[#0a0f1f]"
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
      <div className="relative z-[2] w-full max-w-[1760px] mx-auto px-[88px] py-[48px] pb-[44px] grid grid-cols-[1.06fr_0.94fr] gap-[44px] items-center max-[1024px]:grid-cols-1 max-[1024px]:gap-8 max-[1024px]:px-10 max-[640px]:px-5">

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
            className="font-serif text-[3.5rem] font-bold mb-[30px] whitespace-nowrap max-[640px]:whitespace-normal flex items-start"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Why DIGITALFABRIC<span className="text-[0.9em] font-normal font-sans ml-[2px] leading-none mt-[14px]">®</span>?
          </h1>

          <p
            className="max-w-[520px] mt-7 text-[1.4rem] leading-relaxed max-[640px]:mt-6"
          >
            This segment is related to the derived ideology of DIGITALFABRIC<span className="text-[1.2em] font-normal font-sans align-top relative top-[0.2em] leading-none">®</span> from various technology and business
            domains to assist enterprises in scaling the digital business
            transformation initiative.
          </p>
        </div>

        {/* RIGHT – art */}
        <div
          className="relative w-full max-w-[700px] min-h-[560px] flex items-center justify-center max-[1024px]:w-full max-[1024px]:min-h-[340px] max-[640px]:min-h-[240px]"
        >
          <img
            src={questionImg}
            alt="Question"
            className="w-full max-w-[260px] max-[720px]:max-w-[300px] max-[640px]:max-w-[200px] h-auto object-contain"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(-40px)",
              transition:
                "opacity 860ms cubic-bezier(0.22,1,0.36,1), transform 860ms cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: "100ms",
              willChange: "transform, opacity",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWhyDigitalFabric;
