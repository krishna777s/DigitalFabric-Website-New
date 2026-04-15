import { useEffect, useRef } from "react";
import roomNRoofImg from "@/assets/sucess stories room n roof.png";
import eyegenieImg from "@/assets/sucess story eyegenie.png";
import isgImg from "@/assets/sucess stories ISG.png";
import automatRImg from "@/assets/sucess stories Automat R.png";
import soncurImg from "@/assets/sucess stories soncur1234aa.png";

const items = [
  { type: "card", title: "RoomNRoof Success Story", link: "#", image: roomNRoofImg },
  { type: "card", title: "Eyegenie Success Story (Healthcare)", link: "#", image: eyegenieImg },
  { type: "spacer" },
  { type: "card", title: "ISG Success Story (Research & Analyst Firm)", link: "#", image: isgImg },
  { type: "card", title: "AutomatR Success Story (SaaS – Intelligent Automation)", link: "https://digitalfabric.group/automatr-success-story/", image: automatRImg },
  { type: "textBlock" },
  { type: "card", title: "Soncur Success Story (Pan-India Fashion Tech)", link: "#", image: soncurImg },
];

const MarketingSuccessStoriesContent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>('.animate-in-view');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#ffffff] w-full px-[58px] py-32 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1 gap-12 max-[900px]:gap-8 items-stretch">
        
        {items.map((item, index) => {
          if (item.type === "spacer") {
            return <div key={index} className="hidden min-[1000px]:block" />; // Spacer for Row 1 layout
          }

          if (item.type === "textBlock") {
            return (
              <div 
                key={index} 
                className="animate-in-view flex border-l-4 border-transparent flex-col justify-center px-4 max-[1000px]:col-span-2 max-[640px]:col-span-1 opacity-0 translate-x-12 transition-all duration-[900ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
              >
                <div className="flex flex-col gap-8 max-w-[380px]">
                  <h3 className="m-0 font-serif font-bold text-[#030a1a] text-[clamp(1.6rem,2.2vw,2rem)] leading-[1.2]">
                    For More Information On Our Enterprise Marketing Capability, Visit The IMAGENIE&trade; Website
                  </h3>
                  <a href="#" className="w-12 h-12 flex items-center justify-center text-[#030a1a] hover:text-[#5ac8fa] transition-colors duration-300">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="36px" width="36px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          }

          // Card Item
          return (
            <article 
              key={index} 
              className="animate-in-view flex flex-col bg-[#070b16] rounded-[2px] shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-0 translate-y-12 data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 relative border border-[#ffffff0a] overflow-hidden"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              {/* Top Image Portion */}
              <div className="relative w-full h-[220px] bg-white overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 mix-blend-multiply"
                />
              </div>

              {/* Bottom Content Portion */}
              <div className="flex flex-col flex-1 p-8 pt-8">
                <h3 className="m-0 font-serif font-bold text-[#5ac8fa] text-[clamp(1.2rem,1.4vw,1.35rem)] leading-[1.3] mb-8 hover:text-white transition-colors duration-300">
                  <a href={item.link} className="after:absolute after:inset-0">
                    {item.title}
                  </a>
                </h3>
                
                <div className="mt-auto font-sans font-semibold text-[#5ac8fa] text-[0.7rem] uppercase tracking-widest hover:text-[#88d8fb] transition-colors relative z-20">
                  EXPLORE &raquo;
                </div>
              </div>
            </article>
          );
        })}

      </div>
    </section>
  );
};

export default MarketingSuccessStoriesContent;
