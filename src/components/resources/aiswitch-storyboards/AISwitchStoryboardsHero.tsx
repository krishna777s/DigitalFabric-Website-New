import React from "react";
import heroVideo from "@/assets/0_Cubes_Shapes_3840x2160.mp4";

const AISwitchStoryboardsHero = () => {
  return (
    <section className="relative w-full min-h-[560px] flex items-center pt-[100px] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-[58px] max-[1100px]:px-[34px] max-[640px]:px-[18px] py-16">
        
        <div className="animate-ti-title max-w-[800px]">
          <span className="block font-sans font-medium tracking-[0.1em] text-[#e0e5ff] text-[clamp(0.85rem,1.2vw,1.1rem)] uppercase mb-4 max-[640px]:mb-3">
            AISWITCH<sup className="text-[0.6em] relative top-[-0.4em] ml-[2px]">™</sup> RESOURCES
          </span>
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(2.6rem,4.5vw,4.2rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.4rem] mt-2">
            Insights From Globally Renowned AI Research Practice Leaders
          </h1>
        </div>

      </div>
    </section>
  );
};

export default AISwitchStoryboardsHero;
