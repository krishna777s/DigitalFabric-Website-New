import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const navItems = [
  { label: "Industries", href: "/services" },
  { label: "Capabilities", href: "/services" },
  { label: "Tech & AI", href: "/services" },
  { label: "Our Insights", href: "/insights" },
  { label: "Careers", href: "/contact" },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-solid py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="section-wrapper flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-wider font-sans text-foreground">
              DIGITALFABRIC®
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-sans uppercase">
              Group
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-sans text-foreground/80 hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm font-sans text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
            Sign In
          </span>
          <span className="text-foreground/40">|</span>
          <span className="text-sm font-sans text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
            Subscribe
          </span>
          <button className="ml-2 text-foreground/70 hover:text-foreground transition-colors">
            <Search size={18} />
          </button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden nav-solid mt-2 py-6 px-6 animate-fade-in-up">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block py-3 text-foreground/80 hover:text-foreground font-sans text-sm border-b border-border/30"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 mt-4 text-sm text-foreground/70">
            <span className="cursor-pointer hover:text-foreground">Sign In</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-foreground">Subscribe</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
