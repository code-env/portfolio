import Markdown from "@/components/shared/mdx";
import clsx from "clsx";
import { Project, allProjects } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { NavigationButton } from "./shared/mdx-navigation";

type Props = {
  project: Project;
};

const createPrevAndNext = (project: Project) => {
  const index = allProjects.findIndex((w) => w === project);
  const next = index > 0 ? allProjects[index - 1] : null;
  const prev = index + 1 < allProjects.length ? allProjects[index + 1] : null;
  return {
    next,
    prev,
  };
};

const ProjectMdx = ({ project }: Props) => {
  const { next, prev } = createPrevAndNext(project);

  return (
    <>
      <figure className="relative flex items-center gap-4 h-96">
        <Image
          src={project.image ? project.image.url ?? "" : ""}
          blurDataURL={project.image ? project.image.blurDataURL ?? "" : ""}
          placeholder="blur"
          fill
          alt="Feature blog image"
          className="rounded-md border-2 border-base-200 object-cover dark:border-base-700"
        />
      </figure>
      <div className="my-4 flex justify-between text-xs">
        <p>{project.readingTime}</p>
      </div>

      <Markdown code={project.content.mdx} />

      <nav className="my-10 flex items-center justify-between  border-t border-t-base-300 pt-4 dark:border-t-base-700">
        <NavigationButton type="prev" item={prev} />
        <NavigationButton type="next" item={next} />
      </nav>
    </>
  );
};

export default ProjectMdx;
