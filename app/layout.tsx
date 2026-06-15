import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coreproductions.co.za"),
  title: {
    default: "Core Productions — Live Event Production & Content Creation",
    template: "%s · Core Productions",
  },
  description:
    "Core Productions is South Africa's full-spectrum production partner — world-class live events and full-service content creation from a single team.",
  keywords: [
    "live events",
    "audio visual",
    "lighting",
    "sound engineering",
    "set design",
    "content creation",
    "video production",
    "animation",
    "motion graphics",
    "scene design",
    "corporate content",
    "South Africa",
    "Cape Town",
    "Johannesburg",
  ],
  openGraph: {
    title: "Core Productions — South Africa's full-spectrum production partner",
    description:
      "Live events, video, animation and content creation. Every cue, every cut. Delivered to the same standard.",
    type: "website",
    locale: "en_ZA",
    siteName: "Core Productions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Productions",
    description:
      "South Africa's full-spectrum production partner. Live events and content creation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://coreproductions.co.za/#organization",
  name: "Core Productions",
  url: "https://coreproductions.co.za",
  logo: "https://coreproductions.co.za/logo-stripped.svg",
  description:
    "South Africa's full-spectrum production partner — world-class live events and full-service content creation from a single team.",
  foundingDate: "2014",
  telephone: "+27215516690",
  email: "bernard@coreproductions.co.za",
  areaServed: { "@type": "Country", name: "South Africa" },
  location: [
    {
      "@type": "Place",
      name: "Core Productions Cape Town",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
    },
    {
      "@type": "Place",
      name: "Core Productions Johannesburg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Production Services",
    itemListElement: [
      "Live Event Production",
      "Audio Visual",
      "Lighting Design",
      "Sound Engineering",
      "Set & Stage Design",
      "Simultaneous Interpretation",
      "Live Broadcast & IMAG",
      "Content Creation",
      "Video Production",
      "Animation & Motion Graphics",
      "Scene Design",
      "Content Design & Creation",
      "Storyboarding & Pre-Production",
      "Editing & Post-Production",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain bg-ink-950 font-sans">{children}</body>
    </html>
  );
}
