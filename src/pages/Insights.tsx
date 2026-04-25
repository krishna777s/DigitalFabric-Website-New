import React, { useEffect } from "react";
import img1 from "@/assets/Insights1.jpeg";
import img2 from "@/assets/Insights2.jpeg";
import img3 from "@/assets/Insights3.jpeg";
import img4 from "@/assets/Insights4.jpeg";
import img5 from "@/assets/Insights5.jpeg";

// PDF Imports
import pdf1 from "@/assets/pdfs/Micro-Market Market Research Report for a D2C Fashion Brand _Geo_India.pdf";
import pdf2 from "@/assets/pdfs/Micro-Market Research Reports.pdf";
import pdf3 from "@/assets/pdfs/Strategic Investment Analysis_LTChart.pdf";
import pdf4 from "@/assets/pdfs/Strategic Investment Analysis_Payment_chart.pdf";
import pdf5 from "@/assets/pdfs/Strategic Investment Analysis_T&L Tech Sector in India.pdf";

const insightsData = [
  {
    image: img1,
    title: "Micro-Market Market Research Report for a D2C Fashion Brand ",
    description:
      "Explore our end-to-end framework for driving deep organizational change. We analyze execution gaps, strategy alignment, and the critical path to sustainable growth.",
    link: pdf1,
  },
  {
    image: img2,
    title: "Micro-Market Research Reports and How We Structure Our Deliverables",
    description:
      "A deep dive into why Digital Business Transformation (DBX) initiatives stall. We dissect the common pitfalls in scaling technology and realigning enterprise culture.",
    link: pdf2,
  },
  {
    image: img3,
    title: "Strategic Investment Analysis for Logistics Tech Covering Global Startup Distribution and Early-Stage Funding",
    description:
      "Navigating enterprise adoption of agentic AI. From foundation models to intelligence augmentation, our research outlines the safety frameworks and structural shifts required.",
    link: pdf3,
  },
  {
    image: img4,
    title: "Strategic Investment Analysis for Payment Tech Covering Global Funding Trends and India Financial Benchmarks",
    description:
      "Our research is concentrated across transformative domains where deep analysis and expert perspective create outsized strategic value for your enterprise.",
    link: pdf4,
  },
  {
    image: img5,
    title: "Strategic Investment Analysis for T&L Tech Startup Ecosystem & Policy Landscape in India",
    description:
      "A comprehensive look at the emerging technologies and market dynamics that are reshaping the competitive landscape for modern enterprises.",
    link: pdf5,
  },
];

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Content Section (Modified UI model applied) */}
      <section
        id="insights-domains"
        className="
        relative overflow-hidden bg-white
        pt-[120px] pb-16 sm:pb-20 md:pb-24
        text-[#141742]"
      >
        <div className="page-shell relative mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px]">

          <div className="mb-2 flex items-center gap-2 sm:gap-3">
            <span className="h-[1px] w-4 bg-current opacity-40"></span>
            <p className="text-[18px] md:text-[20px] font-bold text-[#202453] whitespace-nowrap">
              Insights
            </p>
            <span className="h-[1px] w-4 bg-current opacity-40"></span>
          </div>

          <div className="
          mt-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8">

            {insightsData.map((item) => (
              <article
                key={item.title}
                className="
                group flex flex-col h-full
                p-5 md:p-6
                bg-white border border-gray-100 shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#090d35]"
              >
                <div className="aspect-[1.02/0.72] overflow-hidden bg-[#11153b] rounded-sm relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <h3 className="
                mt-6
                w-full
                text-[20px] md:text-[22px] lg:text-[24px]
                leading-tight font-semibold
                text-[#111111] group-hover:text-white transition-colors duration-300 break-words">
                  {item.title}
                </h3>



                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-6 inline-flex items-center gap-2
                  text-[14px] md:text-[15px]
                  font-bold uppercase tracking-wider
                  text-[#111111] group-hover:text-white transition-colors duration-300"
                >
                  Explore Insight →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
