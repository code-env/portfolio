import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="py-20">
      <section className="flex flex-col gap-4">
        <p className="text-center text-xl text-background items-center  font-medium space-x-3">
          <span className="text-zinc-700">03.</span>What&apos;s Next?
        </p>
        <h1 className="text-center text-[32px] text-background items-center  font-semibold space-x-3">
          Get In Touch
        </h1>
      </section>
      <section
        className="max-w-2xl mx-auto w-full flex flex-col gap-10 items-center
      justify-center"
      >
        <p className="text-center text-lg">
          Although I&apos;m not currently looking for any oppurtunities at the
          moment, my inbox is always open. Whether you have a question on
          software development or just want to say hi, I&apos;ll try my best to
          get back to you ASAP!
        </p>
        <Link
          href="mailto:zenithnoble354@gmai.com"
          className="bg-transparent py-2 px-4 rounded-sm text-lg group hover:delay-300 hover:bg-zinc-700 hover:text-zinc-100 duration-300  w-fit flex items-center justify-center relative"
        >
          Say Hello
          <span className="absolute left-0 top-0 h-[2px] w-full bg-zinc-700 transition-all duration-100 group-hover:w-0" />
          <span className="absolute right-0 top-0 h-full w-[2px] bg-zinc-700 transition-all delay-100 duration-100 group-hover:h-0" />
          <span className="absolute bottom-0 right-0 h-[2px] w-full bg-zinc-700 transition-all delay-200 duration-100 group-hover:w-0" />
          <span className="absolute bottom-0 left-0 h-full w-[2px] bg-zinc-700 transition-all delay-300 duration-100 group-hover:h-0" />
        </Link>
      </section>
    </section>
  );
};

export default GetInTouch;
