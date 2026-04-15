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
      className="relative flex items-end overflow-hidden bg-center bg-no-repeat bg-cover min-h-[calc(100vh-78px)]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5, 10, 28, 0.42) 0%, rgba(7, 13, 34, 0.58) 48%, rgba(4, 8, 20, 0.72) 100%), url(${aiswitchHero})`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(5,9,26,0.76)_0%,rgba(7,12,29,0.46)_32%,rgba(7,12,29,0.14)_62%,rgba(7,12,29,0.24)_100%),radial-gradient(circle_at_72%_24%,rgba(48,232,255,0.12),transparent_24%)]" />

      <div className="relative z-10 w-[min(100%,1100px)] pt-0 pb-[124px] px-[58px] max-[1100px]:pb-[96px] max-[1100px]:px-[34px] max-[640px]:pb-[58px] max-[640px]:px-[18px]">
        <h1 
          className={`m-0 max-w-[16ch] font-serif font-bold leading-none -tracking-[0.05em] text-white [text-shadow:0_14px_34px_rgba(0,0,0,0.18)] will-change-[transform,opacity,filter]
            opacity-0 translate-y-14 scale-[0.96] blur-[10px]
            ${isInView ? "animate-aiswitch-title" : ""}
            text-[clamp(1.9rem,3.6vw,3.15rem)] max-[1100px]:text-[clamp(1.82rem,5.5vw,2.7rem)] max-[640px]:text-[clamp(1.72rem,9.2vw,2.45rem)] max-[640px]:max-w-[10ch] max-[640px]:leading-[1.02]
          `}
        >
          The DIGITALFABRIC
          <sup className="text-[0.36em] align-top relative top-[0.2em] ml-[0.08em] font-normal">&reg;</sup>
          <br />
          AISWITCH Framework
        </h1>
      </div>
    </section>
  );
};

export default AISWITCHFrameworkHero;