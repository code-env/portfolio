import {
  Moon,
  GitHub,
  Email,
  Home,
  Photos,
  Project,
  About,
  Sun,
} from "@/components/icons";
import { useMemo } from "react";

export const userRoutes = () => {
  const routes = useMemo(
    () => [
      [
        {
          name: "Home",
          icon: Home,
        },
        {
          name: "About",
          icon: About,
        },
        {
          name: "Project",
          icon: Project,
        },
        {
          name: "Photos",
          icon: Photos,
        },
      ],
      [
        {
          name: "Email",
          icon: Email,
        },
        {
          name: "Github",
          icon: GitHub,
        },
      ],
      [
        {
          name: "Theme",
          icon: Moon,
        },
      ],
    ],

    []
  );

  return routes;
};
