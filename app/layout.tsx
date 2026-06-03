import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { aboutParagraphs, site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = aboutParagraphs[0];

export const metadata: Metadata = {
  metadataBase: new URL("https://samsamson.co"),
  title: site.name,
  description,
  openGraph: {
    title: site.name,
    description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-zinc-50">{children}</body>
    </html>
  );
}
