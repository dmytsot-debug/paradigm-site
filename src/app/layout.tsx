import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // Home title kept tight (53 chars) and brand-first so it survives SERP truncation.
    default: `${SITE.shortName} · Plumbing, Gas & Drains · Metro Vancouver`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  keywords: [
    "plumber Vancouver",
    "plumber Coquitlam",
    "gas fitter Vancouver",
    "drain cleaning Burnaby",
    "emergency plumber",
    "water heater installation",
    "Metro Vancouver plumbing",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.shortName,
    url: SITE.url,
    title: `${SITE.shortName}: reliable plumbing, drain & gas in Metro Vancouver`,
    description: SITE.description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.shortName,
    description: SITE.description,
  },
  // NOTE: no global canonical. Each page declares its own via
  // alternates.canonical in its own metadata. A global canonical pointing
  // to "/" makes Google treat every subpage as a home-page duplicate and
  // drops them from the index.
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#08172e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      {/*
        Analytics: drop a Plausible or GA4 snippet here when ready.
        e.g. <Script src="https://plausible.io/js/script.js" data-domain="paradigmservices.ca" />
      */}
      <body className="min-h-dvh flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-brand-blue-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
