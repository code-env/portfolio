"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const targetWord = "bossadi zenith";

const EncryptionScript: React.FC = () => {
  const [currentLetters, setCurrentLetters] = useState([
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    " ",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
  ]);
  const encryptedText = currentLetters.join("");

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
    }, 100); // Adjust the interval speed as needed

    return () => {
      clearInterval(timer);
    };
  }, [currentLetters]);

  return (
    <div>
      <p className="capitalize text-5xl font-black">{encryptedText}</p>
    </div>
  );
};

export default EncryptionScript;
