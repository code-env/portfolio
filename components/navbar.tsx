"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 50);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
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
      className="fixed left-0 right-0 top-3 max-w-5xl w-full mx-auto h-20 rounded-xl flex px-8 items-center  bg-zinc-500 z-[10000000000]"
    >
      Navbar
    </motion.div>
  );
};

export default Navbar;
