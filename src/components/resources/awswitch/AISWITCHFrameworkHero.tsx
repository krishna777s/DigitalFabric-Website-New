import { useEffect, useRef, useState } from "react";
import hero from "@/assets/AISWITCH.jpeg";

export default function AISWITCHFrameworkHero() {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative min-h-[calc(100vh-78px)] flex items-end overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,18,42,0.30) 0%, rgba(10,18,42,0.40) 52%, rgba(8,14,34,0.58) 100%), url(${hero})`,
      }}
    >
      {/* overlay (same as CSS glass feel) */}
      <div className="absolute inset-0 backdrop-blur-[6px]" />

      {/* CONTENT */}
      <div className="relative z-10 pl-[66px] pb-[96px] max-w-[980px]">
        <h1
          className={`font-serif text-[3.5rem] leading-[0.96] font-bold tracking-[-0.045em] text-white transition-all duration-[900ms] ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-[72px]"
          }`}
        >
          The DIGITALFABRIC® <br />
          AISWITCH Framework
        </h1>

        <p
          className={`mt-[42px] text-[1.18rem] leading-[1.3] text-white/90 transition-all duration-[900ms] delay-150 ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[72px]"
          }`}
        >
          The AISWITCH framework enables enterprises to scale AI adoption,
          streamline automation, and accelerate intelligent transformation
          initiatives across business ecosystems.
        </p>
      </div>
    </section>
  );
}