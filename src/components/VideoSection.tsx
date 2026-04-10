import { useState, type CSSProperties } from "react";

// ─── ASSETS ──────────────────────────────────────────────────────────────────
import DigitalFabricShow from "@/assets/digital Fabric.jpeg";
import ImagenieShow from "@/assets/Imageine.jpg";
import ProsightShow from "@/assets/Prosightshow.jpg";
import ConsultingShow from "@/assets/Digital Fabric Consulting.jpg";
import ResearchShow from "@/assets/Research FAbricshow.jpg";

import DigitalFabricLogo from "@/assets/Digital Fabric logo.jpg";
import ImagenieLogo from "@/assets/Imageine logo.png";
import ProsightLogo from "@/assets/Prosight Logo.png";
import DigitalFabricConsultingLogo from "@/assets/Digital Fabric Consulting logo.png";
import ResearchFabricLogo from "@/assets/ResearchFabric logo 3.png";
import BrandLogo from "@/assets/logo.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const showcaseBrands = [
  {
    key: "framework",
    brandTitle: "DIGITALFABRIC",
    brandSubtitle: "THE TI FRAMEWORK",
    brandDescription: "Enterprise Transformation Framework",
    panelBg: "#090D35",
    panelText: "#f7f6f2",
    progressColor: "#4cc9ff",
    media: DigitalFabricShow,
    logoVariant: "framework",
    logoImage: DigitalFabricLogo,
    logoAlt: "DigitalFabric logo",
    logoWidth: 260,
    heading: "Enabling scalable digital evolution",
    description:
      "A unified framework guiding organizations toward building agile, technology-driven, and future-ready enterprises.",
  },
  {
    key: "creative",
    brandTitle: "IMAGENIE",
    brandSubtitle: "DESIGNING DESIRES",
    brandDescription: "Creative Design Agency",
    panelBg: "#cc7c00",
    panelText: "#000000",
    progressColor: "#4cc9ff",
    media: ImagenieShow,
    logoVariant: "imagenie",
    logoImage: ImagenieLogo,
    logoAlt: "Imagenie logo",
    logoWidth: 480,
    heading: "Designing ideas into impactful experiences",
    description:
      "A creative platform focused on ideation, visual storytelling, and brand articulation to bring concepts to life with clarity and impact.",
  },
  {
    key: "prosight",
    brandTitle: "Prosight",
    brandSubtitle: "AI Engineering Capabilities Study",
    brandDescription: "AI Capability Insights",
    panelBg: "#4ec9f3",
    panelText: "#000000",
    progressColor: "#4cc9ff",
    media: ProsightShow,
    logoVariant: "prosight",
    logoImage: ProsightLogo,
    logoAlt: "Prosight logo",
    logoWidth: 440,
    heading: "Understanding AI capability and maturity",
    description:
      "An insights-driven platform that evaluates AI readiness and engineering capabilities, helping organizations benchmark and evolve their digital potential.",
  },
  {
    key: "consulting",
    brandTitle: "DIGITALFABRIC CONSULTING",
    brandSubtitle: "",
    brandDescription: "Strategic Transformation Consulting",
    panelBg: "#dbdada",
    panelText: "#000000",
    progressColor: "#4cc9ff",
    media: ConsultingShow,
    logoVariant: "consulting",
    logoImage: DigitalFabricConsultingLogo,
    logoAlt: "DigitalFabric Consulting logo",
    logoWidth: 440,
    heading: "Driving strategy to execution",
    description:
      "A consulting practice delivering enterprise advisory, governance, and end-to-end digital transformation solutions with measurable business outcomes.",
  },
  {
    key: "research",
    brandTitle: "RESEARCHFABRIC",
    brandSubtitle: "",
    brandDescription: "Micro-Market Reports",
    panelBg: "#d9d9d9",
    panelText: "#000000",
    progressColor: "#4cc9ff",
    media: ResearchShow,
    logoVariant: "research",
    logoImage: ResearchFabricLogo,
    logoAlt: "Research Fabric logo",
    logoWidth: 440,
    heading: "Powering enterprise research and transformation",
    description:
      "A structured research-driven framework that enables organizations to assess, design, and implement scalable digital transformation strategies.",
  },
];

// ─── Trademark symbols ────────────────────────────────────────────────────────

