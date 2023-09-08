"use client";

import { userRoutes } from "@/constants/indext";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const routes = userRoutes();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const { setTheme, theme } = useTheme();
  // Function to update button sizes
  const handleMouseEnter = (index: string) => {
    setHoveredButton(index);
  };

  // Function to reset button sizes
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const changeTheme = (name: string) => {
    if (name !== "Theme") return;
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <footer className="fixed left-1/2 transform -translate-x-1/2 dark:bg-zinc-900 bg-clip-padding  bg-zinc-300 backdrop-filter backdrop-blur-3xl bg-opacity-60 backdrop-saturate-200 backdrop-contrast-100 bottom-8  p-2 flex gap-1 hover:scale-110 slowmo h-[64px] rounded-full">
      {routes.map((sections, i) => (
        <section className="flex items-end gap-2" key={i}>
          {sections.map((section, index) => (
            <button
              key={section.name}
              className={`text-white text-2xl font-bold  transition- slowmo dark:bg-zinc-900/90 flex items-center bg-slate-50 justify-center rounded-full`}
              style={{
                width: hoveredButton === section.name ? "70px" : "48px",
                height: hoveredButton === section.name ? "70px" : "48px",
              }}
              onMouseEnter={() => handleMouseEnter(section.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => changeTheme(section.name)}
            >
              <section.icon />
            </button>
          ))}
          {/* <button></button> */}
        </section>
      ))}
    </footer>
  );
};

export default Navigation;