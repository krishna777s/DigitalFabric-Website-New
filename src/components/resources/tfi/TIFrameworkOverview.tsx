import { useEffect, useRef, useState, CSSProperties } from "react";
import stingaryModel from "@/assets/Stingary Model.png";

const TIFrameworkOverview = () => {
  const [isInView, setIsInView] = useState(false);
  const [isStingaryInView, setIsStingaryInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stingarySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = stingarySectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStingaryInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-white text-[#071745] grid grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] max-[1100px]:grid-cols-1 gap-8 items-center px-[56px] pt-12 pb-7 max-[1100px]:px-7 max-[1100px]:pt-10 max-[1100px]:pb-7 max-[640px]:px-[18px] max-[640px]:pt-7 max-[640px]:pb-[22px]"
      >
        <div 
          className={`will-change-[transform,opacity] opacity-0 -translate-x-[72px]
            ${isInView ? "animate-ti-overview-copy" : ""}
          `}
        >
          <p className="m-0 font-sans text-[clamp(0.92rem,1.35vw,1.16rem)] leading-[1.3] text-[#05164c] max-[640px]:text-base max-[640px]:leading-[1.42]">
            The TI (Technology Innovation) Framework integrates three critical
            dimensions: <strong className="font-extrabold text-[#05164c]">Governance</strong>, <strong className="font-extrabold text-[#05164c]">Conformance</strong>,
            and <strong className="font-extrabold text-[#05164c]">Performance</strong>. These pillars are supported by three
            key components, <strong className="font-extrabold text-[#05164c]">People</strong>, <strong className="font-extrabold text-[#05164c]">Process</strong>, and
            <strong className="font-extrabold text-[#05164c]">Platform</strong>, ensuring that organizations align their
            workforce, workflows, and technology for optimal outcomes.
          </p>

          <p className="mt-[18px] font-sans text-[clamp(0.92rem,1.35vw,1.16rem)] leading-[1.3] text-[#05164c] max-[640px]:text-base max-[640px]:leading-[1.42]">
            At the core of the framework lies <strong className="font-extrabold text-[#05164c]">Digital Edge</strong>, which
            symbolizes the competitive advantage gained through the optimal
            integration of these elements. This holistic approach empowers
            organizations to navigate digital transformation with balance,
            ensuring they meet regulatory requirements, maintain high
            performance, and achieve strategic governance goals.
          </p>
        </div>

        <div 
          className={`relative min-h-[390px] max-[1100px]:w-[min(100%,640px)] max-[1100px]:mx-auto max-[640px]:min-h-[430px] will-change-[transform,opacity] opacity-0 translate-x-[72px]
            ${isInView ? "animate-ti-overview-diagram" : ""}
          `}
          aria-label="TI Framework model"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 font-sans font-extrabold text-[#252525] text-[clamp(0.9rem,1vw,1.16rem)] whitespace-nowrap">GOVERNANCE</div>
          
          <div className="absolute top-[134px] left-[16px] max-[640px]:left-2 max-[640px]:top-[144px] font-sans font-normal text-[#252525] text-[clamp(0.82rem,0.88vw,0.96rem)]">People</div>
          
          <div className="absolute top-[134px] right-[10px] max-[640px]:right-1 max-[640px]:top-[144px] font-sans font-normal text-[#252525] text-[clamp(0.82rem,0.88vw,0.96rem)]">Process</div>
          
          <div className="absolute bottom-[36px] left-0 font-sans font-extrabold text-[#252525] text-[clamp(0.9rem,1vw,1.16rem)] max-[640px]:text-base">CONFORMANCE</div>
          
          <div className="absolute bottom-[36px] right-0 font-sans font-extrabold text-[#252525] text-[clamp(0.9rem,1vw,1.16rem)] max-[640px]:text-base">PERFORMANCE</div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-[640px]:bottom-[46px] font-sans font-normal text-[#252525] text-[clamp(0.82rem,0.88vw,0.96rem)] whitespace-nowrap">Platform</div>

          <div 
            className="absolute left-1/2 -translate-x-1/2 w-0 h-0 top-[28px] max-[640px]:top-[38px]" 
            style={{
              borderLeft: '114px solid transparent',
              borderRight: '114px solid transparent',
              borderBottom: '284px solid rgba(145, 217, 255, 0.82)'
            } as CSSProperties}
            aria-hidden="true" 
          />
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-0 h-0 top-[138px] max-[640px]:top-[150px]" 
            style={{
              borderLeft: '98px solid transparent',
              borderRight: '98px solid transparent',
              borderTop: '174px solid rgba(228, 214, 191, 0.9)'
            } as CSSProperties}
            aria-hidden="true" 
          />

          <div className="absolute top-[174px] max-[640px]:top-[205px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[2px] font-sans font-extrabold text-[#111111] -tracking-[0.03em] leading-tight text-[clamp(1.02rem,1.2vw,1.42rem)] max-[640px]:text-2xl">
            <span>DIGITAL</span>
            <span>EDGE</span>
          </div>

          <p className="absolute left-1/2 bottom-0 -translate-x-1/2 m-0 font-sans text-[0.72rem] max-[640px]:text-[0.75rem] text-[#252525]/90 whitespace-nowrap">©2022, Ashwin Gaidhani. All Rights reserved</p>
        </div>
      </section>

      <section
        ref={stingarySectionRef}
        className="bg-white px-[56px] pb-12 max-[1100px]:px-7 max-[1100px]:pb-9 max-[640px]:px-[18px] max-[640px]:pb-7"
      >
        <h2 className="m-0 mb-5 font-serif text-[clamp(1.6rem,2.4vw,2.3rem)] font-bold leading-[1.08] text-[#071745] text-left">The Stingary Model</h2>
        <img
          className={`block w-[min(100%,900px)] h-auto mx-auto will-change-[transform,opacity] opacity-0 translate-y-[84px]
            ${isStingaryInView ? "animate-ti-stingary" : ""}
          `}
          src={stingaryModel}
          alt="Stingary model"
        />
      </section>
    </>
  );
};

export default TIFrameworkOverview;
