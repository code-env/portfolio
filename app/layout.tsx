import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

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
      <body
        className={cn(
          calibre.className,
          "dark:bg-[rgb(22,22,22)] dark:text-white transition-all duration-300  overflow-hidden after:-left-full dark:after:left-0 after:duration-300  after:bg-green-600 font-"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="mode">
            <section className="darkmode" />
          </section>
          <main className="grainy">
            <section className="z-50 max-w-7xl mx-auto px-10">
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
