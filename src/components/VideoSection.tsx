import { useState } from "react";
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import videoThumb from "@/assets/video-thumbnail.jpg";

const timelineItems = [
  { name: "DIGITALFABRIC", subtitle: "THE TI FRAMEWORK", desc: "Enterprise Transformation Framework" },
  { name: "IMAGENIE", subtitle: "DESIGNING DESIRES", desc: "Creative Design Platform" },
  { name: "Prosight", subtitle: "AI Engineering Capabilities Study", desc: "AI Capability Insights" },
  { name: "DIGITALFABRIC CONSULTING", subtitle: "", desc: "Strategic Transformation Consulting" },
  { name: "RESEARCH FABRIC", subtitle: "", desc: "Micro Market Reports" },
];

const VideoSection = () => {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper className="bg-df-navy/50">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3 tracking-wide">
        DIGITALFABRIC® GROUP OF COMPANIES.
      </h2>
      <p className="text-sm text-foreground/70 font-sans max-w-3xl mb-10 leading-relaxed">
        DIGITALFABRIC® is a next-generation enterprise consulting and digital transformation group that helps
        organizations become AI-driven, scalable, and future-ready.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-wider text-foreground font-sans">DIGITAL</span>
              <span className="text-sm font-bold tracking-wider text-foreground font-sans">FABRIC</span>
            </div>
            <span className="text-[8px] text-muted-foreground tracking-wider">THE TI FRAMEWORK</span>
          </div>
          <h3 className="text-2xl font-serif text-foreground mb-2">
            {active === 0 && "Enabling scalable digital evolution"}
            {active === 1 && "Designing ideas into powerful experiences"}
            {active === 2 && "Understanding AI capabilities and maturity"}
            {active === 3 && "Driving strategic transformation consulting"}
            {active === 4 && "Bridging technology and business research"}
          </h3>
          <p className="text-sm text-foreground/60 font-sans">
            A unified framework guiding organizations toward building agile, technology-driven, and future-ready enterprises.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden group cursor-pointer">
          <img src={videoThumb} alt="Video" className="w-full h-full object-cover min-h-[250px]" loading="lazy" />
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <button className="text-foreground/60 hover:text-foreground transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="w-14 h-14 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center hover:bg-foreground/30 transition-colors">
              <Play size={24} className="text-foreground ml-1" />
            </button>
            <button className="text-foreground/60 hover:text-foreground transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
            <span className="text-xs text-foreground/70 font-sans">0:00</span>
            <div className="flex-1 h-1 bg-foreground/20 rounded-full">
              <div className="w-0 h-full bg-foreground rounded-full" />
            </div>
            <span className="text-xs text-foreground/70 font-sans">2:30</span>
            <Volume2 size={14} className="text-foreground/70" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border-t border-border/30 pt-8">
        {timelineItems.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setActive(i)}
            className={`text-center py-4 rounded-lg transition-all duration-300 ${
              i === active
                ? "bg-primary/20 border border-primary/40"
                : "hover:bg-card/50"
            }`}
          >
            <h4
              className={`text-xs font-bold tracking-wider font-sans mb-1 ${
                i === active ? "text-df-gold" : "text-foreground"
              }`}
            >
              {item.name}
            </h4>
            {item.subtitle && (
              <p className="text-[9px] text-muted-foreground tracking-wider font-sans mb-2">
                {item.subtitle}
              </p>
            )}
            <p className="text-[10px] text-foreground/50 font-sans">{item.desc}</p>
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VideoSection;
