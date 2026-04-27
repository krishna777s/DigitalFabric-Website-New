import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/DF group logo-Blue.png";
import ResourcesMenu from "@/components/resources/ResourcesMenu";

const navItems = [
  { name: "Why DigitalFabric?", path: "/why-digital-fabric" },
  { name: "Careers", path: "#" },
  { name: "Resources", path: "#" },
  { name: "Insights", path: "/insights" },
  { name: "Contact Us", path: "/contact" },
];

const mobileResourceLinks = [
  { label: "TI Framework", path: "/resources/ti-framework" },
  { label: "Featured Insights", path: "/featured-insights" },
  { label: "ISG Studies and Brochures", path: "/isg-studies-and-brochures" },
  { label: "MINDSETMATTERS™", path: "/resources/mindset-matters" },
  { label: "AISWITCH™ Framework", path: "/resources/aiswitch-framework" },
  { label: "AISWITCH™ Storyboards", path: "/resources/aiswitch-storyboards" },
  { label: "White Papers", path: "#" },
  { label: "Copygamie Framework", path: "/copygamie-framework-free-use" },
  { label: "Success Stories", path: "/marketing-success-stories" },
];

const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement | null>(null);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Close desktop Resources dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!resourcesRef.current?.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ────────────────────────────── HEADER BAR ────────────────────────────── */}
      <header className="bg-white text-black h-[68px] sm:h-[78px] md:h-[88px] flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-12 border-b border-black/10 shadow-sm transition-all duration-300">


        {/* LEFT: Logo + Desktop Nav */}
        <div className="flex items-center gap-5 min-w-0 overflow-hidden">

          {/* Logo — smaller on mobile, original size on desktop */}
          <Link to="/" onClick={() => handleNavClick("/")} className="flex items-center ml-[14px] flex-shrink-0 transition-transform hover:scale-[1.02]">
            <img
              src={logo}
              alt="DigitalFabric"
              className="w-[84px] sm:w-[104px] md:w-[144px] h-auto"
            />
          </Link>

          {/* Desktop navigation links — hidden on mobile */}
          <nav className="hidden md:flex items-center pl-4">
            <ul className="flex items-center">
              {navItems.map((item) => {
                if (item.name === "Resources") {
                  return (
                    <li key={item.name} ref={resourcesRef}>
                      <button
                        onClick={() => setResourcesOpen(!resourcesOpen)}
                        className="px-3 py-2 text-[15.5px] md:text-[17px] transition flex items-center gap-1.5 font-semibold text-black hover:text-black/70"
                      >
                        {item.name}
                        <span className={`text-[12px] md:text-[14px] opacity-80 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}>▼</span>
                      </button>
                      {resourcesOpen && (
                        <ResourcesMenu onNavigate={() => setResourcesOpen(false)} />
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.name} className="relative">
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className="px-3 py-2 text-[15.5px] md:text-[17px] text-black hover:text-black/70 transition flex items-center gap-1.5 font-semibold"
                    >
                      {item.name}

                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* RIGHT: Subscribe (desktop only) + Hamburger (mobile only) */}
        <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
          <a
            href="#"
            className="hidden md:block text-[15.5px] md:text-[17px] font-medium text-black hover:text-[#0B527B] transition whitespace-nowrap"
          >
            Subscribe
          </a>

          {/* Hamburger button — only on mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-black rounded-lg hover:bg-black/5 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ────────────────────────────── MOBILE SLIDE-IN MENU ────────────────────────────── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/20 z-[55]"
          onClick={closeMobile}
        />
      )}

      {/* Slide panel */}
      <div
        className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white z-[60] overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="px-6 py-6">

          {/* Nav links */}
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-black/8">
                {item.name === "Resources" ? (
                  <>
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="w-full flex items-center justify-between py-4 text-[1rem] font-semibold text-black"
                    >
                      {item.name}
                      <span className={`text-[11px] transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {mobileResourcesOpen && (
                      <div className="pl-4 pb-4 flex flex-col gap-3 ml-1 border-l-2 border-[#0B527B]/25">
                        {mobileResourceLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="text-[0.9rem] text-black/70 font-medium hover:text-black transition"
                            onClick={closeMobile}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center py-4 text-[1rem] font-semibold text-black hover:text-black/70 transition"
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Subscribe */}
            <li className="pt-4">
              <a
                href="#"
                className="inline-block px-5 py-2.5 bg-[#0B527B] text-white text-[0.9rem] font-semibold rounded-full hover:bg-[#0a446a] transition"
                onClick={closeMobile}
              >
                Subscribe
              </a>
            </li>
          </ul>

          {/* Footer inside mobile menu */}
          <div className="mt-10 pt-6 border-t border-black/10 text-center">
            <img src={logo} alt="DigitalFabric" className="w-[110px] mx-auto opacity-60 mb-2" />
            <p className="text-[0.72rem] text-black/40">© 2022 DIGITALFABRIC<sup className="text-[0.65em] align-top relative top-[0.12em] ml-0.5">®</sup>. All Rights Reserved.</p>
          </div>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;
