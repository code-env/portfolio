import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Bossadi Zenith",
  description: "I build things that live on the internet.",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className={calibre.className}>
            <Socials />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
