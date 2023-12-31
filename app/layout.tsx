import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";
import Footer from "@/components/footer";
import Wrapper from "@/providers/wrapper";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <div className={calibre.className}>
            <Socials />
            <div className="absolute top-0 z-[-2] h-screen w-full bg-background bg-[radial-gradient(ellipse_70%_70%_at_10%_10%,rgba(161,161,170,0.3),rgba(255,255,255,0))]" />
            <div className="z-50 max-w-7xl mx-auto px-10 relative">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
