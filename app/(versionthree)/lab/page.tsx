import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lab",
  description: "My playground about things",
};

const Lab = () => {
  return (
    <div className="h-96 flex items-center justify-center w-full ">
      <TextGradient>
        Lab Coming soon... <br />{" "}
        <span className="opacity-0 cursor-default">Not</span>
      </TextGradient>
    </div>
  );
};

export default Lab;
