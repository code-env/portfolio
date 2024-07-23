import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Me if you want to know more",
};

const About = () => {
  return (
    <div className="h-96 flex items-center justify-center w-full ">
      <TextGradient>
        About Coming soon...
        <br /> <span className="opacity-0 cursor-default">Not</span>
      </TextGradient>
    </div>
  );
};

export default About;
