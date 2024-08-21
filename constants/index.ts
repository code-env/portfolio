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

export const projects = [
  {
    title: "Project 1",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    url: "",
  },
  {
    title: "Project 2",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
    url: "",
  },
  {
    title: "Project 3",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    url: "",
  },
  {
    title: "Project 4",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "house.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
    url: "",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "cactus.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
    url: "",
  },
];
