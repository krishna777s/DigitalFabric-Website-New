import { useEffect, useRef } from "react";

const items = [
  {
    title: "Business Transformation Dimensions:",
    desc: "Core success factors driving transformation.",
  },
  {
    title: "Work Design Constituents",
    desc: "Defines structure and execution.",
  },
  {
    title: "Work Design Attributes",
    desc: "Enhancing operational efficiency.",
  },
  {
    title: "Processes And Checklists:",
    desc: "Ensures execution control.",
  },
];

const highlights = [
  { col: 0, row: 3 },
  { col: 1, row: 4 },
  { col: 2, row: 2 },
  { col: 3, row: 1 },
  { col: 4, row: 1 },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-8 h-8 stroke-cyan-300" fill="none" strokeWidth="3">
      <path d="M32 8c2 10 5 13 15 15-10 2-13 5-15 15-2-10-5-13-15-15 10-2 13-5 15-15Z" />
    </svg>
  );
}

export default function TFIFrameworkBlueprint() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll(".animate-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0", "blur-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#151d33] text-white px-[56px] py-[52px] grid grid-cols-[0.9fr_1.5fr] gap-[48px]"
    >
      {/* TITLE */}
      <div className="animate-item opacity-0 translate-y-10 blur-sm transition-all duration-700">
        <h2 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.04em]">
          Integrated Blueprint for Business Transformation
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-[10px]">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="animate-item opacity-0 translate-y-10 blur-sm transition-all duration-700 border border-white/30 rounded-xl p-4 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="flex gap-3 items-start">
              <SparkIcon />
              <div>
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs text-white/80 mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FEATURE BLOCK */}
      <div className="col-span-2 animate-item opacity-0 translate-y-10 blur-sm transition-all duration-700 p-6 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#0b1436] to-[#151d33] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]">
        <h3 className="font-serif text-2xl mb-3">BX Dimensions</h3>
        <p className="text-white/80 text-sm">
          Governance, Conformance, and Performance define transformation success.
        </p>
      </div>

      {/* JOURNEY GRID */}
      <div className="col-span-2 animate-item opacity-0 translate-y-10 blur-sm transition-all duration-700 mt-4">
        <h3 className="font-serif text-2xl mb-4">
          Attribute Processes & Checklists
        </h3>

        <div className="grid grid-cols-5 border-l-2 border-b-2 border-green-200/60 relative p-4">
          {Array.from({ length: 5 }).map((_, col) => (
            <div key={col} className="border-l border-dashed border-green-200/40 p-2">
              {Array.from({ length: 5 }).map((__, row) => {
                const active = highlights.some(
                  (h) => h.col === col && h.row === row
                );

                return (
                  <div
                    key={row}
                    className="h-[42px] border-t border-dashed border-green-200/40 flex items-center justify-center relative"
                  >
                    {active && (
                      <div className="w-3 h-3 rounded-full bg-green-200 shadow-[0_0_20px_rgba(200,255,200,0.9)] animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}