import digitalFabricImg from "@/assets/digitalfabric-in.jpg";
import researchImg from "@/assets/research-fabric.jpg";
import featureImg from "@/assets/Marketing that drives real growth.jpeg";

const Arrow = () => (
  <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#0b527b] text-white flex-shrink-0">
    <svg
      viewBox="0 0 24 24"
      className="h-[12px] w-[12px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  </span>
);

const FeaturedCards = () => {
  return (
    <section className="bg-[#092f47] pt-0 pb-6">
      <div className="max-w-[1500px] mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(260px,0.92fr)_minmax(250px,0.88fr)_minmax(0,1.6fr)] items-start">


          {/* LEFT CARD */}
          <div
            className="group relative overflow-hidden border border-white/10 transition duration-700 ease-out hover:-translate-y-[10px] hover:scale-[1.012]"
            style={{ height: "clamp(360px,28vw,480px)" }}
          >
            <img
              src={digitalFabricImg}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.09] group-hover:brightness-[1.02] group-hover:contrast-[1.04] group-hover:saturate-[1.08]"
            />

            {/* SCRIM */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,23,0.02)_0%,rgba(4,15,23,0.08)_34%,rgba(4,15,23,0.7)_100%)] opacity-70" />

            {/* CONTENT */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-5">

              <h3 className="text-white text-lg md:text-xl font-serif">
                DIGITALFABRIC.IN
              </h3>

              <p className="text-white/90 text-[12px] mt-2 line-clamp-2 leading-relaxed">
                Building future-ready enterprises through sustainability, resiliency, and agility.
              </p>

              <button className="mt-4 inline-flex items-center gap-2.5 w-fit bg-white text-[#0b3f60] px-4 py-2 rounded-full text-[11px] font-bold tracking-wide transition-all hover:shadow-lg active:scale-95">
                Explore More
                <Arrow />
              </button>

            </div>
          </div>

          {/* MIDDLE CARD */}
          <div
            className="group relative overflow-hidden border border-white/10 transition duration-700 ease-out hover:-translate-y-[10px] hover:scale-[1.012]"
            style={{ height: "clamp(320px,26vw,413px)" }}
          >
            <img
              src={researchImg}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.09] group-hover:brightness-[1.02] group-hover:contrast-[1.04] group-hover:saturate-[1.08]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,23,0.02)_0%,rgba(4,15,23,0.08)_34%,rgba(4,15,23,0.7)_100%)] opacity-70" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/30 p-5">

              <h3 className="text-white text-lg md:text-xl font-serif">
                RESEARCHFABRIC
              </h3>

              <p className="text-white/90 text-[12px] mt-2 line-clamp-2 leading-relaxed">
                Bridging technology and business to accelerate enterprise transformation
              </p>

              <button className="mt-4 inline-flex items-center gap-2.5 w-fit bg-white text-[#0b3f60] px-4 py-2 rounded-full text-[11px] font-bold tracking-wide transition-all hover:shadow-lg active:scale-95">
                Explore More
                <Arrow />
              </button>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="group relative overflow-hidden border border-white/10 transition duration-700 ease-out hover:-translate-y-[10px] hover:scale-[1.012]"
            style={{ height: "clamp(300px,24vw,380px)" }}
          >
            <img
              src={featureImg}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.09] group-hover:brightness-[1.02] group-hover:contrast-[1.04] group-hover:saturate-[1.08]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,23,0.02)_0%,rgba(4,15,23,0.08)_34%,rgba(4,15,23,0.75)_100%)]" />

            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-5">

              <h3 className="text-white text-xl md:text-2xl font-serif">
                Towards Enterprise 3.0.
              </h3>

              <p className="text-white/90 text-[12px] mt-2 line-clamp-3 leading-relaxed">
                Enterprise 3.0 is a pivotal phase in digital transformation, integrating AI, IoT, and cloud computing to reshape businesses.
              </p>

              <button className="mt-4 inline-flex items-center gap-2.5 w-fit bg-white text-[#0b3f60] px-4 py-2 rounded-full text-[11px] font-bold tracking-wide transition-all hover:shadow-lg active:scale-95">
                Explore More
                <Arrow />
              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <p className="mt-2 text-center text-white/70 text-sm">
          All these companies operate under the DIGITALFABRIC GROUP, unified by a shared vision of enterprise transformation and innovation.
        </p>

      </div>
    </section>
  );
};

export default FeaturedCards;