import AISWITCHFrameworkHero from "@/components/resources/awswitch/AISWITCHFrameworkHero";
import AISWITCHFrameworkOverview from "@/components/resources/awswitch/AISWITCHFrameworkOverview";
import AISWITCHFrameworkBanner from "@/components/resources/awswitch/AISWITCHFrameworkBanner";
import AISWITCHFrameworkFeatures from "@/components/resources/awswitch/AISWITCHFrameworkFeatures";

const AISWITCHFramework = () => {
  return (
    <main className="min-h-screen bg-[#081229]">
      <AISWITCHFrameworkHero />
      <AISWITCHFrameworkOverview />
      <AISWITCHFrameworkBanner />
      <AISWITCHFrameworkFeatures />
    </main>
  );
};

export default AISWITCHFramework;