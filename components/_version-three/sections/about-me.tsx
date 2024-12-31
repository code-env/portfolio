"use client";

// import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
// import { Play } from "lucide-react";
// import Image from "next/image";
// import { useRef } from "react";

// import zenith from "@/public/z.jpg";
// import Link from "next/link";

// const AboutMe = () => {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const skills = [
//     "JavaScript",
//     "TypeScript",
//     "Reactjs",
//     "Next.js",
//     "Node.js",
//     "Astro",
//   ];

//   const skillsTitle =
//     "Here&apos;re some of the bad boys I&apos;ve been working with lately".split(" ");

//   const whereIWork =
//     "I&apos;m current working at Skaleway as a frontend lead, where I get to manage other frontend developers and optimizing user interfaces for our web applications for our clients for better use case scenario.".split(
//       " "
//     );
//   return (
//     <div className="max-w-6xl w-full mx-auto text-neutral-700 dark:text-neutral-400">
//       <div className="h-[150vh]" ref={ref}>
//         <div className="sticky md:top-40 lg:top-60 flex gap-10 lg:flex-row flex-col">
//           <div className="lg:flex-1 lg:w-1/2 w-80  lg:h-[500px] h-80  relative group z-0 after:absolute after:top-0 after:h-full after:w-full after:border-border after:border after:-z-10 after:rounded-3xl">
//             <div className="h-full w-full rounded-3xl  overflow-hidden group-hover:rotate-0 z-10 transition-all duration-150 ">
//               <Image
//                 alt="Bossadi Zenith"
//                 fill
//                 src={zenith}
//                 className="object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col gap-10 flex-wrap lg:max-w-[50%] w-full">
//             <h1 className="text-[20px] flex flex-wrap ">
//               I&apos;m Bossadi Zenith. A Design and FullStack engineer
//               specialized on Frontend from Cameroon. I&apos;m{" "}
//               {new Date().getFullYear() - 2004} years old. I love building
//               things that live on the internet while focusing on perfomarname
//               and design precision of bringing out pixel perfect designs.
//             </h1>
//             <h2 className="text-lg flex flex-wrap">
//               I&apos;m currently working on{" "}
//               <LinkTo href="/projects/ground">Ground</LinkTo>
//             </h2>
//             <div className="flex flex-col gap-5">
//               <p>
//                 {skillsTitle.map((word, index) => {
//                   const startingPoint = index / skillsTitle.length;
//                   const last = 1 / skillsTitle.length;
//                   const endingPoint = startingPoint + last;

//                   return (
//                     <Word
//                       key={index}
//                       word={word}
//                       range={[startingPoint, endingPoint]}
//                       progress={scrollYProgress}
//                     />
//                   );
//                 })}
//               </p>
//               <section className="grid grid-cols-2">
//                 {skills.map((skill, index) => {
//                   const startingPoint = index / skills.length;
//                   const last = 1 / skills.length;
//                   const endingPoint = startingPoint + last;
//                   return (
//                     <div key={skill} className="flex items-center gap-2">
//                       <Play className="w-2 h-3" />{" "}
//                       <Word
//                         key={index}
//                         word={skill}
//                         range={[startingPoint, endingPoint]}
//                         progress={scrollYProgress}
//                       />
//                     </div>
//                   );
//                 })}
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="lg:h-screen"></div>
//     </div>
//   );
// };

// const Word = ({
//   word,
//   range,
//   progress,
// }: {
//   word: string;
//   range: [number, number];
//   progress: MotionValue<number>;
// }) => {
//   const opacity = useTransform(progress, range, [0, 0.8]);

//   return (
//     <span className="relative mx-1">
//       <motion.span style={{ opacity }}>{word}</motion.span>
//       <span className="absolute inset-0 opacity-50">{word}</span>
//     </span>
//   );
// };

// const LinkTo = ({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <Link href={href} className="hover:saturate-200 ml-1">
//       {children}
//     </Link>
//   );
// };
// export default AboutMe;