function BrandTitle({ title }: { title: string }) {
  const n = title.toUpperCase().trim();
  const Sup = ({ m }: { m: string }) => (
    <sup className="text-[0.6em] align-super ml-[2px] font-semibold">{m}</sup>
  );
  const Sub = ({ m }: { m: string }) => (
    <sub className="text-[0.55em] align-baseline ml-[2px] font-semibold">{m}</sub>
  );
  if (n === "DIGITALFABRIC") return <>{title}<Sup m="®" /></>;
  if (n === "IMAGENIE") return <>{title}<Sup m="™" /></>;
  if (n === "PROSIGHT") return <>{title}<Sub m="™" /></>;
  if (n === "DIGITALFABRIC CONSULTING") return <>{title}<Sup m="®" /></>;
  if (n === "RESEARCHFABRIC") return <>{title}<Sup m="™" /></>;
  return <>{title}</>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function VideoSection() {
  const [activeKey, setActiveKey] = useState(showcaseBrands[0].key);
  const active = showcaseBrands.find((b) => b.key === activeKey) ?? showcaseBrands[0];

  return (
    <section
      aria-label="DigitalFabric group showcase"
      className="mx-auto w-[min(calc(100%-8px),100%)] text-white"
      style={{
        background: "linear-gradient(135deg,#0b3f60 0%,#12698e 45%,#4ec9f3 100%)",
        padding: "clamp(42px,4vw,66px) clamp(12px,2vw,32px) 24px",
        fontFamily: "'Signika Negative',Arial,sans-serif",
      }}
    >

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <div className="mb-[clamp(16px,2.6vw,42px)] flex flex-wrap items-start justify-between gap-[clamp(20px,2vw,32px)]">

        {/* Copy block */}
        <div className="max-w-[min(1040px,100%)]">
          <h2
            className="m-0 mb-6 font-serif leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem,2.85vw,3.35rem)" }}
          >
            DIGITALFABRIC
            <sup className="text-[0.6em] align-super ml-[2px] font-semibold">®</sup>
            {" "}GROUP OF COMPANIES.
          </h2>
          <p
            className="m-0 max-w-[74ch] leading-[1.4]"
            style={{ color: "#ffffff", fontSize: "0.95rem" }}
          >
            DIGITALFABRIC is a next-generation enterprise consulting and digital
            transformation group that helps organizations become AI-driven,
            scalable, and future-ready. It combines strategy, technology, and
            execution to drive efficient, innovation-led growth in a rapidly
            evolving digital landscape.
          </p>
        </div>

        {/* Learn More CTA */}
        <button
          type="button"
          className="mt-[22px] inline-flex shrink-0 cursor-pointer items-center gap-[18px] rounded-full border-0 bg-white px-6 pb-[6px] pl-6 pr-2 pt-[6px] font-bold text-black"
          style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "0.9rem",
            boxShadow: "0 10px 18px rgba(8,16,25,0.28)",
          }}
        >
          <span>Learn More</span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0b3f60] text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </span>
        </button>
      </div>

      {/* ══ FEATURE: left panel + right media ═══════════════════════════════ */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "minmax(320px,0.92fr) minmax(360px,1.08fr)",
          minHeight: "clamp(620px,52vw,780px)",
        }}
      >

        {/* LEFT — info panel */}
        <div
          className="flex flex-col items-center justify-center text-center transition-colors duration-500"
          style={{
            background: active.panelBg,
            color: active.panelText,
            padding: "80px clamp(20px,1.9vw,26px) clamp(24px,2.2vw,30px)",
            minHeight: "clamp(620px,52vw,780px)",
          }}
        >
          {/* Logo area */}
          <div className="mb-7 flex min-h-[128px] w-full flex-col items-center justify-center">
            <img
              src={active.logoImage ?? BrandLogo}
              alt={active.logoAlt}
              className="mx-auto block h-auto max-w-full"
              style={{ width: `min(${active.logoWidth}px, 100%)` }}
            />

            {/* Prosight subtitle pill */}
            {active.logoVariant === "prosight" && active.brandSubtitle ? (
              <span
                className="mt-[10px] inline-block rounded-full px-[14px] py-[4px] text-[0.72rem] font-bold leading-none tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: "#3f5d8d",
                  letterSpacing: "0.04em",
                }}
              >
                {active.brandSubtitle}
              </span>
            ) : null}
          </div>

          {/* Heading */}
          <h3
            className="mx-auto mt-10 mb-[18px] w-full text-center font-serif leading-[1.2] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(1.4rem,2vw,2.4rem)",
              maxWidth: 360,
              color: active.panelText,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {active.heading}
          </h3>

          {/* Description */}
          <p
            className="mx-auto mt-[18px] max-w-[420px] text-center font-serif leading-[1.6]"
            style={{
              fontSize: "clamp(1rem,1.2vw,1.3rem)",
              color: active.panelText,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as CSSProperties}
          >
            {active.description}
          </p>
        </div>

        {/* RIGHT — media / video */}
        <div
          key={active.key}
          aria-label={`${active.brandTitle} featured media`}
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${active.media})`,
            minHeight: "clamp(620px,52vw,780px)",
          }}
        >
          {/* Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(5,18,29,0.02),rgba(5,18,29,0.22))",
            }}
          />

          {/* Player controls */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 items-center gap-[26px]"
          >
            {/* Skip back */}
            <button
              type="button"
              tabIndex={-1}
              className="inline-flex h-[34px] w-[34px] items-center justify-center border-0 bg-transparent p-0 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                <path d="M11 7 5 12l6 5V7Z" />
                <path d="M18 7 12 12l6 5V7Z" />
              </svg>
            </button>

            {/* Play */}
            <button
              type="button"
              aria-label="Play featured video"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border-none"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 16px 36px rgba(7,14,26,0.28)",
              }}
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-[#d9d9d9]" aria-hidden="true">
                <path d="M8 6.5 18 12 8 17.5V6.5Z" />
              </svg>
            </button>

            {/* Skip forward */}
            <button
              type="button"
              tabIndex={-1}
              className="inline-flex h-[34px] w-[34px] items-center justify-center border-0 bg-transparent p-0 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                <path d="m13 7 6 5-6 5V7Z" />
                <path d="m6 7 6 5-6 5V7Z" />
              </svg>
            </button>
          </div>

          {/* Seek bar */}
          <div
            aria-hidden="true"
            className="absolute bottom-[92px] left-6 right-6 z-[1] grid items-center gap-3"
            style={{
              gridTemplateColumns: "auto 1fr auto",
              color: "rgba(255,255,255,0.9)",
              fontFamily: "Georgia,'Times New Roman',serif",
              fontSize: "0.78rem",
            }}
          >
            <span>0:00</span>
            <div className="relative h-[3px] rounded-full bg-white/75">
              <span className="absolute inset-y-0 left-0 w-[2%] rounded-full bg-white" />
            </div>
            <div className="flex items-center gap-[10px]">
              <span>2:30</span>
              <span className="inline-flex h-6 w-6 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 14h3l4 4V6L8 10H5v4Z" />
                  <path d="M16 9a4.5 4.5 0 0 1 0 6" />
                  <path d="M18.5 6.5a8 8 0 0 1 0 11" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ PROGRESS LINES (desktop) ═════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="mt-10 mb-6 grid grid-cols-5 gap-7 max-[640px]:hidden"
      >
        {showcaseBrands.map((b) => (
          <span
            key={b.key}
            className="h-[6px] rounded-full transition-colors duration-500"
            style={{ background: b.key === activeKey ? b.progressColor : "#d9d9d9" }}
          />
        ))}
      </div>

      {/* ══ BRAND TABS (desktop) ═════════════════════════════════════════════ */}
      <div className="grid grid-cols-5 items-start gap-[26px] max-[640px]:hidden">
        {showcaseBrands.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => setActiveKey(b.key)}
            className="cursor-pointer border-0 bg-transparent p-0 text-center transition-transform duration-200 hover:-translate-y-[2px]"
            style={{ color: "#ffffff" }}
          >
            <span
              className="block font-serif font-bold leading-[1.05]"
              style={{ fontSize: "clamp(1.05rem,1.6vw,2rem)" }}
            >
              <BrandTitle title={b.brandTitle} />
            </span>

            {b.brandSubtitle && b.logoVariant !== "prosight" ? (
              <span
                className="mt-[4px] block font-serif text-[0.82rem] font-bold leading-[1.1] uppercase tracking-wide opacity-100"
              >
                {b.brandSubtitle}
              </span>
            ) : null}

            <span
              className="mt-[6px] block font-serif text-[0.92rem] leading-[1.3] font-medium"
              style={{
                color: "#ffffff"
              }}
            >
              {b.brandDescription}
            </span>
          </button>
        ))}
      </div>

      {/* ══ BRAND TABS (mobile ≤640px) ═══════════════════════════════════════ */}
      <div className="hidden grid-cols-2 gap-[18px] pt-[18px] max-[640px]:grid">
        {showcaseBrands.map((b) => (
          <div key={b.key} className="grid gap-3">
            <span
              className="h-[5px] w-[35%] justify-self-center rounded-full transition-colors duration-500"
              style={{ background: b.key === activeKey ? b.progressColor : "rgba(255,255,255,0.45)" }}
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => setActiveKey(b.key)}
              className="cursor-pointer border-0 bg-transparent p-0 text-center"
              style={{ color: "#ffffff" }}
            >
              <span className="block font-serif text-[1.1rem] font-bold leading-[1.05]">
                <BrandTitle title={b.brandTitle} />
              </span>
              <span
                className="mt-[10px] block font-serif text-[0.82rem] leading-[1.25]"
                style={{ color: "rgba(243,246,248,0.82)" }}
              >
                {b.brandDescription}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}