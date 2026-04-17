import { useEffect, useRef, useState } from "react";
import aiswitchVideo from "@/assets/GettyImages-1251181415.mov";

const AISWITCHFrameworkHero = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-end overflow-hidden bg-center bg-no-repeat bg-cover min-h-[calc(120vh-88px)] ${isInView ? "in-view" : ""}`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
      >
        <source src={aiswitchVideo} type="video/quicktime" />
        <source src={aiswitchVideo} type="video/mp4" />
      </video>

      {/* Background Overlays for legibility */}
      <div className="absolute inset-0 pointer-events-none bg-black/20" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(5,10,28,0.1)_0%,rgba(7,13,34,0.3)_60%,rgba(4,8,20,0.45)100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(5,9,26,0.35)_0%,rgba(7,12,29,0.15)_32%,transparent_62%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-0 pb-[124px] px-6 sm:px-12 md:px-16 lg:px-24">
        <h1
          className={`m-0 max-w-[20ch] font-serif font-bold leading-none -tracking-[0.05em] text-white [text-shadow:0_14px_34px_rgba(0,0,0,0.12)] will-change-[transform,opacity,filter] transition-all duration-[1050ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
            ${isInView ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-14 scale-[0.96] blur-[10px]"}
            text-[clamp(1.75rem,4.5vw,3.125rem)] max-[1100px]:text-[clamp(1.75rem,5.5vw,2.8rem)] max-[640px]:text-[2.2rem] max-[640px]:max-w-[12ch] max-[640px]:leading-[1.02]
          `}
        >
          The DIGITALFABRIC<sup className="text-[0.9em] ml-1 align-top relative top-[0.5em] font-medium">®</sup>
          <br />
          AISWITCH<sup className="text-[0.68em] ml-0.5 align-top relative top-[0.6em] font-medium">™</sup>
          {" "}Framework
        </h1>
      </div>
    </section>
  );
};

export default AISWITCHFrameworkHero;