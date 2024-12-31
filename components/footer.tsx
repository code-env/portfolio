"use client";

import { ModeToggle } from "@/lib/themeToggle";
import { allProjects } from "content-collections";
import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Arrow from "./shared/arrow";
import Logo from "./shared/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredIndex, setIsHoveredIndex] = useState(-1);

  const socials = [
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
      name: "X",
      link: "https://x.com/bossadizenith",
      icon: X,
    },
  ];

  const handleHover = (index: number) => {
    if (index === isHoveredIndex) {
      setIsHovered(true);
    }
  };

  return (
    <footer className="text-background px-4 xl:px-0">
      <div className="justify-between flex flex-col lg:flex-row gap-5 border max-w-5xl mx-auto px-5 text-neutral-700 mb-5">
        <div className="flex-1 flex items-start lg:py-20 p-10 lg:px-0 lg:border-r border-b lg:border-b-0 border-dashed">
          <Logo />
        </div>
        <ul className="flex-1  border-dashed lg:py-20 p-10 lg:px-0  lg:border-r border-b lg:border-b-0 text-lg flex flex-col gap-1 text-neutral-700 dark:text-neutral-400">
          <li className="uppercase dark:text-neutral-700 text-neutral-700/50 font-semibold text-sm mb-2">
            Crafts
          </li>
          {allProjects.map((project, index) => {
            //some code
            return (
              <li key={index}>
                <Link href={`/projects/${project._meta.path}`}>
                  {project.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex-1  border-dashed lg:py-20 p-10 lg:px-0 lg:border-r border-b lg:border-b-0text-lg flex flex-col gap-1 text-neutral-700 dark:text-neutral-400">
          <li className="uppercase dark:text-neutral-700 text-neutral-700/50 font-semibold text-sm mb-2">
            Contact
          </li>
          {socials.map((social, index) => {
            //some code
            return (
              <li key={index}>
                <Link
                  href={social.link}
                  target="_blank"
                  key={index}
                  className="flex items-center gap-2"
                  onMouseEnter={() => {
                    setIsHoveredIndex(index);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>{social.name}</span>

                  <Arrow
                    isHovered={isHoveredIndex === index && isHovered}
                    angle={-45}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex-1 lg:py-20 p-10 lg:px-0 flex flex-col gap-3 text-neutral-700 dark:text-neutral-400">
          <ModeToggle />
          <p>
            <span>&copy;</span> <span>{currentYear}</span>{" "}
            <span>Bossadi Zenith all rights reserved.</span>
          </p>
          <span className="text-xs mt-2">
            Made with 🩶 while chiling from localhost.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
