import { useMemo } from "react";
import ground from "@/public/projects/ground.png";
import notpadd from "@/public/projects/notpadd.png";
import portal from "@/public/projects/portal.png";
import portfolio from "@/public/projects/portfolio.png";
import { Project } from "@/types";

export const userRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "about",
        path: "/about",
      },
      {
        name: "lab",
        path: "/lab",
      },
      {
        name: "writings",
        path: "/writings",
      },
      {
        name: "contact",
        path: "/contact",
      },
    ],
    []
  );

  return routes;
};

export const projects: Project[] = [
  {
    title: "Framer Ground",
    oneLiner: "Copy. Paste. Animate.",
    description:
      "Ground. A simple way to animate components. It is designed to be a distraction-free animation tool that allows you to focus on animating your website components.",
    src: ground,
    codebase: "https://github.com/code-env/framer-ground",
    things: [
      "Framer Motion",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Next.js",
      "ESLint",
      "Prettier",
    ],
    url: "https://ground.bossadizenith.me",
  },

  {
    title: "Notpadd",
    oneLiner: "Write the content not code.",
    description:
      "Notpadd is a simple and easy to use markdown editor. It is designed to be a distraction-free writing tool that allows you to focus on writing. It is a simple and easy to use markdown editor.",
    src: notpadd,
    codebase: "https://github.com/code-env/notpadd",
    things: [
      "Framer Motion",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Next.js",
      "ESLint",
      "Prettier",
    ],
    url: "https://notpadd.bossadizenith.me",
  },
  {
    title: "Portal",
    oneLiner: "Help the needed.",
    description:
      "This is a project that helps the needed. As part of the previous editions of the tic summit, I saw how project managers were stuggling to manage students projects and I decided to build a platform that will help them manage those projects.",
    src: portal,
    codebase: "https://github.com/code-env/ticportal",
    things: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "ESLint",
      "Prettier",
    ],
    url: "https://portal.ticfoundation.org",
  },
  {
    title: "My heart",
    oneLiner: "The one you're on.",
    description: "",
    src: portfolio,
    codebase: "https://github.com/code-env/portfolio",
    things: [
      "Framer motion",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "ESLint",
      "Prettier",
    ],
    url: "https://portal.ticfoundation.org",
  },
];
