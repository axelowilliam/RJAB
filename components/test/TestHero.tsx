import { Phone, Mail } from "lucide-react";

export default function TestHero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-end pt-16 overflow-hidden">

      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="Elektriker i arbete - Regmyr & Jansson, Malmö"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay — base layer + gradient from bottom */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Mobile: eyebrow pinned to top */}
      <div className="md:hidden relative z-10 w-full max-w-6xl mx-auto px-5 pt-8">
        <p className="font-body text-white/60 text-xs tracking-widest uppercase">
          Auktoriserade elinstallatörer · Malmö &amp; Skåne
        </p>
      </div>

      {/* Spacer — mobile only, pushes bottom content down */}
      <div className="flex-1 md:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-14 md:pb-20">

        {/* Desktop eyebrow */}
        <p className="hidden md:block font-body text-white/60 text-xs tracking-widest uppercase mb-4">
          Auktoriserade elinstallatörer · Malmö &amp; Skåne
        </p>

        <h1
          className="font-heading font-800 text-white leading-none mb-5"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Två elektriker
          <br />
          <span className="text-bronze">Ett ansvar</span>
        </h1>

        <p className="font-body text-white/75 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
          Certifierade och behöriga elinstallatörer i Skåne. Du pratar direkt
          med den som utför jobbet - ingen mellanhand, inga överraskningar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href="tel:+4640919135"
            className="inline-flex items-center justify-center gap-2 bg-bronze text-white font-body font-600 text-base px-7 py-4 rounded min-h-[52px] hover:bg-bronze/90 transition-colors"
          >
            <Phone size={18} />
            Ring oss
          </a>
          <a
            href="mailto:info@regmyrjansson.se"
            className="inline-flex items-center justify-center gap-2 text-white font-body font-500 text-base px-7 py-4 rounded min-h-[52px] border border-white/30 hover:border-bronze hover:text-bronze transition-colors"
          >
            <Mail size={18} />
            Skicka e-post
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 border-t border-white/15 pt-7">
          {[
            { value: "2", label: "Grundare" },
            { value: "Skåne", label: "Verksamhetsområde" },
            { value: "100%", label: "Behöriga" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading font-700 text-bronze text-2xl leading-none">
                {s.value}
              </div>
              <div className="font-body text-white/50 text-xs mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
