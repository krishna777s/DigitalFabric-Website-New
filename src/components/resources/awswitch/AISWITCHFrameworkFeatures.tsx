import { useEffect, useRef } from "react";
import iconDistillation from "@/assets/awswitch distillation_2131341.png";
import iconFoot from "@/assets/awswitch foot_6363014.png";
import iconIdea from "@/assets/awswitch idea_1387873.png";
import iconBarChart from "@/assets/awswitch bar-chart_5931710.png";
import iconPlate from "@/assets/awswitch plate_8297625.png";

const features = [
  {
    title: "AI@Scale Catalysts",
    description: "AISWITCH drives the growth of your enterprise by scaling AI, machine learning, and analytics capabilities. It enables organizations to leverage these technologies to optimize performance, streamline operations, and unlock new revenue streams.",
    icon: iconDistillation,
  },
  {
    title: "AI Co-Walkers",
    description: "We walk alongside you through every step of your digital and data transformation journey. AISWITCH ensures that your organization is equipped with the right tools, strategies, and insights to navigate the rapidly evolving AI landscape.",
    icon: iconFoot,
  },
  {
    title: "AI Collaborators",
    description: "AISWITCH partners with your teams to co-create and implement effective AI strategies and operational best practices. It helps organizations harness the power of AI in a way that aligns with business goals and drives sustainable innovation.",
    icon: iconIdea,
  },
  {
    title: "AI Competition Arsenal",
    description: "In today's competitive landscape, AISWITCH serves as your strategic advantage, providing a robust toolkit that helps you outpace the competition. By implementing AI-driven solutions, your business can remain agile, adaptable, and consistently ahead in the market.",
    icon: iconBarChart,
  },
  {
    title: "AI Conscience-Keepers",
    description: "AISWITCH is not just about winning — it's about winning ethically and sustainably. The framework ensures that your market gains are socially responsible, maintaining a balance between business success and social impact, promoting long-term sustainability.",
    icon: iconPlate,
  },
];

const AISWITCHFrameworkFeatures = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>('.feature-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b101c] px-[58px] py-32 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16"
    >
      <div className="max-w-7xl mx-auto flex gap-12 max-[900px]:flex-col relative items-start">

        {/* Sticky Heading Left Column */}
        <div className="w-[45%] max-[900px]:w-full sticky top-[350px] max-[900px]:static max-[900px]:mb-12">
          <h2 className="m-0 font-serif font-bold text-white leading-[1.05] -tracking-[0.03em] text-[clamp(2.5rem,4.5vw,4.2rem)] max-[640px]:text-[2.2rem] feature-item opacity-0 translate-y-12 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0">
            In Your AI Journey,<br />We Are Your...
          </h2>
          <p className="mt-6 text-[#94a3b8] text-[clamp(1rem,1.3vw,1.4rem)] leading-relaxed font-serif max-w-[380px]">
            The AISWITCH<sup className="text-[0.6em] relative top-[-0.4em] ml-[2px]">™</sup> Framework provides independent management pillars to guide your enterprise through the complexities of AI evolution.
          </p>
        </div>

        {/* Scrolling Features Right Column */}
        <div className="w-[55%] max-[900px]:w-full flex flex-col gap-[72px] max-[640px]:gap-[48px]">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="feature-item grid grid-cols-[80px_minmax(0,1fr)] max-[640px]:grid-cols-[56px_minmax(0,1fr)] gap-6 max-[640px]:gap-4 border-b border-[#ffffff14] pb-10 max-[640px]:pb-8 last:border-b-0 last:pb-0 opacity-0 translate-y-12 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 hover:scale-[1.03] hover:translate-x-2 transition-all duration-[400ms] transform-gpu cursor-default group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-center pt-1.5">
                <img
                  src={feat.icon}
                  alt={`${feat.title} icon`}
                  className="w-full h-auto object-contain drop-shadow-[0_0_8px_rgba(45,212,255,0.4)] mix-blend-screen"
                />
              </div>
              <div>
                <h3 className="m-0 mb-4 max-[640px]:mb-2 font-sans font-bold text-[#ffffff] text-[clamp(1.15rem,1.4vw,1.3rem)] leading-tight tracking-wide">
                  {feat.title}
                </h3>
                <p className="m-0 font-sans font-light text-[#cfd4e6] text-[clamp(1.1rem,1.35vw,1.45rem)] leading-[1.6] max-[640px]:text-[1rem] text-wrap-pretty">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AISWITCHFrameworkFeatures;
