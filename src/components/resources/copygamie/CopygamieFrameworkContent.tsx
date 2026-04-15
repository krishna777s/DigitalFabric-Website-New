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

        {/* Bottom Split: Outcomes & Clients */}
        <div 
          data-inview={isInView}
          className="grid grid-cols-[1fr_1fr] max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10 items-start opacity-0 translate-y-12 transition-all duration-[900ms] ease-out delay-[400ms] data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
        >
          {/* Left: Outcomes */}
          <div className="flex flex-col gap-6">
            <h2 className="m-0 font-serif font-bold text-white text-[clamp(2rem,3vw,2.8rem)] leading-[1.1] mb-2">
              Outcomes of using The Copygamie Framework:
            </h2>
            
            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-serif font-bold text-white text-[1.4rem]">Enhanced Understanding of Product</h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.1rem] leading-[1.5]">
                One of the most significant outcomes of the Copygamie framework is the clarity it brings to a product&rsquo;s features and benefits. It helps teams articulate not just what their product is, but why it matters &ndash; a crucial aspect in today&rsquo;s value-driven market.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-serif font-bold text-white text-[1.4rem]">Improved Strategic Direction</h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.1rem] leading-[1.5]">
                The GTM strategy is profoundly influenced by the insights gained through Copygamie. It aligns marketing and sales efforts, ensuring that everyone is on the same page regarding the product&rsquo;s market position.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="m-0 font-serif font-bold text-white text-[1.4rem]">Long-Term Impact</h3>
              <p className="m-0 font-sans font-light text-[#cfd4e6] text-[1.1rem] leading-[1.5]">
                Copygamie&rsquo;s impact extends beyond immediate brand positioning. It equips teams with the understanding to adapt to market changes and evolving consumer trends, supporting sustained brand relevance.
              </p>
            </div>
          </div>

          {/* Right: CTA details */}
          <div className="flex flex-col gap-8 pt-[6px]">
            <p className="font-serif italic text-white text-[1.6rem] m-0 leading-tight">
              Click on the image to start editing the framework.
            </p>
            <p className="font-serif italic text-white text-[1.6rem] m-0 leading-tight mt-[-10px]">
              See how we used The Copygamie Framework for our clients: <a href="https://digitalfabric.group/soncur-success-story/" className="text-[#5ac8fa] not-italic hover:underline decoration-[2px] underline-offset-4">Soncur</a> and <a href="https://digitalfabric.group/eyegenie-success-story/" className="text-[#5ac8fa] not-italic hover:underline decoration-[2px] underline-offset-4">Eyegenie</a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CopygamieFrameworkContent;
