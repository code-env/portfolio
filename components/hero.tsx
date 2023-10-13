import React from "react";
import Username from "./username";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section className="antialiased h-screen flex justify-center flex-col text-background">
      <p className="text-lg mb-4">Welcome, I'm</p>
      {/* <Username /> */}
      <h1 className="font-semibold text-[80px] leading-[80px]">
        Bossadi Zenith
      </h1>
      <h1 className="font-semibold text-[80px] leading-[80px] text-zinc-700">
        I build web Applications.
      </h1>
      <p className="text-xl text-zinc-700">
        I’m a software Developer specializing in building (and occasionally{" "}
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
        className={buttonVariants({
          className:
            "mt-4 border-zinc-700 border bg-transparent p-4 rounded-sm text-lg hover:bg-zinc-700 hover:text-zinc-100",
          size: "lg",
        })}
      >
        Get in touch
      </Link>
    </section>
  );
};

export default Hero;
