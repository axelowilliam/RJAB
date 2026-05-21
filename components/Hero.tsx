import { Phone, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white border-b border-bronze/10">
      {/* Bronze accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-bronze" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-20">
        {/* Eyebrow */}
        <p className="font-body text-bronze text-sm tracking-widest uppercase mb-6">
          Regmyr &amp; Jansson El AB — Elektriker i Skåne
        </p>

        {/* Headline */}
        <h1
          className="font-heading font-800 text-charcoal leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          Två elektriker.{" "}
          <span className="text-bronze">Ett ansvar.</span>
        </h1>

        {/* Sub heading */}
        <p className="font-body text-muted text-lg md:text-xl max-w-xl mb-3 leading-relaxed">
          Certifierade och behöriga elinstallatörer. Du pratar direkt med den
          som utför jobbet — ingen mellanhand, inga överraskningar.
        </p>
        <p className="font-body text-bronze text-sm mb-10 font-500">
          Vi tar emot jobb nu och är i full drift från 8 juni 2025.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+46704128391"
            className="inline-flex items-center justify-center gap-2 bg-bronze text-white font-body font-600 text-base px-7 py-4 rounded min-h-[52px] hover:bg-bronze/90 transition-colors"
          >
            <Phone size={18} />
            Ring oss
          </a>
          <a
            href="mailto:info@regmyrjansson.se"
            className="inline-flex items-center justify-center gap-2 text-charcoal font-body font-500 text-base px-7 py-4 rounded min-h-[52px] border border-charcoal/20 hover:border-bronze hover:text-bronze transition-colors"
          >
            <Mail size={18} />
            Skicka e-post
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex gap-10 border-t border-charcoal/10 pt-8">
          {[
            { value: "2", label: "Grundare" },
            { value: "Skåne", label: "Verksamhetsområde" },
            { value: "100%", label: "Behöriga" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading font-700 text-bronze text-3xl leading-none">
                {s.value}
              </div>
              <div className="font-body text-muted text-xs mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
