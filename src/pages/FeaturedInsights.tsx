import React, { useEffect } from "react";
import InsightsHero from "@/components/resources/insights/InsightsHero";
import InsightsContent from "@/components/resources/insights/InsightsContent";

const FeaturedInsights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <InsightsHero />
      <InsightsContent />
    </main>
  );
};

export default FeaturedInsights;
