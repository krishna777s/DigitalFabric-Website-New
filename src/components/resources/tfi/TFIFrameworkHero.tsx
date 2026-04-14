import { useEffect, useRef, useState } from "react";
import hero from "@/assets/TI Framework.jpeg";

export default function TFIFrameworkHero() {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setShow(e.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-78px)] flex items-end overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,18,42,0.30), rgba(8,14,34,0.58)), url(${hero})`,
      }}
    >
      {/* overlay blur */}
      <div className="absolute inset-0 backdrop-blur-[4px]" />

      <div className="relative z-10 max-w-[980px] pl-[66px] pb-[96px]">
        <h1
          className={`font-serif text-[3.5rem] leading-[0.96] font-bold text-white tracking-[-0.045em] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
          }`}
        >
          The TI (Technology <br /> Innovation) Framework
        </h1>

        <p
          className={`mt-[42px] text-[1.2rem] text-white/90 transition-all duration-700 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          TI (Technology Innovation) FRAMEWORK simplifies the complexities in
          business transformation initiatives by providing a pragmatic process
          framework & guidance for Digital Strategy.
        </p>
      </div>
    </section>
  );
}