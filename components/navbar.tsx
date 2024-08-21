"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/lib/themeToggle";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 50);

      lastYRef.current = y;
    }
  });

  const routes = [
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
  ];

  return (
    <motion.nav
      animate={isHidden ? "hidden" : "vissible"}
      whileHover="vissible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%",
        },
        vissible: {
          y: "0",
        },
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "fixed px-4 lg:px-0 right-10 left-10 lg:left-0 lg:right-0 top-3 lg:max-w-5xl lg:w-full mx-auto h-14 border-b border-border backdrop-blur bg-background/50 justify-between flex items-center  transition-all duration-200 text-neutral-700  z-20",
        {
          "lg:px-10 border": !isHidden,
        }
      )}
    >
      <Link href="/">
        <h1 className="font-bold lg:text-2xl text-lg">{`2{bkm}`}</h1>
      </Link>
      <ul className="items-center gap-2 hidden lg:flex">
        {routes.map((route, index) => {
          //some code here

          const isActiveRoute = pathname === route.path;

          return (
            <li
              key={route.name}
              className="flex gap-2 text-neutral-500 font-medium"
            >
              <Link
                href={route.path}
                className={cn(
                  "capitalize hover:dark:text-neutral-200 hover:text-neutral-400  duration-300 transition-all",
                  {
                    "dark:text-neutral-200 text-neutral-700": isActiveRoute,
                  }
                )}
              >
                {route.name}
              </Link>
              {routes.length - 1 !== index && <span>/</span>}
            </li>
          );
        })}
      </ul>
      <ModeToggle />
    </motion.nav>
  );
};

export default Navbar;
