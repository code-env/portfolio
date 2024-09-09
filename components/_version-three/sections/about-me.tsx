"use client";

import React, { useEffect, useRef } from "react";
import zenith from "@/public/z.jpg";
import Image from "next/image";
import { Play } from "lucide-react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const AboutMe = ({ meText }: { meText: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "Reactjs",
    "Next.js",
    "Node.js",
    "Astro",
  ];

  const words = meText.split(" ");
  const skillsTitle =
    "Here're some of the bad boys I've been working with lately".split(" ");

  const whereIWork =
    "I'm current working at Skaleway as a frontend lead, where I get to manage other frontend developers and optimizing user interfaces for our web applications for our clients for better use case scenario.".split(
      " "
    );
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="h-[150vh]" ref={ref}>
        <div className="sticky md:top-40 lg:top-60 flex gap-10 lg:flex-row flex-col">
          <div className="lg:flex-1 lg:w-1/2 w-80  lg:h-[500px] h-80  relative group z-0 after:absolute after:top-0 after:h-full after:w-full after:border-border after:border after:-z-10 after:rounded-3xl">
            <div className="h-full w-full rounded-3xl rotate-[10deg] overflow-hidden group-hover:rotate-0 z-10 transition-all duration-150 ">
              <Image
                alt="Bossadi Zenith"
                fill
                src={zenith}
                className="object-cover grayscale hover:grayscale-0 rounded-3xl"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 flex-wrap lg:max-w-[50%] w-full">
            <h1 className="text-[20px] flex flex-wrap">
              {words.map((word, index) => {
                const startingPoint = index / words.length;
                const last = 1 / words.length;
                const endingPoint = startingPoint + last;

                return (
                  <Word
                    key={index}
                    word={word}
                    range={[startingPoint, endingPoint]}
                    progress={scrollYProgress}
                  />
                );
              })}
            </h1>
            <h2 className="text-lg flex flex-wrap">
              {whereIWork.map((word, index) => {
                const startingPoint = index / words.length;
                const last = 1 / words.length;
                const endingPoint = startingPoint + last;

                return (
                  <Word
                    key={index}
                    word={word}
                    range={[startingPoint, endingPoint]}
                    progress={scrollYProgress}
                  />
                );
              })}
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                {skillsTitle.map((word, index) => {
                  const startingPoint = index / skillsTitle.length;
                  const last = 1 / skillsTitle.length;
                  const endingPoint = startingPoint + last;

                  return (
                    <Word
                      key={index}
                      word={word}
                      range={[startingPoint, endingPoint]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </p>
              <section className="grid grid-cols-2">
                {skills.map((skill, index) => {
                  const startingPoint = index / skills.length;
                  const last = 1 / skills.length;
                  const endingPoint = startingPoint + last;
                  return (
                    <div key={skill} className="flex items-center gap-2">
                      <Play className="w-2 h-3" />{" "}
                      <Word
                        key={index}
                        word={skill}
                        range={[startingPoint, endingPoint]}
                        progress={scrollYProgress}
                      />
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-screen"></div>
    </div>
  );
};

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 0.8]);

  return (
    <span className="relative mx-1">
      <motion.span style={{ opacity }}>{word}</motion.span>
      <span className="absolute inset-0 opacity-50">{word}</span>
    </span>
  );
};

export default AboutMe;
