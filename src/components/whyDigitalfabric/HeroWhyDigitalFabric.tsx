import React, { useEffect, useRef, useState } from "react";
import bgPattern from "../../assets/hero-bg.png";
import questionImg from "../../assets/question-mark.png";

const HeroWhyDigitalFabric: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundOffset, setBackgroundOffset] = useState(0);

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

  useEffect(() => {
    const updateBackgroundOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = Math.max(-40, Math.min(140, -rect.top * 0.18));
      setBackgroundOffset(offset);
    };

    updateBackgroundOffset();
    window.addEventListener("scroll", updateBackgroundOffset, { passive: true });
    window.addEventListener("resize", updateBackgroundOffset);

    return () => {
      window.removeEventListener("scroll", updateBackgroundOffset);
      window.removeEventListener("resize", updateBackgroundOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[84vh] overflow-hidden text-[#f4f3ef] bg-[#0a0f1f] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundPosition: `center calc(0px + ${backgroundOffset}px)`,
      }}
    >
      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.18), 0 24px 60px rgba(4,14,28,0.22)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />

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
            className="font-serif text-[3.5rem] font-bold mb-[30px] whitespace-nowrap max-[640px]:whitespace-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Why DIGITALFABRIC<sup>®</sup>?
          </h1>

          <p
            className="max-w-[520px] mt-7 text-[1.4rem] leading-relaxed max-[640px]:mt-6"
          >
            This segment is related to the derived ideology of
            DIGITALFABRIC<sup>®</sup> from various technology and business
            domains to assist enterprises in scaling the digital business
            transformation initiative.
          </p>
        </div>

        {/* RIGHT – art */}
        <div
          className="relative w-full max-w-[700px] min-h-[560px] overflow-hidden max-[1024px]:w-full max-[1024px]:min-h-[340px] max-[640px]:min-h-[240px]"
        >
          <img
            src={questionImg}
            alt="Question"
            className="absolute left-1/2 w-full max-w-[360px] max-[1024px]:max-w-[280px] max-[640px]:max-w-[200px] h-auto object-contain"
            style={{
              top: "62%",
              clipPath: "inset(0 0 14% 0)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translate(-50%, -50%)"
                : "translate(-50%, calc(-50% - 88px))",
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
