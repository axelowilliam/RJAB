import type { Metadata } from "next";
import Navbar from "@/components/test/TestNavbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteUrl, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

const title = "Tillgänglighetsredogörelse";
const description =
  "Så arbetar Regmyr & Jansson med tillgänglighet på regmyrjansson.se, vilka delar som kan vara svåra att använda och hur du kontaktar oss om något inte fungerar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tillganglighet" },
  openGraph: { url: `${siteUrl}/tillganglighet`, title, description },
};

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2
        className="font-heading font-700 text-charcoal leading-tight mb-4"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        {heading}
      </h2>
      <div className="space-y-4 font-body text-muted text-base">{children}</div>
    </section>
  );
}

export default function TillganglighetPage() {
  return (
    <>
      <JsonLd graph={[breadcrumbJsonLd("Tillgänglighet", "/tillganglighet")]} />
      <Navbar />
      <main id="innehall">
        <PageHeader
          crumb="Tillgänglighet"
          eyebrow="Tillgänglighet"
          title={"Tillgänglighets­redogörelse"}
          intro="Vi vill att alla ska kunna använda vår webbplats, oavsett hur du surfar eller vilka hjälpmedel du använder. Här berättar vi hur vi arbetar med det."
        />

        <div className="bg-white py-16 md:py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <Block heading="Hur tillgänglig är webbplatsen?">
              <p>
                Webbplatsen regmyrjansson.se drivs av Regmyr &amp; Jansson AB. Vi
                strävar efter att den ska uppfylla nivå AA i riktlinjerna WCAG 2.2,
                som är den nivå EU:s tillgänglighetsstandard EN 301 549 bygger på.
              </p>
              <p>Det innebär bland annat att:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>hela webbplatsen går att använda med enbart tangentbord</li>
                <li>
                  det finns en länk för att hoppa direkt till innehållet, och tydliga
                  fokusmarkeringar
                </li>
                <li>text och knappar har tillräcklig kontrast mot bakgrunden</li>
                <li>bilder har textalternativ som läses upp av skärmläsare</li>
                <li>
                  sidan fungerar när du förstorar texten eller zoomar in, och på
                  mobil, surfplatta och dator
                </li>
                <li>
                  animationer och mjuk scrollning stängs av om du har valt minskad
                  rörelse i din enhet
                </li>
              </ul>
            </Block>

            <Block heading="Kända brister">
              <p>
                Vi känner till följande delar som kan vara svårare att använda:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Bilderna från våra jobb har korta textalternativ som beskriver
                  vilket jobb det gäller, men inte alla detaljer i bilden.
                </li>
                <li>
                  Länken till våra recensioner går till Google, som vi inte kan
                  påverka tillgängligheten hos. Detsamma gäller våra sidor på
                  LinkedIn och Facebook.
                </li>
              </ul>
            </Block>

            <Block heading="Om något inte fungerar">
              <p>
                Upplever du att något på webbplatsen är svårt att använda, eller
                behöver du informationen i ett annat format? Hör av dig så hjälper
                vi dig och ser över problemet.
              </p>
              <ul className="space-y-2">
                <li>
                  Ring{" "}
                  <a
                    href="tel:+4640919135"
                    className="text-charcoal underline underline-offset-2 hover:text-bronze"
                  >
                    040-91 91 35
                  </a>
                </li>
                <li>
                  Mejla{" "}
                  <a
                    href="mailto:info@regmyrjansson.se?subject=Tillgänglighet på webbplatsen"
                    className="text-charcoal underline underline-offset-2 hover:text-bronze"
                  >
                    info@regmyrjansson.se
                  </a>
                </li>
              </ul>
            </Block>

            <Block heading="Hur vi har testat webbplatsen">
              <p>
                Vi har själva granskat webbplatsen mot WCAG 2.2 nivå AA. Granskningen
                omfattade kontrastmätning, test med tangentbord, kontroll av
                rubrikstruktur och textalternativ, samt test på mobil och dator.
              </p>
              <p>
                Redogörelsen upprättades i oktober 2026 och uppdaterades senast i
                oktober 2026.
              </p>
            </Block>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
