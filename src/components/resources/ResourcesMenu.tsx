import { Link } from "react-router-dom";

export default function ResourcesMenu() {
  return (
    <div className="absolute left-0 top-full w-[900px] bg-[#0b2f4a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] mt-2 rounded-md">

      <div className="grid grid-cols-3 text-white">

        {/* LEFT */}
        <div className="relative p-8 bg-cover bg-center border-r border-white/10"
          style={{ backgroundImage: "url('/images/resource1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#092f47]/80" />

          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-6">Consulting Resources</h3>

            <ul className="space-y-4 text-[16px] font-semibold">
              <li>
                <span className="flex gap-2 hover:text-cyan-300 cursor-default">
                  <span className="text-cyan-400">*</span> TI Framework
                </span>
              </li>
              <li>Featured Insights</li>
              <li>ISG Studies and Brochures</li>
              <li>MINDSETMATTERS(TM)</li>
            </ul>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="relative p-8 bg-cover bg-center border-r border-white/10"
          style={{ backgroundImage: "url('/images/resource2.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#092f47]/80" />

          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-6">AI Resources</h3>

            <ul className="space-y-4 text-[16px] font-semibold">
              <li>
                <span className="flex gap-2 hover:text-cyan-300 cursor-default">
                  <span className="text-cyan-400">*</span> AISWITCH Framework
                </span>
              </li>
              <li>AISWITCH Storyboards</li>
              <li>White Papers</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative p-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/resource3.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#092f47]/80" />

          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-6">Marketing Resources</h3>

            <ul className="space-y-4 text-[16px] font-semibold">
              <li>
                <span className="text-cyan-400">*</span> Copygamie Framework
              </li>
              <li>Success Stories</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}