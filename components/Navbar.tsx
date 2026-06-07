"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { slideDown } from "@/lib/motion";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-sm border-b border-bronze/10" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-24 flex items-center relative">
        {/* Desktop left – menu links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm font-body text-charcoal/70 hover:text-bronze transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger – left */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal"
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center – logo + text (absolutely centered) */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center gap-1 group"
        >
          <Logo size={50} />
          <span className="font-heading font-700 text-charcoal tracking-tight whitespace-nowrap" style={{ fontSize: "1.05rem" }}>
            Regmyr &amp; Jansson AB
          </span>
        </a>

        {/* Desktop right – CTA */}
        <div className="hidden md:flex ml-auto">
          <a
            href="tel:+4640919135"
            className="px-4 py-2 bg-bronze text-white text-sm font-body font-600 rounded hover:bg-bronze/90 transition-colors duration-200"
          >
            Ring oss
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-t border-charcoal/10"
          >
            <ul className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="w-full text-left py-3 text-base font-body text-charcoal/80 hover:text-bronze transition-colors border-b border-charcoal/5"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="tel:+4640919135"
                  className="block w-full text-center py-3 bg-bronze text-white font-body font-600 rounded"
                >
                  Ring oss - 040-91 91 35
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
