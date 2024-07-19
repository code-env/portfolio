"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

function LenisLayout({ children }: { children: ReactNode }) {
  const lenis = useLenis(({ scroll }) => {});

  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisLayout;
