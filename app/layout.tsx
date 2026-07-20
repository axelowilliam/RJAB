import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://regmyrjansson.se";

export const metadata: Metadata = {
  title: {
    default: "Auktoriserad elektriker i Skåne | Regmyr & Jansson",
    template: "%s | Regmyr & Jansson AB",
  },
  description:
    "Certifierade och behöriga elinstallatörer i Skåne. Elinstallation, felsökning, laddstolpe och belysning. Ring direkt, inga mellanhänder, inga överraskningar.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: "Regmyr & Jansson AB",
    title: "Auktoriserad elektriker i Skåne | Regmyr & Jansson",
    description:
      "Certifierade och behöriga elinstallatörer i Skåne. Elinstallation, felsökning, laddstolpe och belysning. Ring direkt, inga mellanhänder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auktoriserad elektriker i Skåne | Regmyr & Jansson",
    description:
      "Certifierade och behöriga elinstallatörer i Skåne. Elinstallation, felsökning, laddstolpe och belysning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Electrician",
      "@id": `${siteUrl}/#business`,
      name: "Regmyr & Jansson AB",
      url: siteUrl,
      telephone: "+4640919135",
      email: "info@regmyrjansson.se",
      image: `${siteUrl}/logo.svg`,
      taxID: "559575-0174",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Flaggskeppsgatan 4",
        postalCode: "211 14",
        addressLocality: "Malmö",
        addressRegion: "Skåne",
        addressCountry: "SE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.375,
        longitude: 13.157,
      },
      areaServed: [
        "Skåne",
        "Malmö",
        "Lund",
        "Trelleborg",
        "Vellinge",
        "Höllviken",
        "Skanör",
        "Falsterbo",
        "Ystad",
        "Staffanstorp",
        "Helsingborg",
        "Kristianstad",
        "Hässleholm",
        "Landskrona",
        "Eslöv",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Är Regmyr & Jansson behöriga elinstallatörer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vi är certifierade och behöriga elinstallatörer och arbetar enligt elsäkerhetslagen. Vi ansvarar juridiskt för att allt arbete är rätt utfört.",
          },
        },
        {
          "@type": "Question",
          name: "Vilka områden i Skåne jobbar ni i?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vi utför elarbeten i hela Skåne. Primärt jobbar vi i Trelleborg, Malmö, Vellinge, Höllviken, Skanör, Falsterbo, Ystad, Staffanstorp och Lund.",
          },
        },
        {
          "@type": "Question",
          name: "Vad kostar en elektriker i Skåne?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vi föredrar fastpris framför löpande räkning — det är tydligare för dig och oss. Kontakta oss för en kostnadsfri offert.",
          },
        },
        {
          "@type": "Question",
          name: "Utför ni elinstallation i villor och lägenheter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vi installerar el i villor, lägenheter och lokaler — från grunden eller som komplettering till befintlig anläggning.",
          },
        },
        {
          "@type": "Question",
          name: "Installerar ni laddstolpar och laddboxar för elbil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vi installerar laddboxar för elbil i villor och fastigheter i Skåne. Kontakta oss för offert.",
          },
        },
        {
          "@type": "Question",
          name: "Kan jag prata direkt med elektrikern?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, när du ringer Regmyr & Jansson pratar du direkt med Alexander eller Vilmer — ingen bokningscentral eller mellanhänder.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Regmyr & Jansson AB",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+4640919135",
        email: "info@regmyrjansson.se",
        contactType: "customer service",
        availableLanguage: "Swedish",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="font-body antialiased bg-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
