"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { label: "Tjänster", href: "/#tjanster" },
  { label: "Plejd", href: "/plejd" },
  { label: "Referenser", href: "/referenser" },
  { label: "Om oss", href: "/#om-oss" },
  { label: "Kontakt", href: "/#kontakt" },
  { label: "Akut", href: "/akut" },
];

export default function TestNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-sm border-b border-bronze/10" : ""
      }`}
    >
      <nav
        aria-label="Huvudmeny"
        className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4"
      >
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Logo size={36} />
          <span className="font-heading font-700 text-charcoal leading-tight" style={{ fontSize: "0.95rem" }}>
            Regmyr &amp; Jansson
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-sm font-body transition-colors duration-200 hover:text-bronze ${
                  isActive(l.href) ? "text-bronze" : "text-charcoal/65"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:+4640919135"
            className="flex items-center gap-2 bg-bronze text-white font-body font-600 text-sm px-4 py-2.5 rounded min-h-[44px] hover:bg-bronze/90 transition-colors duration-200"
            aria-label="Ring oss - 040-91 91 35"
          >
            <Phone size={15} />
            <span className="hidden sm:inline">040-91 91 35</span>
            <span className="sm:hidden">Ring</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-charcoal rounded"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            aria-controls="mobilmeny"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobilmeny" className="lg:hidden bg-white border-t border-charcoal/10">
          <ul className="px-5 py-2 flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-charcoal/5 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block py-3.5 text-base font-body transition-colors hover:text-bronze ${
                    isActive(l.href) ? "text-bronze" : "text-charcoal/80"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
