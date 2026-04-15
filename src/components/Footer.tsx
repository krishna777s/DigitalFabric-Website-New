import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/DFG-Blue.png'

const menuItems = [
  { text: 'Why DIGITALFABRIC', superscript: true, path: '/why-digital-fabric' },
  { text: 'Services', path: '/services' },
  { text: 'Knowledge Area', path: '#' },
  { text: 'Featured Insights', path: '/insights' },
  { text: 'Success Stories', path: '#' },
  { text: 'Opportunities', path: '#' },
]

function Footer() {
  return (
    <footer className="site-footer relative z-[2] mt-0 bg-[#FFFFFF] text-black">
      <div
        className="footer-main mx-auto w-full max-w-[1780px] 
          grid grid-cols-[minmax(360px,1.15fr)_minmax(220px,0.62fr)_minmax(420px,1fr)] 
          gap-16 items-start px-[92px] pt-6 pb-[120px]
          [@media(max-width:1400px)]:grid-cols-[minmax(280px,1fr)_minmax(200px,0.62fr)_minmax(320px,0.92fr)]
          [@media(max-width:1400px)]:px-8 [@media(max-width:1400px)]:pt-6 [@media(max-width:1400px)]:pb-[88px] [@media(max-width:1400px)]:gap-10
          [@media(max-width:1100px)]:pb-10
          [@media(max-width:1024px)]:grid-cols-2 [@media(max-width:1024px)]:gap-7 [@media(max-width:1024px)]:px-5 [@media(max-width:1024px)]:pt-6 [@media(max-width:1024px)]:pb-[60px]
          [@media(max-width:640px)]:grid-cols-1 [@media(max-width:640px)]:px-6 [@media(max-width:640px)]:pt-10 [@media(max-width:640px)]:pb-11 [@media(max-width:640px)]:gap-10"
      >
        <div
          className="footer-brand pt-[120px]
            [@media(max-width:1400px)]:pt-20
            [@media(max-width:1100px)]:pt-0
            [@media(max-width:1024px)]:col-span-full [@media(max-width:1024px)]:pt-0"
        >
          <img
            src={logo}
            alt="DigitalFabric"
            className="footer-brand-logo block w-full max-w-[360px] h-auto mb-[18px]
              [@media(max-width:1400px)]:max-w-[340px]
              [@media(max-width:1024px)]:max-w-[280px] [@media(max-width:1024px)]:mb-3
              [@media(max-width:640px)]:max-w-[200px]"
          />

          <div className="footer-brand-text font-serif text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.86] -tracking-[0.035em] [text-shadow:0_1px_0_rgba(255,255,255,0.18)]
            [@media(max-width:1024px)]:text-[clamp(2rem,4vw,3.2rem)]
            [@media(max-width:640px)]:text-[1.8rem] [@media(max-width:640px)]:leading-[0.92]"
            aria-label="DigitalFabric Group"
          >
            {/* <span className="block">
              DIGITALFABRIC<sup className="text-[0.6em]">®</sup>
            </span>
            <span className="block">GROUP</span> */}
          </div>
        </div>

        <div className="footer-menu">
          <h2 className="font-serif text-[clamp(2.35rem,2.7vw,3.25rem)] font-normal leading-none mb-7 text-black
            [@media(max-width:1024px)]:text-[clamp(1.8rem,3vw,2.4rem)] [@media(max-width:1024px)]:mb-[18px]
            [@media(max-width:640px)]:text-[1.6rem] [@media(max-width:640px)]:mb-3.5"
          >
            Menu
          </h2>
          <nav aria-label="Footer menu">
            <ul className="list-none p-0 m-0">
              {menuItems.map((item) => (
                <li key={item.text} className="[&:not(:first-child)]:mt-7 [@media(max-width:640px)]:[&:not(:first-child)]:mt-3.5 [@media(max-width:1024px)]:[&:not(:first-child)]:mt-[18px]">
                  <Link to={item.path} className="text-black no-underline font-serif text-[1.1rem] leading-[1.35] [@media(max-width:1024px)]:text-[1rem] [@media(max-width:640px)]:text-[0.9rem]">
                    {item.text.includes('DIGITALFABRIC') && item.superscript ? (
                      <>
                        {item.text}
                        <span className="inline-block translate-y-[0.1em] text-[1.2em] font-bold ml-[2px]">®</span>
                      </>
                    ) : (
                      item.text
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-subscribe">
          <h2 className="font-serif text-[clamp(2.35rem,2.7vw,3.25rem)] font-normal leading-none mb-7 text-black
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
              className="border-0 bg-[#0B527B] text-white grid place-items-center text-[1.8rem] cursor-pointer
                [@media(max-width:1024px)]:text-[1.5rem]
                [@media(max-width:640px)]:text-[1.3rem]"
            >
              <span aria-hidden="true">→</span>
            </button>
          </form>
          <a href="/" className="footer-message-link inline-block mt-4 text-black no-underline font-serif text-[0.95rem] opacity-90 [@media(max-width:640px)]:text-[0.9rem] [@media(max-width:640px)]:mt-3 hover:underline">
            *Send Message
          </a>
        </div>
      </div>

      <div
        className="footer-meta mx-auto w-full max-w-[1780px] px-[92px] py-[44px] pb-[54px] border-t border-black/10 flex justify-between gap-6
          [@media(max-width:1400px)]:max-w-[calc(100%-48px)] [@media(max-width:1400px)]:px-8 [@media(max-width:1400px)]:py-8 [@media(max-width:1400px)]:pb-10
          [@media(max-width:1100px)]:px-7 [@media(max-width:1100px)]:py-7 [@media(max-width:1100px)]:pb-9
          [@media(max-width:1024px)]:max-w-[calc(100%-32px)] [@media(max-width:1024px)]:px-5 [@media(max-width:1024px)]:py-6 [@media(max-width:1024px)]:pb-8 [@media(max-width:1024px)]:flex-col [@media(max-width:1024px)]:items-start [@media(max-width:1024px)]:gap-2.5
          [@media(max-width:640px)]:max-w-[calc(100%-24px)] [@media(max-width:640px)]:px-3 [@media(max-width:640px)]:py-[18px] [@media(max-width:640px)]:pb-[26px] [@media(max-width:640px)]:gap-2"
      >
        <p className="m-0 text-black font-serif text-[0.94rem] leading-[1.3] [@media(max-width:640px)]:text-[0.9rem]">
          © 2022 DIGITALFABRIC<span className="inline-block translate-y-[-0.38em] text-[0.55em] font-black ml-[4px]">®</span>, All Rights Reserved
        </p>
        <p className="m-0 text-black font-serif text-[0.94rem] leading-[1.3] [@media(max-width:640px)]:text-[0.9rem]">
          Hyderabad, Telangana, India
        </p>
      </div>
    </footer>
  )
}

export default Footer
