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
    default: "Core Productions — Audio Visual, Lighting & Video Production",
    template: "%s · Core Productions",
  },
  description:
    "Core Productions is South Africa's full-spectrum production partner — world-class live events and brand film production from a single team.",
  keywords: [
    "audio visual",
    "video production",
    "videography",
    "storyboarding",
    "video editing",
    "lighting",
    "sound",
    "live events",
    "corporate video",
    "South Africa",
    "Cape Town",
  ],
  openGraph: {
    title: "Core Productions — South Africa's full-spectrum production partner",
    description:
      "Live events, brand films and end-to-end video production. Every cue, every cut. Delivered to the same standard.",
    type: "website",
    locale: "en_ZA",
    siteName: "Core Productions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Productions",
    description:
      "South Africa's full-spectrum production partner. Live events and brand film.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="grain bg-ink-950 font-sans">{children}</body>
    </html>
  );
}
