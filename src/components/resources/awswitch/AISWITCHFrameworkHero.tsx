import { useEffect, useRef, useState } from "react";
import aiswitchHero from "@/assets/AISWITCH.jpeg";

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
      className={`relative flex items-end overflow-hidden bg-center bg-no-repeat bg-cover min-h-[calc(100vh-78px)] ${isInView ? "in-view" : ""}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5, 10, 28, 0.1) 0%, rgba(7, 13, 34, 0.3) 60%, rgba(4, 8, 20, 0.45) 100%), url(${aiswitchHero})`,
      }}
    >
      {/* Background Overlay pseudo-element made much lighter */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(5,9,26,0.35)_0%,rgba(7,12,29,0.15)_32%,transparent_62%,transparent_100%)]" />

      <div className="relative z-10 w-[min(100%,1100px)] pt-0 pb-[124px] px-[58px] max-[1100px]:pb-[96px] max-[1100px]:px-[34px] max-[640px]:pb-[58px] max-[640px]:px-[18px]">
        <h1
          className={`m-0 max-w-[20ch] font-bold leading-none -tracking-[0.05em] text-white [text-shadow:0_14px_34px_rgba(0,0,0,0.18)] will-change-[transform,opacity,filter] transition-all duration-[1050ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
            ${isInView ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-14 scale-[0.96] blur-[10px]"}
            text-[clamp(2.5rem,5.5vw,4.8rem)] max-[1100px]:text-[clamp(2.2rem,6.8vw,3.6rem)] max-[640px]:text-[clamp(1.9rem,11.5vw,3rem)] max-[640px]:max-w-[12ch] max-[640px]:leading-[1.02]
          `}
        >
          The DIGITALFABRIC
          <span className="inline-block translate-y-[0.2em] relative top-[-0.2em] text-[1.em] font-normal ml-[3px]">®</span>
          <br />
          AISWITCH Framework
        </h1>
      </div>
    </section>
  );
};

export default AISWITCHFrameworkHero;