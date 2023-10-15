import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";

export const metadata: Metadata = {
  title: "Bossadi Zenith",
  description: "Software developer and visual",
};

const calibre = localFont({
  src: [
    {
      path: "./calibre/CalibreLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./calibre/CalibreRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./calibre/CalibreMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./calibre/CalibreSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./calibre/CalibreBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={calibre.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Socials />
          <main className="grainy">
            <section className="z-50 max-w-7xl mx-auto px-10 relative">
              <Navbar />
              {children}
            </section>
          </main>
          {/* <Navigation /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
