import { useMemo } from "react";
import ground from "@/public/projects/ground.png";
import notpadd from "@/public/projects/notpadd.png";

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

export const projects = [
  {
    title: "Framer Ground",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: ground,
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    url: "",
  },
  {
    title: "Notpadd",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: notpadd,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
    url: "",
  },
  {
    title: "Portal",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: ground,
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
    url: "",
  },
];
