import React from "react";
import Username from "./username";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="antialiased h-screen flex justify-center flex-col text-background">
      <p className="text-base mb-4">Welcome, I'm</p>
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
    </section>
  );
};

export default Hero;
