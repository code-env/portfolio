import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Writings",
  description: "My writings/perspective about things",
};

const Writings = () => {
  return (
    <div className="h-96 flex items-center justify-center w-full">
      <TextGradient>
        Writings Coming soon... <br />{" "}
        <span className="opacity-0 cursor-default">Not</span>
      </TextGradient>
    </div>
  );
};

export default Writings;
