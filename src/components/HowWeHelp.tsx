import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import strategyImg from "@/assets/strategy-card.jpg";
import aiImg from "@/assets/ai-engineering-card.jpg";
import heroConsulting from "@/assets/hero-consulting.jpg";

const cards = [
  {
    title: "Enterprise Strategy",
    desc: "Align business vision with digital strategy to drive scalable, future-ready transformation.",
    image: strategyImg,
  },
  {
    title: "AI & Digital Engineering",
    desc: "Enable AI, automation, and modern technologies to enhance efficiency and innovation at scale.",
    image: aiImg,
  },
  {
    title: "Consulting & Advisory",
    desc: "Deliver CXO-level guidance and execution support to achieve measurable business outcomes.",
    image: heroConsulting,
  },
];

const HowWeHelp = () => {
  return (
    <SectionWrapper>
      <p className="text-xs tracking-[0.3em] text-df-gold font-sans uppercase mb-4 text-center">
        HOW WE HELP CLIENTS
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-12 italic max-w-2xl mx-auto">
        Turning strategy, technology, and innovation into measurable business outcomes.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card.title} className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-4 h-48">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-serif text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-foreground/60 font-sans leading-relaxed">{card.desc}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-foreground/60 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowWeHelp;
