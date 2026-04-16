import React from "react";
import heroVideo from "@/assets/0_Abstract_Blue_3840x2160.mp4";
// import copygamieHero from "@/assets/Copygamie hero 0-843x1536.png";

const CopygamieFrameworkHero = () => {
  return (
    <section
      className="relative w-full min-h-[560px] flex items-center pt-[100px] overflow-hidden bg-black"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-[58px] max-[1100px]:px-[34px] max-[640px]:px-[18px] grid grid-cols-2 max-[900px]:grid-cols-1 items-center gap-12 max-[900px]:py-16">

        <div className="animate-ti-title">
          <span className="block font-sans font-medium tracking-[0.1em] text-[#e0e5ff] text-[clamp(0.85rem,1.2vw,1.1rem)] uppercase mb-4 max-[640px]:mb-3">
            Digitalfabric Resources
          </span>
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(2.6rem,4.5vw,4.2rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.2rem]">
            Try The Copygamie Framework For Your Brand!
          </h1>
        </div>

        {/* <div className="relative flex justify-end max-[900px]:justify-center animate-ti-stingary" style={{ animationDelay: '0.2s' }}>
          <img
            src={copygamieHero}
            alt="Copygamie Framework Graphic Shapes"
            className="w-full max-w-[300px] max-[640px]:max-w-[240px] h-auto object-contain drop-shadow-2xl"
          />
        </div> */}

      </div>
    </section>
  );
};

export default CopygamieFrameworkHero;
