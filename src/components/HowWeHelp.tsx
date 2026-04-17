import EnterpriseStrategy from "../assets/Enterprise Strategy.jpg"
import AiDigitalEnginnering from "../assets/AI&Digital Engineering.jpeg"
import ConsultingAdvisory from "../assets/Consulting & Advisory.jpg"

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
      <div className="help-section w-full mx-auto px-[20px] sm:px-[36px] md:px-[60px] lg:px-[60px] pt-[24px] pb-[36px]
        [@media(max-width:1280px)]:pt-[20px] [@media(max-width:1280px)]:pb-8
        [@media(max-width:980px)]:pt-4 [@media(max-width:980px)]:pb-6
        [@media(max-width:640px)]:pt-[18px] [@media(max-width:640px)]:pb-6"
      >


        <h2 className="help-heading w-[min(820px,100%)] mx-auto mb-[32px] text-center font-serif text-[clamp(1.5rem,3.2vw,2.4rem)] font-normal leading-[1.08]
          [@media(max-width:1560px)]:w-[min(700px,100%)] [@media(max-width:1560px)]:mb-[28px]
          [@media(max-width:1280px)]:w-[min(620px,100%)] [@media(max-width:1280px)]:mb-[24px]
          [@media(max-width:980px)]:w-[min(720px,100%)] [@media(max-width:980px)]:mb-8
          [@media(max-width:640px)]:mb-5 [@media(max-width:640px)]:text-[1.6rem]"
        >
          Turning strategy, technology, and innovation into measurable business
          outcomes.
        </h2>

        <div className="help-grid w-full grid grid-cols-3 gap-[18px] items-stretch overflow-hidden mx-auto
          [@media(max-width:1560px)]:w-[min(100%,1120px)] [@media(max-width:1560px)]:gap-[16px]
          [@media(max-width:1280px)]:w-[min(100%,960px)] [@media(max-width:1280px)]:gap-[14px]
          [@media(max-width:980px)]:grid-cols-1 [@media(max-width:980px)]:max-w-[760px] [@media(max-width:980px)]:gap-4"
        >
          {helpCards.map((card) => (
            <article
              key={card.key}
              className="help-card group relative w-full h-full p-0 bg-transparent text-[#f7f5f0] flex flex-col border border-transparent 
                transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:bg-white hover:text-[#111111] hover:border-white hover:border-[6px] 
                hover:shadow-[inset_0_0_0_12px_white]"
            >
              <div
                className="help-card-image w-full aspect-[1.8/1] min-h-[170px] bg-center bg-cover 
                  transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  [@media(max-width:1560px)]:min-h-[160px]
                  [@media(max-width:1280px)]:min-h-[145px]
                  [@media(max-width:980px)]:min-h-[200px]"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />

              <div className="help-card-body flex-1 flex flex-col pt-2.5 px-3.5 pb-4 transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
                group-hover:bg-white group-hover:pt-[10px]"
              >
                <div className="help-card-title-row flex items-start justify-between gap-3 px-0">
                  <h3 className="help-card-title m-0 font-serif text-[clamp(1.1rem,1.7vw,1.45rem)] font-normal leading-[1.05] -tracking-[0.03em] whitespace-pre-line
                    [@media(max-width:640px)]:text-[1.45rem]"
                  >
                    {card.title}
                  </h3>
                  <span className="help-card-arrow flex-shrink-0 font-serif text-[2rem] leading-[0.82] mt-[0.05em] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    [@media(max-width:1280px)]:text-[1.8rem]
                    [@media(max-width:640px)]:text-[1.9rem]"
                    aria-hidden="true"
                  >
                    &#8250;
                  </span>
                </div>
                <p className="help-card-description max-w-full mt-2 m-0 font-serif text-[0.95rem] leading-[1.4] text-[rgba(243,247,250,0.94)]
                  transition-colors duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:text-black"
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
