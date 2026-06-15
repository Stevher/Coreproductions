import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coreproductions.co.za"),
  title: {
    default: "Core Productions — Audio Visual, Lighting & Video Production",
    template: "%s · Core Productions",
  },
  description:
    "Core Productions is a South African audio visual, lighting, sound and video production company. We design and deliver live events, brand films, corporate video and end-to-end production — from concept and storyboard to final edit.",
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
    title: "Core Productions — Audio Visual, Lighting & Video Production",
    description:
      "Live events, brand films and end-to-end video production from a single South African team. Concept, storyboard, shoot, edit, deliver.",
    type: "website",
    locale: "en_ZA",
    siteName: "Core Productions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Productions",
    description:
      "Audio visual, lighting, sound and video production — built around your story.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={inter.variable}>
      <body className="grain bg-ink-950 font-sans">{children}</body>
    </html>
  );
}
