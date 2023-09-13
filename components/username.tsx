"use client";
import React, { useEffect, useState } from "react";

const targetName = "bossadi zenith"; // Your target name

const Username: React.FC = () => {
  const [progress, setProgress] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextChar = targetName[prevProgress.length];
        if (nextChar) {
          return [...prevProgress, nextChar];
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 100);
  }, []);

  return (
    <div>
      <p className="font-extrabold text-3xl capitalize">{progress.join("")}</p>
    </div>
  );
};

export default Username;
