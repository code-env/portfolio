import { useTheme } from "next-themes";
import React from "react";
import lightLogo from "@/public/light.svg";
import darkLogo from "@/public/dark.svg";
import Image from "next/image";
import Link from "next/link";
import TextGradient from "../_version-three/text-gradient";

const Logo = () => {
  const { theme } = useTheme();

  const imageSrc = theme === "light" ? darkLogo : lightLogo;
  return (
    <Link href="/">
      <TextGradient className="2xl:text-2xl text-lg font-bold lg:text-2xl  relative">
        {`2{bkm}`}
        <span className="opacity-0 cursor-default pointer-events-none absolute">
          Not
        </span>
      </TextGradient>
    </Link>
  );
};

export default Logo;
