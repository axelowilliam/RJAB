import type { Metadata } from "next";
import {
  Lightbulb,
  SlidersHorizontal,
  Clock,
  Home,
  Wrench,
  Smartphone,
  Building2,
  Wifi,
} from "lucide-react";
import Navbar from "@/components/test/TestNavbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CallButtons from "@/components/CallButtons";
import CtaBand from "@/components/CtaBand";
import FaqList, { faqJsonLd, type FaqItem } from "@/components/FaqList";
import { siteUrl, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

const title = "Plejd-installation i Skåne | Smarta hem med Plejd";
const description =
  "Regmyr & Jansson är experter på Plejd. Vi installerar, bygger ut och felsöker smart belysning och smarta hem med Plejd i Malmö och hela Skåne.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Regmyr & Jansson` },
  description,
  alternates: { canonical: "/plejd" },
  openGraph: { url: `${siteUrl}/plejd`, title, description },
};

const services = [
  {
    icon: Lightbulb,
    title: "Smart belysning och dimring",
    desc: "Dimra och styr all belysning i hemmet från appen eller dina vanliga strömbrytare. Vi väljer rätt dimmer eller relä för varje armatur.",
  },
  {
    icon: SlidersHorizontal,
    title: "Scener",
    desc: "Middag, film eller städning. Vi sätter upp scener så att flera lampor ändras samtidigt med ett tryck.",
  },
  {
    icon: Clock,
    title: "Scheman och astrour",
    desc: "Låt utebelysningen tändas vid solnedgång och släckas på natten, eller få ljuset att följa dygnet automatiskt.",
  },
  {
    icon: Home,
    title: "Uppgradera befintligt hem",
    desc: "Plejd monteras i befintliga dosor bakom strömbrytarna. Du gör hemmet smart utan att riva väggar eller dra ny el.",
  },
  {
    icon: Wrench,
    title: "Utbyggnad och felsökning",
    desc: "Har du redan Plejd? Vi bygger ut systemet med fler rum, hjälper till när något inte fungerar som det ska och flyttar över styrningen vid ägarbyte.",
  },
  {
    icon: Wifi,
    title: "Fjärrstyrning och integrationer",
    desc: "Med Plejd Gateway styr du hemmet när du inte är där och kan koppla ihop systemet med röstassistenter och andra smarta tjänster.",
  },
  {
    icon: Building2,
    title: "Nybyggnation och renovering",
    desc: "Bygger du nytt eller renoverar? Vi planerar in Plejd från början så att belysningen blir rätt från dag ett.",
  },
  {
    icon: Smartphone,
    title: "Genomgång av appen",
    desc: "När vi är klara går vi igenom appen med dig, så att du vet hur du ändrar scener, scheman och inställningar själv.",
  },
];

const steps = [
  {
    title: "Du hör av dig",
    desc: "Ring eller mejla och berätta vad du vill uppnå. Du pratar direkt med Alexander eller Vilmer.",
  },
  {
    title: "Vi planerar",
    desc: "Vi går igenom rummen, belysningen och dina önskemål och föreslår en lösning. Du får ett tydligt pris innan vi börjar.",
  },
  {
    title: "Vi installerar",
    desc: "Modulerna monteras bakom befintliga brytare eller i nya dosor. Installationen görs av behörig elinstallatör enligt gällande regler.",
  },
  {
    title: "Vi lämnar över",
    desc: "Allt kopplas ihop i appen, vi testar varje funktion och visar dig hur du använder systemet.",
  },
];

const faq: FaqItem[] = [
  {
    q: "Vad är Plejd?",
    a: "Plejd är ett svenskt system för smart belysning och styrning av hemmet. Små moduler monteras bakom dina strömbrytare och styrs via en app i mobilen, samtidigt som de vanliga brytarna fortsätter att fungera.",
  },
  {
    q: "Måste jag byta ut mina strömbrytare?",
    a: "Oftast inte. Plejd-modulerna monteras i befintliga dosor bakom strömbrytarna, så du kan behålla brytarna du har i dag.",
  },
  {
    q: "Kan jag installera Plejd själv?",
    a: "Nej. Plejd kopplas in i den fasta elinstallationen och ska därför installeras av en behörig elinstallatör. Det är viktigt både för säkerheten och för försäkringen.",
  },
  {
    q: "Fungerar Plejd i ett äldre hus?",
    a: "I de flesta fall ja. Vi gör en bedömning av din befintliga installation och berättar om något behöver åtgärdas innan Plejd kan installeras.",
  },
  {
    q: "Behöver jag internet för att använda Plejd?",
    a: "Nej, grundfunktionerna fungerar direkt mellan mobilen och modulerna. Vill du styra hemmet på distans eller koppla det till röstassistenter behövs en Plejd Gateway.",
  },
  {
    q: "Kan ni bygga ut ett Plejd-system som någon annan har installerat?",
    a: "Ja. Vi bygger ut, felsöker och justerar befintliga Plejd-installationer, oavsett vem som installerade dem från början.",
  },
];

