import React from "react";
import heroVideo from "@/assets/5004777_Blue_Black_1920x1080.mp4";

const MarketingSuccessStoriesHero = () => {
  return (
    <section className="relative w-full min-h-[calc(120vh-88px)] flex items-end pb-[124px] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-24 py-16">
        <div className="animate-ti-title max-w-[850px]">
          <span className="block font-serif font-medium tracking-[0.1em] text-[#e0e5ff] text-[clamp(0.9rem,1.2vw,1.1rem)] uppercase mb-4 max-[640px]:mb-3">
            DIGITALFABRIC&reg; RESOURCES
          </span>
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(1.75rem,4.5vw,3.125rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.2rem] mt-2">
            Marketing Success Stories Led By Our GTM And Design Teams
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MarketingSuccessStoriesHero;
