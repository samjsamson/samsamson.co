import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samsamson.co"),
  title: "Sam Samson",
  description:
    "I build automations, CRM workflows, and GTM systems that turn messy processes into clean, scalable execution.",
  openGraph: {
    title: "Sam Samson",
    description:
      "I build automations, CRM workflows, and GTM systems that turn messy processes into clean, scalable execution.",
    siteName: "Sam Samson",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Samson",
    description:
      "I build automations, CRM workflows, and GTM systems that turn messy processes into clean, scalable execution.",
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
