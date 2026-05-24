import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://regmyrjansson.se";

export const metadata: Metadata = {
  title: {
    default: "Auktoriserad elektriker i Skåne | Regmyr & Jansson",
    template: "%s | Regmyr & Jansson El AB",
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
    siteName: "Regmyr & Jansson El AB",
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
      name: "Regmyr & Jansson El AB",
      url: siteUrl,
      telephone: "+46704128391",
      email: "info@regmyrjansson.se",
      priceRange: "850 kr/h",
      image: `${siteUrl}/logo.svg`,
      address: {
        "@type": "PostalAddress",
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
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Regmyr & Jansson El AB",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+46704128391",
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
    <html lang="sv" className={`${spaceGrotesk.variable} ${inter.variable}`}>
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
