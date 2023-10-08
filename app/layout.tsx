import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bossadi Zenith",
  description: "Software developer and visual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "dark:bg-[rgb(22,22,22)] dark:text-white transition-all duration-300  overflow-hidden after:-left-full dark:after:left-0 after:duration-300  after:bg-green-600 "
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="mode">
            <section className="darkmode"></section>
          </section>
          <main className="">{children}</main>
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
