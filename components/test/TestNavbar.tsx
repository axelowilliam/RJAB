"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Uppdrag", href: "#uppdrag" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function TestNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-bronze/10" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* Logo + name */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <Logo size={36} />
          <span className="font-heading font-700 text-charcoal leading-tight" style={{ fontSize: "0.95rem" }}>
            Regmyr &amp; Jansson
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm font-body text-charcoal/65 hover:text-bronze transition-colors duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Phone - always visible, primary CTA */}
          <a
            href="tel:+4640919135"
            className="flex items-center gap-2 bg-bronze text-white font-body font-600 text-sm px-4 py-2.5 rounded min-h-[44px] hover:bg-bronze/90 transition-colors duration-200"
            aria-label="Ring oss - 040-91 91 35"
          >
            <Phone size={15} />
            <span className="hidden sm:inline">040-91 91 35</span>
            <span className="sm:hidden">Ring</span>
          </a>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-charcoal rounded"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-charcoal/8">
          <ul className="px-5 py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="w-full text-left py-3.5 text-base font-body text-charcoal/80 hover:text-bronze transition-colors border-b border-charcoal/6 last:border-0"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
