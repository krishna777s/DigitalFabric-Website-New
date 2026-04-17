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
      <div className="help-section w-full mx-auto px-[20px] sm:px-[36px] md:px-[60px] lg:px-[60px] pt-[32px] pb-[48px]
        [@media(max-width:1280px)]:pt-[24px] [@media(max-width:1280px)]:pb-10
        [@media(max-width:980px)]:pt-6 [@media(max-width:980px)]:pb-8
        [@media(max-width:640px)]:pt-[20px] [@media(max-width:640px)]:pb-8"
      >


        <h2 className="help-heading w-[min(820px,100%)] mx-auto mb-[46px] text-center font-serif text-[clamp(1.75rem,4.5vw,3.125rem)] font-normal leading-[1.08]
          [@media(max-width:1560px)]:w-[min(700px,100%)] [@media(max-width:1560px)]:mb-[38px]
          [@media(max-width:1280px)]:w-[min(620px,100%)] [@media(max-width:1280px)]:mb-[30px]
          [@media(max-width:980px)]:w-[min(720px,100%)] [@media(max-width:980px)]:mb-10
          [@media(max-width:640px)]:mb-6 [@media(max-width:640px)]:text-[1.85rem]"
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
                hover:bg-white hover:text-[#111111] hover:border-white hover:border-[8px] 
                hover:shadow-[inset_0_0_0_18px_white] 
                [@media(max-width:640px)]:hover:border-[5px] [@media(max-width:640px)]:hover:shadow-[inset_0_0_0_10px_white]"
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

              <div className="help-card-body flex-1 flex flex-col pt-3 px-4 pb-6 transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
                group-hover:bg-white group-hover:pt-[14px]"
              >
                <div className="help-card-title-row flex items-start justify-between gap-3.5 px-0">
                  <h3 className="help-card-title m-0 font-serif text-[clamp(1.35rem,2.1vw,1.9rem)] font-normal leading-[1.05] -tracking-[0.03em] whitespace-pre-line
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
                <p className="help-card-description max-w-full mt-2.5 m-0 font-serif text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.4] text-[rgba(243,247,250,0.94)]
                  transition-colors duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:text-black
                  [@media(max-width:1280px)]:mt-2"
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
