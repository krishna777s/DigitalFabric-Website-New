import React, { useEffect, useRef } from "react";

/* ─── SVG Icons ─────────────────────────────────────────────── */

const PeopleLeadIcon = () => (
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      <circle cx="22" cy="20" r="8" />
      <circle cx="48" cy="14" r="8" />
      <circle cx="74" cy="20" r="8" />
      <rect x="34" y="28" width="28" height="32" rx="9" />
      <path d="M16 58V36c0-6 4-10 10-10" />
      <path d="M80 58V36c0-6-4-10-10-10" />
      <path d="M34 44v28" />
      <path d="M62 44v28" />
      <path d="M22 48v24" />
      <path d="M74 48v24" />
      <path d="M44 72V56" />
      <path d="M52 72V56" />
    </g>
  </svg>
);

const ProcessClusterIcon = () => (
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      <circle cx="22" cy="34" r="12" />
      <circle cx="48" cy="18" r="12" />
      <circle cx="74" cy="34" r="12" />
      <circle cx="18" cy="64" r="5" />
      <circle cx="48" cy="64" r="5" />
      <circle cx="78" cy="64" r="5" />
      <path d="M22 46v13" />
      <path d="M48 30v29" />
      <path d="M74 46v13" />
      <path d="M18 64h60" />
      <path d="M48 6c10 0 18 8 18 18" />
    </g>
  </svg>
);

const EfficiencyIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <path d="M16 56a26 26 0 1 0 48 0" />
      <path d="M20 40a20 20 0 0 1 40 0" />
      <path d="M28 40h24" />
      <path d="M24 28h6" />
      <path d="M50 28h6" />
      <path d="M40 20v4" />
      <path d="m40 40 11-13" />
      <circle cx="40" cy="40" r="3.5" fill="currentColor" stroke="none" />
      <path d="M32 56h16" />
      <path d="M28 64h24" />
    </g>
  </svg>
);

const EffectivenessIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <path d="M16 54h18c6 0 10 4 10 10H28c-6 0-10-4-12-10Z" />
      <path d="M24 46 17 37a6 6 0 0 1 9-8l9 10h12c7 0 13 6 13 13v2" />
      <path d="M57 20v18" />
      <path d="M67 14v24" />
      <path d="M47 26v12" />
      <path d="m57 12 0-4" />
      <path d="m67 10 0-4" />
      <path d="m47 20 0-4" />
    </g>
  </svg>
);

const ValueIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <path d="M18 48c8 0 12-6 15-12 4-7 8-11 16-11 7 0 13 5 13 12v2" />
      <path d="M18 48c0 9 6 16 18 16h28" />
      <path d="M44 22 51 14l7 8" />
      <path d="M44 22h14" />
      <path d="M20 60h44" />
      <path d="M24 36c3 4 7 7 12 8" />
      <path d="M52 48c5-1 9-4 12-8" />
      <path d="M58 22c6 0 10 4 10 10" />
    </g>
  </svg>
);

const CultureIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <circle cx="28" cy="24" r="6" />
      <circle cx="52" cy="22" r="6" />
      <path d="M22 58V40c0-5 4-9 9-9" />
      <path d="M58 58V40c0-5-4-9-9-9" />
      <path d="m34 32 6-10 6 10" />
      <path d="M40 22v36" />
      <path d="M32 58V44" />
      <path d="M48 58V44" />
      <path d="M14 48v-2" />
      <path d="M66 48v-2" />
    </g>
  </svg>
);

const PlatformLeadIcon = () => (
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      <rect x="18" y="12" width="46" height="58" rx="6" />
      <path d="M64 22h10a4 4 0 0 1 4 4v36" />
      <path d="M12 70h62" />
      <path d="M24 78h42" />
      <path d="m41 27 12 7-12 7-12-7 12-7Z" />
      <path d="M29 34v12l12 7 12-7V34" />
      <path d="M77 58v17a3 3 0 0 1-3 3h-4" />
    </g>
  </svg>
);

const ComprehensiveIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <path d="M40 15c6 0 11 5 11 11 0 4-2 7-5 9v6h-12v-6c-3-2-5-5-5-9 0-6 5-11 11-11Z" />
      <path d="M35 47h10" />
      <path d="M36 54h8" />
      <path d="M40 59h.01" />
      <path d="M20 24c-5 4-8 10-8 16s3 12 8 16" />
      <path d="M60 24c5 4 8 10 8 16s-3 12-8 16" />
      <path d="M27 18c-4 2-7 5-9 9" />
      <path d="M53 18c4 2 7 5 9 9" />
      <path d="M27 62c-4-2-7-5-9-9" />
      <path d="M53 62c4-2 7-5 9-9" />
    </g>
  </svg>
);

const CapabilitiesIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <circle cx="40" cy="40" r="12" />
      <path d="M40 16v8" />
      <path d="M40 56v8" />
      <path d="M16 40h8" />
      <path d="M56 40h8" />
      <path d="m23 23 6 6" />
      <path d="m51 51 6 6" />
      <path d="m57 23-6 6" />
      <path d="m29 51-6 6" />
      <circle cx="40" cy="40" r="4" fill="currentColor" stroke="none" />
      <circle cx="40" cy="16" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="64" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="40" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="64" cy="40" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="23" cy="23" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="57" cy="23" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="23" cy="57" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="57" cy="57" r="2.5" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

const ProductLeadIcon = () => (
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      <path d="m18 36 30-14 30 14-30 14-30-14Z" />
      <path d="m24 43-6 16 30 13 30-13-6-16" />
      <path d="M35 58v12l13 5 13-5V58" />
      <path d="m48 18 8-8 8 8" />
      <path d="M56 10v16" />
      <path d="m58 16 7-2 2 7" />
    </g>
  </svg>
);

const ExpectationsIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <circle cx="28" cy="34" r="6" />
      <circle cx="40" cy="28" r="6" />
      <circle cx="52" cy="34" r="6" />
      <path d="M20 50c0-5 4-9 9-9h22c5 0 9 4 9 9" />
      <path d="M18 58h44" />
      <path d="M12 20h8" />
      <path d="M60 20h8" />
      <path d="M16 12l6 6" />
      <path d="m64 12-6 6" />
      <path d="M16 66l6-6" />
      <path d="m64 66-6-6" />
    </g>
  </svg>
);

const E2EIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <path d="M40 14c11 0 20 9 20 20 0 7-4 13-9 17v8H29v-8c-5-4-9-10-9-17 0-11 9-20 20-20Z" />
      <path d="M35 59h10" />
      <path d="M34 66h12" />
      <path d="m44 24-10 14h7l-5 12 13-16h-7l2-10Z" />
      <path d="M14 40h.01" />
      <path d="M66 40h.01" />
      <path d="M20 20h.01" />
      <path d="M60 20h.01" />
      <path d="M20 60h.01" />
      <path d="M60 60h.01" />
    </g>
  </svg>
);

const PartnershipLeadIcon = () => (
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
      <path d="m28 36 9 9a7 7 0 0 0 10 0l12-12a7 7 0 0 1 10 0l7 7" />
      <path d="m16 32 10-10a9 9 0 0 1 13 0l6 6" />
      <path d="m15 33 13 13a5.5 5.5 0 0 1 0 8l-2 2a5.5 5.5 0 0 1-8 0L5 43" />
      <path d="m81 45-13 13a5.5 5.5 0 0 1-8 0l-2-2a5.5 5.5 0 0 1 0-8" />
      <path d="m31 49 5 5" />
      <path d="m39 52 5 5" />
      <path d="m47 50 5 5" />
      <path d="m24 15 8-8 18 18" />
    </g>
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <circle cx="40" cy="20" r="8" />
      <path d="M30 36c0-6 4-10 10-10s10 4 10 10" />
      <path d="M40 28v16" />
      <circle cx="18" cy="58" r="4" />
      <circle cx="40" cy="58" r="4" />
      <circle cx="62" cy="58" r="4" />
      <path d="M34 46 22 54" />
      <path d="M40 46v8" />
      <path d="M46 46 58 54" />
    </g>
  </svg>
);

const CollaborationIcon = () => (
  <svg viewBox="0 0 80 80" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.8">
      <circle cx="28" cy="28" r="7" />
      <circle cx="52" cy="52" r="7" />
      <path d="M22 44c0-5 3-9 8-10" />
      <path d="M58 36c0 5-3 9-8 10" />
      <path d="M40 18c8 0 14 6 14 14" />
      <path d="M40 62c-8 0-14-6-14-14" />
      <path d="m50 18h10v10" />
      <path d="m30 62H20V52" />
      <path d="M58 22 50 14" />
      <path d="M22 58 14 50" />
    </g>
  </svg>
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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isExtended = variant !== "default";
  const sidePad = "70px";

  return (
    <div
      ref={layoutRef}
      id={layoutId}
      data-variant={variant}
      className="framework-layout-card group"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "34px",
        alignItems: "start",
        padding: "58px 0 0",
        ...(isExtended
          ? {
              marginInline: `calc(${sidePad} * -1)`,
              paddingInline: sidePad,
              background: variantBg[variant],
            }
          : {}),
      }}
    >
      {/* Copy block */}
      <div
        className="flex flex-col items-center text-center mx-auto"
        style={{ width: "min(100%, 980px)", maxWidth: "980px" }}
      >
        {/* Lead icon */}
        <span
          className="inline-flex text-[#25d8ff]"
          style={{ width: 120, height: 120 }}
          aria-hidden="true"
        >
          {icon}
        </span>

        {/* Badge */}
        <BadgePill label={label} layoutId={layoutId} />

        {/* Description */}
        <p
          className="m-0 text-center leading-[1.42] text-[rgba(234,236,245,0.82)]"
          style={{
            maxWidth: "980px",
            fontFamily: '"Segoe UI", Arial, sans-serif',
            fontSize: "clamp(0.98rem, 1.4vw, 1.22rem)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Points grid */}
      <div
        className="mx-auto w-full grid grid-cols-2 gap-[18px] max-[980px]:grid-cols-1 max-[640px]:gap-[22px]"
        style={{ maxWidth: "1080px" }}
      >
        {points.map((pt, i) => (
          <PointCard key={i} icon={pt.icon} title={pt.title} body={pt.body} index={i} layoutId={layoutId} />
        ))}
      </div>
    </div>
  );
};

