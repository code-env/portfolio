import "./globals.css";
import localFont from "next/font/local";

import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar";
import Socials from "@/components/socials";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import LenisLayout from "@/providers/lenis-provider";

export const metadata: Metadata = {
  title: {
    default: "Bossadi Zenith",
    template: " %s | Bossadi Zenith",
  },
  description: "I build things that live on the internet.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LenisLayout>
        <body className="transition-colors duration-300">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <div
              className={cn(
                satoshi.className,
                "py-24 mx-auto max-w-7xl w-full"
              )}
            >
              <Socials />
              <div className="flex w-full mt-32">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </LenisLayout>
    </html>
  );
}
