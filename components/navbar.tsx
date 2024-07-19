"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
      name: "home",
      path: "/",
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
      className="fixed px-4 lg:px-0 left-0 right-0 top-3 max-w-5xl w-full mx-auto h-14 border-b border-border justify-between flex items-center  text-neutral-700  z-[10000000000]"
    >
      <h1 className="font-bold text-2xl">2(bkm)</h1>
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
                  "capitalize hover:text-neutral-200 duration-300 transition-all",
                  {
                    "text-neutral-200": isActiveRoute,
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
      <div></div>
    </motion.nav>
  );
};

export default Navbar;
