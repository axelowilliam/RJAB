import { Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <span className="font-heading font-700 text-white text-base tracking-tight">
                Regmyr &amp; Jansson AB
              </span>
            </div>
            <p className="font-body text-white/40 text-sm max-w-xs">
              Behöriga elinstallatörer för hem och företag i Skåne. Två namn
              på dörren, ett ansvar.
            </p>
            <address className="not-italic font-body text-white/30 text-xs mt-3">
              <strong className="text-white/40">Regmyr &amp; Jansson El AB</strong>
              <br />
              Skåne, Sverige
              <br />
              Org.nr: 559575-0174
            </address>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Tjänster
            </h4>
            <ul className="space-y-2 font-body text-white/40 text-sm">
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

          {/* Contact */}
          <div>
            <h4 className="font-heading font-600 text-white text-lg mb-4 tracking-wide">
              Kontakt
            </h4>
            <div className="space-y-3 font-body text-sm">
              <a
                href="tel:+46704128391"
                className="flex items-center gap-2 text-white/50 hover:text-bronze transition-colors"
              >
                <Phone size={15} />
                070-412 83 91
              </a>
              <a
                href="mailto:info@regmyrjansson.se"
                className="flex items-center gap-2 text-white/50 hover:text-bronze transition-colors"
              >
                <Mail size={15} />
                info@regmyrjansson.se
              </a>
              <p className="text-white/30 text-xs mt-2">Vardagar 07:00 – 17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/25 text-xs">
            © 2025 Regmyr &amp; Jansson El AB. Alla rättigheter förbehållna.
          </p>
          <p className="font-body text-white/20 text-xs">
            Elarbeten i Skåne utförda med yrkesheder.
          </p>
        </div>
      </div>
    </footer>
  );
}
