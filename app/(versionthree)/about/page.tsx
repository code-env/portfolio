import AboutMe from "@/components/_version-three/sections/about-me";
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
    <div className="max-w-3xl mx-auto min-h-screen py-40">
      <AboutMe />
    </div>
  );
};

export default About;
