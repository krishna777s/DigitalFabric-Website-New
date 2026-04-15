import TIFrameworkHero from "@/components/resources/tfi/TIFrameworkHero";
import TIFrameworkOverview from "@/components/resources/tfi/TIFrameworkOverview";
import TIFrameworkBlueprint from "@/components/resources/tfi/TIFrameworkBlueprint";

const TFIFramework = () => {
  return (
    <main className="min-h-screen pt-[78px] bg-[#081229]">
      <TIFrameworkHero />
      <TIFrameworkOverview />
      <TIFrameworkBlueprint />
    </main>
  );
};

export default TFIFramework;
