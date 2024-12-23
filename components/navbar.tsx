"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Logo from "./shared/logo";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const presence = {
    enter: {
      opacity: 0,
      scale: 0.9,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.1,
      },
    },
  };

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

  const handleMobileToogle = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <header className="hidden lg:flex">
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
            "fixed px-4 lg:px-0 right-10 left-10 lg:left-0 lg:right-0 top-3 lg:max-w-5xl lg:w-full mx-auto h-14 border-b border-border backdrop-blur bg-background/50 justify-between items-center flex transition-all duration-200 text-neutral-700  z-20",
            {
              "lg:px-10 border": !isHidden,
            }
          )}
        >
          <Logo />
          <ul className="items-center gap-2 hidden lg:flex">
            {routes.map((route, index) => {
              //some code here

              const isActiveRoute =
                pathname === route.path || pathname.includes(route.path);

              return (
                <li
                  key={route.name}
                  className="flex gap-2 text-neutral-500 font-medium"
                >
                  <Link
                    href={route.path}
                    className={cn(
                      "capitalize hover:dark:text-neutral-200 hover:text-neutral-400  duration-300 transition-all relative",
                      {
                        "dark:text-neutral-200 text-neutral-700 font-bold ":
                          isActiveRoute,
                      }
                    )}
                  >
                    {route.name}
                    {isActiveRoute && (
                      <motion.span
                        layoutId="active-route-indicator"
                        className="absolute w-1 h-1 dark:bg-neutral-200 bg-neutral-700 left-0 right-0 mx-auto rounded-full -bottom-2"
                      />
                    )}
                  </Link>
                  {routes.length - 1 !== index && <span>/</span>}
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </header>
      <header className="lg:hidden">
        <motion.nav
          animate={isHidden ? "hidden" : "vissible"}
          whileHover="vissible"
          onFocusCapture={() => setIsHidden(false)}
          variants={{
            hidden: {
              y: "-100%",
              height: isMobileMenuOpen ? 250 : 56,
              transition: {
                duration: 0.2,
              },
            },
            vissible: {
              y: "0",
              height: isMobileMenuOpen ? 250 : 56,
              transition: {
                duration: 0.2,
              },
            },
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed px-4 lg:px-0 right-10 left-10 lg:left-0 lg:right-0 top-3 lg:max-w-5xl lg:w-full mx-auto border-b border-border backdrop-blur bg-background/50 justify-between items-start flex flex-col transition-all duration-200 text-neutral-700  z-20 ",
            {
              "lg:px-10 border": !isHidden,
            }
          )}
        >
          <div
            style={{
              height: 56,
            }}
            className="!h-14 fixed left-0  w-full flex items-center justify-between  px-4"
          >
            <Logo />
            <div
              className="w-8 h-8  flex flex-col items-center justify-center gap-2 cursor-pointer"
              onClick={handleMobileToogle}
            >
              {Array.from({ length: 2 }).map((_, index) => {
                //
                const rotateAngle = index % 2 === 0 ? 45 : -45;
                const changeY = index % 2 === 0 ? 5.5 : -5.5;

                return (
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? rotateAngle : 0,
                      y: isMobileMenuOpen ? changeY : 0,
                    }}
                    key={index}
                    className="w-8 !h-1 bg-neutral-700 dark:bg-neutral-400"
                  />
                );
              })}
            </div>
          </div>
          <AnimatePresence onExitComplete={() => setIsMobileMenuOpen(false)}>
            {isMobileMenuOpen && (
              <motion.ul
                initial="enter"
                animate="center"
                exit="exit"
                variants={presence}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 py-20"
              >
                {routes.map((route, index) => {
                  //some code here

                  const isActiveRoute = pathname === route.path;

                  return (
                    <motion.li key={index} variants={itemVariants}>
                      <Link
                        href={route.path}
                        className={cn(
                          "capitalize  duration-300 transition-all relative",
                          {
                            "text-neutral-700 font-bold": isActiveRoute,
                          }
                        )}
                      >
                        {route.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
