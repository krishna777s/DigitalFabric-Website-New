import { useState, useRef, useEffect, type CSSProperties } from "react";
import { createPortal } from "react-dom";

// â”€â”€â”€ ASSETS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
import DigitalFabricShow from "@/assets/digital Fabric.jpeg";
import ImagenieShow from "@/assets/Imageine.jpg";
import ProsightShow from "@/assets/Prosightshow.jpg";
import ConsultingShow from "@/assets/Digital Fabric Consulting.jpg";
import ResearchShow from "@/assets/Research FAbricshow.jpg";
import ConsultingVideo from "@/assets/DIGITALFABRIC CONSULTING.mp4";
import ImagenieVideo from "@/assets/Imagenie_video.mp4";
import ProsightVideo from "@/assets/Prosight_video.mp4";
import DF_Video from "@/assets/DF video.mp4";
import ResearchVideo from "@/assets/Researchfabric video.mp4";

import DigitalFabricLogo from "@/assets/Digital_Fabric_logo-removebg.png";
import ImagenieLogo from "@/assets/Imageine logo.png";
import ProsightLogo from "@/assets/Prosight Logo.png";
import DigitalFabricConsultingLogo from "@/assets/Digital Fabric Consulting logo.png";
import ResearchFabricLogo from "@/assets/ResearchFabric logo 3.png";
import BrandLogo from "@/assets/logo.png";


const showcaseBrands = [
  {
    key: "framework",
    brandTitle: "DIGITALFABRIC®",
    brandSubtitle: "THE TI FRAMEWORK",
    brandDescription: "Enterprise Transformation Framework",
    panelBg: "#090D35",
    panelText: "#f7f6f2",
    progressColor: "#4cc9ff",
    media: DigitalFabricShow,
    videoSrc: DF_Video,
    logoVariant: "framework",
    logoImage: DigitalFabricLogo,
    logoAlt: "DigitalFabric logo",
    logoWidth: 200,
    heading: "Enabling scalable digital evolution",
    description:
      "A unified framework guiding organizations toward building agile, technology-driven, and future-ready enterprises.",
    websiteUrl: "https://www.digitalfabric.in/",
  },
  {
    key: "creative",
    brandTitle: "IMAGENIE™",
    brandSubtitle: "DESIGNING DESIRES",
    brandDescription: "Creative Design Agency",
    panelBg: "#A96700",
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
    websiteUrl: "https://www.imagenie.in/",
  },
  {
    key: "prosight",
    brandTitle: "PROSIGHT™",
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
    websiteUrl: "https://prosight-aism.com",
  },
  {
    key: "consulting",
    brandTitle: "DIGITALFABRIC® CONSULTING",
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
    websiteUrl: "https://www.digitalfabric.in/",
  },
  {
    key: "research",
    brandTitle: "RESEARCHFABRIC™",
    brandSubtitle: "",
    brandDescription: "Micro-Market Reports",
    panelBg: "#d9d9d9",
    panelText: "#000000",
    progressColor: "#4cc9ff",
    media: ResearchShow,
    videoSrc: ResearchVideo,
    logoVariant: "research",
    logoImage: ResearchFabricLogo,
    logoAlt: "Research Fabric logo",
    logoWidth: 440,
    heading: "Powering enterprise research and transformation",
    description:
      "A structured research-driven framework that enables organizations to assess, design, and implement scalable digital transformation strategies.",
    websiteUrl: "https://researchfabric.com/",
  },
];

