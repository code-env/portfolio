"use client";

import React, { ReactNode } from "react";
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
    <section className="fixed w-full left-0 bottom-0 px-20 text-background flex justify-between h-96 z-0">
      <section className="space-y-3 flex flex-col">
        {socials.map((social) => (
          <Btn>
            <Link href={social.link} target="_blank">
              <social.icon />
            </Link>
          </Btn>
        ))}
      </section>
      <section className="rotate-90">
        <Link href="mailto:zenithnoble354@gmail.com">
          zenithnoble354@gmail.com
        </Link>
      </section>
    </section>
  );
};

export default Socials;
