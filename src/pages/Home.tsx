import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import VideoSection from "@/components/VideoSection";
import HowWeHelp from "@/components/HowWeHelp";
import FounderQuote from "@/components/FounderQuote";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCards />
      <VideoSection />
      <HowWeHelp />
      <FounderQuote />
    </main>
  );
};

export default Home;
