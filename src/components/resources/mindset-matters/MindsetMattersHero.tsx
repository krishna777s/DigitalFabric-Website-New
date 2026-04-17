import React from "react";
import heroVideo from "@/assets/0_Circular_Path_3840x2160.mp4";

const MindsetMattersHero = () => {
  return (
    <section className="relative w-full min-h-[calc(110vh-88px)] flex items-end pb-[124px] overflow-hidden bg-black animate-fade-in-up">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dullness / Overlay Adjustment */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/40 to-transparent" />


      <div className="relative z-10 w-full px-[18px] sm:px-[32px] md:px-[56px] lg:px-[56px] py-16">
        <div className="animate-ti-title flex flex-col justify-center max-w-[850px]">
          <span className="block font-serif font-medium tracking-[0.1em] text-[#e0e5ff] text-[clamp(0.9rem,1.2vw,1.1rem)] uppercase mb-4 max-[640px]:mb-3">
            DIGITALFABRIC<sup className="text-[1.3em] align-top relative top-[0.6em] ml-0.2 font-medium">®</sup> RESOURCES
          </span>
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(1.75rem,4.5vw,3.125rem)] leading-[1.1] -tracking-[0.03em] max-[640px]:text-[2.2rem] text-wrap-balance">
            MINDSETMATTERS<sup className="text-[0.55em] align-top relative top-[0.7em] ml-0.5 font-medium">™</sup>:<br /> Original Thought Leadership<br /> Charts & Visuals
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MindsetMattersHero;
