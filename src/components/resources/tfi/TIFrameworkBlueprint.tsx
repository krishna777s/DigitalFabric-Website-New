import { useEffect, useRef } from "react";
import tiFrameworkJourney from "@/assets/TIF business journey.png";
import bxIcon from "@/assets/TIF bx.png";
import workDesignIcon from "@/assets/TIF WORK DESIGN.png";
import attributesIcon from "@/assets/TIF work attributes.png";
import checklistIcon from "@/assets/TIF process and checklist.png";

const businessTransformationDimensions = [
  {
    title: "Governance",
    description: "focuses on strategic oversight, ensuring decisions are in line with organizational goals.",
  },
  {
    title: "Conformance",
    description: "emphasizes adherence to industry standards and regulations, safeguarding operational integrity.",
  },
  {
    title: "Performance",
    description: "prioritizes operational efficiency and effectiveness, driving business success.",
  },
];

const workDesignConstituents = [
  "People: The Core of Transformation",
  "Process: Achieving Efficiency and Effectiveness",
  "Platform: Enabling Comprehensive Capabilities",
  "Product: Delivering E2E Solutions",
  "Partnership: Building Strategic Networks",
];

const workDesignAttributes = [
  "Resource Mapping & Management",
  "Process Efficiency & Calculation",
  "Capability/Onboarding & Technology Management",
  "E2E Solution Design & Product Management",
  "Network Building",
  "Culture & Mindset Management",
  "Enterprise Optimization & Design Engineering",
  "Platform Adoption & Scale",
  "Customer/Employee Expectation Management",
  "Relationship Management",
];

const journeyGridHighlights = [
  { column: 0, row: 3 },
  { column: 1, row: 4 },
  { column: 2, row: 2 },
  { column: 3, row: 1 },
  { column: 4, row: 1 },
];

const items = [
  {
    title: "Business Transformation Dimensions:",
    description: "Three core areas that shape the success factors, driving holistic business transformation.",
    iconSrc: bxIcon,
  },
  {
    title: "Work Design Constituents",
    description: "A framework composed of five key elements that define how work is structured and executed.",
    iconSrc: workDesignIcon,
  },
  {
    title: "Work Design Attributes",
    description: "Ten critical aspects that support and enhance the work design constituents for optimal outcomes.",
    iconSrc: attributesIcon,
  },
  {
    title: "Processes And Checklists:",
    description: "Ten structured processes and 25 checklist controls to ensure thorough oversight and execution efficiency.",
    iconSrc: checklistIcon,
  },
];

