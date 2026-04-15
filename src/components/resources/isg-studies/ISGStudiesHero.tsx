import React from "react";
import heroBg from "@/assets/copygamie blue bg.jpg";
import heroGraphic from "@/assets/ISG studies hero.png";

const ISGStudiesHero = () => {
  return (
    <section className="relative w-full min-h-[560px] flex items-center pt-[100px] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />
      <div className="absolute inset-0 bg-[#081229]/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#081229]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-[58px] max-[1100px]:px-[34px] max-[640px]:px-[18px] grid grid-cols-2 max-[900px]:grid-cols-1 items-center gap-12 py-16">
        
        <div className="animate-ti-title flex flex-col justify-center">
          <h1 className="m-0 font-serif font-bold text-white text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] -tracking-[0.03em] max-[640px]:text-[2.4rem] mt-4">
            ISG Studies & Brochures
          </h1>
        </div>

        <div className="relative flex justify-end max-[900px]:justify-center animate-ti-stingary" style={{ animationDelay: '0.2s' }}>
          <img 
            src={heroGraphic} 
            alt="ISG Studies Graphic" 
            className="w-full max-w-[340px] max-[640px]:max-w-[260px] h-auto object-contain drop-shadow-2xl mix-blend-screen"
          />
        </div>

      </div>
    </section>
  );
};

export default ISGStudiesHero;
