import { useEffect, useRef, useState } from 'react'
import AshwinImg from '@/assets/Ashwin founder page.png'

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
    description: 'As digital as you can think',
  },
  {
    key: 'skillset',
    label: 'Skillset',
    description: 'As digital as you can be',
  },
  {
    key: 'toolset',
    label: 'Toolset',
    description: 'As digital as you can act',
  },
]

// ---------------------------------------------------------------------------
// Keyframe injection (Tailwind does not ship custom keyframes by default)
// ---------------------------------------------------------------------------
const KEYFRAMES = `

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

  // Inject keyframes and external font once
  useEffect(() => {
    // 1. Force load the Google Font via standard link tag for absolute reliability
    if (!document.getElementById('abhaya-libre-font-link')) {
      const link = document.createElement('link')
      link.id = 'abhaya-libre-font-link'
      link.href = 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }

    // 2. Inject keyframes
    const id = 'founder-section-styles'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.textContent = KEYFRAMES
      document.head.appendChild(style)
    }
  }, [])

  // IntersectionObserver – trigger animations
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
      // Set to 85vh max or explicitly contained to fit inside a single screen scroll perfectly like an artboard.
      className="relative w-full overflow-x-hidden bg-black border-t border-[#333] lg:h-[60vh] lg:min-h-[480px] lg:max-h-[800px] min-h-[700px] lg:min-h-0"
      style={{ fontFamily: "'Abhaya Libre', serif" }}
      aria-label="About DigitalFabric leadership"
    >

      {/* Container to restrict maximum width to standard Figma bounds if desired, or let it span full width safely */}
      <div className="w-full h-full flex flex-col lg:flex-row max-w-[1700px] mx-auto relative">        {/* 
          ------------------------------------------------------------------ 
          LEFT COLUMN: Portrait (Transparent background to allow lines to pass behind) -> 42% WIDTH
          ------------------------------------------------------------------ 
        */}
        <div className="relative w-full lg:w-[42%] h-[450px] lg:h-full bg-transparent flex flex-col justify-end items-center z-20">

          {/* Image strictly contained */}
          <img
            className={`
              absolute bottom-[60px] w-[90%] left-0 right-0 mx-auto h-[90%] object-contain object-bottom
              transition-all duration-1000 delay-300 pointer-events-auto
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
            src={AshwinImg}
            alt="Ashwin Gaidhani"
          />

          {/* Teal Banner Overlay at absolute bottom */}
          <div className="absolute bottom-0 w-full bg-[#087DA0] text-center pt-5 pb-6 px-4 z-30 pointer-events-auto">
            <h3 className="text-white text-3xl font-bold mb-1 tracking-wide">
              Ashwin Gaidhani
            </h3>
            <p className="text-white text-[0.85rem] leading-[1.3] tracking-wider">
              Founder & CEO, DIGITALFABRIC<sup className="text-[0.6em] relative top-[-0.3em]">®</sup> GROUP
              <br />
              Distinguished Analyst Leading Major Studies at ISG
            </p>
          </div>
        </div>

        {/* 
          ------------------------------------------------------------------ 
          RIGHT COLUMN: Text, Cards, and exactly 3 vertical Stripes -> 58%
          ------------------------------------------------------------------ 
        */}
        <div className="relative w-full lg:w-[58%] h-full bg-transparent flex flex-col justify-center px-8 lg:px-[5%] py-12 lg:py-0 z-10">

          {/* 
            Vertical Stripes Background:
            To reduce gap, change gap-[10%] to gap-[5%] or gap-0.
            To move it left behind the image, keep your -ml styling (e.g. -ml-52).
          */}
          <div className="absolute inset-0 z-0 -ml-52 hidden lg:flex w-full h-full pointer-events-none justify-start px-0 gap-[4%]">
            <div className="w-[28%] h-full bg-[#1c2e38]"></div>
            <div className="w-[28%] h-full bg-[#1c2e38]"></div>
            <div className="w-[28%] h-full bg-[#1c2e38]"></div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full max-w-[750px] mx-auto">

            {/* Main Quote */}
            <h2
              className={`
                m-0 mb-8 md:mb-10
                text-[1.4rem] md:text-[clamp(1.5rem,2.5vw,2.5rem)]
                font-bold leading-[1.15] tracking-tight
                text-white
                transition-[transform,opacity,filter]
                duration-[450ms]
                ${inView ? 'heading-animate' : 'heading-hidden'}
              `}
            >
              Don&apos;t take the path of transformation.<br className="hidden md:block" />
              Take transformation along every path.<br className="hidden md:block" />
              For that you&apos;ll need to combine three<br className="hidden md:block" />
              elements:
            </h2>

            {/* Cards Flex Container */}
            <ul className="list-none p-0 m-0 flex flex-col sm:flex-row gap-4 w-full">
              {cards.map((card, i) => {
                let titleColor = '#0B3F60';
                if (card.key === 'skillset') titleColor = '#4EC9F3';
                if (card.key === 'toolset') titleColor = '#B79A74';

                return (
                  <li
                    key={card.key}
                    className={`
                      flex-1 flex flex-col items-center justify-center text-center
                      min-h-[110px] md:min-h-[120px] px-4 py-5 md:py-6
                      bg-white rounded-[16px]
                      transform transition-transform hover:scale-105 duration-300
                      mx-auto w-[min(100%,320px)] sm:w-auto
                      ${inView ? 'card-animate-' + (i + 1) : 'card-hidden'}
                    `}
                  >
                    <strong
                      className="font-bold text-[1.2rem] md:text-[clamp(1.2rem,1.8vw,1.5rem)] tracking-tight mb-1"
                      style={{ color: titleColor }}
                    >
                      {card.label}
                    </strong>
                    <span className="block text-[0.85rem] md:text-[clamp(0.85rem,1.1vw,0.9rem)] font-normal text-black leading-snug w-full px-2">
                      {card.description}
                    </span>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>

      </div>
    </section>
  )
}