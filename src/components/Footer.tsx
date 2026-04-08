import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const menuLinks = [
  { label: "Why DIGITALFABRIC®", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Knowledge Area", href: "/insights" },
  { label: "Featured Insights", href: "/insights" },
  { label: "Success Stories", href: "/insights" },
  { label: "Opportunities", href: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-df-navy pt-16 pb-6">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border/30">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-2xl font-bold tracking-wider font-sans text-foreground">
                DIGITALFABRIC®
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground font-sans uppercase">
                Group
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif text-foreground mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif text-df-gold mb-6">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-foreground/10 border-none rounded-l-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 font-sans focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-accent hover:bg-accent/80 text-foreground px-4 rounded-r-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="text-xs text-foreground/50 mt-2 font-sans">*Send Message</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-foreground/50 font-sans">
          <span>© 2022 DIGITALFABRIC®. All Rights Reserved</span>
          <span>Hyderabad, Telangana, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
