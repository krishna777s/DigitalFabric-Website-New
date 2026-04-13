import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// IMAGES
import heroImage from "@/assets/Enterprise Consulting.jpg";
import img1 from "@/assets/fresh-updates img1.jpg";
import img2 from "@/assets/fresh-updates img2.jpg";
import img3 from "@/assets/fresh-updates img 3.jpg";
import img4 from "@/assets/fresh-updates img 4.jpg";
import img5 from "@/assets/fresh-updates img 5.jpg";

import marketingImg from "@/assets/Enterprise Marketing.jpg";
import aismImg from "@/assets/prosight-aism.jpg";

const freshUpdates = [
  { label: "ENTERPRISE CONSULTING", title: "Enabling enterprises to transform and grow through strategic technology and business consulting.", image: img1 },
  { label: "PROSIGHT AISM", title: "Empowering organizations with AI Service Management for scalable and responsible AI adoption.", image: img2 },
  { label: "Enterprise Marketing", title: "Driving enterprise growth through data-driven marketing strategies and digital innovation.", image: img3 },
  { label: "Why Digital Fabric®", title: "Helping enterprises scale digital transformation through integrated technology and business expertise.", image: img4 },
  { label: "The TI Framework", title: "A structured framework aligning technology initiatives with enterprise growth, resiliency, and agility.", image: img5 },
];

const Arrow = () => (
  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#0b527b] text-white">
    <svg
      viewBox="0 0 24 24"
      className="h-[19px] w-[19px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  </span>
);

const SmallArrow = () => (
  <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-[#0b527b] text-white">
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  </span>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % freshUpdates.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentItem = freshUpdates[current];

  return (
    <section className="bg-[#092f47] pt-24 pb-6">
      <div className="max-w-[1500px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">

          {/* LEFT CARD */}
          <div
            className="group relative overflow-hidden border border-white/10 transition duration-700 ease-out hover:-translate-y-[10px] hover:scale-[1.012]"
            style={{ minHeight: "clamp(430px,34vw,560px)" }}
          >
            <img
              src={heroImage}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.09] group-hover:brightness-[1.02] group-hover:contrast-[1.04] group-hover:saturate-[1.08]"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/30 p-8">

              <h2 className="text-white text-5xl font-serif">
                Enterprise <br /> Consulting
              </h2>

              <p className="text-white/90 mt-4 max-w-sm text-sm">
                Strategically guiding enterprises through transformation with a future-ready consulting framework
              </p>

              <button className="mt-6 flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full">
                Explore More
                <Arrow />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {/* CAROUSEL */}
            <div
              className="relative overflow-hidden border border-white/10"
              style={{ minHeight: "clamp(350px,27vw,470px)" }}
            >
              <img
                src={currentItem.image}
                className="absolute inset-0 h-full w-full object-cover transition duration-700"
              />

              {/* SINGLE MARQUEE */}
              <div className="absolute top-3 left-0 right-0 overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] text-white text-sm font-semibold">
                  Fresh Updates
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full">
                  {currentItem.label}
                </span>

                <p className="mt-3 text-sm max-w-xs text-white">
                  {currentItem.title}
                  {currentItem.label.includes("Why Digital Fabric") ? (
                    <Link to="/why-digital-fabric" className="underline ml-1 hover:text-white/80 transition-colors">Know more</Link>
                  ) : (
                    <span className="underline ml-1 cursor-pointer">Know more</span>
                  )}
                </p>

                <div className="flex gap-2 mt-4">
                  {freshUpdates.map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-white/80 text-center text-sm px-4">
              Game-changing work. People-powered growth. At DIGITALFABRIC GROUP, we help you think bigger, build stronger, and expand opportunity for all.
            </p>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-6">

              {[{
                img: marketingImg,
                title: "Enterprise Marketing",
                desc: "Driving enterprise growth through strategy, creativity, and digital impact.",
              }, {
                img: aismImg,
                title: "Prosight AISM",
                desc: "Enabling responsible, scalable AI adoption for enterprises",
              }].map((item, i) => (

                <div
                  key={i}
                  className="group relative overflow-hidden border border-white/10 transition duration-700 ease-out hover:-translate-y-[10px] hover:scale-[1.012]"
                  style={{ minHeight: "clamp(350px,27vw,470px)" }}
                >
                  <img
                    src={item.img}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.09] group-hover:brightness-[1.02] group-hover:contrast-[1.04] group-hover:saturate-[1.08]"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 overflow-hidden">

                    <h3 className="text-white text-2xl font-serif">
                      {item.title}
                    </h3>

                    <p className="text-white/90 text-sm mt-3">
                      {item.desc}
                    </p>

                    <button className="mt-4 inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm whitespace-nowrap">
                      Explore More
                      <SmallArrow />
                    </button>

                  </div>
                </div>

              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </section>
  );
};

export default Hero;