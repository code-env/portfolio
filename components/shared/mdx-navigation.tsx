"use client";

import { cn } from "@/lib/utils";
import { Project, Writing } from "content-collections";
import Link from "next/link";
import { useState } from "react";
import Arrow from "./arrow";
import { buttonVariants } from "../ui/button";

type NavigationButtonProps = {
  item: Project | Writing | null;
  type: "prev" | "next";
};

export const NavigationButton = ({ item, type }: NavigationButtonProps) => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setnextHovered] = useState(false);

  if (!item) {
    return <div />;
  }

  return (
    <Link
      className={buttonVariants({
        variant: "outline",
        className: cn("group flex  justify-start gap-2  items-center border", {
          "text-left": type === "prev",
          "flex-row-reverse text-right": type === "next",
        }),
      })}
      href={item.url}
      title={`Navigate to item "${item.title}"`}
      onMouseEnter={() => {
        if (type === "prev") {
          setPrevHovered(true);
          return;
        }
        setnextHovered(true);
      }}
      onMouseLeave={() => {
        if (type === "prev") {
          setPrevHovered(false);
          return;
        }
        setnextHovered(false);
      }}
    >
      <Arrow
        isHovered={type === "next" ? nextHovered : prevHovered}
        angle={type === "prev" ? 180 : 0}
      />
      <span className="hidden  md:block">{item.title}</span>
    </Link>
  );
};
