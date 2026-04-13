import React, { useEffect, useRef, useState } from "react";
import dimensionsGraphic from "../../assets/Dimensions.png";
import partnershipGraphic from "../../assets/partnership.png";

const DimensionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-[#18234d]"
      style={{
        background:
          "linear-gradient(180deg, #eef8ff 0%, #dceefe 48%, #c6ddf5 100%)",
      }}
    >
      {/* Shell */}
      <div className="w-full max-w-[1760px] mx-auto px-12 py-10 pb-7 max-[1380px]:px-8 max-[760px]:px-[18px] max-[760px]:py-[26px] max-[760px]:pb-[18px]">

        {/* Copy */}
        <div className="max-w-[1200px] max-[1120px]:max-w-none">
          <p
            className="m-0 text-[#1a2348] leading-[1.42]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(1rem, 1.2vw, 1.45rem)",
            }}
          >
            DIGITALFABRIC<sup>®</sup> provides a comprehensive framework that aligns
            various organizational elements to drive success in a digital-first
            environment.
          </p>
          <p
            className="mt-[18px] m-0 text-[#1a2348] leading-[1.42] max-[760px]:text-[0.94rem] max-[760px]:leading-[1.5]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(1rem, 1.2vw, 1.45rem)",
            }}
          >
            This model integrates key aspects such as <strong className="font-bold">People</strong>,{" "}
            <strong className="font-bold">Process</strong>,{" "}
            <strong className="font-bold">Platform</strong>,{" "}
            <strong className="font-bold">Product</strong>, and{" "}
            <strong className="font-bold">Partnership</strong>, creating a robust
            ecosystem that organizations can leverage to meet their digital
            transformation objectives.
          </p>
        </div>

        {/* Layout grid */}
        <div
          className="grid grid-cols-2 gap-7 items-start mt-[34px] max-[1120px]:grid-cols-1 max-[1120px]:gap-5 max-[760px]:mt-[26px]"
        >
          {/* Partnership image */}
          <div className="flex justify-center items-start">
            <img
              src={partnershipGraphic}
              alt="Partnership framework"
              className="block h-auto max-[760px]:max-w-[420px]"
              style={{
                width: "min(100%, 620px)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-120px)",
                transition:
                  "transform 800ms cubic-bezier(0.22,1,0.36,1), opacity 800ms cubic-bezier(0.22,1,0.36,1)",
                willChange: "transform, opacity",
              }}
            />
          </div>

          {/* Dimensions image */}
          <div className="flex justify-center items-start">
            <img
              src={dimensionsGraphic}
              alt="DIGITALFABRIC dimensions framework"
              className="block h-auto max-[760px]:max-w-[360px]"
              style={{
                width: "min(100%, 520px)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(120px)",
                transition:
                  "transform 860ms cubic-bezier(0.22,1,0.36,1), opacity 860ms cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: "80ms",
                willChange: "transform, opacity",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DimensionsSection;
