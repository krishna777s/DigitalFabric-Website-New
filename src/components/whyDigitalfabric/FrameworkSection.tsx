import React, { useEffect, useRef } from "react";
import imgPeople from "@/assets/why df culture.png";
import imgValue from "@/assets/why df value.png";
import imgCulture from "@/assets/why df culture.png";
import imgProcess from "@/assets/why df process.png";
import imgEfficiency from "@/assets/why df efficiency.png";
import imgEffectiveness from "@/assets/why df effectiveness.png";
import imgPlatform from "@/assets/why df platform.png";
import imgComprehensive from "@/assets/why df comprehensive.png";
import imgCapabilities from "@/assets/why df capabilities.png";
import imgProduct from "@/assets/why df product.png";
import imgExpectations from "@/assets/why df expectations.png";
import imgE2E from "@/assets/why df e2e.png";
import imgPartnership from "@/assets/why df partnership.png";
import imgNetwork from "@/assets/why df network.png";
import imgCollaboration from "@/assets/why df collabration.png";

/* ─── Image Icon helper ──────────────────────────────────────── */
const ImgIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-contain drop-shadow-lg" />
);

/* ─── Keyframes via <style> tag ──────────────────────────────── */
const glowKeyframes = `
@keyframes frameworkBoxGlow {
  0%, 100% {
    border-color: rgba(92,215,255,0.18);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 38px rgba(5,10,28,0.18), 0 0 0 rgba(37,216,255,0.18);
    background: linear-gradient(180deg,rgba(74,210,255,0.28) 0%,rgba(74,210,255,0.2) 22%,rgba(53,178,255,0.1) 58%,rgba(23,94,186,0.025) 100%);
  }
  50% {
    border-color: rgba(92,215,255,0.34);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 22px 44px rgba(5,10,28,0.24), 0 0 26px rgba(37,216,255,0.18);
    background: linear-gradient(180deg,rgba(74,210,255,0.4) 0%,rgba(74,210,255,0.28) 22%,rgba(53,178,255,0.16) 58%,rgba(23,94,186,0.05) 100%);
  }
}
`;

/* ─── Types ─────────────────────────────────────────────────── */
type LayoutVariant = "default" | "platform" | "product" | "partnership";

interface FrameworkCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  points: { icon: React.ReactNode; title: string; body: string }[];
  variant?: LayoutVariant;
  layoutId: string;
}

const variantBg: Record<LayoutVariant, string> = {
  default: "transparent",
  platform:
    "linear-gradient(180deg,#101542 0%,#142e5c 56%,#2567a2 100%)",
  product:
    "linear-gradient(180deg,#2567a2 0%,#1d4f84 42%,#16355f 74%,#101542 100%)",
  partnership:
    "linear-gradient(180deg,#101542 0%,#0d1339 56%,#090d29 100%)",
};

