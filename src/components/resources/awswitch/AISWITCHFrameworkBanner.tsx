import { useEffect, useRef, useState } from "react";

const AISWITCHFrameworkBanner = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[linear-gradient(90deg,#0a1b3c_0%,#1a5e8c_100%)] px-[58px] py-[64px] max-[1100px]:px-[34px] max-[1100px]:py-[48px] max-[640px]:px-[18px] max-[640px]:py-[38px] border-y border-[#3ea7ce33]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 max-[800px]:grid-cols-1 gap-16 max-[800px]:gap-8 items-center">
        
        <div 
          data-inview={isInView}
          className="relative pl-6 py-2 opacity-0 -translate-y-8 transition-all duration-700 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white rounded-full"></div>
          <h2 className="m-0 font-sans font-bold text-white leading-[1.3] text-[clamp(1.2rem,1.8vw,1.6rem)] max-[640px]:text-[1.1rem]">
            Exhaustive vendor-neutral and comprehensive framework for AI-led Enterprises
          </h2>
        </div>

        <div 
          data-inview={isInView}
          className="relative pl-6 py-2 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-[150ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white rounded-full"></div>
          <h2 className="m-0 font-sans font-bold text-white leading-[1.3] text-[clamp(1.2rem,1.8vw,1.6rem)] max-[640px]:text-[1.1rem]">
            PMM (Process Maturity Model) and Industry Benchmarks for AI Management and Governance Processes
          </h2>
        </div>

      </div>
    </section>
  );
};

export default AISWITCHFrameworkBanner;
