import { Phone } from "lucide-react";
import { services } from "@/lib/services";

const featured = [
  {
    title: "Plejd och smarta hem",
    desc: "Smart belysning, dimring och scener med Plejd. Vi installerar, bygger ut och felsöker.",
    img: "/plejd.png",
    alt: "Plejd logotyp",
    logo: true,
  },
  {
    title: "Elcentral och säkringar",
    desc: "Byte av elcentral, jordfelsbrytare eller uppgradering av ett gammalt proppskåp.",
    img: "/uppdrag/elcentral-staffanstorp/1.jpg",
    alt: "Nyinstallerad elcentral",
  },
  {
    title: "Laddbox för elbil",
    desc: "Laddbox hemma eller vid fastigheten, med rätt säkring och lastbalansering.",
    img: "/uppdrag/elbillsaddse-vellinge/15.png",
    alt: "Installerad laddbox för elbil",
  },
];

const featuredTitles = new Set(featured.map((f) => f.title));

export default function Services() {
  const rest = services.filter((s) => !featuredTitles.has(s.title));

  return (
    <section id="tjanster" className="bg-charcoal py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:flex md:items-end md:justify-between gap-10">
          <div>
            <p className="font-body text-white text-sm tracking-widest uppercase mb-3">
              Vad vi gör
            </p>
            <h2
              className="font-heading font-700 text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Våra tjänster
            </h2>
          </div>
          <p className="font-body text-white/80 text-base max-w-sm mt-4 md:mt-0">
            Allt inom el för hem och företag i Skåne, utfört av behöriga
            elinstallatörer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-t-lg overflow-hidden">
          {featured.map((f) => (
            <div key={f.title} className="bg-charcoal flex flex-col">
              <div
                className={`aspect-[4/3] overflow-hidden ${
                  f.logo ? "bg-white/5 flex items-center justify-center p-14" : ""
                }`}
              >
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  className={f.logo ? "max-w-[150px] w-full h-auto" : "w-full h-full object-cover"}
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-heading font-700 text-white text-2xl tracking-tight mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-white/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-t-0 border-white/10 rounded-b-lg overflow-hidden">
          {rest.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-charcoal p-7 md:p-8">
                <Icon size={22} className="text-bronze mb-5" aria-hidden="true" />
                <h3 className="font-heading font-700 text-white text-xl tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-white/70 text-sm">{s.desc}</p>
              </div>
            );
          })}
          <a
            href="tel:+4640919135"
            className="bg-bronze p-7 md:p-8 flex flex-col justify-between sm:col-span-2 hover:bg-bronze/90 transition-colors"
          >
            <p className="font-heading font-700 text-white text-xl leading-snug mb-6">
              Hittar du inte det du söker?
            </p>
            <span className="inline-flex items-center gap-2 font-body font-600 text-white">
              <Phone size={18} aria-hidden="true" /> Ring oss på 040-91 91 35
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
