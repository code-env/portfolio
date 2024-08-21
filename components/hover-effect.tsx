import { ReactNode } from "react";

const HoverEffect = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[1.5px] min-h-[1.5px] w-0 bg-border transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 min-w-[1.5px] bg-border transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[1.5px] min-h-[1.5px] w-0 bg-border transition-all delay-100 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 min-w-[1.5px] bg-border transition-all delay-300 duration-100 group-hover:h-full" />
    </>
  );
};

export default HoverEffect;
