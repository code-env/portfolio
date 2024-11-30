import { useMemo } from "react";

export const userRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "about",
        path: "/about",
      },
      {
        name: "lab",
        path: "/lab",
      },
      {
        name: "writings",
        path: "/writings",
      },
      {
        name: "contact",
        path: "/contact",
      },
    ],
    []
  );

  return routes;
};
