"use client";

import * as React from "react";
import { Cable, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "./utils";

export function ModeToggle() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const { setTheme, resolvedTheme: userTheme } = useTheme();

  if (!isMounted) return <div></div>;

  const themes = [
    {
      name: "light",
      icon: Sun,
    },
    {
      name: "dark",
      icon: Moon,
    },
  ];

  return (
    <button
      className={cn(
        "h-10 w-10 flex items-center justify-center hover:bg-black/50 hover:text-white cursor-pointer rounded-full transition-all duration-300 dark:bg-green-500 backdrop-blur-md border border-boder"
      )}
      onClick={() => setTheme(userTheme === "dark" ? "light" : "dark")}
    >
      {userTheme === "dark" ? (
        <Moon className="w-4 h-4 delay-300" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}
