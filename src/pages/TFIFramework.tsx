import TFIFrameworkHero from "@/components/resources/tfi/TFIFrameworkHero.tsx";
import TFIFrameworkOverview from "@/components/resources/tfi/TFIFrameworkOverview";
import TFIFrameworkBlueprint from "@/components/resources/tfi/TFIFrameworkBlueprint";

export default function TFIFramework() {
  return (
    <main className="bg-[#081229] pt-[78px]">
      <TFIFrameworkHero />
      <TFIFrameworkOverview />
      <TFIFrameworkBlueprint />
    </main>
  );
}