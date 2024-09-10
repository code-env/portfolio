"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Toaster as Toast } from "sonner";

export const Toaster = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const { resolvedTheme } = useTheme();

  if (!isMounted) return null;

  return (
    <Toast
      position="bottom-right"
      toastOptions={{
        style: {
          background: resolvedTheme === "light" ? "#f2f2f2" : "#121212",
          color: resolvedTheme === "light" ? "#121212" : "#f2f2f2",
          // border: "",
        },
      }}
    />
  );
};
