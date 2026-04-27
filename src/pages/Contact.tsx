import React from "react";
import contactBg from "@/assets/contact-bg.jpeg";

const Contact = () => {
  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <main 
        className="min-h-screen bg-center bg-no-repeat bg-cover text-[#f7f8fc] pt-[78px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(4, 12, 34, 0.3), rgba(4, 12, 34, 0.78)), url(${contactBg})`,
        }}
      >
        <section className="w-full max-w-[1720px] mx-auto px-[clamp(24px,4vw,56px)] py-[clamp(34px,5vw,76px)] pb-[clamp(56px,6vw,100px)] grid grid-cols-1 lg:grid-cols-[minmax(320px,0.9fr)_minmax(420px,1.1fr)] gap-[clamp(30px,4vw,72px)] items-start">
          
          {/* LEFT CONTENT */}
          <div className="pt-[clamp(18px,3vw,42px)] flex flex-col gap-[18px]">
            <h1 
              className="m-0 font-serif font-normal leading-[0.98] -tracking-[0.05em] text-white"
              style={{ fontSize: "clamp(3.1rem, 5.2vw, 5rem)" }}
            >
              Contact Us
            </h1>

            <p className="max-w-[34ch] m-0 font-sans leading-[1.28] text-[rgba(243,247,252,0.96)]" style={{ fontSize: "clamp(0.96rem, 1.2vw, 1.28rem)" }}>
              Please fill out the Service Enquiry Form to let us know about you and
              your need. For all other queries, write to us at{" "}
              <a href="mailto:info@digitalfabric.in" className="text-[#27b8f3] no-underline">info@digitalfabric.in</a>
            </p>

            <p className="max-w-[34ch] m-0 font-sans leading-[1.28] text-[rgba(243,247,252,0.96)]" style={{ fontSize: "clamp(0.96rem, 1.2vw, 1.28rem)" }}>
              For career opportunities, visit the{" "}
              <a href="/" className="text-[#27b8f3] no-underline">Opportunities Page</a>
            </p>

            <p className="max-w-[34ch] m-0 font-sans leading-[1.28] text-[rgba(243,247,252,0.96)]" style={{ fontSize: "clamp(0.96rem, 1.2vw, 1.28rem)" }}>
              Follow us on{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#27b8f3] no-underline"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-[620px] lg:justify-self-end">
            <div className="h-[min(78vh,900px)] overflow-hidden rounded-[18px] border border-[rgba(8,24,44,0.18)] bg-[rgba(15,36,63,0.28)] backdrop-blur-[8px] flex flex-col shadow-[inset_0_18px_32px_rgba(255,255,255,0.04),inset_0_-24px_36px_rgba(3,12,24,0.24),inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              
              {/* FORM HEADER */}
              <div className="min-h-[128px] p-[10px_28px] flex items-start gap-3.5 bg-[linear-gradient(180deg,rgba(59,98,158,0.36)_0%,rgba(42,74,124,0.24)_100%)] border-b border-[rgba(255,255,255,0.06)] shadow-[inset_0_-10px_18px_rgba(0,0,0,0.08)]">
                <div className="w-[58px] h-[58px] flex-none opacity-90" aria-hidden="true">
                  <svg viewBox="0 0 64 64" className="w-full h-full fill-none stroke-[rgba(255,255,255,0.75)] stroke-[3] stroke-linecap-round stroke-linejoin-round">
                    <rect x="12" y="10" width="34" height="44" rx="6" />
                    <path d="M22 22h14M22 30h18M22 38h12" />
                    <path d="m42 20 10 10" />
                  </svg>
                </div>
                <div>
                  <h2 className="m-[4px_0_6px] font-sans font-normal leading-[1.12]" style={{ fontSize: "clamp(1.35rem, 1.5vw, 1.8rem)" }}>Service Enquiry Form</h2>
                  <p className="m-0 font-sans text-[0.82rem] leading-[1.3] text-[rgba(245,249,255,0.95)]">We&apos;d like to know more about you and your need</p>
                </div>
              </div>

              {/* FORM BODY */}
              <div className="flex-1 p-[28px_22px_34px] bg-[rgba(10,24,42,0.18)] overflow-y-auto hide-scrollbar shadow-[inset_0_14px_24px_rgba(0,0,0,0.12)]">
                <p className="m-[0_0_12px] font-sans text-[0.98rem] leading-[1.48] text-[rgba(243,247,252,0.88)] text-sm">
                  When you submit this form, it will not automatically collect your
                  details unless you provide them yourself.
                </p>
                <p className="m-[0_0_30px] font-sans text-[0.98rem] leading-[1.48] text-[rgba(243,247,252,0.88)]">
                  <span className="text-[#c54b4b]">*</span> Required
                </p>

                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">1. Name *</label>
                    <input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your answer" 
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="company" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">2. Company *</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Enter your answer"
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">3. Email *</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your answer" 
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">4. Phone *</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your answer" 
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="linkedin" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">5. LinkedIn URL</label>
                    <input
                      id="linkedin"
                      type="url"
                      placeholder="Enter your answer"
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="website" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">6. Company Website URL</label>
                    <input
                      id="website"
                      type="url"
                      placeholder="Enter your answer"
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">
                      7. What services are you interested in? <span className="text-white">*</span>
                    </label>
                    <div className="grid gap-[18px]">
                      {[
                        { val: "enterprise-consulting", label: "Enterprise Consulting (Platform, Services, Capabilities)" },
                        { val: "enterprise-ai", label: "Enterprise AI (AI-IA Governance)" },
                        { val: "enterprise-marketing", label: "Enterprise Marketing (Strategy, Design, Website, Marketing)" }
                      ].map((item) => (
                        <label key={item.val} className="flex items-center gap-[10px] font-sans text-[0.96rem] leading-[1.25] text-[rgba(243,247,252,0.94)] cursor-pointer">
                          <input 
                            type="checkbox" 
                            name="services" 
                            value={item.val} 
                            className="appearance-none w-3 h-3 min-w-[12px] border border-[rgba(255,255,255,0.82)] rounded-[2px] bg-[rgba(255,255,255,0.06)] shadow-[inset_0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center cursor-pointer checked:after:content-[''] checked:after:w-[6px] checked:after:h-[6px] checked:after:bg-[rgba(255,255,255,0.92)]"
                          />
                          {item.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="expectations" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">
                      8. Kindly tell us briefly what you&apos;re expecting from us
                    </label>
                    <textarea
                      id="expectations"
                      rows={5}
                      placeholder="Enter your answer"
                      className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none placeholder:text-[rgba(243,247,252,0.62)] resize-vertical min-h-[132px]"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="meeting-time" className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">
                      9. We&apos;d love to talk to you! When do you think we can set up a meeting?
                      <span className="text-white"> *</span>
                    </label>
                    <p className="m-[-2px_0_12px] font-sans text-[0.84rem] leading-[1.35] text-[rgba(243,247,252,0.68)]">
                      (We normally set up calls between: 12pm - 5pm | Monday to Friday)
                    </p>
                    <div className="relative">
                      <input
                        id="meeting-time"
                        type="date"
                        placeholder="Please input date (M/d/yyyy)"
                        className="w-full border border-[rgba(255,255,255,0.26)] rounded-lg bg-[rgba(7,20,38,0.46)] p-[15px_16px] pr-[48px] font-sans text-base text-[#f7f8fc] backdrop-blur-[4px] shadow-[inset_0_16px_26px_rgba(0,0,0,0.42),inset_0_-10px_16px_rgba(255,255,255,0.04),inset_0_2px_0_rgba(255,255,255,0.08),inset_4px_0_10px_rgba(0,0,0,0.14),inset_-4px_0_10px_rgba(255,255,255,0.02),0_0_0_1px_rgba(255,255,255,0.04)] focus:outline-none"
                      />
                      <span className="absolute top-1/2 right-3.5 w-[22px] h-[22px] text-[rgba(243,247,252,0.72)] -translate-y-1/2 pointer-events-none" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                          <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
                          <path d="M7 2.75v3.5M17 2.75v3.5M3.5 8.5h17" />
                          <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-sans text-[1rem] text-[rgba(243,247,252,0.92)]">10. How would you rate the experience on our website?</label>
                    <div className="grid grid-cols-5 items-center gap-[18px] pt-1.5" aria-label="Website experience rating">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="flex justify-center cursor-pointer group">
                          <input type="radio" name="website-rating" value={num} className="absolute opacity-0 pointer-events-none peer" />
                          <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-none stroke-[rgba(243,247,252,0.7)] stroke-[1.6] peer-checked:fill-[rgba(255,215,106,0.85)] peer-checked:stroke-[rgba(255,215,106,0.95)]">
                            <path d="m12 2.8 2.85 5.77 6.37.93-4.61 4.49 1.09 6.34L12 17.33 6.3 20.33l1.09-6.34L2.78 9.5l6.37-.93L12 2.8Z" />
                          </svg>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="mt-7 border-none rounded-full p-[13px_26px] bg-[#0b3f60] text-white font-sans text-[0.96rem] font-bold cursor-pointer w-fit" 
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
