import { useEffect, useRef, useState } from "react";
import aiswitchFrameworkDiagram from "@/assets/AISWITCH-FRAMEWORK-1024x531.png";

const AISWITCHFrameworkOverview = () => {
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
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#59ceeb] text-[#1a1c32] px-[24px] py-28 max-[1100px]:px-[16px] max-[1100px]:py-16 max-[640px]:py-14"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-[0.85fr_1.15fr] max-[900px]:grid-cols-1 gap-12 items-center justify-start">
        <div
          data-inview={isInView}
          className="opacity-0 -translate-x-24 transition-all duration-[1000ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0 text-left"
        >
          <p className="font-sans text-[clamp(1.1rem,1.35vw,1.3rem)] leading-[1.32] text-[#151c36] font-normal m-0 max-[640px]:text-base max-[640px]:leading-[1.42]">
            The <strong className="font-extrabold text-[#10172e]">DIGITALFABRIC<sup className="text-[0.6em] relative top-[-0.35em] ml-[2px]">®</sup> AISWITCH<sup className="text-[0.6em] relative top-[-0.35em] ml-[2px]">™</sup> Framework</strong> is a comprehensive, strategic approach to managing AI integration across key areas of business operations. The framework emphasizes six essential management pillars:
          </p>

          <p className="font-sans text-[clamp(1.1rem,1.35vw,1.3rem)] leading-[1.32] text-[#151c36] font-normal mt-7 max-[640px]:text-base max-[640px]:leading-[1.42]">
            The 6 AISWITCH<sup className="text-[0.6em] relative top-[-0.35em] ml-[2px]">™</sup> dimensions—AI Strategy, Workforce, Information, Technology, Culture, and Human Augmentation—each contain 5 processes, resulting in a total of 30 processes (6 dimensions × 5 processes each).
          </p>

          <p className="font-sans text-[clamp(1.1rem,1.35vw,1.3rem)] leading-[1.32] text-[#151c36] font-normal mt-7 max-[640px]:text-base max-[640px]:leading-[1.42]">
            Together, these elements provide a structured pathway for organizations to harness AI&apos;s potential effectively.
          </p>
        </div>

        <div
          data-inview={isInView}
          className="relative w-full opacity-0 translate-x-12 transition-all duration-[1000ms] ease-out delay-[200ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0 hover:scale-[1.15] transition-transform duration-500 cursor-zoom-in flex justify-end"
        >
          <img
            src={aiswitchFrameworkDiagram}
            alt="AISWITCH Framework Dimensions Diagram"
            className="w-auto h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AISWITCHFrameworkOverview;
