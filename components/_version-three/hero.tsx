import HoverEffect from "@/components/hover-effect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-32 gap-10">
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
        <h1 className="lg:text-6xl text-4xl font-bold text-center bg-gradient-to-b text-neutral-400 bg-clip-text from-orange-700 via-white to-green-500">
          I build things that live{" "}
          <br
            className="hidden lg:block
          "
          />{" "}
          on the internet
        </h1>
        <button className="relative group  px-10 py-2">
          <HoverEffect>
            <Link
              href="mailto:zenithnoble354@gmail.com"
              className="w-full h-full"
            >
              Let&apos;s have a talk
            </Link>
          </HoverEffect>
        </button>
      </div>
    </div>
  );
};

export default Hero;
