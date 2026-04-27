import { useEffect, useRef } from "react";
import caseStudyImg from "@/assets/insight case study.png";
import marketInsightImg from "@/assets/featured market insights.jpg";
import ashwinImg from "@/assets/ISG Ashwin Gaidhani.jpg";
import profileBg from "@/assets/image bg for profiles.jpg";

const insights = [
  {
    title: "How Digital Business Transformation (DBX) can miss the target objectives and lack momentum",
    link: "https://digitalfabric.group/how-digital-business-transformation-dbx-can-miss-the-target-objectives-and-lack-momentum/",
    image: caseStudyImg,
    category: "CASE STUDY",
  },
  {
    title: "How we enable Business, Experience and Transformation",
    link: "https://digitalfabric.group/how-we-enable-business-experience-and-transformation/",
    image: marketInsightImg,
    category: "MARKET INSIGHTS",
  },
];

const InsightsContent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>('.insight-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true');
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#ffffff] w-full px-[58px] py-32 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16">
      <div className="max-w-[1300px] mx-auto grid grid-cols-[1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 gap-12 items-stretch">

        {insights.map((insight, index) => (
          <article
            key={index}
            className="insight-card group relative flex flex-col bg-[#080d1a] shadow-xl hover:-translate-y-2 transition-all duration-300 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Top Image Portion */}
            <div className="relative w-full h-[220px] overflow-hidden bg-[#030612]">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white text-[#0a1122] font-sans text-[0.7rem] font-bold tracking-wider px-4 py-1.5 rounded-full shadow-md uppercase">
                {insight.category}
              </div>
            </div>

            {/* Overlapping Profile Circle */}
            <div
              className="absolute top-[220px] left-8 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-[#080d1a] overflow-hidden z-10 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${profileBg})` }}
            >
              <img src={ashwinImg} alt="Author profile" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Content Portion */}
            <div className="flex flex-col flex-1 p-8 pt-12">
              <h3 className="m-0 font-serif font-bold text-[#5ac8fa] text-[clamp(1.3rem,1.5vw,1.4rem)] leading-[1.3] mb-8 group-hover:text-white transition-colors duration-300">
                <a href={insight.link} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                  {insight.title}
                </a>
              </h3>

              <div className="mt-auto font-sans font-medium text-[#5ac8fa] text-xs uppercase tracking-widest pt-4 group-hover:text-[#88d8fb] transition-colors">
                READ MORE &raquo;
              </div>
            </div>
          </article>
        ))}

        {/* Third Column: Static Text Block */}
        <div
          className="insight-card opacity-0 translate-x-12 transition-all duration-[800ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
          style={{ transitionDelay: `300ms` }}
        >
          <div className="p-8 max-[900px]:p-4 h-full flex flex-col items-start justify-center text-left">
            <h2 className="m-0 font-serif font-bold text-[#081229] leading-[1.2] text-[clamp(1.7rem,2.7vw,2.7rem)] max-[640px]:text-[1.9rem]">
              For More Insights,
              <br />
              <span className="whitespace-nowrap max-[1100px]:whitespace-normal">Visit The Consulting Website</span>
            </h2>
            <div className="mt-8 ml-auto text-[#081229] transition-transform duration-300 hover:translate-x-2 cursor-pointer">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsightsContent;