/* ─── Badge pill ─────────────────────────────────────────────── */
const BadgePill: React.FC<{ label: string; layoutId: string }> = ({ label }) => (
  <span
    className="
      inline-flex items-center justify-center gap-[10px]
      mt-[14px] mb-[18px]
      px-[22px] py-3
      rounded-full
      text-[#d8f4ff] font-bold tracking-[0.02em] leading-none
      transition-all duration-[260ms] ease
      cursor-default
      badge-pill
    "
    style={{
      maxWidth: "100%",
      width: "max-content",
      border: "1px solid rgba(96,201,255,0.42)",
      background:
        "linear-gradient(180deg,rgba(72,195,255,0.28) 0%,rgba(40,132,238,0.16) 100%)",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.16), 0 10px 26px rgba(10,24,57,0.22)",
      fontFamily: '"Segoe UI", Arial, sans-serif',
      fontSize: "0.92rem",
    }}
  >
    <span
      className="inline-block rounded-full bg-[#25d8ff]"
      style={{
        width: 10,
        height: 10,
        boxShadow: "0 0 0 3px rgba(37,216,255,0.16)",
        flexShrink: 0,
      }}
    />
    {label}
  </span>
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
      grid items-start
      rounded-[20px] cursor-pointer relative isolate
      transition-all duration-[260ms] ease
      hover:-translate-y-3 hover:scale-[1.02]
    "
    style={{
      gridTemplateColumns: "68px minmax(0,1fr)",
      gap: 16,
      padding: "18px 20px",
      border: "1px solid rgba(92,215,255,0.18)",
      background:
        "linear-gradient(180deg,rgba(74,210,255,0.34) 0%,rgba(74,210,255,0.24) 22%,rgba(53,178,255,0.12) 58%,rgba(23,94,186,0.03) 100%)",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 38px rgba(5,10,28,0.18)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      animation: "frameworkBoxGlow 3.8s ease-in-out infinite",
      opacity: 0,
    }}
  >
    <span
      className="inline-flex text-[#25d8ff] transition-transform duration-[260ms] ease"
      style={{ width: 68, height: 68 }}
      aria-hidden="true"
    >
      {icon}
    </span>

    <p
      className="m-0 leading-[1.5] text-[rgba(234,236,245,0.78)]"
      style={{
        fontFamily: '"Segoe UI", Arial, sans-serif',
        fontSize: "clamp(0.9rem, 1.08vw, 1.02rem)",
      }}
    >
      <strong className="text-white font-bold">{title}:</strong> {body}
    </p>
  </article>
);

