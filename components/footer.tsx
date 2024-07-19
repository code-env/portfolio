import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-32 text-background items-center justify-center flex flex-col gap-5">
      <p className="text-zinc-700">made with</p>
      <Image src="/next.svg" height={100} width={100} alt="nextjs logo" />
    </footer>
  );
};

export default Footer;
