import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <Link
      href="mailto:zenithnoble354@gmai.com"
      className="bg-transparent py-2 px-6 text-lg group hover:delay-300 hover:bg-zinc-700 hover:text-zinc-100 duration-300  w-fit   flex items-center justify-center relative"
    >
      Get in touch
      <span className="absolute left-0 top-0 h-[2px] w-full bg-zinc-700 transition-all duration-100 group-hover:w-0" />
      <span className="absolute right-0 top-0 h-full w-[2px] bg-zinc-700 transition-all delay-100 duration-100 group-hover:h-0" />
      <span className="absolute bottom-0 right-0 h-[2px] w-full bg-zinc-700 transition-all delay-200 duration-100 group-hover:w-0" />
      <span className="absolute bottom-0 left-0 h-full w-[2px] bg-zinc-700 transition-all delay-300 duration-100 group-hover:h-0" />
    </Link>
  );
};

export default GetInTouch;