/* ─── Main FrameworkSection ──────────────────────────────────── */
const FrameworkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* Intersection observer for each layout card – drives badge + point animations */
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = Array.from(
      sectionRef.current.querySelectorAll<HTMLElement>(".framework-layout-card")
    );
    const pointCards = Array.from(
      sectionRef.current.querySelectorAll<HTMLElement>(".point-card")
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
              b.style.transform = "translateY(0) scale(1)";
            });
            points.forEach((p, i) => {
              p.style.opacity = "1";
              p.style.transform = "translateX(0)";
              p.style.transitionDelay = i === 1 ? "120ms" : "0ms";
            });
          } else {
            badges.forEach((b) => {
              b.style.opacity = "0";
              b.style.transform = "translateY(18px) scale(0.96)";
            });
            points.forEach((p, i) => {
              p.style.opacity = "0";
              p.style.transform = i === 0 ? "translateX(-72px)" : "translateX(72px)";
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((c) => observer.observe(c));

    // Set initial states
    pointCards.forEach((p, i) => {
      p.style.opacity = "0";
      p.style.transition =
        "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease, background 260ms ease, opacity 720ms cubic-bezier(0.22,1,0.36,1)";
    });

    return () => observer.disconnect();
  }, []);

  const frameworks = [
    {
      id: "fw-people",
      icon: <PeopleLeadIcon />,
      label: "People : The Core of Transformation",
      description:
        'At the heart of the DIGITALFABRIC model lies "People." This highlights that human capital remains the foundation of any successful transformation. The people dimension focuses on two critical factors: value and culture.',
      variant: "default" as LayoutVariant,
      points: [
        {
          icon: <ValueIcon />,
          title: "Value",
          body: "DIGITALFABRIC underscores the importance of delivering value through employees. By ensuring that the workforce is aligned with strategic goals, businesses can foster a culture that drives innovation and productivity.",
        },
        {
          icon: <CultureIcon />,
          title: "Culture",
          body: "Emphasizing the cultural aspects ensures that the organization not only adapts to change but thrives in it. A culture that embraces digitalization and innovation leads to more engaged employees, creating a strong foundation for long-term success.",
        },
      ],
    },
    {
      id: "fw-process",
      icon: <ProcessClusterIcon />,
      label: "Process : Achieving Efficiency and Effectiveness",
      description:
        'The next layer emphasizes "Process." It highlights the role of optimizing workflows and operations to enhance overall performance. The model points to two critical aspects:',
      variant: "default" as LayoutVariant,
      points: [
        {
          icon: <EfficiencyIcon />,
          title: "Efficiency",
          body: "By focusing on process efficiency, organizations can streamline their operations, eliminate redundancies, and enhance productivity.",
        },
        {
          icon: <EffectivenessIcon />,
          title: "Effectiveness",
          body: "DIGITALFABRIC ensures that processes are not only efficient but also effective in meeting the organization's goals. This balance between efficiency and effectiveness allows companies to optimize resource utilization while meeting customer and business expectations.",
        },
      ],
    },
    {
      id: "fw-platform",
      icon: <PlatformLeadIcon />,
      label: "Platform : Enabling Comprehensive Capabilities",
      description:
        'The "Platform" dimension represents the technological infrastructure that underpins digital transformation. It focuses on providing comprehensive capabilities that enable organizations to innovate and grow.',
      variant: "platform" as LayoutVariant,
      points: [
        {
          icon: <ComprehensiveIcon />,
          title: "Comprehensive",
          body: "A robust platform provides an integrated approach to digital transformation. This includes infrastructure, software, and tools that support various business functions.",
        },
        {
          icon: <CapabilitiesIcon />,
          title: "Capabilities",
          body: "DIGITALFABRIC emphasizes the development of digital capabilities that empower organizations to innovate and deliver superior products and services. A strong platform enables seamless collaboration across departments, enhancing operational agility.",
        },
      ],
    },
    {
      id: "fw-product",
      icon: <ProductLeadIcon />,
      label: "Product : Delivering E@E Solutions",
      description:
        'The "Product" dimension reflects the outputs and services that an organization offers. DIGITALFABRIC highlights the importance of developing products that meet comprehensive customer expectations and deliver end-to-end (E2E) solutions.',
      variant: "product" as LayoutVariant,
      points: [
        {
          icon: <ExpectationsIcon />,
          title: "Expectations",
          body: "By focusing on customer needs, organizations can ensure that their products are not only competitive but also relevant in the market. DIGITALFABRIC enables businesses to anticipate and meet evolving customer expectations effectively.",
        },
        {
          icon: <E2EIcon />,
          title: "E2E Solution",
          body: "The emphasis on end-to-end solutions ensures that organizations can offer a seamless and integrated experience to customers, addressing their needs across the entire product or service lifecycle.",
        },
      ],
    },
    {
      id: "fw-partnership",
      icon: <PartnershipLeadIcon />,
      label: "Partnership : Building Strategic Networks",
      description:
        'The outermost layer of the model represents "Partnership." This acknowledges the importance of building strategic alliances to drive growth and innovation.',
      variant: "partnership" as LayoutVariant,
      points: [
        {
          icon: <NetworkIcon />,
          title: "Network",
          body: "DIGITALFABRIC advocates for the creation of a broad network of partners and collaborators to unlock new opportunities for innovation and expansion. A strong network allows businesses to tap into diverse expertise and resources.",
        },
        {
          icon: <CollaborationIcon />,
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
        className="relative bg-[#090f2b] text-white pb-6 max-[980px]:pb-5 max-[640px]:pb-4"
      >
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: "1760px",
            padding: "0 70px 0",
          }}
        >
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
