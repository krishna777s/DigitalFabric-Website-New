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
      className="text-[#18234d] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef8ff 0%, #dceefe 48%, #c6ddf5 100%)",
      }}
    >
      {/* Shell */}
      <div className="w-full px-[20px] sm:px-[36px] md:px-[60px] py-16 md:py-24">

        {/* Copy */}
        <div className="max-w-[1200px] mx-auto lg:mx-0">
          <p
            className="m-0 text-[#1a2348] leading-[1.4] font-serif"
            style={{
              fontSize: "clamp(1.125rem, 1.8vw, 1.625rem)",
            }}
          >
            DIGITALFABRIC<span className="inline-block translate-y-[0.2em] text-[1.4em] font-black ml-[4px]">®</span> provides a comprehensive framework that aligns
            various organizational elements to drive success in a digital-first environment.
          </p>
          <p
            className="mt-6 md:mt-8 m-0 text-[#1a2348] leading-[1.5] font-serif opacity-90"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12 md:mt-20"
        >
          {/* Partnership image */}
          <div className="flex justify-center items-start">
            <img
              src={partnershipGraphic}
              alt="Partnership framework"
              className="block h-auto"
              style={{
                width: "min(100%, 620px)",
                maxWidth: "100%",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                transition:
                  "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms cubic-bezier(0.22,1,0.36,1)",
                willChange: "transform, opacity",
              }}
            />
          </div>

          {/* Dimensions image */}
          <div className="flex justify-center items-start">
            <img
              src={dimensionsGraphic}
              alt="DIGITALFABRIC dimensions framework"
              className="block h-auto"
              style={{
                width: "min(100%, 520px)",
                maxWidth: "100%",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(40px)",
                transition:
                  "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 1000ms cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: "150ms",
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
