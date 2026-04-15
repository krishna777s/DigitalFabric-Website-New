import EnterpriseStrategy from "../assets/Enterprise Strategy.jpg"
import AiDigitalEnginnering from "../assets/AI&Digital Engineering.jpeg"
import ConsultingAdvisory from "../assets/Consulting & Advisory.jpeg"

const helpCards = [
  {
    key: 'strategy',
    title: 'Enterprise Strategy & Practice Adoption',
    description:
      'Align business vision with digital strategy to drive scalable, future-ready transformation.',
    image: EnterpriseStrategy,
  },
  {
    key: 'engineering',
    title: 'AI & Digital\nEngineering',
    description:
      'Enable AI, automation, and modern technologies to enhance efficiency and innovation at scale.',
    image: AiDigitalEnginnering,
  },
  {
    key: 'advisory',
    title: 'Consulting &\nAdvisory',
    description:
      'Deliver CXO-level guidance and execution support to achieve measurable business outcomes.',
    image: ConsultingAdvisory,
  },
]

export default function HowWeHelp() {
  return (
    <section className="bg-[#0B3F60] text-[#f7f5f0]" aria-label="How we help clients">
      <div className="help-section w-[min(1100px,calc(100%-32px))] mx-auto px-0 pt-[46px] pb-[34px]
        [@media(max-width:1560px)]:w-[min(100%,calc(100%-120px))] [@media(max-width:1560px)]:pt-10 [@media(max-width:1560px)]:pb-[30px]
        [@media(max-width:1280px)]:w-[min(100%,calc(100%-72px))] [@media(max-width:1280px)]:pt-[34px] [@media(max-width:1280px)]:pb-6
        [@media(max-width:980px)]:w-[min(100%,calc(100%-40px))] [@media(max-width:980px)]:pt-8 [@media(max-width:980px)]:pb-6
        [@media(max-width:640px)]:pt-[32px] [@media(max-width:640px)]:pb-6"
      >


        <h2 className="help-heading w-[min(760px,100%)] mx-auto mb-[46px] text-center font-serif text-[clamp(1.9rem,3vw,3rem)] font-normal leading-[1.08]
          [@media(max-width:1560px)]:w-[min(700px,100%)] [@media(max-width:1560px)]:mb-[38px] [@media(max-width:1560px)]:text-[clamp(1.7rem,2.4vw,2.5rem)]
          [@media(max-width:1280px)]:w-[min(620px,100%)] [@media(max-width:1280px)]:mb-[30px] [@media(max-width:1280px)]:text-[clamp(1.55rem,2.1vw,2.15rem)]
          [@media(max-width:980px)]:w-[min(720px,100%)] [@media(max-width:980px)]:mb-10 [@media(max-width:980px)]:text-[clamp(1.95rem,4vw,2.8rem)]
          [@media(max-width:640px)]:mb-6 [@media(max-width:640px)]:text-[1.7rem]"
        >
          Turning strategy, technology, and innovation into measurable business
          outcomes.
        </h2>

        <div className="help-grid w-full grid grid-cols-3 gap-[26px] items-stretch overflow-hidden mx-auto
          [@media(max-width:1560px)]:w-[min(100%,1120px)] [@media(max-width:1560px)]:gap-[22px]
          [@media(max-width:1280px)]:w-[min(100%,960px)] [@media(max-width:1280px)]:gap-[18px]
          [@media(max-width:980px)]:grid-cols-1 [@media(max-width:980px)]:max-w-[760px] [@media(max-width:980px)]:gap-4"
        >
          {helpCards.map((card) => (
            <article
              key={card.key}
              className="help-card group relative w-full h-full p-0 bg-transparent text-[#f7f5f0] flex flex-col border border-transparent 
                transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:bg-[#f6f2ed] hover:text-[#111111] hover:border-white hover:border-[8px] 
                hover:shadow-[inset_0_0_0_18px_#f6f2ed] 
                [@media(max-width:640px)]:hover:border-[5px] [@media(max-width:640px)]:hover:shadow-[inset_0_0_0_10px_#f6f2ed]"
            >
              <div
                className="help-card-image w-full aspect-[1.62/1] min-h-[235px] bg-center bg-cover 
                  transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  [@media(max-width:1560px)]:min-h-[210px]
                  [@media(max-width:1280px)]:min-h-[185px]
                  [@media(max-width:980px)]:min-h-[230px]"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />

              <div className="help-card-body flex-1 flex flex-col pt-3 transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pt-[14px]
                [@media(max-width:1280px)]:pt-2.5"
              >
                <div className="help-card-title-row flex items-start justify-between gap-3.5 px-0">
                  <h3 className="help-card-title m-0 font-serif text-[clamp(1.65rem,2.1vw,2.2rem)] font-normal leading-[1.05] -tracking-[0.03em] whitespace-pre-line
                    [@media(max-width:1560px)]:text-[clamp(1.45rem,1.8vw,1.95rem)]
                    [@media(max-width:1280px)]:text-[clamp(1.25rem,1.6vw,1.75rem)]
                    [@media(max-width:640px)]:text-[1.75rem]"
                  >
                    {card.title}
                  </h3>
                  <span className="help-card-arrow flex-shrink-0 font-serif text-[2.4rem] leading-[0.82] mt-[0.1em] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    [@media(max-width:1280px)]:text-[2rem]
                    [@media(max-width:640px)]:text-[2.1rem]"
                    aria-hidden="true"
                  >
                    &#8250;
                  </span>
                </div>
                <p className="help-card-description max-w-full mt-2.5 m-0 font-serif text-[0.84rem] leading-[1.22] text-[rgba(243,247,250,0.94)]
                  transition-colors duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:text-[rgba(17,17,17,0.86)]
                  [@media(max-width:1560px)]:text-[0.82rem]
                  [@media(max-width:1280px)]:mt-2 [@media(max-width:1280px)]:text-[0.78rem]"
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
