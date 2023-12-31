"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./shared/logo";

const Navbar = () => {
  const navList = ["about", "blog", "work", "contact"];

  const [bgColor, setBgColor] = useState(false);

  function changeBg() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }

  return (
    <header
      className={cn(
        "h-20 flex text-background duration-300 fixed top-0 left-0 w-full justify-between px-20 items-center z-[999]",
        bgColor && " backdrop-blur-lg"
      )}
    >
      <Logo />
      <nav>
        <ul className="flex items-center gap-4 relative antialiased">
          {navList.map((list, index) => (
            <li key={list} className="capitalize flex items-center gap-2">
              <Link href="#" className="flex items-center gap-2">
                <span className="text-base">0{index + 1}.</span>
                <span className="capitalize">{list}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
