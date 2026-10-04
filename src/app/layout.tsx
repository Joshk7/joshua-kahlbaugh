import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
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

export const metadata: Metadata = {
  title: "Joshua Kahlbaugh",
  description:
    "Personal website for Joshua Kahlbaugh — software engineer in Liberty Lake, WA. About, hobbies, experience, and contact.",
  icons: {
    icon: "/favicon.svg",
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
