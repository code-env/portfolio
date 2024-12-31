"use client";

import { Project } from "content-collections";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import Arrow from "@/components/shared/arrow";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import TextGradient from "../text-gradient";

interface ProjectsProps {
  projects: Project[];
  remaining?: boolean;
  take?: number;
  showAll?: boolean;
  length: number;
}

const Projects = ({
  projects,
  remaining,
  take,
  showAll,
  length,
}: ProjectsProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const allProjects = showAll ? projects : projects.slice(0, take);

  const remainingProject = length - Number(take);

  return (
    <div className="max-w-5xl mx-auto mt-20 relative">
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
      <div ref={container} className="overflow-x-clip">
        {allProjects.map((project, i) => {
          const targetScale = 1 - (allProjects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              projectLength={projects.length}
              remainingProject={remainingProject}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  progress: MotionValue;
  range: [number, number];
  targetScale: number;
  project: Project;
  index: number;
  remainingProject: number;
  projectLength: number;
}

const ProjectCard = ({
  progress,
  range,
  targetScale,
  project,
  index,
  remainingProject,
  projectLength,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [allHovered, setAllHovered] = useState(false);
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
      className="h-screen flex items-center justify-center sticky top-0 group flex-col"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={
          "flex flex-col relative -top-[10%] w-full overflow-hidden dark:bg-neutral-950 bg-white lg:min-h-[687px] min-h-fit border-2 border-neutral-500/20 px-10 pt-20 gap-10"
        }
      >
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-base dark:text-neutral-600 text-neutral-400">
            {project.title}
          </h1>
          <p className="lg:text-5xl text-3xl font-semibold">
            {project.oneLiner}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col flex-1 lg:group-even:flex-row-reverse group-even:flex-col  gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-lg font-medium">Things used for the</p>

            <ul className="grid grid-cols-2 gap-3">
              {project.tags.map((thing, i) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  key={`t_${i}`}
                  className="flex items-center gap-1 text-neutral-700 dark:text-neutral-400"
                >
                  <Play className="w-2 h-3" />
                  <span>{thing}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <Link
                href={project.githubUrl ?? ""}
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                  className: "min-w-[40px]",
                })}
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={project.deployedUrl ?? ""}
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                  className: "min-w-[40px]",
                })}
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <Link
              href={project.url}
              className={buttonVariants({
                variant: "outline",
                className: "flex items-center gap-2",
              })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Learn more</span>
              <Arrow isHovered={isHovered} />
            </Link>
          </div>
          <div className="flex-[2] h-full bg-background rounded-t-lg border border-b-0">
            <div className="overflow-hidden flex items-center justify-center w-full p-10 lg:h-[493.176px] h-fit">
              <motion.div
                style={{
                  scale: imageScale,
                }}
                className="relative"
              >
                <Image
                  src={project.image?.url ?? ""}
                  blurDataURL={project.image?.blurDataURL}
                  alt={`${siteConfig.name} ${project.title}`}
                  width={600}
                  height={500}
                  placeholder="blur"
                  className="grayscale hover:grayscale-0 rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      {projectLength - 1 === index && remainingProject > 0 && (
        <div className="absolute bottom-28">
          <Link
            href={project.url}
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center gap-2",
            })}
            onMouseEnter={() => setAllHovered(true)}
            onMouseLeave={() => setAllHovered(false)}
          >
            <span>View {remainingProject} project(s)</span>
            <Arrow isHovered={allHovered} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
