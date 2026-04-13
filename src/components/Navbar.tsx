import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Why DigitalFabric?", path: "/why-digital-fabric" },
  { name: "Careers", path: "#" },
  { name: "Resources", path: "#" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!resourcesRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="bg-[#092f47] text-[#dff0fb] h-[78px] flex items-center justify-between px-6 md:px-10">

        {/* LEFT */}
        <div className="flex items-center gap-5 flex-1 min-w-0">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="DigitalFabric"
              className="w-[120px] md:w-[140px]"
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center pl-4">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className="px-3 py-2 text-[14px] hover:text-white transition flex items-center gap-1 font-medium"
                  >
                    {item.name} <span className="text-[10px] opacity-60">▼</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end pl-4">
          <a
            href="#"
            className="text-[13px] hover:text-white transition whitespace-nowrap"
          >
            Subscribe
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;