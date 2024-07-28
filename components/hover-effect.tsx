import { ReactNode } from "react";

const HoverEffect = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] min-h-[2px] w-0 bg-zinc-700 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 min-w-[2px] bg-zinc-700 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] min-h-[2px] w-0 bg-zinc-700 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 min-w-[2px] bg-zinc-700 transition-all delay-300 duration-100 group-hover:h-full" />
    </>
  );
};

export default HoverEffect;
