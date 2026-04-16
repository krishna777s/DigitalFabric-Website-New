import { useEffect, useRef, useState } from "react";
import copygamieDiagram from "@/assets/copygamie-diagram.png";

const CopygamieFrameworkContent = () => {
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
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#101426] pt-24 pb-16 px-[58px] max-[1100px]:px-[34px] max-[640px]:px-[18px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 max-[900px]:gap-12">
        
        {/* Top Split: Text & Diagram */}
        <div className="grid grid-cols-[1fr_1fr] max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10 items-start">
          
          {/* Left: Text */}
          <div 
            data-inview={isInView}
            className="flex flex-col gap-6 opacity-0 -translate-x-12 transition-all duration-[900ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
          >
            <p className="m-0 font-sans font-light text-[#cfd4e6] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.6]">
              Business people, founders and marketing teams are constantly seeking innovative ways to position their brands effectively. However, in the initial days of branding a product and taking it to market, achieving cohesion between different stakeholders is a daunting task. At DIGITALFABRIC&reg; IMAGENIE&trade; we understood the need for and created a scientific mind-map-based tool to solve the &lsquo;cohesion&rsquo; problem.
            </p>
            <p className="m-0 font-sans font-light text-[#cfd4e6] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.6]">
              The Copygamie Framework is a <strong className="font-bold text-white">Go-to-Market (GTM) positioning framework</strong> designed to demystify and streamline the process of brand positioning. At its core, Copygamie is both a scientific tool and a simplified mind-mapping technique, offering a structured approach to understanding and articulating a brand&rsquo;s essence in the market.
            </p>
          </div>

          {/* Right: Diagram Image */}
          <div 
            data-inview={isInView}
            className="w-full flex-shrink-0 flex items-center justify-center opacity-0 translate-x-12 transition-all duration-[900ms] ease-out delay-[200ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
          >
            <img 
              src={copygamieDiagram} 
              alt="Copygamie Mind-Map Diagram" 
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-xl" 
            />
          </div>
        </div>

        {/* Bottom Section: Outcomes Grid */}
        <div className="flex flex-col gap-12">
          {/* Header Row: Title & CTA */}
          <div 
            data-inview={isInView}
            className="grid grid-cols-[1.25fr_1fr] max-[900px]:grid-cols-1 gap-12 items-end opacity-0 translate-y-8 transition-all duration-[1000ms] ease-out delay-[400ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
          >
            <h2 className="m-0 font-serif font-bold text-white text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.05]">
              Outcomes of using <br className="max-[640px]:hidden" /> The Copygamie Framework:
            </h2>
            
            <div className="flex flex-col gap-5 pb-1">
              <p className="font-serif italic text-white/90 text-[1.3rem] max-[640px]:text-[1.1rem] m-0 leading-tight">
                Click on the image to start editing the framework.
              </p>
              <p className="font-serif italic text-white/90 text-[1.3rem] max-[640px]:text-[1.1rem] m-0 leading-tight">
                See how we used the framework for our clients: <a href="https://digitalfabric.group/soncur-success-story/" className="text-[#5ac8fa] not-italic hover:underline decoration-[1px] underline-offset-4 font-normal">Soncur</a> and <a href="https://digitalfabric.group/eyegenie-success-story/" className="text-[#5ac8fa] not-italic hover:underline decoration-[1px] underline-offset-4 font-normal">Eyegenie</a>
              </p>
            </div>
          </div>

          {/* 3-Column Outcomes Grid */}
          <div className="grid grid-cols-3 max-[1050px]:grid-cols-1 gap-6">
            {/* Box 1 */}
            <div 
              data-inview={isInView}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-5 transition-all duration-[1000ms] ease-out opacity-0 translate-y-16 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 delay-[600ms] hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5ac8fa]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="m-0 font-serif font-bold text-white text-[1.6rem] leading-tight group-hover:text-[#5ac8fa] transition-colors duration-300">
                Enhanced Understanding of Product
              </h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.05rem] leading-[1.6] opacity-90">
                One of the most significant outcomes of the Copygamie framework is the clarity it brings to a product's features and benefits. It helps teams articulate not just what their product is, but why it matters &ndash; a crucial aspect in today's value-driven market.
              </p>
            </div>

            {/* Box 2 */}
            <div 
              data-inview={isInView}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-5 transition-all duration-[1000ms] ease-out opacity-0 translate-y-16 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 delay-[800ms] hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5ac8fa]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="m-0 font-serif font-bold text-white text-[1.6rem] leading-tight group-hover:text-[#5ac8fa] transition-colors duration-300">
                Improved Strategic Direction
              </h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.05rem] leading-[1.6] opacity-90">
                The GTM strategy is profoundly influenced by the insights gained through Copygamie. It aligns marketing and sales efforts, ensuring that everyone is on the same page regarding the product's market position.
              </p>
            </div>

            {/* Box 3 */}
            <div 
              data-inview={isInView}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-5 transition-all duration-[1000ms] ease-out opacity-0 translate-y-16 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 delay-[1000ms] hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5ac8fa]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="m-0 font-serif font-bold text-white text-[1.6rem] leading-tight group-hover:text-[#5ac8fa] transition-colors duration-300">
                Long-Term Impact
              </h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.05rem] leading-[1.6] opacity-90">
                Copygamie's impact extends beyond immediate brand positioning. It equips teams with the understanding to adapt to market changes and evolving consumer trends, supporting sustained brand relevance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CopygamieFrameworkContent;
