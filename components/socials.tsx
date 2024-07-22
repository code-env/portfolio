"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Btn from "./btn";

const Socials = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/code-env",
      icon: Github,
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/codeenv",
      icon: Linkedin,
    },

    {
      name: "instagram",
      link: "https://instagram.com/codeenv",
      icon: Instagram,
    },
    {
      name: "email",
      link: "mailto:zenithnoble354@gmail.com",
      icon: Mail,
    },
  ];
  return (
    <div className="fixed w-full left-0 bottom-0 lg:px-20 text-background h-96 z-0 hidden lg:block">
      <div className="relative flex justify-between">
        <div className="space-y-3 flex flex-col justify-end lg:justify-start">
          {socials.map((social) => (
            <Btn key={social.name}>
              <Link href={social.link} target="_blank">
                <social.icon />
              </Link>
            </Btn>
          ))}
        </div>
        <div className="absolute -right-16 top-[40%] rotate-90 ">
          <Link
            href="mailto:zenithnoble354@gmail.com"
            className="text-zinc-500"
          >
            zenithnoble354@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
