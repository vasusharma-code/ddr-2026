import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import iitdLogo from "../assets/IITD.png";
import ddLogo from "../assets/DDLogo-removebg-preview.png";
import stpiLogo from "../assets/STPI_Logo_Final_8_4v5[1].png";
import { Container } from "./DesignSystem";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Contest Rules", to: "/contest-rules" },
  { label: "Game Videos", to: "/game-videos" },
  { label: "Stage-1", to: "/stage1" },
  { label: "Stage-2", to: "/stage2" },
  { label: "Final", to: "/final" },
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/@ddnationalrobocon2441?si=v63ugCnYiJLEG3dK", icon: FaYoutube },
  { label: "Instagram", href: "https://www.instagram.com/ddrobocon?igsh=MXRkMzh6M2I0ZHQ1Ng==", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/18nEjBGXC4/", icon: FaFacebook },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <img src={iitdLogo} alt="Logo" className="h-12 w-auto rounded border border-slate-200 bg-white p-1" />
              <img src={ddLogo} alt="DDRLogo" className="h-12 w-auto rounded border border-slate-200 bg-white p-1" />
              <img src={stpiLogo} alt="Logo2" className="h-12 w-auto rounded border border-slate-200 bg-white p-1" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-700">DD Robocon 2026 Secretariat</p>
            <p className="text-sm leading-7 text-slate-700">Department of Mechanical Engineering, Indian Institute of Technology Delhi</p>
            <p className="text-sm leading-7 text-slate-700">Hauz Khas, New Delhi - 110016, INDIA</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Important links</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {footerLinks.map((item) => (
                <Link key={item.to} to={item.to} className="min-h-11 rounded-md px-0 py-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
              <a href="https://ddrobocon2025.vercel.app/" target="_blank" rel="noopener noreferrer" className="min-h-11 rounded-md py-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700">
                DD-Robocon 2025
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Contact</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>Phone no: +91-90138-99145</p>
              <a href="mailto:ddroboconiitd@gmail.com" className="inline-flex min-h-11 items-center font-semibold text-slate-900 underline-offset-4 hover:text-blue-700 hover:underline">ddroboconiitd@gmail.com</a>
            </div>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon, text }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : <span aria-hidden="true" className="text-sm font-bold">{text}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2025-26, DD Robocon</p>
          <p>Website created and designed by <a href="https://www.linkedin.com/in/vasu-sharmaa/" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-blue-700">Vasu Sharma</a></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;