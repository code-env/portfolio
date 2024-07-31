"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const targetWord = "bossadi zenith";

const Text: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentLetters, setCurrentLetters] = useState([
    "A",
    "Z",
    "B",
    "E",
    "G",
    "B",
    "Q",
    " ",
    "K",
    "N",
    "S",
    "M",
    "V",
    "H",
  ]);
  const encryptedText = currentLetters.join("");

  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedLetters = [...currentLetters];
      let shouldStop = true;

      for (let i = 0; i < targetWord.length; i++) {
        if (currentLetters[i] !== targetWord[i]) {
          updatedLetters[i] = String.fromCharCode(
            currentLetters[i].charCodeAt(0) + 1
          );
          shouldStop = false;
        }
      }

      if (shouldStop) {
        clearInterval(timer);
      } else {
        setCurrentLetters(updatedLetters);
      }
    }, 20);

    controls.start({ opacity: 1, x: 0 });

    return () => {
      clearInterval(timer);
    };
  }, [currentLetters, isActive, controls]);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        transition={{ duration: 0.5, opacity: { duration: 0.5 } }}
        className="capitalize text-[80px] font-semibold"
        onMouseEnter={() => setIsActive(true)}
      >
        {`${encryptedText}.`}
      </motion.p>
    </div>
  );
};

export default Text;
