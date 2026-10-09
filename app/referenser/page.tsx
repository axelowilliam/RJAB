import type { Metadata } from "next";
import Navbar from "@/components/test/TestNavbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectGrid from "@/components/ProjectGrid";
import GoogleReviewsButton from "@/components/GoogleReviewsButton";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/lib/projects";
import { siteUrl, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

const title = "Referenser | Elarbeten i Skåne";
const description =
  "Se referenser från elarbeten vi utfört i Malmö, Staffanstorp, Vellinge och resten av Skåne. Bilder från jobben och omdömen från våra kunder.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/referenser" },
  openGraph: { url: `${siteUrl}/referenser`, title, description },
};

export default function ReferenserPage() {
  return (
    <>
      <JsonLd graph={[breadcrumbJsonLd("Referenser", "/referenser")]} />
      <Navbar />
      <main id="innehall">
        <PageHeader
          crumb="Referenser"
          eyebrow="Referenser · Malmö och Skåne"
          title="Våra referenser"
          intro="Ett urval av jobb vi utfört för privatpersoner och företag i Skåne. Bilder från jobben och kundernas egna ord om hur det gick."
        />

        <section className="bg-cream py-16 md:py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="sr-only">Utförda jobb</h2>
            <div className="mb-10">
              <GoogleReviewsButton />
            </div>
            <ProjectGrid projects={projects} />
          </div>
        </section>

        <CtaBand
          title="Nästa referens kan vara din"
          text="Berätta vad du behöver hjälp med, så återkommer vi snabbt med ett ärligt svar och ett tydligt pris."
        />
      </main>
      <Footer />
    </>
  );
}
