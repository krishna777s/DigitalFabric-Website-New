import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const articles = [
  {
    title: "The Future of Enterprise AI Adoption",
    category: "AI & Technology",
    date: "March 2026",
    image: carousel2,
    excerpt: "How enterprises can build responsible, scalable AI systems that deliver measurable value.",
  },
  {
    title: "Digital Transformation Maturity Model",
    category: "Strategy",
    date: "February 2026",
    image: carousel3,
    excerpt: "A comprehensive framework for assessing and accelerating digital maturity across organizations.",
  },
  {
    title: "Building Future-Ready Organizations",
    category: "Consulting",
    date: "January 2026",
    image: carousel1,
    excerpt: "Key strategies for building organizational resilience and agility in the digital age.",
  },
  {
    title: "Creative Design in Enterprise Context",
    category: "Marketing",
    date: "December 2025",
    image: carousel4,
    excerpt: "How enterprise-grade creative design drives brand equity and customer engagement.",
  },
];

const Insights = () => {
  return (
    <main className="pt-20">
      <SectionWrapper>
        <p className="text-xs tracking-[0.3em] text-df-gold font-sans uppercase mb-4">INSIGHTS & RESEARCH</p>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Featured Insights</h1>
        <p className="text-lg text-foreground/60 font-sans max-w-2xl mb-16">
          Expert perspectives, research reports, and thought leadership from the DIGITALFABRIC® GROUP.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden h-72 mb-4">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="text-xs text-df-gold font-sans tracking-wider">{articles[0].category}</span>
            <h2 className="text-2xl font-serif text-foreground mt-2 mb-2">{articles[0].title}</h2>
            <p className="text-sm text-foreground/60 font-sans mb-3">{articles[0].excerpt}</p>
            <span className="text-xs text-foreground/40 font-sans">{articles[0].date}</span>
          </div>

          <div className="space-y-6">
            {articles.slice(1).map((a) => (
              <div key={a.title} className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-df-gold font-sans tracking-wider">{a.category}</span>
                  <h3 className="text-lg font-serif text-foreground mb-1">{a.title}</h3>
                  <p className="text-xs text-foreground/50 font-sans">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 border border-primary text-foreground px-6 py-3 rounded-full text-sm font-sans hover:bg-primary/20 transition-colors">
            View All Insights <ArrowRight size={14} />
          </button>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Insights;
