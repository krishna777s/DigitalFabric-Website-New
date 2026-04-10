import SectionWrapper from "@/components/SectionWrapper";
import founderImg from "@/assets/ashwin-portrait.png";

const About = () => {
  return (
    <main className="pt-20">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">About DIGITALFABRIC® GROUP</h1>
        <p className="text-lg text-foreground/70 font-sans max-w-3xl leading-relaxed mb-12">
          DIGITALFABRIC® is a next-generation enterprise consulting and digital transformation group that helps 
          organizations become AI-driven, scalable, and future-ready. It combines strategy, technology, and execution 
          to drive efficient, innovation-led growth in a rapidly evolving digital landscape.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">Our Vision</h2>
            <p className="text-foreground/70 font-sans leading-relaxed mb-6">
              To be the world's most trusted partner for enterprise transformation, enabling organizations 
              to harness the power of digital innovation and AI at scale.
            </p>
            <h2 className="text-2xl font-serif text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground/70 font-sans leading-relaxed">
              We empower enterprises with frameworks, tools, and strategies to navigate complex digital 
              transformations while building sustainable, future-ready business models.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={founderImg} alt="Leadership" className="w-64 h-72 object-cover rounded-xl" loading="lazy" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "50+", label: "Enterprise Clients" },
            { value: "5", label: "Group Companies" },
            { value: "100+", label: "Experts" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-8 text-center">
              <p className="text-4xl font-serif text-df-gold mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/60 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default About;
