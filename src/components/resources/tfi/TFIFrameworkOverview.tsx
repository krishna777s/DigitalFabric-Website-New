import { useEffect, useRef, useState } from "react";
import stingary from "@/assets/Stingary Model.png";

export default function TFIFrameworkOverview() {
  const ref = useRef(null);
  const stingRef = useRef(null);
  const [show, setShow] = useState(false);
  const [sting, setSting] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setShow(e.isIntersecting));
    if (ref.current) obs.observe(ref.current);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setSting(e.isIntersecting));
    if (stingRef.current) obs.observe(stingRef.current);
  }, []);

  return (
    <>
      {/* MAIN */}
      <section
        ref={ref}
        className="bg-white text-[#071745] grid grid-cols-2 gap-8 p-[56px]"
      >
        {/* LEFT TEXT */}
        <div
          className={`transition-all duration-700 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <p>
            The TI Framework integrates <b>Governance</b>, <b>Conformance</b>,
            and <b>Performance</b>.
          </p>

          <p className="mt-5">
            At the core lies <b>Digital Edge</b> enabling transformation.
          </p>
        </div>

        {/* TRIANGLE DIAGRAM */}
        <div
          className={`relative h-[390px] transition-all duration-700 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          {/* labels */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 font-bold">
            GOVERNANCE
          </div>

          {/* triangles */}
          <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[114px] border-r-[114px] border-b-[284px] border-l-transparent border-r-transparent border-b-blue-300" />

          <div className="absolute top-[138px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[98px] border-r-[98px] border-t-[174px] border-l-transparent border-r-transparent border-t-yellow-200" />

          {/* center */}
          <div className="absolute top-[174px] left-1/2 -translate-x-1/2 font-bold text-lg text-black text-center">
            DIGITAL <br /> EDGE
          </div>
        </div>
      </section>

      {/* STINGARY */}
      <section ref={stingRef} className="bg-white p-[56px]">
        <h2 className="font-serif text-2xl mb-6">The Stingary Model</h2>

        <img
          src={stingary}
          className={`mx-auto transition-all duration-700 ${
            sting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        />
      </section>
    </>
  );
}