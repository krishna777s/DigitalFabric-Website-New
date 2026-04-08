import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import strategyImg from "@/assets/strategy-card.jpg";
import aiImg from "@/assets/ai-engineering-card.jpg";
import heroConsulting from "@/assets/hero-consulting.jpg";

const services = [
  {
    title: "Enterprise Strategy",
    desc: "Align business vision with digital strategy to drive scalable, future-ready transformation. Our strategic frameworks empower C-suite leaders to make data-driven decisions.",
    image: strategyImg,
  },
  {
    title: "AI & Digital Engineering",
    desc: "Enable AI, automation, and modern technologies to enhance efficiency and innovation at scale. We help organizations build intelligent systems that learn and adapt.",
    image: aiImg,
  },
  {
    title: "Consulting & Advisory",
    desc: "Deliver CXO-level guidance and execution support to achieve measurable business outcomes. Our consultants bring deep industry expertise across sectors.",
    image: heroConsulting,
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end digital transformation services that modernize legacy systems, optimize processes, and create new digital business models for sustainable growth.",
    image: strategyImg,
  },
  {
    title: "Research & Insights",
    desc: "Proprietary research, micro market reports, and AI capability studies that give enterprises a competitive edge in understanding market dynamics.",
    image: aiImg,
  },
  {
    title: "Creative & Marketing",
    desc: "Enterprise-grade creative design and marketing solutions that build brand equity and drive measurable customer engagement across channels.",
    image: heroConsulting,
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <SectionWrapper>
        <p className="text-xs tracking-[0.3em] text-df-gold font-sans uppercase mb-4">OUR SERVICES</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
          Capabilities that drive transformation
        </h1>
        <p className="text-lg text-foreground/60 font-sans max-w-2xl mb-16">
          From strategy to execution, we provide end-to-end capabilities to help enterprises navigate their digital journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-4">{s.desc}</p>
                <button className="flex items-center gap-2 text-df-gold text-sm font-sans group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Services;
