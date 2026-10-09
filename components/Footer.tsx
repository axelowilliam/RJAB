import { Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <span className="font-heading font-700 text-white text-base tracking-tight">
                Regmyr &amp; Jansson AB
              </span>
            </div>
            <p className="font-body text-white/60 text-sm max-w-xs">
              Behöriga elinstallatörer för hem och företag i Skåne. Två namn
              på dörren, ett ansvar.
            </p>
            <address className="not-italic font-body text-white/60 text-xs mt-3">
              <strong className="text-white/60">Regmyr &amp; Jansson AB</strong>
              <br />
              Skåne, Sverige
              <br />
              Org.nr: 559575-0174
            </address>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Tjänster
            </h2>
            <ul className="space-y-2 font-body text-white/60 text-sm">
              {[
                "Elinstallation",
                "Felsökning",
                "Säkringsarbeten",
                "Belysning",
                "Företagsel",
                "Nybyggnation",
                "Renovering & tillbyggnad",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h2 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Sidor
            </h2>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "Plejd och smarta hem", href: "/plejd" },
                { label: "Referenser", href: "/referenser" },
                { label: "Akut elektriker", href: "/akut" },
                { label: "Om oss", href: "/#om-oss" },
                { label: "Kontakt", href: "/#kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-bronze transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Kontakt
            </h2>
            <div className="space-y-3 font-body text-sm">
              <a
                href="tel:+4640919135"
                className="flex items-center gap-2 text-white/50 hover:text-bronze transition-colors"
              >
                <Phone size={15} />
                040-91 91 35
              </a>
              <a
                href="mailto:info@regmyrjansson.se"
                className="flex items-center gap-2 text-white/50 hover:text-bronze transition-colors"
              >
                <Mail size={15} />
                info@regmyrjansson.se
              </a>
              <p className="text-white/60 text-xs mt-2">Vardagar 07:00 - 17:00</p>
              <a href="/akut" className="block text-white/50 text-xs hover:text-bronze transition-colors">
                Akuta ärenden: ring oss alltid
              </a>
            </div>

            <div className="flex gap-2 mt-5 -ml-2.5">
              <a
                href="https://www.linkedin.com/company/regmyr-jansson-ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Regmyr & Jansson på LinkedIn (öppnas i ny flik)"
                className="w-11 h-11 flex items-center justify-center text-white/50 hover:text-bronze transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590783842308"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Regmyr & Jansson på Facebook (öppnas i ny flik)"
                className="w-11 h-11 flex items-center justify-center text-white/50 hover:text-bronze transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
            <p className="font-body text-white/60 text-xs">
              © 2025 Regmyr &amp; Jansson AB. Alla rättigheter förbehållna.
            </p>
            <a
              href="/tillganglighet"
              className="font-body text-white/60 text-xs underline underline-offset-2 hover:text-bronze transition-colors py-3 sm:py-0"
            >
              Tillgänglighet
            </a>
          </div>
          <p className="font-body text-white/60 text-xs">
            Elarbeten i Skåne utförda med yrkesheder.
          </p>
        </div>
      </div>
    </footer>
  );
}
