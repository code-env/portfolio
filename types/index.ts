import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  src: StaticImageData;
  oneLiner: string;
  codebase: string;
  things: string[];
  url: string;
};
