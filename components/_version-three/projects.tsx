"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverEffect from "../hover-effect";

const Projects = () => {
  const [projects, setProjects] = useState(6);

  return (
    <div className="min-h-fit relative flex flex-col gap-10">
      <h1 className="text-3xl text-neutral-700 font-bold">Some of my doings</h1>
      <AnimatePresence>
        <motion.div className="grid grid-cols-3 gap-5">
          {Array.from({ length: projects }).map((_, index) => {
            //some code here
            return (
              <div
                key={index}
                className="bg-background/50 backdrop-blur border border-border/50 p-3"
              >
                <div className="h-80" />
              </div>
            );
          })}
        </motion.div>
        <div className="w-full bg-gradient-to-b absolute bottom-0 left-0 from-transparent to-background h-36" />
        <div className="absolute bottom-0 left-0 w-fit mx-auto right-0">
          <button
            className="relative group  px-10 py-2"
            onClick={() => setProjects(projects + 6)}
          >
            <HoverEffect>Load More</HoverEffect>
          </button>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