import Arrow from "@/components/shared/arrow";
import {
  Content,
  ContentChildren,
  ContentTitle,
} from "@/components/ui/content";
import { cn } from "@/lib/utils";
import zenith from "@/public/z.jpg";
import { Github, Linkedin, X, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const connections = [
  {
    name: "Collaboration",
    link: "mailto:hello@bossadizenith.me",
    icon: Mail,
  },
  {
    name: "Github",
    link: "https://github.com/code-env",
    icon: Github,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/codeenv",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    link: "https://x.com/bossadizenith",
    icon: X,
  },
  {
    name: "Youtube",
    link: "https://youtube.com/@codeenv",
    icon: Youtube,
  },
  {
    name: "Youtube",
    link: "https://youtube.com/@codeenv",
    icon: Youtube,
  },
];
const AboutMe = () => {
  const [hovered, setHovered] = useState(false);
  const [hovIndex, setHovIndex] = useState(-1);

  return (
    <div className="w-full mx-auto text-neutral-700 dark:text-neutral-300 flex flex-col gap-10 text-lg">
      <div className="h-32 w-32 border rounded-md overflow-hidden relative">
        <Image
          src={zenith}
          alt="Bossadi Zenith"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <Content>
        <ContentTitle>About</ContentTitle>
        <ContentChildren>
          <h1>
            I&apos;m Bossadi Zenith. A Frontend engineer and I love building
            things that live on the internet with a design-first and performance
            mindset.
          </h1>
          <h2>
            I&apos;m currently working on{" "}
            <LinkTo href="/projects/ground">Ground</LinkTo>. In the main time,
            I&apos;m working at Skaleway as a frontend lead, where I get to
            manage other frontend developers and optimizing user interfaces for
            our web applications for our clients for better use case scenario.
            And I&apos;m also{" "}
            <span className="dark:text-neutral-200 text-neutral-900 hover:opacity-80 font-semibold">
              open
            </span>{" "}
            for any new role or project that might come my way in the future.
          </h2>
          <h2>
            I recently worked with a YC backed company{" "}
            <LinkTo href="https://withcardlift.com" target="_blank">
              Cardlift
            </LinkTo>{" "}
            on one of their products called{" "}
            <LinkTo href="https://spentfinance.com" target="_blank">
              Spentfinance
            </LinkTo>
            . Where I was in charge of building the dashboard UI of the product.
            Though it&apos;s still under development, I&apos;m proud of the work
            I did there especially with the design and the performance of the
            UI.
          </h2>
          <h2>
            When I&apos;m not on my desk at home or outside, I love being in
            nature, hiking, chilling out with friends and reading books. I also
            love the concept of meeting with new people and share with them what
            I know and learn from them as well. I&apos;m also a big fan of
            music(actually I love freestyling).
          </h2>
        </ContentChildren>
      </Content>
      <Content>
        <ContentTitle>Connect</ContentTitle>
        <ContentChildren className="grid grid-cols-2 gap-4 flex-1">
          {connections.map((connection, index) => (
            <Link
              href={connection.link}
              target="_blank"
              className={cn(
                "bg-white dark:bg-neutral-950 rounded-md p-4 flex items-center justify-between transition-opacity duration-200",
                hovered && hovIndex !== index ? "opacity-50" : "opacity-100"
              )}
              key={index}
              onMouseEnter={() => {
                setHovIndex(index);
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
                setHovIndex(-1);
              }}
            >
              <p className="flex items-center gap-2">
                <connection.icon /> <span>{connection.name}</span>
              </p>
              <Arrow isHovered={hovIndex === index && hovered} angle={-45} />
            </Link>
          ))}
        </ContentChildren>
      </Content>
    </div>
  );
};

interface LinkToProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const LinkTo = ({ href, children, className, ...props }: LinkToProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "hover:saturate-200 border-b ml-1 dark:text-neutral-200 text-neutral-900 hover:opacity-80 font-semibold transition-all duration-150",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AboutMe;
