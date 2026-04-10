import React from 'react'

const menuItems = [
  { text: 'Why DIGITALFABRIC', superscript: true },
  { text: 'Services' },
  { text: 'Knowledge Area' },
  { text: 'Featured Insights' },
  { text: 'Success Stories' },
  { text: 'Opportunities' },
]

function Footer() {
  return (
    <footer className="site-footer relative z-[2] mt-0 bg-[#0B3F60] text-[#f2ebe3]">
      <div 
        className="footer-main mx-auto w-full max-w-[1780px] 
          grid grid-cols-[minmax(360px,1.15fr)_minmax(220px,0.62fr)_minmax(420px,1fr)] 
          gap-16 items-start px-[92px] py-[34px] pb-[120px]
          [@media(max-width:1400px)]:grid-cols-[minmax(280px,1fr)_minmax(200px,0.62fr)_minmax(320px,0.92fr)]
          [@media(max-width:1400px)]:px-8 [@media(max-width:1400px)]:py-[30px] [@media(max-width:1400px)]:pb-[88px] [@media(max-width:1400px)]:gap-10
          [@media(max-width:1100px)]:pb-10
          [@media(max-width:1024px)]:grid-cols-2 [@media(max-width:1024px)]:gap-7 [@media(max-width:1024px)]:px-5 [@media(max-width:1024px)]:py-6 [@media(max-width:1024px)]:pb-[60px]
          [@media(max-width:640px)]:grid-cols-1 [@media(max-width:640px)]:px-3 [@media(max-width:640px)]:py-[18px] [@media(max-width:640px)]:pb-11 [@media(max-width:640px)]:gap-[22px]"
      >
        <div 
          className="footer-brand pt-[72px]
            [@media(max-width:1400px)]:pt-9
            [@media(max-width:1100px)]:pt-0
            [@media(max-width:1024px)]:col-span-full [@media(max-width:1024px)]:pt-0"
        >
          <svg 
            className="footer-brand-wave block w-full max-w-[450px] h-auto mb-[18px]
              [@media(max-width:1400px)]:max-w-[360px]
              [@media(max-width:1024px)]:max-w-[320px] [@media(max-width:1024px)]:mb-3.5
              [@media(max-width:640px)]:max-w-[250px]" 
            viewBox="0 0 160 40" 
            aria-hidden="true"
          >
            <path 
              d="M10 32C26 8 42 8 58 32s32 24 48 0 32-24 44 0" 
              fill="none" stroke="#64c6d7" strokeWidth="1.45" strokeLinecap="round" className="opacity-90"
            />
            <path 
              d="M18 32C34 6 50 6 66 32s32 26 48 0 28-26 38 0" 
              fill="none" stroke="#64c6d7" strokeWidth="1.45" strokeLinecap="round" className="opacity-90"
            />
            <path 
              d="M26 32C42 10 58 10 74 32s30 22 42 0 24-22 32 0" 
              fill="none" stroke="#64c6d7" strokeWidth="1.45" strokeLinecap="round" className="opacity-90"
            />
            <path 
              d="M34 32C50 12 66 12 82 32s22 18 30 0 18-18 24 0" 
              fill="none" stroke="#64c6d7" strokeWidth="1.45" strokeLinecap="round" className="opacity-90"
            />
            <path 
              d="M0 34h44" 
              fill="none" stroke="#f2ebe3" strokeWidth="1.45" strokeLinecap="round" className="opacity-90"
            />
          </svg>

          <div className="footer-brand-text font-serif text-[clamp(3rem,4vw,4.5rem)] leading-[0.86] -tracking-[0.035em] [text-shadow:0_1px_0_rgba(255,255,255,0.18)]
            [@media(max-width:1024px)]:text-[clamp(2.4rem,4vw,3.6rem)]
            [@media(max-width:640px)]:text-[2.1rem] [@media(max-width:640px)]:leading-[0.92]" 
            aria-label="DigitalFabric Group"
          >
            <span className="block">
              DIGITALFABRIC<sup className="text-[0.6em]">®</sup>
            </span>
            <span className="block">GROUP</span>
          </div>
        </div>

        <div className="footer-menu">
          <h2 className="font-serif text-[clamp(2.35rem,2.7vw,3.25rem)] font-normal leading-none mb-7
            [@media(max-width:1024px)]:text-[clamp(1.8rem,3vw,2.4rem)] [@media(max-width:1024px)]:mb-[18px]
            [@media(max-width:640px)]:text-[1.6rem] [@media(max-width:640px)]:mb-3.5"
          >
            Menu
          </h2>
          <nav aria-label="Footer menu">
            <ul className="list-none p-0 m-0">
              {menuItems.map((item) => (
                <li key={item.text} className="[&:not(:first-child)]:mt-7 [@media(max-width:640px)]:[&:not(:first-child)]:mt-3.5 [@media(max-width:1024px)]:[&:not(:first-child)]:mt-[18px]">
                  <a href="#" className="text-[#f2ebe3] no-underline font-serif text-[1.1rem] leading-[1.35] [@media(max-width:1024px)]:text-[1rem] [@media(max-width:640px)]:text-[0.9rem]">
                    {item.text.includes('DIGITALFABRIC') && item.superscript ? (
                      <>
                        {item.text}
                        <sup className="text-[0.6em]">®</sup>
                      </>
                    ) : (
                      item.text
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-subscribe">
          <h2 className="font-serif text-[clamp(2.35rem,2.7vw,3.25rem)] font-normal leading-none mb-7
            [@media(max-width:1024px)]:text-[clamp(1.8rem,3vw,2.4rem)] [@media(max-width:1024px)]:mb-[18px]
            [@media(max-width:640px)]:text-[1.6rem] [@media(max-width:640px)]:mb-3.5"
          >
            Subscribe
          </h2>
          <form className="footer-subscribe-form grid grid-cols-[minmax(0,1fr)_84px] mt-2.5 rounded-3xl overflow-hidden
            [@media(max-width:1024px)]:grid-cols-[minmax(0,1fr)_72px]
            [@media(max-width:640px)]:grid-cols-[minmax(0,1fr)_60px] [@media(max-width:640px)]:rounded-[18px]"
          >
            <label className="footer-subscribe-label block">
              <span className="sr-only">Email Address</span>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full h-16 border-0 outline-none px-[30px] bg-[#f0efef] text-[#4e4a4a] font-sans text-[0.95rem] placeholder:text-[#4e4a4a] placeholder:opacity-100
                  [@media(max-width:1024px)]:h-[58px] [@media(max-width:1024px)]:px-5
                  [@media(max-width:640px)]:h-[52px] [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:text-[0.9rem]"
              />
            </label>
            <button 
              type="submit" 
              aria-label="Submit email"
              className="border-0 bg-[#c6a77a] text-[#0f1111] grid place-items-center text-[2.1rem] cursor-pointer
                [@media(max-width:1024px)]:text-[1.7rem]
                [@media(max-width:640px)]:text-[1.45rem]"
            >
              <span aria-hidden="true">→</span>
            </button>
          </form>
          <a href="/" className="footer-message-link inline-block mt-4 text-[#f2ebe3] no-underline font-serif text-[0.95rem] opacity-90 [@media(max-width:640px)]:text-[0.9rem] [@media(max-width:640px)]:mt-3">
            *Send Message
          </a>
        </div>
      </div>

      <div 
        className="footer-meta mx-auto w-full max-w-[1780px] px-[92px] py-[44px] pb-[54px] border-t border-[rgba(232,236,238,0.36)] flex justify-between gap-6
          [@media(max-width:1400px)]:max-w-[calc(100%-48px)] [@media(max-width:1400px)]:px-8 [@media(max-width:1400px)]:py-8 [@media(max-width:1400px)]:pb-10
          [@media(max-width:1100px)]:px-7 [@media(max-width:1100px)]:py-7 [@media(max-width:1100px)]:pb-9
          [@media(max-width:1024px)]:max-w-[calc(100%-32px)] [@media(max-width:1024px)]:px-5 [@media(max-width:1024px)]:py-6 [@media(max-width:1024px)]:pb-8 [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:items-start [@media(max-width:1024px)]:gap-2.5
          [@media(max-width:640px)]:max-w-[calc(100%-24px)] [@media(max-width:640px)]:px-3 [@media(max-width:640px)]:py-[18px] [@media(max-width:640px)]:pb-[26px] [@media(max-width:640px)]:gap-2"
      >
        <p className="m-0 text-[#e6ebee94] font-serif text-[0.94rem] leading-[1.3] [@media(max-width:640px)]:text-[0.9rem]">
          © 2022 DIGITALFABRIC<sup className="text-[0.6em]">®</sup>, All Rights Reserved
        </p>
        <p className="m-0 text-[#e6ebee94] font-serif text-[0.94rem] leading-[1.3] [@media(max-width:640px)]:text-[0.9rem]">
          Hyderabad, Telangana, India
        </p>
      </div>
    </footer>
  )
}

export default Footer