import SectionWrapper from "./SectionWrapper";
import founderImg from "@/assets/founder.jpg";

const FounderQuote = () => {
  return (
    <SectionWrapper className="bg-df-navy/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-8">
            Don't take the path of transformation. Take transformation along every path. For that you'll need to combine three elements:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-df-gold" />
              <span className="font-sans text-foreground">
                <strong className="text-df-gold">Mindset</strong> (As digital as you can think)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-df-gold" />
              <span className="font-sans text-foreground">
                <strong className="text-df-gold">Skillset</strong> (As digital as you can be)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-df-gold" />
              <span className="font-sans text-foreground">
                <strong className="text-df-gold">Toolset</strong> (As digital as you can act)
              </span>
            </li>
          </ul>
          <div>
            <p className="text-sm font-sans text-df-gold font-semibold">Ashwin Gaidhani</p>
            <p className="text-xs text-foreground/50 font-sans">
              Founder & CEO, DIGITALFABRIC® GROUP
            </p>
            <p className="text-xs text-foreground/50 font-sans">
              Distinguished Analyst Leading Major Studies at ISG
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={founderImg}
            alt="Ashwin Gaidhani"
            className="w-72 h-80 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FounderQuote;
