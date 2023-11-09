import React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Dots from "../dots";

const Hero = () => {
  return (
    <section className="antialiased h-screen items-center flex text-background z-50">
      <section className="flex  flex-col gap-4">
        <p className="text-lg w-fit">Welcome, I&apos;m</p>
        <h1 className="font-semibold text-[80px] leading-[80px]">
          Bossadi Zenith
        </h1>
        <h1 className="font-semibold text-[80px] leading-[80px] text-zinc-700 w-fit">
          I build web Applications.
        </h1>
        <p className="text-xl text-zinc-700 w-fit">
          I’m a software Developer specialized in building (and occasionally{" "}
          <br />
          designing logos) exceptional digital experiences. Currently, I’m
          focused <br />
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
          className="bg-transparent py-2 px-4 rounded-sm text-lg group hover:delay-300 hover:bg-zinc-700 hover:text-zinc-100 duration-300  w-fit   flex items-center justify-center relative"
        >
          Get in touch
          <span className="absolute left-0 top-0 h-[2px] w-full bg-zinc-700 transition-all duration-100 group-hover:w-0" />
          <span className="absolute right-0 top-0 h-full w-[2px] bg-zinc-700 transition-all delay-100 duration-100 group-hover:h-0" />
          <span className="absolute bottom-0 right-0 h-[2px] w-full bg-zinc-700 transition-all delay-200 duration-100 group-hover:w-0" />
          <span className="absolute bottom-0 left-0 h-full w-[2px] bg-zinc-700 transition-all delay-300 duration-100 group-hover:h-0" />
        </Link>
      </section>
      <Dots />
    </section>
  );
};

export default Hero;
