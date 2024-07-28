import Link from "next/link";
import Image from "next/image";

import TextGradient from "./text-gradient";
import HoverEffect from "@/components/hover-effect";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="h-28 w-28 relative overflow-hidden rounded-full">
          <Image
            src="/z.jpg"
            className="object-cover grayscale transition-all duration-150 hover:grayscale-0"
            alt=""
            fill
          />
        </div>
        <p className="text-neutral-700">Hi, I&apos;m Zenith 👋</p>
      </div>
      <div className="flex items-center justify-center flex-col gap-5">
        <TextGradient>
          I build things that live{" "}
          <br
            className="hidden lg:block
          "
          />{" "}
          on the internet
        </TextGradient>
        <Link
          href="mailto:zenithnoble354@gmail.com"
          className="px-10 py-2 relative group "
        >
          <HoverEffect>Let&apos;s have a talk</HoverEffect>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