const TIFrameworkBlueprint = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedItems = Array.from(
      section.querySelectorAll<HTMLElement>(".ti-blueprint-intro-base, .ti-blueprint-card-base, .ti-blueprint-feature-base")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    animatedItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#151d33] text-[#f5f6fb] grid grid-cols-[minmax(280px,0.88fr)_minmax(0,1.52fr)] max-[1180px]:grid-cols-1 gap-12 max-[1180px]:gap-8 px-[56px] py-[52px] max-[1180px]:px-7 max-[1180px]:py-[42px] max-[640px]:px-[18px] max-[640px]:py-8">
      <div className="flex items-center will-change-[transform,opacity,filter] ti-blueprint-intro-base">
        <h2 className="m-0 max-w-[540px] max-[1180px]:max-w-[760px] font-serif text-[clamp(1.32rem,2.05vw,2rem)] max-[640px]:text-[clamp(1.12rem,5.6vw,1.45rem)] font-bold leading-[1.08] -tracking-[0.04em] text-[#f5f6fb]">
          Integrated Blueprint for Business Transformation: Success Factors, Design Elements, and Control Mechanisms
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(180px,236px))] max-[820px]:grid-cols-1 gap-2.5 content-start justify-start">
        {items.map(({ title, description, iconSrc }, i) => (
          <article 
            key={title} 
            className="ti-blueprint-card-base group grid grid-cols-[42px_minmax(0,1fr)] max-[820px]:grid-cols-[40px_minmax(0,1fr)] max-[640px]:grid-cols-[36px_minmax(0,1fr)] gap-2.5 max-[640px]:gap-2 min-h-[140px] max-[820px]:min-h-0 max-w-[236px] p-3 max-[640px]:p-2.5 border border-white/70 bg-white/[0.02] rounded-2xl will-change-[transform,opacity,filter]"
            style={{ transitionDelay: `${60 + i * 70}ms` }}
          >
            <div className="flex items-center justify-center pt-1 w-8 h-8 max-[640px]:w-7 max-[640px]:h-7" aria-hidden="true">
              <img src={iconSrc} alt="" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow" />
            </div>

            <div className="ti-blueprint-copy">
              <h3 className="m-0 mb-2 max-[640px]:mb-1.5 font-sans text-[clamp(0.82rem,0.94vw,0.98rem)] font-bold leading-tight text-white">{title}</h3>
              <p className="m-0 max-w-[170px] font-sans text-[clamp(0.72rem,0.82vw,0.84rem)] font-normal leading-[1.22] text-[#f1f5fb]">{description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="col-span-full grid grid-cols-[minmax(260px,0.84fr)_minmax(280px,1fr)] max-[1180px]:grid-cols-1 gap-[34px] max-[1180px]:gap-5 max-[820px]:gap-4 items-center mt-4 max-[1180px]:mt-2.5 max-[640px]:mt-1.5 p-[22px_22px_18px] max-[1180px]:p-[18px_18px_14px] max-[820px]:p-[16px_16px_14px] max-[640px]:p-[14px_14px_12px] bg-[radial-gradient(circle_at_top_left,rgba(37,214,255,0.14),transparent_34%),linear-gradient(135deg,rgba(11,20,54,0.98),rgba(21,29,51,0.94))] border border-[#25d6ff24] rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_24px_rgba(3,8,22,0.14)] will-change-[transform,opacity,filter] ti-blueprint-feature-base" aria-label="Business transformation dimensions">
        <div className="max-w-[420px]">
          <div className="inline-flex w-[54px] h-[54px] max-[820px]:w-[46px] max-[820px]:h-[46px] max-[640px]:w-10 max-[640px]:h-10 mb-3 max-[820px]:mb-2.5 max-[640px]:mb-2 ti-blueprint-feature-icon-base" aria-hidden="true">
             <img src={bxIcon} alt="" className="w-full h-full object-contain drop-shadow" />
          </div>

          <h3 className="m-0 max-w-[320px] max-[820px]:max-w-[280px] max-[640px]:max-w-[220px] font-serif text-[clamp(1.68rem,3vw,2.9rem)] max-[820px]:text-[clamp(1.45rem,6.5vw,2.2rem)] max-[640px]:text-[clamp(1.2rem,7vw,1.7rem)] font-bold leading-[1.08] -tracking-[0.05em] text-white ti-blueprint-feature-title-base">BX (Business Transformation) Dimensions</h3>
          <p className="mt-3.5 max-[820px]:mt-3 max-[640px]:mt-2.5 max-w-[360px] font-sans text-[clamp(0.9rem,1.18vw,1.08rem)] max-[820px]:text-[clamp(0.9rem,3vw,1rem)] max-[640px]:text-[0.84rem] leading-[1.38] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-desc-base">
            Three core areas that shape the success factors, driving holistic business transformation.
          </p>
        </div>

        <ol className="m-0 pl-6 max-[820px]:pl-5 max-[640px]:pl-[18px] font-sans text-[clamp(0.84rem,1vw,1rem)] max-[820px]:text-[0.9rem] max-[640px]:text-[0.8rem] leading-[1.46] max-[820px]:leading-[1.42] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-list-base">
          {businessTransformationDimensions.map(({ title, description }) => (
            <li key={title} className="[&:not(:first-child)]:mt-1.5 max-[640px]:[&:not(:first-child)]:mt-[5px]">
              <strong className="text-white font-extrabold">{title}</strong> {description}
            </li>
          ))}
        </ol>
      </section>

      <section className="col-span-full grid grid-cols-[minmax(260px,0.84fr)_minmax(280px,1fr)] max-[1180px]:grid-cols-1 gap-[34px] max-[1180px]:gap-5 max-[820px]:gap-4 items-center mt-1 p-[22px_22px_18px] max-[1180px]:p-[18px_18px_14px] max-[820px]:p-[16px_16px_14px] max-[640px]:p-[14px_14px_12px] bg-[radial-gradient(circle_at_top_right,rgba(53,214,255,0.18),transparent_32%),linear-gradient(90deg,#122052_0%,#1e4670_58%,#2a93bd_100%)] border border-[#68dcff2e] rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_24px_rgba(3,8,22,0.14)] will-change-[transform,opacity,filter] ti-blueprint-feature-base" aria-label="Work design constituents">
        <div className="max-w-[420px]">
          <div className="inline-flex w-[54px] h-[54px] max-[820px]:w-[46px] max-[820px]:h-[46px] max-[640px]:w-10 max-[640px]:h-10 mb-3 max-[820px]:mb-2.5 max-[640px]:mb-2 ti-blueprint-feature-icon-base" aria-hidden="true">
            <img src={workDesignIcon} alt="" className="w-full h-full object-contain drop-shadow" />
          </div>

          <h3 className="m-0 max-w-[340px] max-[820px]:max-w-[320px] max-[640px]:max-w-[220px] font-serif text-[clamp(1.68rem,3vw,2.9rem)] max-[820px]:text-[clamp(1.45rem,6.5vw,2.2rem)] max-[640px]:text-[clamp(1.2rem,7vw,1.7rem)] font-bold leading-[1.08] -tracking-[0.05em] text-white ti-blueprint-feature-title-base">Work Design Constituents</h3>
          <p className="mt-3.5 max-[820px]:mt-3 max-[640px]:mt-2.5 max-w-[360px] font-sans text-[clamp(0.9rem,1.18vw,1.08rem)] max-[820px]:text-[clamp(0.9rem,3vw,1rem)] max-[640px]:text-[0.84rem] leading-[1.38] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-desc-base">
            A framework composed of five key elements that define how work is structured and executed.
          </p>
        </div>

        <ol className="m-0 pl-[26px] max-[820px]:pl-5 max-[640px]:pl-[18px] font-sans text-[clamp(0.84rem,1vw,1rem)] max-[820px]:text-[0.9rem] max-[640px]:text-[0.8rem] leading-[1.46] max-[820px]:leading-[1.42] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-list-base">
          {workDesignConstituents.map((item) => {
            const [title, description] = item.split(": ");
            return (
              <li key={item} className="[&:not(:first-child)]:mt-1.5 max-[640px]:[&:not(:first-child)]:mt-[5px]">
                <strong className="text-white font-extrabold">{title}:</strong> {description}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="col-span-full grid grid-cols-[minmax(260px,0.84fr)_minmax(280px,1fr)] max-[1180px]:grid-cols-1 gap-[34px] max-[1180px]:gap-5 max-[820px]:gap-4 items-center mt-1 p-[22px_22px_18px] max-[1180px]:p-[18px_18px_14px] max-[820px]:p-[16px_16px_14px] max-[640px]:p-[14px_14px_12px] bg-[radial-gradient(circle_at_top_left,rgba(37,214,255,0.1),transparent_28%),linear-gradient(180deg,rgba(12,19,58,0.98),rgba(17,23,69,0.95))] border border-[#54d7ff1f] rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_24px_rgba(3,8,22,0.14)] will-change-[transform,opacity,filter] ti-blueprint-feature-base" aria-label="Work design attributes">
        <div className="max-w-[420px]">
          <div className="inline-flex w-[54px] h-[54px] max-[820px]:w-[46px] max-[820px]:h-[46px] max-[640px]:w-10 max-[640px]:h-10 mb-3 max-[820px]:mb-2.5 max-[640px]:mb-2 ti-blueprint-feature-icon-base" aria-hidden="true">
            <img src={attributesIcon} alt="" className="w-full h-full object-contain drop-shadow" />
          </div>

          <h3 className="m-0 max-w-[300px] max-[820px]:max-w-[320px] max-[640px]:max-w-[220px] font-serif text-[clamp(1.68rem,3vw,2.9rem)] max-[820px]:text-[clamp(1.45rem,6.5vw,2.2rem)] max-[640px]:text-[clamp(1.2rem,7vw,1.7rem)] font-bold leading-[1.08] -tracking-[0.05em] text-white ti-blueprint-feature-title-base">Work Design Attributes</h3>
          <p className="mt-3.5 max-[820px]:mt-3 max-[640px]:mt-2.5 max-w-[340px] font-sans text-[clamp(0.9rem,1.18vw,1.08rem)] max-[820px]:text-[clamp(0.9rem,3vw,1rem)] max-[640px]:text-[0.84rem] leading-[1.38] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-desc-base">
            Ten critical aspects that support and enhance the work design constituents for optimal outcomes.
          </p>
        </div>

        <ol className="m-0 pl-[26px] max-[820px]:pl-5 max-[640px]:pl-[18px] font-sans text-[clamp(0.84rem,1vw,1rem)] max-[820px]:text-[0.9rem] max-[640px]:text-[0.8rem] leading-[1.46] max-[820px]:leading-[1.42] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-list-base" style={{ columns: 1 }}>
          {workDesignAttributes.map((item) => (
            <li key={item} className="[&:not(:first-child)]:mt-1.5 max-[640px]:[&:not(:first-child)]:mt-[5px]">{item}</li>
          ))}
        </ol>
      </section>

      <section className="col-span-full grid grid-cols-[minmax(260px,0.84fr)_minmax(280px,1fr)] max-[1180px]:grid-cols-1 gap-[34px] max-[1180px]:gap-5 max-[820px]:gap-4 items-center mt-1 p-[22px_22px_18px] max-[1180px]:p-[18px_18px_14px] max-[820px]:p-[16px_16px_14px] max-[640px]:p-[14px_14px_12px] bg-[radial-gradient(circle_at_top_right,rgba(52,205,255,0.18),transparent_28%),linear-gradient(90deg,#122052_0%,#1d4670_55%,#2e9ec6_100%)] border border-[#58dbff29] rounded-[22px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_24px_rgba(3,8,22,0.14)] will-change-[transform,opacity,filter] ti-blueprint-feature-base" aria-label="Attribute processes and checklists">
        <div className="max-w-[420px]">
          <div className="inline-flex w-[54px] h-[54px] max-[820px]:w-[46px] max-[820px]:h-[46px] max-[640px]:w-10 max-[640px]:h-10 mb-3 max-[820px]:mb-2.5 max-[640px]:mb-2 ti-blueprint-feature-icon-base" aria-hidden="true">
             <img src={checklistIcon} alt="" className="w-full h-full object-contain drop-shadow" />
          </div>

          <h3 className="m-0 max-w-[340px] max-[640px]:max-w-[220px] font-serif text-[clamp(1.68rem,3vw,2.9rem)] max-[820px]:text-[clamp(1.45rem,6.5vw,2.2rem)] max-[640px]:text-[clamp(1.2rem,7vw,1.7rem)] font-bold leading-[1.08] -tracking-[0.05em] text-white ti-blueprint-feature-title-base">Attribute Processes & Checklists</h3>
          <p className="mt-3.5 max-[820px]:mt-3 max-[640px]:mt-2.5 max-w-[360px] font-sans text-[clamp(0.9rem,1.18vw,1.08rem)] max-[820px]:text-[clamp(0.9rem,3vw,1rem)] max-[640px]:text-[0.84rem] leading-[1.38] max-[640px]:leading-[1.34] text-[#f5f6fbdf] ti-blueprint-feature-desc-base">
            Ten structured processes and 25 checklist controls to ensure thorough oversight and execution efficiency.
          </p>
        </div>

        <div className="block w-full overflow-hidden rounded-[16px] border border-[#68dcff1f] shadow-lg bg-[#0e1634] ti-blueprint-feature-list-base flex items-center justify-center p-2" aria-hidden="true">
          <img src={tiFrameworkJourney} alt="Business Customer Journey Grid" className="w-full h-auto object-cover rounded-xl" />
        </div>
      </section>
    </section>
  );
};

export default TIFrameworkBlueprint;
