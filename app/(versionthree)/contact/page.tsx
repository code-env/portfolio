import ContactForm from "@/components/_version-three/forms/contact";
import TextGradient from "@/components/_version-three/text-gradient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Feel free to leave me a message",
};

const ContactPage = () => {
  return (
    <div className="lg:wrapper min-h-screen push-top w-full mx-auto flex flex-col gap-10 lg:px-0 px-5">
      <TextGradient
        className="text-start font-semibold text-xl lg:text-2xl 2xl:text-3xl"
        hand
      >
        Love to hear from you, <br className="lg:block hidden" /> Get in touch
      </TextGradient>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
