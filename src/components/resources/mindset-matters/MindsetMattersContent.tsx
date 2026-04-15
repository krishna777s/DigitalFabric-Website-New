import React, { useState, useEffect, useRef } from "react";
import img1 from "@/assets/mindset matters Work-Sourcing-scaled.jpg";
import img2 from "@/assets/mindset matters Digital-infrastructure-insdusty-scaled.jpg";
import img3 from "@/assets/mind matters Purpose-Pratice-scaled.jpg";
import img4 from "@/assets/mind matters SUSTAINABLE-BY-DESIGN-scaled.jpg";
import img5 from "@/assets/mind matters What-is-a-product-scaled.jpg";
import img6 from "@/assets/mind matters green framework.jpg";
import img7 from "@/assets/mind matters sustainability at core.jpg";
import img8 from "@/assets/mind matters the-Journey-So-far-scaled.jpg";

type Category = 
  | "All Categories"
  | "Sourcing Strategy & Frameworks"
  | "Corporate Governance Frameworks"
  | "History of Technology"
  | "Technology Fundamentals"
  | "Sustainable Development in IT Industry";

const categories: Category[] = [
  "All Categories",
  "Sourcing Strategy & Frameworks",
  "Corporate Governance Frameworks",
  "History of Technology",
  "Technology Fundamentals",
  "Sustainable Development in IT Industry"
];

const chartsData = [
  { id: 1, category: "Sourcing Strategy & Frameworks", src: img1, alt: "Work Sourcing Trajectory" },
  { id: 2, category: "Technology Fundamentals", src: img2, alt: "Digital Infrastructure Demand" },
  { id: 3, category: "Corporate Governance Frameworks", src: img3, alt: "Governance is Purpose and Practice" },
  { id: 4, category: "Sustainable Development in IT Industry", src: img4, alt: "Sustainable By Design" },
  { id: 5, category: "Technology Fundamentals", src: img5, alt: "What is a Product" },
  { id: 6, category: "Sustainable Development in IT Industry", src: img6, alt: "Green Framework" },
  { id: 7, category: "Sustainable Development in IT Industry", src: img7, alt: "Sustainability at Core" },
  { id: 8, category: "History of Technology", src: img8, alt: "The Journey So Far" }
];

const MindsetMattersContent = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Categories");
  const sectionRef = useRef<HTMLElement | null>(null);

  const filteredCharts = chartsData.filter(
    chart => activeCategory === "All Categories" || chart.category === activeCategory
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-inview', 'true');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0b101c] w-full px-[58px] py-24 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16 opacity-0 translate-y-12 transition-all duration-[900ms] ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[300px_1fr] max-[900px]:grid-cols-1 gap-12 max-[900px]:gap-8 items-start">
        
        {/* Left Sidebar */}
        <aside className="flex flex-col gap-8 max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:gap-4 border-r border-[#ffffff1a] max-[900px]:border-r-0 max-[900px]:border-b pb-6 sticky top-[120px] max-[900px]:static">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`text-left font-sans text-[1.05rem] leading-[1.4] transition-colors duration-300 pr-6 ${
                activeCategory === cat 
                  ? "text-[#5ac8fa] font-semibold" 
                  : "text-white hover:text-[#5ac8fa]"
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Right Content */}
        <div className="relative border border-[#ffffff3a] bg-[#0d1326] h-[750px] overflow-y-auto w-full [&::-webkit-scrollbar]:w-[14px] [&::-webkit-scrollbar-track]:bg-[#ffffff0a] [&::-webkit-scrollbar-track]:border-l [&::-webkit-scrollbar-track]:border-[#ffffff1a] [&::-webkit-scrollbar-thumb]:bg-[#0b74a3] [&::-webkit-scrollbar-thumb]:border-[4px] [&::-webkit-scrollbar-thumb]:border-[#ffffff0a] [&::-webkit-scrollbar-thumb]:rounded-full scroll-smooth">
          <div className="flex flex-col w-full h-fit min-h-full py-4">
            {filteredCharts.map((chart, index) => (
              <div 
                key={chart.id} 
                className="w-full flex items-center justify-center p-8 max-[640px]:p-4 border-b border-[#ffffff10] last:border-b-0 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={chart.src} 
                  alt={chart.alt} 
                  className="w-full max-w-[900px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            ))}

            {filteredCharts.length === 0 && (
              <div className="flex w-full h-full items-center justify-center py-32 text-[#cfd4e6] font-sans italic text-[1.1rem]">
                No visuals found for this category.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MindsetMattersContent;
