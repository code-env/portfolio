import AboutMe from "@/components/_version-three/sections/about-me";
import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me if you want to know more",
};

const About = () => {
  const currentYear = new Date().getFullYear();

  const bornDate = 2004;
  const age = currentYear - bornDate;

  return (
    <div className="min-h-screen w-full py-32 md:py-40 lg:py-60 lg:px-0 px-5 z-0 relative overflow-clip">
      <AboutMe />
    </div>
  );
};

export default About;
