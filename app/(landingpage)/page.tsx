// import { ModeToggle } from "@/lib/themeToggle";

import About from "@/components/tabs/about";
import Hero from "@/components/tabs/hero";

export default function Home() {
  return (
    <section className="z-50 min-h-screen flex flex-col gap-9">
      <Hero />
      <About />
    </section>
  );
}
