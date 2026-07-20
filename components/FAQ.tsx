"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Är Regmyr & Jansson behöriga elinstallatörer?",
    a: "Ja, vi är certifierade och behöriga elinstallatörer och arbetar enligt elsäkerhetslagen. Vi ansvarar juridiskt för att allt arbete är rätt utfört.",
  },
  {
    q: "Vilka områden i Skåne jobbar ni i?",
    a: "Vi utför elarbeten i hela Skåne. Primärt jobbar vi i Trelleborg, Malmö, Vellinge, Höllviken, Skanör, Falsterbo, Ystad, Staffanstorp, Lund, Helsingborg och Kristianstad.",
  },
  {
    q: "Vad kostar en elektriker i Skåne?",
    a: "Vi föredrar fastpris framför löpande räkning - det är tydligare för dig och oss. Kontakta oss för en kostnadsfri offert.",
  },
  {
    q: "Utför ni elinstallation i villor och lägenheter?",
    a: "Ja, vi installerar el i villor, lägenheter och lokaler - från grunden eller som komplettering till befintlig anläggning.",
  },
  {
    q: "Installerar ni laddboxar för elbil?",
    a: "Ja, vi installerar laddboxar för elbil i villor och fastigheter i Skåne. Kontakta oss för offert.",
  },
  {
    q: "Kan jag prata direkt med elektrikern?",
    a: "Ja, när du ringer Regmyr & Jansson pratar du direkt med Alexander eller Vilmer - ingen bokningscentral eller mellanhänder.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Vanliga frågor
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Frågor & svar
          </h2>
          <div className="mt-4 w-12 h-1 bg-bronze" />
        </div>

        <div className="divide-y divide-charcoal/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-heading font-700 text-charcoal text-lg">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-bronze flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="font-body text-muted text-base pb-5">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
