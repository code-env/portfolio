"use client";

import { siteConfig } from "@/config/site";
import { projects } from "@/constants";
import { Project } from "@/types";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import TextGradient from "../text-gradient";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="wrapper mt-20 relative">
      <div className="flex flex-col justify-start items-start lg:translate-y-20">
        <TextGradient className="lg:text-xl 2xl:text-2xl text-lg font-medium relative">
          Some of my doings <br />{" "}
          <span className="opacity-0 cursor-default pointer-events-none absolute">
            Not
          </span>
        </TextGradient>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-neutral-300 text-neutral-800">
          Featured Projects
        </h2>
      </div>
      <div
        ref={container}
        className="flex flex-col gap-5 md:gap-10 lg:gap-14 overflow-x-clip"
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              index={i}
          project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CardProps {
  progress: MotionValue;
  range: [number, number];
  targetScale: number;
  project: Project
  index: number
}

const Card = ({ progress, range, targetScale, project, index }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 group"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={
          "flex flex-col relative -top-[10%] w-full overflow-hidden dark:bg-neutral-950 bg-white min-h-[750px] border-2 border-neutral-500/20 px-5 pt-20 gap-5"
        }
      >
        <h1 className="font-semibold text-base dark:text-neutral-600 text-neutral-400">{project.title}</h1>
        <p className="">{project.description}</p>
        <div className="flex flex-1 group-odd:flex-row-reverse gap-10">
          <div className="flex-1 ">nothing for now</div>
          <div className="flex-[2] h-full bg-background">
            <div className="overflow-hidden h-full w-full p-10">
              <motion.div
                style={{
                  scale: imageScale
                }}
              >
                <Image src={project.src} alt={`${siteConfig.name} ${project.title}`}
                  placeholder="blur"
                  className="object-contain grayscale hover:grayscale-0" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
