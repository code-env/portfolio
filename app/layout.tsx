import { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import LenisLayout from "@/providers/lenis-provider";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/providers/toast";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: ` %s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Portofio",
    "Interactive",
    "Frontend Developer",
    "developer in africa",
    "React",
    "Tailwind CSS",
    "Framer motion",
    "Animation",
    "Bossadi",
    "Zenith",
    "Nothing",
  ],
  creator: "Bossadi Zenith",
  authors: [
    {
      name: "bossadizenith",
      url: "https://bossadizenith.me",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bossadizenith",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Light.otf",
      weight: "100",
    },
    {
      path: "../fonts/Satoshi-Regular.otf",
      weight: "300",
    },
    {
      path: "../fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../fonts/Satoshi-Black.otf",
      weight: "900",
    },
  ],
});

const trackingUrl = process.env.NEXT_PUBLIC_TRACKING_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LenisLayout>
        <body className="transition-colors duration-300 antialiased ">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <Navbar />
            <div className={cn(satoshi.className, "w-full")}>
              <div className="flex w-full">
                {children}
                <Analytics />
                <Script
                  defer
                  data-domain="bossadizenith.me"
                  src={trackingUrl}
                />
              </div>
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </LenisLayout>
    </html>
  );
}
