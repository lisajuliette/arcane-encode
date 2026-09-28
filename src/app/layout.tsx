import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Arcane Encode", template: "%s / Arcane Encode" },
  description: site.description,
  openGraph: {
    title: "Arcane Encode",
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-surface text-ink font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
