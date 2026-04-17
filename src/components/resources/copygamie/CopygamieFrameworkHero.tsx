import React from "react";
import heroVideo from "@/assets/0_Cubes_Shapes_3840x2160.mp4";
// import copygamieHero from "@/assets/Copygamie hero 0-843x1536.png";

const CopygamieFrameworkHero = () => {
  return (
    <section
      className="relative w-full min-h-[calc(110vh-88px)] flex items-end pb-[124px] overflow-hidden bg-black"
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

      <div className="relative z-10 w-full px-[18px] sm:px-[32px] md:px-[56px] lg:px-[56px] grid grid-cols-2 max-[900px]:grid-cols-1 items-center gap-12 max-[900px]:py-16">

        <div className="animate-ti-title">
          <span className="block font-serif font-medium tracking-[0.1em] text-[#e0e5ff] text-[clamp(0.9rem,1.2vw,1.1rem)] uppercase mb-4 max-[640px]:mb-3">
            Digitalfabric <sup className="text-[1.3em] align-top relative top-[0.6em] ml-[-0.2em] font-medium">®</sup> Resources
          </span>
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(1.75rem,4.5vw,3.125rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.2rem]">
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
