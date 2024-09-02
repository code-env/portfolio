import Link from "next/link";
import Image from "next/image";
import zenith from "@/public/z.jpg";

import TextGradient from "../text-gradient";
import HoverEffect from "@/components/hover-effect";
import Rings from "@/components/shared/rings";

const Hero = () => {
  return (
    <div className="py-32 md:py-40 lg:py-60 lg:px-0 px-5 z-0 relative overflow-clip">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="h-28 w-28 relative overflow-hidden rounded-t-full">
            <Image
              src={zenith}
              className="object-cover grayscale shadow-[0_0_80px_inset] transition-all duration-150 hover:grayscale-0"
              alt="Bossadi Zenith"
              fill
              placeholder="blur"
            />
          </div>
          <div className="dark:bg-neutral-950 bg-white mb-10 h-10 px-6 flex items-center justify-center gap-2 border border-neutral-500/20 ">
            <span className="h-4 w-4 bg-neutral-500 rounded-full flex justify-center items-center pulse" />
            <p className="text-neutral-700">Hi, I&apos;m Zenith 👋</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex items-center justify-center flex-col gap-5  w-fit mx-auto">
            <TextGradient>
              I build things that live{" "}
              <br
                className="hidden lg:block
          "
              />
              on the internet
            </TextGradient>
            <p className="text-xl max-w-lg text-center text-neutral-700 dark:text-neutral-400">
              I&apos;m specialized at transforming design into functional,
              high-performing web applications.
            </p>
          </div>
          <Link
            href="mailto:zenithnoble354@gmail.com"
            className="px-10 py-2 relative group border-2 border-neutral-700  hover:border-transparent text-neutral-700 transition-colors duration-100 hover:dark:bg-neutral-700 hover:bg-neutral-800 hover:text-neutral-50 delay-300 slowmo hover:dark:text-neutral-100"
          >
            <HoverEffect>Let&apos;s have a talk</HoverEffect>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
