//const Projects = () => {
//  const [projects, setProjects] = useState(2);
//
//  return (
//    <div className="min-h-fit relative flex flex-col gap-10">
//      <h1 className="text-3xl text-neutral-700 font-bold">Some of my doings</h1>
//      <AnimatePresence>
//        <motion.div className="flex flex-col lg:gap-5 gap-10" layout>
//          {Array.from({ length: projects }).map((_, index) => {
//            //some code here
//            return (
//              <div
//                key={index}
//                className="group flex gap-5 lg:even:flex-row-reverse lg:flex-row flex-col"
//              >
//                <div className="lg:h-96 h-80 lg:flex-[1.2] backdrop-blur relative w-full">
//                  <Image
//                    fill
//                    src="/placeholder-dark.svg"
//                    className="object-cover hidden dark:block"
//                    alt="nothing"
//                  />
//                  <Image
//                    fill
//                    src="/placeholder.svg"
//                    className="object-cover block dark:hidden"
//                    alt="nothing"
//                  />
//                </div>
//                <div className="flex-[0.8] w-full relative">
//                  <div className="lg:absolute relative lg:w-[120%] w-full lg:group-odd:-left-[20%] top-0 bottom-0 my-auto flex flex-col gap-5 h-[70%] left-0 justify-between">
//                    <div className="lg:group-odd:self-end flex flex-col lg:group-odd:text-end">
//                      <p className="text-lg font-semibold text-neutral-700">
//                        Featured Projects
//                      </p>
//                      <h1 className="text-2xl font-semibold text-neutral-400">
//                        Project Name
//                      </h1>
//                    </div>
//                    <div className="bg-muted p-3 lg:shadow-lg">
//                      <p className="line-clamp-3">
//                        Lorem ipsum, dolor sit amet consectetur adipisicing
//                        elit. Officia maxime ipsa blanditiis! Sunt at
//                        repellendus voluptate ipsum soluta, incidunt ab
//                        inventore nostrum sequi, adipisci corrupti esse?
//                        Veritatis consectetur sequi sapiente.
//                      </p>
//                    </div>
//                    <div className="group-odd:self-end flex gap-5">
//                      <Github className="w-6 text-neutral-700 hover:text-neutral-700/75 slowmo cursor-pointer h-6" />
//                      <Share className="w-6 text-neutral-700 hover:text-neutral-700/75 slowmo cursor-pointer h-6" />
//                    </div>
//                  </div>
//                </div>
//              </div>
//            );
//          })}
//        </motion.div>
//        <div className="w-full bg-gradient-to-b absolute bottom-0 left-0 from-transparent to-background via-background h-36" />
//        <div className="absolute bottom-0 left-0 w-fit mx-auto right-0">
//          <button
//            className="relative group  px-10 py-2"
//            onClick={() => setProjects(projects + 1)}
//          >
//            <HoverEffect>Load More</HoverEffect>
//          </button>
//        </div>
//      </AnimatePresence>
//    </div>
//  );
//};
//
//export default Projects;
//

// animating words as scroll

//"use client";
//
//import React, { useEffect, useRef } from "react";
//import zenith from "@/public/z.jpg";
//import Image from "next/image";
//import { Play } from "lucide-react";
//import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
//
//const AboutMe = ({ meText }: { meText: string }) => {
//  const ref = useRef<HTMLDivElement | null>(null);
//
//  const { scrollYProgress } = useScroll({
//    target: ref,
//    offset: ["start start", "end end"],
//  });
//
//  const skills = [
//    "JavaScript",
//    "TypeScript",
//    "Reactjs",
//    "Next.js",
//    "Node.js",
//    "Astro",
//  ];
//
//  const words = meText.split(" ");
//  return (
//    <div className="max-w-6xl w-full mx-auto">
//      <div className="h-[150vh]" ref={ref}>
//        <div className="sticky md:top-40 lg:top-60 flex gap-10">
//          <div className="flex-1 w-1/2  h-[500px]  relative group z-0 after:absolute after:top-0 after:h-full after:w-full after:border-border after:border after:-z-10 after:rounded-3xl">
//            <div className="h-full w-full rounded-3xl rotate-[10deg] overflow-hidden group-hover:rotate-0 z-10 transition-all duration-150 ">
//              <Image
//                alt="Bossadi Zenith"
//                fill
//                src={zenith}
//                className="object-cover grayscale hover:grayscale-0 rounded-3xl"
//              />
//            </div>
//          </div>
//          <div className="flex-1 flex flex-col gap-10 flex-wrap max-w-[50%]">
//            <h1 className="text-[25px] flex flex-wrap">
//              {words.map((word, index) => {
//                const startingPoint = index / words.length;
//                const last = 1 / words.length;
//                const endingPoint = startingPoint + last;
//
//                return (
//                  <Word
//                    key={index}
//                    word={word}
//                    range={[startingPoint, endingPoint]}
//                    progress={scrollYProgress}
//                  />
//                );
//              })}
//            </h1>
//            <div className="flex flex-col gap-5">
//              <p>I&apos;ve been with working with these bad boys lately</p>
//              <section className="grid grid-cols-2">
//                {skills.map((skill) => (
//                  <div key={skill} className="flex items-center gap-2">
//                    <Play className="w-2 h-3" /> <span>{skill}</span>
//                  </div>
//                ))}
//              </section>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="h-screen"></div>
//    </div>
//  );
//};
//
//const Word = ({
//  word,
//  range,
//  progress,
//}: {
//  word: string;
//  range: [number, number];
//  progress: MotionValue<number>;
//}) => {
//  const opacity = useTransform(progress, range, [0, 1]);
//
//  return (
//    <span className="relative mx-1">
//      <motion.span style={{ opacity }}>{word}</motion.span>
//      <span className="absolute inset-0 opacity-50">{word}</span>
//    </span>
//  );
//};
//
//export default AboutMe;
//

//character

//const Word = ({
//  word,
//  range,
//  progress,
//}: {
//  word: string;
//  range: [number, number];
//  progress: MotionValue<number>;
//}) => {
//  const charaters = word.split("");
//  const amount = range[0] - range[1];
//  const step = amount / word.length;
//  return (
//    <span className="mx-1">
//      {charaters.map((character, index) => {
//        const thisOne = step * index;
//        const startingPoint = range[0] + thisOne;
//        const otherOne = step * (index + 1);
//        const endingPoint = range[0] + otherOne;
//        return (
//          <Charater
//            key={index}
//            character={character}
//            range={[startingPoint, endingPoint]}
//            progress={progress}
//          />
//        );
//      })}
//    </span>
//  );
//};
//
//const Charater = ({
//  character,
//  range,
//  progress,
//}: {
//  character: string;
//  range: [number, number];
//  progress: MotionValue<number>;
//}) => {
//  const opacity = useTransform(progress, range, [0, 1]);
//
//  return (
//    <span className="relative">
//      <motion.span style={{ opacity }}>{character}</motion.span>
//      <span className="absolute inset-0 opacity-50">{character}</span>
//    </span>
//  );
//};
//
//export default AboutMe;
//
