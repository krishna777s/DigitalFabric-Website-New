import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/0_Abstract_Blue_3840x2160.mp4";

const TIFrameworkHero = () => {
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
      className="relative flex items-end overflow-hidden bg-black min-h-[calc(100vh-78px)]"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(10,18,42,0.30)_0%,rgba(10,18,42,0.40)_52%,rgba(8,14,34,0.58)_100%)] opacity-80" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_22%,rgba(5,12,30,0.08)_100%),radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_18%,rgba(255,255,255,0)_38%)] backdrop-blur-[0px]" />

      <div className="relative z-10 w-[min(100%,980px)] pt-0 pb-[96px] pl-[66px] max-[1100px]:w-[min(100%,820px)] max-[1100px]:px-7 max-[1100px]:pb-[72px] max-[640px]:px-[18px] max-[640px]:pb-[44px]">
        <h1
          className={`m-0 font-serif font-bold leading-[0.96] -tracking-[0.045em] text-white will-change-[transform,opacity]
            opacity-0 -translate-y-[72px]
            ${isInView ? "animate-ti-title" : ""}
            text-[clamp(2.3rem,3.9vw,3.55rem)] max-[1100px]:text-[clamp(3rem,7.2vw,4.9rem)] max-[640px]:text-[clamp(2.3rem,11vw,3.4rem)] max-[640px]:leading-none
          `}
        >
          The TI (Technology
          <br />
          Innovation) Framework
        </h1>

        <p
          className={`mt-[42px] max-w-[980px] font-sans font-light leading-[1.28] text-[#f6f8fc]/98 will-change-[transform,opacity]
            opacity-0 translate-y-[72px]
            ${isInView ? "animate-ti-desc" : ""}
            text-[clamp(0.96rem,1.32vw,1.28rem)] max-[1100px]:mt-7 max-[1100px]:text-[clamp(1.1rem,2.4vw,1.6rem)] max-[1100px]:leading-[1.22] max-[640px]:mt-5 max-[640px]:text-base max-[640px]:leading-[1.28]
          `}
        >
          TI (Technology Innovation) FRAMEWORK simplifies the complexities in
          business transformation initiatives by providing a pragmatic
          process framework &amp; guidance for Digital Strategy.
        </p>
      </div>
    </section>
  );
};

export default TIFrameworkHero;