const MOBILE_VIDEO_H = "320px";

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
  }, [activeKey, active.videoSrc, isPlaying]);

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

  const handleInstantRedirect = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    // Using window.open directly can be faster as it skips some browser link-pre-check logic
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      aria-label="DigitalFabric group showcase"
      className="mx-auto w-full text-white pt-24 sm:pt-32 px-[12px] sm:px-[36px] md:px-[60px] lg:px-[60px]"
      style={{
        background: "linear-gradient(135deg,#0b3f60 0%,#12698e 45%,#4ec9f3 100%)",
        paddingBottom: "24px",
      }}
    >

      {/* â• â•  HEADER â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      <div className="mb-[clamp(24px,3vw,42px)] mx-auto w-full max-w-[1200px]">
        <div className="w-full">
          <h2
            className="m-0 mb-6 font-serif leading-[1.02] text-center tracking-[-0.03em] text-[1.8rem] md:text-[clamp(2.5rem,3.5vw,4.5rem)]"
          >
            DIGITALFABRIC® GROUP OF COMPANIES
          </h2>
          <p
            className="m-0 max-w-[120ch] leading-[1.6] text-center hidden md:block"
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          >
            DIGITALFABRIC® Group comprises of independent entities that drive new-generation digital business transformation,
            AI consulting, and design firm. We integrate strategy, technology, and design to enable B2B and B2C businesses
            to achieve pragmatic, innovation-led growth in an increasingly dynamic digital landscape.
          </p>
        </div>
      </div>

      {/* â• â•  FEATURE: left panel + right media â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      {/* On mobile (<lg): stacks vertically â€” info panel on top, video below
          On desktop (lg+): side-by-side 50/50 grid with fixed height */}
      <div
        className="mx-auto max-w-[1400px] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:grid transition-all duration-700 ease-in-out bg-black/10"
        style={{
          gridTemplateColumns: "1fr 1fr",
        }}
      >

        {/* LEFT â€” info panel */}
        {/* Mobile: auto height to fit content. Desktop: fixed PANEL_HEIGHT. */}
        <div
          className="flex flex-col items-center justify-between text-center transition-all duration-700 ease-in-out overflow-hidden opacity-100 lg:min-h-0 lg:aspect-square"
          style={{
            background: active.panelBg,
            color: active.panelText,
            // Mobile: comfortable padding. Desktop: breathing room.
            padding: "clamp(24px,3.5vw,60px) clamp(16px,1.9vw,26px) clamp(24px,3vw,40px)",
            width: "auto",
            overflowY: 'auto'
          }}
        >
          {/* Logo area â€” fixed height container so all brands align identically */}
          <div className="w-full flex flex-col items-center justify-center bg-transparent" style={{ minHeight: "clamp(80px,12vw,140px)" }}>
            <a
              href={active.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleInstantRedirect(e, active.websiteUrl)}
              className="block hover:opacity-80 transition-none transform hover:scale-[1.01] w-full flex items-center justify-center cursor-pointer"
              aria-label={`Visit ${active.brandTitle} website`}
            >
              <img
                src={active.logoImage ?? BrandLogo}
                alt={active.logoAlt}
                className="mx-auto block object-contain"
                style={{
                  width: `min(${active.logoWidth}px, 95%)`,
                }}
              />
            </a>

            {/* Prosight subtitle pill â€” shown below the logo */}
            {active.logoVariant === "prosight" && active.brandSubtitle ? (
              <span
                className="mt-[10px] inline-block rounded-full px-[14px] py-[4px] text-[0.72rem] font-bold leading-none tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: "#3f5d8d",
                  letterSpacing: "0.04em",
                  whiteSpace: "normal",
                  textAlign: "center",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                {active.brandSubtitle}
              </span>
            ) : null}
          </div>

          {/* Heading */}
          <h3
            className={`mx-auto mb-0 w-full text-center font-serif leading-[1.2] tracking-[-0.02em] ${active.key === 'framework' ? 'text-[1.4rem] md:text-[clamp(1.6rem,2.5vw,2.8rem)]' : 'text-[1.25rem] md:text-[clamp(1.4rem,2vw,2.4rem)]'}`}
            style={{
              maxWidth: active.key === 'framework' ? 420 : 360,
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
            className={`mx-auto max-w-[420px] text-center font-serif leading-[1.6] ${active.key === 'framework' ? 'text-[1.1rem] md:text-[clamp(1.1rem,1.4vw,1.5rem)]' : 'text-[1rem] md:text-[clamp(1rem,1.2vw,1.3rem)]'}`}
            style={{
              color: active.panelText,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as CSSProperties}
          >
            {active.description}
          </p>

          {/* Learn More Action */}
          <div className="w-full flex flex-col items-center">
            <div
              className="w-16 h-[1px] mb-6"
              style={{ backgroundColor: `${active.panelText}44` }}
            />
            <a
              href={active.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleInstantRedirect(e, active.websiteUrl)}
              className="inline-flex items-center justify-center gap-2 group/btn transition-none hover:opacity-80 cursor-pointer"
              style={{ color: active.panelText }}
            >
              <span className="font-serif font-bold text-[0.95rem] tracking-[0.05em] uppercase">Learn More</span>
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current transform transition-transform duration-300 group-hover/btn:translate-x-1.5"
                style={{ fill: active.panelText }}
              >
                <path d="M11.293 4.707a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 12l-5.293-5.293a1 1 0 010-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT â€” media / video */}
        {/* Mobile: fixed 320px so video is always visible.
            Desktop (lg+): matches PANEL_HEIGHT for 50/50 layout. */}
        <div
          key={active.key}
          aria-label={`${active.brandTitle} featured media`}
          className="relative overflow-hidden bg-black group/video lg:aspect-square"
          onMouseEnter={() => setShowControls(true)}
          onMouseMove={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          style={{
            backgroundColor: "#000",
            minHeight: MOBILE_VIDEO_H,
          }}
        >
          {/* Blurred Background Layer to fill letterbox areas elegantly */}
          {active.videoSrc ? (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <video
                key={`bg-${active.videoSrc}`}
                className="absolute inset-0 h-full w-full object-cover blur-[80px] opacity-50 scale-[1.2]"
                src={active.videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ) : (
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center blur-[80px] opacity-50 scale-[1.2] pointer-events-none"
              style={{ backgroundImage: `url(${active.media})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}

          {/* Foreground Video */}
          {active.videoSrc ? (
            <video
              ref={videoRef}
              key={active.videoSrc}
              className="absolute inset-0 h-full w-full object-contain z-10 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)] border-none outline-none"
              src={active.videoSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          ) : null}

          {/* Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg,rgba(5,18,29,0.02),rgba(5,18,29,0.22))",
              opacity: showControls ? 0.8 : 0.4,
            }}
          />

          {/* CUSTOM CONTROLS OVERLAY */}
          {active.videoSrc && (
            <div
              className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-6 transition-opacity duration-300 z-30 group-hover/video:opacity-100 ${showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              style={{ background: "rgba(0,0,0,0.45)" }}
            >
              <div />

              {/* CENTER CONTROLS â€” smaller on mobile */}
              <div className="flex items-center justify-center gap-6 sm:gap-12">
                <button
                  onClick={() => skip(-10)}
                  className="text-white/80 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Rewind 10 seconds"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
                    <path d="M12.5 5.2a.5.5 0 0 0-.8 0l-6 5.5a.5.5 0 0 0 0 .7l6 5.5a.5.5 0 0 0 .8-.4v-4.3l5.2 4.7a.5.5 0 0 0 .8-.4V6.7a.5.5 0 0 0-.8-.4l-5.2 4.7V5.2z" />
                  </svg>
                </button>

                <button
                  onClick={togglePlay}
                  className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border-0 text-white hover:bg-white/30 transition-all transform hover:scale-105"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-10 sm:h-10 fill-current">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-10 sm:h-10 fill-current translate-x-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={() => skip(10)}
                  className="text-white/80 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Forward 10 seconds"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
                    <path d="M11.5 5.2a.5.5 0 0 1 .8 0l6 5.5a.5.5 0 0 1 0 .7l-6 5.5a.5.5 0 0 1-.8-.4v-4.3l-5.2 4.7a.5.5 0 0 1-.8-.4V6.7a.5.5 0 0 1 .8-.4l5.2 4.7V5.2z" />
                  </svg>
                </button>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium tracking-tight text-white/90">
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

                  <div className="flex items-center gap-3 ml-2 sm:ml-4">
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
                      onClick={() => setIsExpanded(true)}
                      className="hover:text-white transition-colors"
                      aria-label="Expand video fullscreen"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* â• â•  PROGRESS LINES (desktop) â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      <div
        aria-hidden="true"
        className="mx-auto max-w-[1400px] mt-10 mb-6 grid grid-cols-5 gap-7 max-[640px]:hidden px-2"
      >
        {showcaseBrands.map((b) => (
          <span
            key={b.key}
            className="h-[6px] rounded-full transition-colors duration-500"
            style={{ background: b.key === activeKey ? b.progressColor : "#d9d9d9" }}
          />
        ))}
      </div>

      {/* â• â•  BRAND TABS (desktop) â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      <div className="video-section-desktop-tabs mx-auto max-w-[1400px] grid grid-cols-5 items-start gap-[26px] max-[640px]:hidden px-2">
        {showcaseBrands.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => setActiveKey(b.key)}
            className="cursor-pointer border-0 bg-transparent p-0 text-center transition-transform duration-200 hover:-translate-y-[2px]"
            style={{ color: "#ffffff" }}
          >
            <span
              className="video-section-brand-title block font-serif font-bold leading-[1.2]"
              style={{ fontSize: "clamp(1.05rem,1.6vw,2rem)" }}
            >
              {b.brandTitle}
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
              style={{ color: "#ffffff" }}
            >
              {b.brandDescription}
            </span>
          </button>
        ))}
      </div>

      {/* â• â•  BRAND TABS (mobile â‰¤640px) â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      <style>{`
        @media only screen and (min-width: 768px) and (max-width: 853px) {
          .video-section-brand-title {
            display: inline-flex;
            align-items: flex-start;
            justify-content: center;
            white-space: nowrap;
            line-height: 1;
            font-size: calc(1.03rem - 1px) !important;
          }
          .video-section-desktop-tabs > button:nth-child(2) .video-section-imagenie-tm {
            transform: translateY(0.06em) !important;
          }
          .video-section-desktop-tabs > button:nth-child(4) .video-section-brand-title {
            white-space: normal;
            display: inline-block;
            max-width: 122px;
            margin: 0 auto;
            line-height: 1.05;
            text-align: center;
            font-size: calc(1.03rem - 1px) !important;
          }
          .video-section-desktop-tabs > button:nth-child(4) .video-section-consulting-top {
            display: inline-flex;
            align-items: flex-start;
            white-space: nowrap;
            line-height: 1;
            font-size: 0.94em;
          }
          .video-section-desktop-tabs > button:nth-child(4) .video-section-consulting-r {
            display: inline-block;
            font-size: 0.66em;
            line-height: 1;
            vertical-align: text-top;
            position: relative;
            top: 0.03em;
            margin-left: 1px;
          }
          .video-section-desktop-tabs > button:nth-child(4) .video-section-consulting-bottom {
            line-height: 1.05;
            font-size: 0.94em;
          }
        }
      `}</style>
      <div className="mx-auto max-w-[1400px] hidden grid-cols-2 gap-[18px] pt-[18px] max-[640px]:grid px-2">
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
              <span className="block font-serif text-[0.92rem] font-bold leading-[1.05]">
                {b.brandTitle}
              </span>
              <span
                className="mt-[6px] block font-serif text-[0.7rem] leading-[1.25]"
                style={{ color: "rgba(243,246,248,0.82)" }}
              >
                {b.brandDescription}
              </span>
            </button>
          </div>
        ))}
      </div>
      {/* â• â•  FULLSCREEN VIDEO PORTAL â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  
          Renders outside the section entirely (via portal to document.body)
          so it is never clipped by the sticky header or section overflow.
          Press Escape or click the âœ• / collapse button to close.
      â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â•  */}
      {isExpanded && active.videoSrc && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          style={{ top: 0, left: 0, width: "100vw", height: "100vh" }}
          onKeyDown={(e) => { if (e.key === "Escape") setIsExpanded(false); }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          {/* The video â€” fills entire viewport */}
          <video
            className="w-full h-full object-contain"
            src={active.videoSrc}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            ref={(el) => {
              // Sync time position from the inline player
              if (el) {
                el.currentTime = currentTime;
                if (isPlaying) el.play().catch(() => { });
              }
            }}
          />

          {/* Top-right close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border-0 text-white hover:bg-white/30 transition-all"
            aria-label="Close fullscreen"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
          </button>

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-5 flex items-center gap-4 text-xs font-medium text-white/90"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
          >
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 border-0 hover:bg-white/30 transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Mute */}
            <button onClick={toggleMute} className="hover:text-white transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
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

            {/* Time + Seek bar */}
            <span className="tabular-nums">{formatTime(currentTime)}</span>
            <div className="relative flex-1 h-1.5 group/fs">
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
                className="absolute inset-y-0 left-0 bg-white rounded-full"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow scale-0 group-hover/fs:scale-100 transition-transform"
                style={{ left: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <span className="tabular-nums">{formatTime(duration)}</span>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
