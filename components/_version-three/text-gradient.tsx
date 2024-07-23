import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  hand?: boolean;
}

const TextGradient = ({ className, children, hand }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "font-extrabold tracking-tight text-transparent text-4xl lg:text-7xl  bg-clip-text bg-gradient-to-r dark:from-zinc-500/50 dark:via-zinc-200 dark:to-zinc-500/50 from-zinc-900 via-zinc-700 to-zinc-900 text-center",
        className
      )}
    >
      {children} {hand && <span className="default text-4xl">👋</span>}
    </h1>
  );
};

export default TextGradient;
