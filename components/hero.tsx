import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section className="antialiased h-screen flex justify-center flex-col text-background z-50">
      <p className="text-lg mb-4">Welcome, I'm</p>
      {/* <Username /> */}
      <h1 className="font-semibold text-[80px] leading-[80px]">
        Bossadi Zenith
      </h1>
      <h1 className="font-semibold text-[80px] leading-[80px] text-zinc-700">
        I build web Applications.
      </h1>
      <p className="text-xl text-zinc-700">
        I’m a software Developer specialized in building (and occasionally{" "}
        <br />
        designing logos) exceptional digital experiences. Currently, I’m focused{" "}
        <br />
        on building and developing at{" "}
        <Link className="links" target="_blank" href="https://skaleway.com">
          Skaleway
        </Link>{" "}
        and{" "}
        <Link
          className="links"
          target="_blank"
          href="https://tic-foundation.org"
        >
          TiC foundation
        </Link>
        .
      </p>
      <Link
        href="mailto:zenithnoble354@gmai.com"
        className="mt-4  bg-transparent py-2 px-4 rounded-sm text-lg group  hover:text-zinc-700 w-fit  relative"
      >
        Get in touch
        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-full bg-zinc-700 transition-all duration-100 group-hover:w-0" />
        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-full w-[2px] bg-zinc-700 transition-all delay-100 duration-100 group-hover:h-0" />
        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-full bg-zinc-700 transition-all delay-200 duration-100 group-hover:w-0" />
        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-full w-[2px] bg-zinc-700 transition-all delay-300 duration-100 group-hover:h-0" />
      </Link>
    </section>
  );
};

export default Hero;
