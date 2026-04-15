import { useState, useRef, useEffect, type CSSProperties } from "react";

// ─── ASSETS ──────────────────────────────────────────────────────────────────
import DigitalFabricShow from "@/assets/digital Fabric.jpeg";
import ImagenieShow from "@/assets/Imageine.jpg";
import ProsightShow from "@/assets/Prosightshow.jpg";
import ConsultingShow from "@/assets/Digital Fabric Consulting.jpg";
import ResearchShow from "@/assets/Research FAbricshow.jpg";
import ConsultingVideo from "@/assets/DIGITALFABRIC CONSULTING.mp4";
import ImagenieVideo from "@/assets/Imagenie_video.mp4";
import ProsightVideo from "@/assets/Prosight_video.mp4";

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
    videoSrc: ImagenieVideo,
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
    videoSrc: ProsightVideo,
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
    videoSrc: ConsultingVideo,
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

const Sup = ({ m }: { m: string }) => (
  <span className="inline-block translate-y-[-0.08em] text-[0.92em] font-black ml-0">{m}</span>
);
const Sub = ({ m }: { m: string }) => (
  <span className="align-super text-[0.55em] font-bold ml-[2px]">{m}</span>
);

// Helpers specifically for the 5 bottom slides
const SlideSup = ({ m }: { m: string }) => (
  <span className="inline-block translate-y-[-0.08em] text-[0.95em] font-black ml-0">{m}</span>
);
const SlideSub = ({ m }: { m: string }) => (
  <span className="inline-block translate-y-[0.3em] text-[0.9em] font-black ml-[2px]">{m}</span>
);

function BrandTitle({ title }: { title: string }) {
  const n = title.toUpperCase().trim();
  if (n === "DIGITALFABRIC") return <>{title}<SlideSup m="®" /></>;
  if (n === "IMAGENIE") return <>{title}<SlideSup m="™" /></>;
  if (n === "PROSIGHT") return <>{title}<SlideSub m="™" /></>;
  if (n === "DIGITALFABRIC CONSULTING") return <>DIGITALFABRIC<SlideSup m="®" /> CONSULTING</>;
  if (n === "RESEARCHFABRIC") return <>{title}<SlideSup m="™" /></>;
  return <>{title}</>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function VideoSection() {
  const [activeKey, setActiveKey] = useState(showcaseBrands[0].key);
  const active = showcaseBrands.find((b) => b.key === activeKey) ?? showcaseBrands[0];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Reset video state when active brand changes
    if (active.videoSrc) {
      setShowControls(true);
      const timer = setTimeout(() => setShowControls(false), 2500);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        setCurrentTime(0);
        if (isPlaying) {
          videoRef.current.play().catch(() => setIsPlaying(false));
        }
      }
      return () => clearTimeout(timer);
    }
  }, [activeKey, active.videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skip = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += seconds;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <section
      aria-label="DigitalFabric group showcase"
      className="mx-auto w-[min(calc(100%-8px),100%)] text-white pt-24"
      style={{
        background: "linear-gradient(135deg,#0b3f60 0%,#12698e 45%,#4ec9f3 100%)",
        paddingBottom: "24px",
        paddingLeft: "clamp(12px,2vw,32px)",
        paddingRight: "clamp(12px,2vw,32px)",
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
            <Sup m="®" />
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

      </div>

      {/* ══ FEATURE: left panel + right media ═══════════════════════════════ */}
      <div
        className="grid transition-all duration-700 ease-in-out"
        style={{
          gridTemplateColumns: isExpanded
            ? "0fr 1fr"
            : "minmax(320px,0.92fr) minmax(360px,1.08fr)",
          minHeight: "clamp(620px,52vw,780px)",
        }}
      >

        {/* LEFT — info panel */}
        <div
          className={`flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'opacity-0 pointer-events-none px-0' : 'opacity-100'}`}
          style={{
            background: active.panelBg,
            color: active.panelText,
            padding: isExpanded ? "0" : "80px clamp(20px,1.9vw,26px) clamp(24px,2.2vw,30px)",
            minHeight: isExpanded ? "0" : "clamp(620px,52vw,780px)",
            width: isExpanded ? "0" : "auto",
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
          className="relative overflow-hidden bg-cover bg-center group/video"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          style={{
            backgroundImage: active.videoSrc ? undefined : `url(${active.media})`,
            minHeight: "clamp(620px,52vw,780px)",
          }}
        >
          {active.videoSrc ? (
            <video
              ref={videoRef}
              key={active.videoSrc}
              className="absolute inset-0 h-full w-full object-cover"
              src={active.videoSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          ) : null}

          {/* Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(180deg,rgba(5,18,29,0.02),rgba(5,18,29,0.22))",
              opacity: showControls ? 0.8 : 0.4,
            }}
          />

          {/* CUSTOM CONTROLS OVERLAY */}
          {active.videoSrc && (
            <div
              className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <div /> {/* Spacer */}

              {/* CENTER CONTROLS */}
              <div className="flex items-center justify-center gap-12">
                <button
                  onClick={() => skip(-10)}
                  className="text-white/80 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Rewind 10 seconds"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M12.5 5.2a.5.5 0 0 0-.8 0l-6 5.5a.5.5 0 0 0 0 .7l6 5.5a.5.5 0 0 0 .8-.4v-4.3l5.2 4.7a.5.5 0 0 0 .8-.4V6.7a.5.5 0 0 0-.8-.4l-5.2 4.7V5.2z" />
                  </svg>
                </button>

                <button
                  onClick={togglePlay}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all transform hover:scale-105"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current translate-x-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={() => skip(10)}
                  className="text-white/80 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Forward 10 seconds"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M11.5 5.2a.5.5 0 0 1 .8 0l6 5.5a.5.5 0 0 1 0 .7l-6 5.5a.5.5 0 0 1-.8-.4v-4.3l-5.2 4.7a.5.5 0 0 1-.8-.4V6.7a.5.5 0 0 1 .8-.4l5.2 4.7V5.2z" />
                  </svg>
                </button>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs font-medium tracking-tight text-white/90">
                  <span>{formatTime(currentTime)}</span>
                  <div className="relative flex-1 h-1.5 group/progress">
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                    <div
                      className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-100"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-all duration-100 scale-0 group-hover/progress:scale-100"
                      style={{ left: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <span>{formatTime(duration)}</span>

                  <div className="flex items-center gap-3 ml-4">
                    <button
                      onClick={toggleMute}
                      className="hover:text-white transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
                          <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>

                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="hover:text-white transition-colors"
                      aria-label={isExpanded ? "Collapse video" : "Expand video"}
                    >
                      {isExpanded ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
              className="block font-serif font-bold leading-[1.2]"
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
