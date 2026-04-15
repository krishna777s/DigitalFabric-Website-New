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
      className="bg-[#59ceeb] text-[#1a1c32] px-[58px] py-20 max-[1100px]:px-[34px] max-[1100px]:py-16 max-[640px]:px-[18px] max-[640px]:py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 max-[900px]:grid-cols-1 gap-12 items-center">
        <div 
          data-inview={isInView}
          className="opacity-0 -translate-x-12 transition-all duration-[900ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
        >
          <p className="font-sans text-[clamp(1.1rem,1.4vw,1.25rem)] leading-[1.48] text-[#151c36] font-normal m-0 max-[640px]:text-[1.05rem]">
            The <strong className="font-extrabold font-serif text-[#10172e]">DIGITALFABRIC&reg; AISWITCH Framework</strong> is a comprehensive, strategic approach to managing AI integration across key areas of business operations. The framework emphasizes six essential management pillars:
          </p>

          <p className="font-sans text-[clamp(1.1rem,1.4vw,1.25rem)] leading-[1.48] text-[#151c36] font-normal mt-[18px] max-[640px]:text-[1.05rem]">
            The 6 AISWITCH dimensions—AI Strategy, Workforce, Information, Technology, Culture, and Human Augmentation—each contain 5 processes, resulting in a total of 30 processes (6 dimensions × 5 processes each).
          </p>

          <p className="font-sans text-[clamp(1.1rem,1.4vw,1.25rem)] leading-[1.48] text-[#151c36] font-normal mt-[18px] max-[640px]:text-[1.05rem]">
            Together, these elements provide a structured pathway for organizations to harness AI&apos;s potential effectively.
          </p>
        </div>

        <div 
          data-inview={isInView}
          className="relative w-full opacity-0 translate-x-12 transition-all duration-[900ms] ease-out delay-[200ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
        >
          <img 
            src={aiswitchFrameworkDiagram} 
            alt="AISWITCH Framework Dimensions Diagram" 
            className="w-full h-auto object-contain scale-[1.05] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AISWITCHFrameworkOverview;