/* ─── Reusable layout card ───────────────────────────────────── */
/* ─── Reusable layout card ───────────────────────────────────── */
const FrameworkCard: React.FC<FrameworkCardProps> = ({
  icon,
  label,
  description,
  points,
  variant = "default",
  layoutId,
}) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
        } else {
          el.removeAttribute("data-visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isExtended = variant !== "default";
  
  return (
    <div
      ref={layoutRef}
      id={layoutId}
      data-variant={variant}
      className={`framework-layout-card group relative w-full ${isExtended ? 'py-16 md:py-24' : 'py-12 md:py-16'}`}
      style={{
        background: isExtended ? variantBg[variant] : "transparent",
      }}
    >
      {/* Inner Container with Padding */}
      <div className="w-full mx-auto px-[20px] sm:px-[36px] md:px-[60px] layout-inner">
        
        {/* Copy block */}
        <div
          className="flex flex-col items-center text-center mx-auto mb-12 md:mb-16"
          style={{ width: "min(100%, 1100px)" }}
        >
          {/* Lead icon */}
          <div
            className="flex items-center justify-center text-[#25d8ff] mb-6"
            style={{ width: "clamp(80px, 12vw, 120px)", height: "clamp(80px, 12vw, 120px)" }}
            aria-hidden="true"
          >
            {icon}
          </div>

          {/* Badge */}
          <BadgePill label={label} layoutId={layoutId} />

          {/* Description */}
          <p
            className="m-0 text-center leading-[1.6] text-[rgba(234,236,245,0.9)] font-serif"
            style={{
              maxWidth: "960px",
              fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)",
            }}
          >
            {description}
          </p>
        </div>

        {/* Points grid */}
        <div
          className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          style={{ maxWidth: "1240px" }}
        >
          {points.map((pt, i) => (
            <PointCard key={i} icon={pt.icon} title={pt.title} body={pt.body} index={i} layoutId={layoutId} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Badge pill ─────────────────────────────────────────────── */
const BadgePill: React.FC<{ label: string; layoutId: string }> = ({ label }) => (
  <h3
    className="
      flex items-center justify-center text-center
      mb-6 md:mb-8
      text-[#d8f4ff] font-serif font-bold tracking-tight
      transition-all duration-300 ease
      badge-pill
    "
    style={{
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      textShadow: "0 2px 8px rgba(0,0,0,0.4)",
    }}
  >
    {label}
  </h3>
);

/* ─── Point card ─────────────────────────────────────────────── */
interface PointCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  index: number;
  layoutId: string;
}

const PointCard: React.FC<PointCardProps> = ({ icon, title, body }) => (
  <article
    className="
      point-card
      flex flex-col sm:grid
      rounded-[24px] cursor-default relative isolate
      transition-all duration-[300ms] ease-out
      hover:scale-[1.01] hover:shadow-2xl
    "
    style={{
      gridTemplateColumns: "clamp(60px, 8vw, 80px) 1fr",
      gap: "clamp(16px, 3vw, 24px)",
      padding: "clamp(20px, 4vw, 32px)",
      border: "1px solid rgba(92,215,255,0.15)",
      background:
        "linear-gradient(180deg, rgba(74,210,255,0.1) 0%, rgba(74,210,255,0.05) 100%)",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      opacity: 0,
    }}
  >
    <div
      className="inline-flex text-[#25d8ff] mb-4 sm:mb-0"
      style={{ width: "clamp(60px, 8vw, 72px)", height: "clamp(60px, 8vw, 72px)" }}
      aria-hidden="true"
    >
      {icon}
    </div>

    <p
      className="m-0 leading-relaxed text-[rgba(234,236,245,0.9)] font-serif"
      style={{
        fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
      }}
    >
      <strong className="text-white font-bold block mb-1 sm:inline sm:mb-0">{title}:</strong> {body}
    </p>
  </article>
);

/* ─── Main FrameworkSection ──────────────────────────────────── */
const FrameworkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = Array.from(
      sectionRef.current.querySelectorAll<HTMLElement>(".framework-layout-card")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const badges = card.querySelectorAll<HTMLElement>(".badge-pill");
          const points = card.querySelectorAll<HTMLElement>(".point-card");

          if (entry.isIntersecting) {
            badges.forEach((b) => {
              b.style.opacity = "1";
              b.style.transform = "translateY(0)";
            });
            points.forEach((p, i) => {
              p.style.opacity = "1";
              p.style.transform = "translateY(0)";
              p.style.transitionDelay = `${i * 100}ms`;
            });
          } else {
            badges.forEach((b) => {
              b.style.opacity = "0";
              b.style.transform = "translateY(20px)";
            });
            points.forEach((p) => {
              p.style.opacity = "0";
              p.style.transform = "translateY(30px)";
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    cards.forEach((c) => {
      observer.observe(c);
      // Initial states
      const points = c.querySelectorAll<HTMLElement>(".point-card");
      points.forEach(p => {
        p.style.transition = "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)";
        p.style.transform = "translateY(30px)";
      });
      const badges = c.querySelectorAll<HTMLElement>(".badge-pill");
      badges.forEach(b => {
        b.style.transition = "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
        b.style.transform = "translateY(20px)";
      });
    });

    return () => observer.disconnect();
  }, []);

  const frameworks = [
    {
      id: "fw-people",
      icon: <ImgIcon src={imgPeople} alt="People" />,
      label: "People : The Core of Transformation",
      description:
        'At the heart of the DIGITALFABRIC model lies "People." This highlights that human capital remains the foundation of any successful transformation. The people dimension focuses on two critical factors: value and culture.',
      variant: "default" as LayoutVariant,
      points: [
        {
          icon: <ImgIcon src={imgValue} alt="Value" />,
          title: "Value",
          body: "DIGITALFABRIC underscores the importance of delivering value through employees. By ensuring that the workforce is aligned with strategic goals, businesses can foster a culture that drives innovation and productivity.",
        },
        {
          icon: <ImgIcon src={imgCulture} alt="Culture" />,
          title: "Culture",
          body: "Emphasizing the cultural aspects ensures that the organization not only adapts to change but thrives in it. A culture that embraces digitalization and innovation leads to more engaged employees, creating a strong foundation for long-term success.",
        },
      ],
    },
    {
      id: "fw-process",
      icon: <ImgIcon src={imgProcess} alt="Process" />,
      label: "Process : Achieving Efficiency and Effectiveness",
      description:
        'The next layer emphasizes "Process." It highlights the role of optimizing workflows and operations to enhance overall performance. The model points to two critical aspects:',
      variant: "default" as LayoutVariant,
      points: [
        {
          icon: <ImgIcon src={imgEfficiency} alt="Efficiency" />,
          title: "Efficiency",
          body: "By focusing on process efficiency, organizations can streamline their operations, eliminate redundancies, and enhance productivity.",
        },
        {
          icon: <ImgIcon src={imgEffectiveness} alt="Effectiveness" />,
          title: "Effectiveness",
          body: "DIGITALFABRIC ensures that processes are not only efficient but also effective in meeting the organization's goals. This balance between efficiency and effectiveness allows companies to optimize resource utilization while meeting customer and business expectations.",
        },
      ],
    },
    {
      id: "fw-platform",
      icon: <ImgIcon src={imgPlatform} alt="Platform" />,
      label: "Platform : Enabling Comprehensive Capabilities",
      description:
        'The "Platform" dimension represents the technological infrastructure that underpins digital transformation. It focuses on providing comprehensive capabilities that enable organizations to innovate and grow.',
      variant: "platform" as LayoutVariant,
      points: [
        {
          icon: <ImgIcon src={imgComprehensive} alt="Comprehensive" />,
          title: "Comprehensive",
          body: "A robust platform provides an integrated approach to digital transformation. This includes infrastructure, software, and tools that support various business functions.",
        },
        {
          icon: <ImgIcon src={imgCapabilities} alt="Capabilities" />,
          title: "Capabilities",
          body: "DIGITALFABRIC emphasizes the development of digital capabilities that empower organizations to innovate and deliver superior products and services. A strong platform enables seamless collaboration across departments, enhancing operational agility.",
        },
      ],
    },
    {
      id: "fw-product",
      icon: <ImgIcon src={imgProduct} alt="Product" />,
      label: "Product : Delivering E2E Solutions",
      description:
        'The "Product" dimension reflects the outputs and services that an organization offers. DIGITALFABRIC highlights the importance of developing products that meet comprehensive customer expectations and deliver end-to-end (E2E) solutions.',
      variant: "product" as LayoutVariant,
      points: [
        {
          icon: <ImgIcon src={imgExpectations} alt="Expectations" />,
          title: "Expectations",
          body: "By focusing on customer needs, organizations can ensure that their products are not only competitive but also relevant in the market. DIGITALFABRIC enables businesses to anticipate and meet evolving customer expectations effectively.",
        },
        {
          icon: <ImgIcon src={imgE2E} alt="E2E Solution" />,
          title: "E2E Solution",
          body: "The emphasis on end-to-end solutions ensures that organizations can offer a seamless and integrated experience to customers, addressing their needs across the entire product or service lifecycle.",
        },
      ],
    },
    {
      id: "fw-partnership",
      icon: <ImgIcon src={imgPartnership} alt="Partnership" />,
      label: "Partnership : Building Strategic Networks",
      description:
        'The outermost layer of the model represents "Partnership." This acknowledges the importance of building strategic alliances to drive growth and innovation.',
      variant: "partnership" as LayoutVariant,
      points: [
        {
          icon: <ImgIcon src={imgNetwork} alt="Network" />,
          title: "Network",
          body: "DIGITALFABRIC advocates for the creation of a broad network of partners and collaborators to unlock new opportunities for innovation and expansion. A strong network allows businesses to tap into diverse expertise and resources.",
        },
        {
          icon: <ImgIcon src={imgCollaboration} alt="Collaboration" />,
          title: "Collaboration",
          body: "Collaboration is crucial in today's interconnected business landscape. By fostering collaboration between internal teams and external partners, DIGITALFABRIC enables organizations to co-create value and expand their market reach.",
        },
      ],
    },
  ];

  return (
    <>
      <style>{glowKeyframes}</style>
      <section
        ref={sectionRef}
        className="relative bg-[#090f2b] text-white overflow-hidden pb-12"
      >
        <div className="w-full">
          {frameworks.map((fw) => (
            <FrameworkCard
              key={fw.id}
              layoutId={fw.id}
              icon={fw.icon}
              label={fw.label}
              description={fw.description}
              points={fw.points}
              variant={fw.variant}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FrameworkSection;
