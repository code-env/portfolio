import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Feel free to leave me a message",
};

const ContactPage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-10">
      <TextGradient className="text-start" hand>
        Love to hear from you, <br /> Get in touch
      </TextGradient>
    </div>
  );
};

export default ContactPage;
