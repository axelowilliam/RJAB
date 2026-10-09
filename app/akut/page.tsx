import type { Metadata } from "next";
import { Phone, TriangleAlert, Check } from "lucide-react";
import Navbar from "@/components/test/TestNavbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteUrl, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

const title = "Akut elektriker i Skåne | Ring 040-91 91 35";
const description =
  "Akut elfel? Du kan alltid ringa Regmyr & Jansson på 040-91 91 35, även kvällar och helger. Akut elektriker i Malmö och hela Skåne.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Regmyr & Jansson` },
  description,
  alternates: { canonical: "/akut" },
  openGraph: { url: `${siteUrl}/akut`, title, description },
};

const urgent = [
  "Strömmen har gått i hela eller delar av bostaden och det inte är ett allmänt strömavbrott",
  "Jordfelsbrytaren löser ut och går inte att återställa",
  "Det luktar bränt från ett uttag, en strömbrytare eller elcentralen",
  "Uttag eller strömbrytare är varma, missfärgade eller knastrar",
  "Vatten har läckt in i närheten av el eller elcentral",
  "Ett elfel stoppar din verksamhet, kyla eller värme",
];

const steps = [
  {
    title: "Bryt strömmen om det är säkert",
    desc: "Känner du brandlukt eller ser gnistor, slå av huvudbrytaren i elcentralen. Gör det bara om du kan göra det utan risk.",
  },
  {
    title: "Rör inte skadad el",
    desc: "Håll dig borta från trasiga sladdar, uttag och elutrustning som har kommit i kontakt med vatten.",
  },
  {
    title: "Kolla om det är ett större avbrott",
    desc: "Har grannarna också tappat strömmen? Då är det troligen ett fel hos ditt elnätsbolag. Kolla deras avbrottskarta.",
  },
  {
    title: "Ring oss",
    desc: "Berätta vad som har hänt och var du befinner dig, så hjälper vi dig vidare så snabbt vi kan.",
  },
];

export default function AkutPage() {
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "Service",
            name: "Akut elektriker",
            serviceType: "Akuta elarbeten och felsökning",
            description,
            url: `${siteUrl}/akut`,
            provider: { "@id": `${siteUrl}/#business` },
            areaServed: "Skåne",
          },
          breadcrumbJsonLd("Akut", "/akut"),
        ]}
      />
      <Navbar />
      <main id="innehall">
        <PageHeader
          crumb="Akut"
          eyebrow="Akut elektriker · Malmö och Skåne"
          title={
            <>
              Akut elfel?
              <br />
              Ring oss direkt.
            </>
          }
          intro="Vid akuta ärenden kan du alltid ringa oss, även kvällar och helger. Du pratar direkt med en av oss, inte med en växel."
        >
          <a
            href="tel:+4640919135"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-bronze text-white font-body font-600 text-lg px-8 py-5 rounded min-h-[60px] hover:bg-bronze/90 transition-colors"
          >
            <Phone size={22} />
            Ring 040-91 91 35
          </a>
        </PageHeader>

        {/* 112 notice */}
        <section className="bg-white px-5 pt-12 md:pt-16">
          <div className="max-w-6xl mx-auto">
            <div
              role="note"
              className="flex gap-4 items-start border-l-4 border-red-700 bg-red-50 rounded-r-lg p-5 md:p-6"
            >
              <TriangleAlert size={24} className="text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-700 text-charcoal text-lg leading-snug">
                  Brinner det eller är någon skadad? Ring 112 först.
                </p>
                <p className="font-body text-charcoal/80 text-sm mt-1">
                  Vid brand, rökutveckling eller om någon har fått ström i sig ska du
                  alltid ringa 112 innan du kontaktar oss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What counts as urgent */}
        <section className="bg-white py-16 md:py-20 px-5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
                När ska jag ringa?
              </p>
              <h2
                className="font-heading font-700 text-charcoal leading-none mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Vad räknas som akut?
              </h2>
              <div className="w-12 h-1 bg-bronze mb-6" />
              <p className="font-body text-muted text-base">
                Ett akut elfel är något som innebär risk för brand eller personskada,
                eller som gör att bostaden eller verksamheten inte fungerar. Är du
                osäker, ring hellre en gång för mycket.
              </p>
            </div>
            <ul className="space-y-4">
              {urgent.map((u) => (
                <li key={u} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-bronze" />
                  </span>
                  <span className="font-body text-charcoal text-base">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* While you wait */}
        <section className="bg-cream py-16 md:py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
                Medan du väntar
              </p>
              <h2
                className="font-heading font-700 text-charcoal leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Gör så här
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

        {/* What it means */}
        <section className="bg-white py-16 md:py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
              Så fungerar det
            </p>
            <h2
              className="font-heading font-700 text-charcoal leading-none mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Vad innebär akut hjälp?
            </h2>
            <div className="w-12 h-1 bg-bronze mb-6" />
            <div className="space-y-4 font-body text-muted text-base">
              <p>
                När du ringer om ett akut ärende prioriterar vi det före planerade
                jobb. Vi hjälper dig först att bedöma läget i telefon, ibland går det
                att lösa direkt eller göra anläggningen säker tills vi är på plats.
              </p>
              <p>
                Behöver vi åka ut berättar vi när vi kan vara där och vad det kommer
                att kosta innan vi åker. Akuta jobb utanför ordinarie arbetstid kan
                debiteras annorlunda än planerade jobb, och det får du alltid veta i
                förväg.
              </p>
              <p>
                Vi utgår från Malmö och hjälper till i hela Skåne. Är det inget akut
                ärende går det lika bra att höra av sig på vardagar mellan 07:00 och
                17:00.
              </p>
            </div>
          </div>
        </section>

        {/* Final call band */}
        <section className="bg-charcoal py-16 px-5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2
              className="font-heading font-700 text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Akut elfel? Ring oss.
            </h2>
            <a
              href="tel:+4640919135"
              className="inline-flex items-center justify-center gap-3 bg-bronze text-white font-body font-600 text-lg px-8 py-5 rounded min-h-[60px] hover:bg-bronze/90 transition-colors"
            >
              <Phone size={22} />
              040-91 91 35
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
