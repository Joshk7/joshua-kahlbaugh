import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { person, site } from "@/data/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const description =
  "Personal website for Joshua Kahlbaugh, software engineer in Spokane Valley, WA. About, hobbies, experience, and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: person.name,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: person.name,
    title: `${person.name} · ${person.title}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} · ${person.title}`,
    description,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-ink">
        <a
          href="#about"
          className="absolute left-4 top-[-4rem] z-50 rounded-[0.35rem] bg-lake px-4 py-2.5 text-white focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
