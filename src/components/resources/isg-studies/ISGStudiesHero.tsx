import React from "react";
import heroVideo from "@/assets/0_Abstract_Blue_3840x2160.mp4";

const ISGStudiesHero = () => {
  return (
    <section className="relative w-full min-h-[560px] flex items-center pt-[100px] overflow-hidden bg-black">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-[58px] max-[1100px]:px-[34px] max-[640px]:px-[18px] py-16">
        <div className="animate-ti-title flex flex-col justify-center max-w-[850px]">
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.4rem] mt-4 text-wrap-balance">
            ISG Studies & Brochures
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ISGStudiesHero;
