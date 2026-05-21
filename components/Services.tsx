import {
  Zap,
  Search,
  ShieldCheck,
  Lightbulb,
  Building2,
  Wrench,
  Home,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Elinstallation",
    desc: "Vi installerar el i villor, lägenheter och lokaler — från grunden eller som komplettering till befintlig anläggning. Allt utförs enligt gällande regelverk av behörig elinstallatör.",
  },
  {
    icon: Search,
    title: "Felsökning",
    desc: "Något fungerar inte som det ska? Vi går metodiskt igenom anläggningen, hittar felet och åtgärdar det. Inga vilda gissningar — bara ett ordentligt jobb.",
  },
  {
    icon: ShieldCheck,
    title: "Säkringsarbeten",
    desc: "Byte av elcentral, installation av jordfelsbrytare eller uppgradering av ett gammalt proppskåp. Vi ser till att din anläggning är säker och uppfyller dagens krav.",
  },
  {
    icon: Lightbulb,
    title: "Belysning",
    desc: "Infällda spottar, utomhusbelysning, nya armaturer eller LED-konvertering. Vi hjälper dig med allt från planering till färdig installation.",
  },
  {
    icon: Building2,
    title: "Företagsel",
    desc: "El för kontor, butiker och verksamhetslokaler. Vi hanterar allt från nyinstallation till ombyggnation och ser till att arbetet stör verksamheten så lite som möjligt.",
  },
  {
    icon: Home,
    title: "Nybyggnation",
    desc: "Vi utför elarbeten i nybyggnation av Attefalls hus, villor och sommarhus. Hela installationen från grund till färdigt — du slipper hålla koll på flera hantverkare.",
  },
  {
    icon: Wrench,
    title: "Renovering & tillbyggnad",
    desc: "Bygger du om eller till? Vi sköter elarbetena och samordnar med övriga hantverkare. Du får en elinstallatör som är med hela vägen — inte en som dyker upp i slutet.",
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Vad vi gör
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Våra tjänster
          </h2>
          <div className="mt-4 w-12 h-1 bg-bronze" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bronze/10 border border-bronze/10 rounded-lg overflow-hidden">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white hover:bg-cream transition-colors duration-300 p-8"
              >
                <div className="w-11 h-11 rounded bg-bronze/10 flex items-center justify-center mb-5 group-hover:bg-bronze/20 transition-colors">
                  <Icon size={22} className="text-bronze" />
                </div>
                <h3 className="font-heading font-700 text-charcoal text-2xl mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
