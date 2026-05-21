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
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <Logo size={38} />
          <div className="leading-tight">
            <div className="font-heading font-700 text-charcoal text-sm tracking-tight">
              Regmyr &amp; Jansson AB
            </div>
          </div>
        </a>

        {/* Desktop links */}
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
          <li>
            <a
              href="tel:+46704128391"
              className="ml-2 px-4 py-2 bg-bronze text-white text-sm font-body font-600 rounded hover:bg-bronze/90 transition-colors duration-200"
            >
              Ring oss
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal"
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
                  href="tel:+46704128391"
                  className="block w-full text-center py-3 bg-bronze text-white font-body font-600 rounded"
                >
                  Ring oss - 070-412 83 91
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
