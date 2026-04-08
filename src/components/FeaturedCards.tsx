import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import enterpriseConsulting from "@/assets/enterprise-consulting.jpg";
import enterpriseMarketing from "@/assets/enterprise-marketing.jpg";
import prosightAism from "@/assets/prosight-aism.jpg";
import digitalfabricIn from "@/assets/digitalfabric-in.jpg";
import researchFabric from "@/assets/research-fabric.jpg";

const cards = [
  {
    title: "Enterprise Consulting",
    description: "Strategically guiding enterprises through transformation with a future-ready consulting framework",
    image: enterpriseConsulting,
    size: "large",
  },
  {
    title: "Enterprise Marketing",
    description: "Driving enterprise growth through strategy, creativity, and digital impact.",
    image: enterpriseMarketing,
    size: "medium",
  },
  {
    title: "Prosight AISM",
    description: "Enabling responsible, scalable AI adoption for enterprises.",
    image: prosightAism,
    size: "medium",
  },
  {
    title: "DigitalFabric.in",
    description: "Building future-ready enterprises through sustainability, resilience, and agility.",
    image: digitalfabricIn,
    size: "small",
  },
  {
    title: "Research Fabric",
    description: "Bridging technology and business to accelerate enterprise transformation.",
    image: researchFabric,
    size: "small",
  },
];

const FeaturedCards = () => {
  return (
    <SectionWrapper>
      <div className="card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`card-hover relative rounded-xl overflow-hidden cursor-pointer group ${
              i === 0 ? "md:row-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-serif text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-foreground/70 font-sans mb-4 line-clamp-2">
                {card.description}
              </p>
              <button className="flex items-center gap-2 bg-primary/20 hover:bg-primary/40 text-foreground text-xs font-sans px-4 py-2 rounded-full transition-all duration-300 group/btn">
                Explore More
                <ArrowUpRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-foreground/50 font-sans mt-8">
        All these companies operate under the DIGITALFABRIC® GROUP, unified by a shared vision of enterprise transformation and innovation.
      </p>
    </SectionWrapper>
  );
};

export default FeaturedCards;
