import React from "react";
import HeaderText from "../header-text";
import Image from "next/image";
import { Play } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Reactjs",
    "Next.js",
    "Node.js",
    "Astro",
  ];
  return (
    <section className="h-fit text-background flex flex-col gap-8 relative">
      <HeaderText number="01" h1="About me" />
      <section className="flex gap-20 relative text-xl text-zinc-700">
        <section className="flex-1 relative flex flex-col gap-4">
          <p className="">
            Hello! I&apos;m Zenith but others call me ( The!nvestor, code-env,
            zenith-noble ) and I enjoy building things that live on the
            internet. My interest in web development started back in 2020 when I
            decided to build a website for our project SSAMS ( School Security
            and Attendance Management System ) to go in for a
            competition/hackathon (TiC summit 2021). I guess that&apos;s was my
            spark into the development world till date.
          </p>
          <section>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <section className="grid grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Play className="w-2 h-3" /> <span>{skill}</span>
                </div>
              ))}
            </section>
          </section>
        </section>
        <section className="flex-[0.8] relative">
          <Image
            src="/img.jpg"
            alt="myself codeing"
            width={400}
            height={400}
            className="h-[400px] w-[400px] relative rounded-2xl grayscale slowmo hover:grayscale-0 object-cover bg-zinc-500  "
          />
          <section />
        </section>
      </section>
    </section>
  );
};

export default About;
