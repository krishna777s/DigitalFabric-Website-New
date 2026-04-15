import { useEffect, useRef } from "react";
import bg1 from "@/assets/story telling bg1.png";
import bg2 from "@/assets/so what and what then bg 2.jpg";
import bg3 from "@/assets/story board quoetionnaire bg 3.jpg";
import bg4 from "@/assets/story board CXO bg 4.jpg";
import bg5 from "@/assets/story board tools bg 5.jpg";
import bg6 from "@/assets/stoty board building data stories bg 6.jpg";
import bg7 from "@/assets/story board 5ds bg 7.jpg";
import bg8 from "@/assets/story board right to time bg 8.jpg";
import profilePortrait from "@/assets/storyboard potraight (she).png";

const storyboards = [
  { title: "What Are the Top 5 Data Storytelling Techniques?", link: "#", image: bg1 },
  { title: "How To Use the So-What And What-Then Data Story-Telling Tech", link: "#", image: bg2 },
  { title: "Data Storytelling Technique: Questionnaire Templating", link: "#", image: bg3 },
  { title: "How To Build 3-Minute Data Stories for CXO Attention Span", link: "#", image: bg4 },
  { title: "What Are The Top 5 Features of Data Story-Telling Tools?", link: "#", image: bg5 },
  { title: "How To Use Storyboarding Tech for Building Data Stories", link: "#", image: bg6 },
  { title: "The 5 D's of AI Storytelling", link: "#", image: bg7 },
  { title: "Get Your AI Story Right First Time", link: "#", image: bg8 }
];

const AISwitchStoryboardsContent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>('.storyboard-card');
    
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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#ffffff] w-full px-[58px] py-24 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-4 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 gap-8 items-stretch">
        
        {storyboards.map((board, index) => (
          <article 
            key={index} 
            className="storyboard-card flex flex-col bg-[#070b16] rounded-[2px] shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 relative border border-[#ffffff0a]"
            style={{ transitionDelay: `${(index % 4) * 100}ms` }}
          >
            {/* Top Image Portion */}
            <div className="relative w-full h-[180px] overflow-hidden bg-[#030612]">
              <img 
                src={board.image} 
                alt={board.title} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white text-[#0a1122] font-sans text-[0.65rem] font-bold tracking-wider px-3 py-1.5 rounded-full shadow-md uppercase">
                AISWITCH STORYBOARDS
              </div>
            </div>

            {/* Overlapping Profile Circle */}
            <div className="absolute top-[180px] left-6 -translate-y-1/2 w-14 h-14 rounded-full border-[3px] border-[#070b16] overflow-hidden bg-[#070b16] z-10 shadow-lg">
              <img src={profilePortrait} alt="Author profile" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Content Portion */}
            <div className="flex flex-col flex-1 p-6 pt-10">
              <h3 className="m-0 font-serif font-bold text-[#5ac8fa] text-[clamp(1.2rem,1.4vw,1.35rem)] leading-[1.3] mb-6 hover:text-white transition-colors duration-300">
                <a href={board.link} className="after:absolute after:inset-0">
                  {board.title}
                </a>
              </h3>
              
              <div className="mt-auto font-sans font-semibold text-[#5ac8fa] text-[0.7rem] uppercase tracking-widest pt-2 hover:text-[#88d8fb] transition-colors relative z-20">
                READ MORE &raquo;
              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
};

export default AISwitchStoryboardsContent;
