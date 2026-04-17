import React from "react";
import heroVideo from "@/assets/0_Abstract_Background_3840x2160.mov";

const ISGStudiesHero = () => {
  return (
    <section className="relative w-full min-h-[calc(110vh-88px)] flex items-end pb-[124px] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/80 to-transparent" />

      <div className="relative z-10 w-full px-[18px] sm:px-[32px] md:px-[56px] lg:px-[56px] py-16">
        <div className="animate-ti-title flex flex-col justify-center max-w-[850px]">
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(1.75rem,4.5vw,3.125rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.2rem] mt-4 text-wrap-balance">
            ISG Studies & Brochures
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ISGStudiesHero;
