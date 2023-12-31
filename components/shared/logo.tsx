import { useTheme } from "next-themes";
import React from "react";
import lightLogo from "@/public/light.svg";
import darkLogo from "@/public/dark.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { theme } = useTheme();

  const imageSrc = theme === "light" ? darkLogo : lightLogo;
  return (
    <Link href="/">
      <Image src={imageSrc} height={100} width={50} alt="Bossadi Zenith Logo" />
    </Link>
  );
};

export default Logo;
