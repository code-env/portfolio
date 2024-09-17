import { StaticImageData } from "next/image";

export type Project = {
    
    title: string;
    description: string;
    src: StaticImageData;
    url: string;
    color: string;
}