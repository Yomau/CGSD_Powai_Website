import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { LOGO } from "../mock";

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About Kindergarten",
    to: "/about",
    children: [
      { label: "About Us", to: "/about/about-us" },
      { label: "Mission & Vision", to: "/about/mission-and-vision" },
      { label: "Administration", to: "/about/administration" },
      { label: "Teaching Staff", to: "/about/teaching-staff" },
    ],
  },
  { label: "Academics", to: "/facilities" },
  { label: "Facilities", to: "/facilities" },
  { label: "ADMISSION", to: "/admission", highlight: true },
  { label: "Gallery", to: "/gallery" },
  { label: "Events", to: "/events" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="h-1 w-full bg-[var(--brand-indigo)]" />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="CGKG" className="h-14 w-14 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-[15px] text-[var(--brand-navy)] tracking-wide">
              COAST GUARD
            </div>
            <div className="font-display font-extrabold text-[15px] text-[var(--brand-navy)] tracking-wide -mt-1">
              KINDERGARTEN
            </div>
            <div className="font-display font-semibold text-[11px] tracking-[0.25em] text-[var(--brand-navy)] mt-0.5">
              ROYAPURAM
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link font-semibold text-[15px] flex items-center gap-1 ${
                    item.highlight
                      ? "text-[var(--brand-orange)]"
                      : isActive
                      ? "text-[var(--brand-indigo)] active"
                      : "text-[var(--brand-navy)] hover:text-[var(--brand-indigo)]"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </NavLink>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 min-w-[220px] py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2.5 text-[14px] text-[var(--brand-navy)] hover:bg-slate-50 hover:text-[var(--brand-indigo)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-primary text-sm">
            Contact Us
          </Link>
        </nav>

        <button
          className="lg:hidden text-[var(--brand-navy)]"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`py-2.5 font-semibold ${
                  item.highlight
                    ? "text-[var(--brand-orange)]"
                    : "text-[var(--brand-navy)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-2 self-start text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
