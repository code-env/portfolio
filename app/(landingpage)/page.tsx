// import { ModeToggle } from "@/lib/themeToggle";

import About from "@/components/tabs/about";
import CoolProjects from "@/components/tabs/cool-projects";
import GetInTouch from "@/components/tabs/getintouch";
import Hero from "@/components/tabs/hero";
import OtherProjects from "@/components/tabs/other-projectst";

export default function Home() {
  return (
    <section className="z-50 min-h-screen flex flex-col gap-9 text-background">
      <Hero />
      <About />
      <CoolProjects />
      <OtherProjects />
      <GetInTouch />
    </section>
  );
}
