import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/IITD.png";
import DDRLogo from "../assets/DDLogo-removebg-preview.png";
import logo2 from "../assets/STPI_Logo_Final_8_4v5[1].png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { FaChevronDown, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "Contest Rules", to: "/contest-rules" },
  { label: "Game Videos", to: "/game-videos" },
  { label: "Stage-1", to: "/stage1" },
  { label: "Stage-2", to: "/stage2" },
  { label: "Final", to: "/final" },
];

const sponsorLinks = [
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "MathWorks Modeling Award", to: "/mathworks" },
  { label: "Autodesk Fusion Award", to: "/autodesk-fusion-award" },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/@ddnationalrobocon2441?si=v63ugCnYiJLEG3dK", icon: FaYoutube },
  { label: "Instagram", href: "https://www.instagram.com/ddrobocon?igsh=MXRkMzh6M2I0ZHQ1Ng==", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/18nEjBGXC4/", icon: FaFacebook },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSponsorDropdownOpen, setSponsorDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSponsorDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${hasScrolled ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl" : "border-slate-100 bg-white/90 backdrop-blur-lg"}`}>
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[1500px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label="DD Robocon 2026 Home">
          <div className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="Logo" className="h-9 w-auto object-contain sm:h-10" />
            <img src={DDRLogo} alt="DDRLogo" className="h-9 w-auto object-contain sm:h-10" />
            <img src={logo2} alt="Logo2" className="h-9 w-auto object-contain sm:h-10" />
          </div>
          <span className="hidden whitespace-nowrap text-lg font-extrabold leading-none tracking-normal text-slate-900 sm:block xl:text-xl">DD Robocon 2026</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex">
          <ul className="flex min-w-0 items-center gap-1 rounded-2xl border border-slate-200 bg-white/90 p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
            {primaryLinks.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => `inline-flex min-h-10 items-center whitespace-nowrap rounded-xl px-3 text-sm font-bold transition ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                className={`inline-flex min-h-10 items-center gap-1 whitespace-nowrap rounded-xl px-3 text-sm font-semibold transition ${sponsorLinks.some((item) => item.to === location.pathname) ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"}`}
                onClick={() => setSponsorDropdownOpen((current) => !current)}
                aria-haspopup="true"
                aria-expanded={isSponsorDropdownOpen}
              >
                Sponsor <FaChevronDown aria-hidden="true" className="h-3 w-3" />
              </button>
              <div className={`absolute right-0 mt-3 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-xl transition ${isSponsorDropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                {sponsorLinks.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => `block rounded-md px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"}`}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `inline-flex min-h-10 items-center whitespace-nowrap rounded-xl px-3 text-sm font-semibold transition ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"}`}>
                Contact
              </NavLink>
            </li>
            <li>
              <a href="https://ddrobocon2025.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center whitespace-nowrap rounded-xl px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
                DD-Robocon 2025
              </a>
            </li>
          </ul>
          <div className="flex shrink-0 items-center gap-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenu3Line className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[68px] z-40 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-68px)] w-full overflow-y-auto border-b border-slate-200 bg-white p-5 shadow-2xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="space-y-1">
          {primaryLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex min-h-11 items-center rounded-md px-4 text-base font-semibold transition ${isActive ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200" : "text-slate-700 hover:bg-slate-50"}`}>
              {item.label}
            </NavLink>
          ))}
          <button type="button" onClick={() => setSponsorDropdownOpen((current) => !current)} className="flex min-h-11 w-full items-center justify-between rounded-md px-4 text-left text-base font-semibold text-slate-700 transition hover:bg-slate-50" aria-expanded={isSponsorDropdownOpen}>
            Sponsor <FaChevronDown aria-hidden="true" className={`h-3 w-3 transition ${isSponsorDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`grid transition-all ${isSponsorDropdownOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden pl-3">
              {sponsorLinks.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `mt-1 flex min-h-11 items-center rounded-md px-4 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/contact" className={({ isActive }) => `flex min-h-11 items-center rounded-md px-4 text-base font-semibold transition ${isActive ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200" : "text-slate-700 hover:bg-slate-50"}`}>
            Contact
          </NavLink>
          <a href="https://ddrobocon2025.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center rounded-md px-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50">
            DD-Robocon 2025
          </a>
        </div>
        <div className="mt-8 flex items-center gap-2 border-t border-slate-200 pt-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;