export default function PlejdPage() {
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "Service",
            name: "Plejd-installation och smarta hem",
            serviceType: "Installation av Plejd smart belysning",
            description,
            url: `${siteUrl}/plejd`,
            provider: { "@id": `${siteUrl}/#business` },
            areaServed: "Skåne",
          },
          faqJsonLd(faq),
          breadcrumbJsonLd("Plejd", "/plejd"),
        ]}
      />
      <Navbar />
      <main id="innehall">
        <PageHeader
          crumb="Plejd"
          eyebrow="Plejd och smarta hem · Skåne"
          title={
            <>
              Smarta hem
              <br />
              med Plejd
            </>
          }
          intro="Vi är experter på Plejd och hjälper dig med allt från en enskild dimmer till ett helt smart hem. Installation, utbyggnad och felsökning i Malmö och hela Skåne."
        >
          <CallButtons mailSubject="Förfrågan om Plejd" />
        </PageHeader>

        {/* Intro */}
        <section className="bg-white py-20 md:py-24 px-5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2
                className="font-heading font-700 text-charcoal leading-none mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Smart belysning som bara fungerar
              </h2>
              <div className="w-12 h-1 bg-bronze mb-6" />
              <div className="space-y-4 font-body text-muted text-base">
                <p>
                  Plejd gör det enkelt att styra belysningen i hemmet. Dimra, skapa
                  scener och ställ in scheman i appen, eller använd dina vanliga
                  strömbrytare precis som förut.
                </p>
                <p>
                  Eftersom modulerna monteras bakom befintliga brytare passar Plejd
                  lika bra i ett hus från 60-talet som i en nybyggd villa. Vi hjälper
                  dig att välja rätt lösning, installerar allt och ser till att du
                  kommer igång.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-cream border border-bronze/15 rounded-lg aspect-[4/3] flex items-center justify-center p-12">
              <img
                src="/plejd.png"
                alt="Plejd logotyp"
                width={1000}
                height={786}
                className="w-full max-w-[220px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-cream py-20 md:py-24 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
                Det här hjälper vi till med
              </p>
              <h2
                className="font-heading font-700 text-charcoal leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Allt inom Plejd
              </h2>
              <div className="mt-4 w-12 h-1 bg-bronze" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bronze/10 border border-bronze/10 rounded-lg overflow-hidden">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bg-white p-7">
                    <div className="w-11 h-11 rounded bg-bronze/10 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-bronze" />
                    </div>
                    <h3 className="font-heading font-700 text-charcoal text-xl mb-2 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="font-body text-muted text-sm">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 md:py-24 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
                Så går det till
              </p>
              <h2
                className="font-heading font-700 text-charcoal leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Från idé till smart hem
              </h2>
              <div className="mt-4 w-12 h-1 bg-bronze" />
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-bronze pt-5">
                  <span className="font-heading font-700 text-bronze text-sm">
                    Steg {i + 1}
                  </span>
                  <h3 className="font-heading font-700 text-charcoal text-xl mt-1 mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-muted text-sm">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-20 md:py-24 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
                Vanliga frågor
              </p>
              <h2
                className="font-heading font-700 text-charcoal leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Frågor om Plejd
              </h2>
              <div className="mt-4 w-12 h-1 bg-bronze" />
            </div>
            <FaqList items={faq} />
          </div>
        </section>

        <CtaBand
          title="Vill du göra ditt hem smart?"
          text="Berätta vad du har i dag och vad du vill uppnå, så återkommer vi med ett förslag och ett tydligt pris."
          mailSubject="Förfrågan om Plejd"
        />
      </main>
      <Footer />
    </>
  );
}
