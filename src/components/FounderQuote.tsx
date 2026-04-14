import { useEffect, useRef, useState } from 'react'
import AshwinImg from '@/assets/Ashwin.png'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface CardItem {
  key: string
  label: string
  description: string
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const cards: CardItem[] = [
  {
    key: 'mindset',
    label: 'Mindset',
    description: '(As digital as you can think)',
  },
  {
    key: 'skillset',
    label: 'Skillset',
    description: '(As digital as you can be)',
  },
  {
    key: 'toolset',
    label: 'Toolset',
    description: '(As digital as you can act)',
  },
]

// ---------------------------------------------------------------------------
// Keyframe injection (Tailwind does not ship custom keyframes by default)
// ---------------------------------------------------------------------------
const KEYFRAMES = `
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;600;700;800&display=swap');

@keyframes headingEntrance {
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.97);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes cardReveal {
  0% {
    opacity: 0;
    transform: translate3d(0, 24px, 0) scale(0.985);
    filter: blur(12px);
  }
  60% { opacity: 1; }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
}

.heading-hidden {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
  filter: blur(10px);
  will-change: transform, opacity, filter;
}

.heading-animate {
  animation: headingEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.card-hidden {
  opacity: 0;
  transform: translate3d(0, 24px, 0) scale(0.985);
  filter: blur(12px);
  will-change: transform, opacity, filter;
}

.card-animate-1 { animation: cardReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.18s forwards; }
.card-animate-2 { animation: cardReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.34s forwards; }
.card-animate-3 { animation: cardReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.50s forwards; }

@media (prefers-reduced-motion: reduce) {
  .heading-hidden, .card-hidden { opacity: 1; transform: none; filter: none; animation: none !important; }
}
`

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  // Inject keyframes once
  useEffect(() => {
    const id = 'founder-section-styles'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.textContent = KEYFRAMES
      document.head.appendChild(style)
    }
  }, [])

  // IntersectionObserver – mirrors original 0.28 threshold
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true)
      },
      { threshold: 0.28, rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      // White background matching original #ffffff about-section redesign
      className="relative w-full overflow-hidden bg-white border-t border-black/[0.08] font-serif"
      aria-label="About DigitalFabric leadership"
    >
      {/* ------------------------------------------------------------------ */}
      {/* MAIN GRID: copy left | portrait right                               */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="
    relative z-10 w-full
    grid grid-cols-1
    lg:grid-cols-[minmax(0,0.8fr)_minmax(520px,1.18fr)]
    gap-7
    items-start
    px-[44px] pt-[6px] pb-0
  "
      >

        {/* ---------------------------------------------------------------- */}
        {/* LEFT – copy block                                                 */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative z-10 max-w-[760px] pb-4 pt-16 lg:pt-6 mb-0">
          {/* Heading */}
          <h2
            className={`
              m-0 mb-8 max-w-full
              font-serif
              text-[clamp(1.1rem,1.6vw,1.6rem)]
              not-italic font-bold leading-[1.2] tracking-[-0.03em]
              text-[#111111]
              transition-[transform,opacity,filter]
              duration-[450ms]
              [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              ${inView ? 'heading-animate' : 'heading-hidden'}
            `}
          >
            Don&apos;t take the path of transformation. Take
            <br />
            transformation along every path. For that
            <br />
            you&apos;ll need to combine three elements:
          </h2>

          {/* Cards grid */}
          <ul
            className="
              list-none p-0
              m-0 mb-[60px]
              grid grid-cols-3
              gap-3.5
            "
          >
            {cards.map((card, i) => (
              <li
                key={card.key}
                className={`
                  flex flex-col items-start justify-start
                  min-h-[150px]
                  p-[18px_18px_20px]
                  border border-black rounded-[18px]
                  bg-white/54
                  shadow-[0_14px_28px_rgba(28,63,92,0.08)]
                  font-serif
                  text-[clamp(0.95rem,1.1vw,1.1rem)] font-normal leading-[1.25]
                  text-[rgba(17,17,17,0.96)]
                  ${inView ? `card-animate-${i + 1}` : 'card-hidden'}
                `}
              >
                <strong
                  className="
                    font-serif
                    font-bold
                    text-[clamp(1.15rem,1.5vw,1.4rem)]
                    tracking-[-0.03em]
                    text-[#111111]
                  "
                >
                  {card.label}
                </strong>
                <span
                  className="
                    block mt-2.5
                    font-serif
                    text-[0.82rem] font-normal
                    tracking-[0.04em]
                    text-[rgba(17,17,17,0.78)]
                  "
                >
                  {card.description}
                </span>
              </li>
            ))}
          </ul>

          {/* SIGNATURE / NAME */}
          <div 
            className={`
              mt-12 transition-all duration-1000 delay-700
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <p className="m-0 font-serif text-[clamp(1.8rem,2.5vw,2.4rem)] font-bold tracking-tight text-[#111111]">
              ASHWIN GADHANI
            </p>
            <p className="m-0 mt-1 font-serif text-[clamp(0.9rem,1.1vw,1rem)] font-medium uppercase tracking-[0.2em] text-[#111111]/60">
              Founder, DigitalFabric Group
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* RIGHT – portrait (absolutely positioned like original)            */}
        {/* ---------------------------------------------------------------- */}
        <div
          className="
            relative z-[4]
            self-end
            flex items-end justify-start
            h-auto w-full
            overflow-visible
          "
          style={{
            marginTop: '-180px',
            marginLeft: '-580px', // Slightly reduced to be safer
            marginRight: '-40px',
            marginBottom: '-60px',
          }}
          aria-hidden="true"
        >
          <img
            className={`
              block h-auto
              max-w-none max-h-[1830px]
              object-contain object-bottom-left
              [filter:drop-shadow(0_24px_36px_rgba(4,12,20,0.26))]
              transition-all duration-1000 delay-300
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
            `}
            style={{ width: 'min(119vw, 2780px)' }}
            src={AshwinImg}
            alt="Ashwin Gadhani"
          />
        </div>
      </div>

    </section>
  )
}

  )
}