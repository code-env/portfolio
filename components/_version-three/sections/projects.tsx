"use client";

import { projects } from "@/constants";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
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
      <div className="flex flex-col justify-start items-start gap-2 absolute top-20">
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
              i={i}
              {...project}
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
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          "flex flex-col relative -top-[10%] h-[500px] w-[90%] overflow-hidden rounded-3xl dark:bg-[#333] bg-[#999]"
        )}
      >
        <motion.div
          className="overflow-hidden h-full w-full"
          style={{ scale: imageScale }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
