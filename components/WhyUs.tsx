import { BadgeCheck, Timer, Tag, Quote } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Behöriga och ansvariga",
    desc: "Vi är certifierade elinstallatörer och arbetar enligt elsäkerhetslagen. Det innebär att vi inte bara får utföra jobbet — vi ansvarar också juridiskt för att det är rätt gjort.",
  },
  {
    icon: Timer,
    title: "Personlig kontakt",
    desc: "När du ringer Regmyr & Jansson pratar du med Alexander eller Vilmer — inte en bokningscentral. Du vet vem som kommer, och vi vet vad vi lovat.",
  },
  {
    icon: Tag,
    title: "Vi arbetar lokalt",
    desc: "Vi bor och jobbar i Skåne. Korta avstånd betyder snabbare respons och att vi faktiskt känner till förutsättningarna i området.",
  },
];

const testimonials = [
  "Trevliga killar som utförde jobbet snyggt och effektivt.",
  "Bra service från början till slut. Mycket nöjd!",
  "Bytte min elcentral i Vellinge. Mycket bra upplevelse.",
];

export default function WhyUs() {
  return (
    <section className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Varför välja oss
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Vad som skiljer oss åt
          </h2>
          <div className="mt-4 w-12 h-1 bg-bronze" />
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="relative p-8 bg-white border border-bronze/15 rounded-lg hover:border-bronze transition-colors duration-300"
              >
                <div className="absolute top-0 left-8 w-12 h-0.5 bg-bronze" />
                <div className="w-12 h-12 rounded bg-bronze/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-bronze" />
                </div>
                <h3 className="font-heading font-700 text-charcoal text-2xl mb-3">
                  {f.title}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div>
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-8 text-center">
            Vad kunderna säger
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((quote, i) => (
              <div
                key={i}
                className="bg-white border border-bronze/15 rounded-lg p-6"
              >
                <Quote size={20} className="text-bronze mb-3" />
                <p className="font-body text-charcoal/80 text-sm leading-relaxed italic">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
