import { cn } from "@/lib/utils";
import React from "react";

const Rings = ({
  itemsList,
  difference,
  initial,
  className,
}: {
  itemsList: number;
  difference: number;
  initial: number;
  className?: string;
}) => {
  return Array.from({ length: itemsList }).map((_, i) => (
    <div
      key={i}
      style={{
        width: initial + difference * i,
        height: initial + difference * i,
      }}
      className={cn(
        "absolute border-2 inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_80px_inset] shadow-black/5 rounded-full -z-10",
        className
      )}
    />
  ));
};

export default Rings;
