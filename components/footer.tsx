"use client";

import { ArrowUpRight, Github, Linkedin, X } from "lucide-react";
import Logo from "./shared/logo";
import { projects } from "@/constants";
import { ModeToggle } from "@/lib/themeToggle";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="text-background px-10 xl:px-0">
      <div className="justify-between flex flex-col lg:flex-row gap-5 border lg:wrapper text-neutral-700 mb-5">
        <div className="flex-1 flex items-start py-20 lg:border-r border-b lg:border-b-0 border-dashed">
          <Logo />
        </div>
        <ul className="flex-1  border-dashed py-20 lg:border-r border-b lg:border-b-0  dark:border-neutral-700/30 border-neutral-300/90 text-lg flex flex-col gap-1 text-neutral-700 dark:text-neutral-400">
          <li className="uppercase dark:text-neutral-700 text-neutral-700/50 font-semibold text-sm mb-2">
            Projects
          </li>
          {projects.map((social, index) => {
            //some code

            return <li key={index}>{social.title}</li>;
          })}
        </ul>
        <ul className="flex-1  border-dashed py-20 lg:border-r border-b lg:border-b-0 dark:border-neutral-700/30 border-neutral-300/90 text-lg flex flex-col gap-1 text-neutral-700 dark:text-neutral-400">
          <li className="uppercase dark:text-neutral-700 text-neutral-700/50 font-semibold text-sm mb-2">
            Contact
          </li>
          {socials.map((social, index) => {
            //some code
            return (
              <li key={index}>
                {" "}
                <Link
                  href={social.link}
                  target="_blank"
                  key={index}
                  className="flex items-center gap-2"
                >
                  <span>{social.name}</span>
                  <span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex-1 py-20 flex flex-col gap-3 text-neutral-700 dark:text-neutral-400">
          <ModeToggle />
          <p>
            <span>&copy;</span> <span>{currentYear}</span>{" "}
            <span>Bossadi zenith all rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
