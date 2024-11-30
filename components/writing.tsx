import clsx from "clsx";
import { Writing, allWritings } from "content-collections";
import { compareDesc } from "date-fns";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "@/components/shared/mdx";
import ScrollToTop from "@/components/shared/scroll-to-top";
// import ShareButton from "@/components/shared/share-button";
import DateTime from "@/components/shared/date";

type Props = {
  writing: Writing;
};

const createPrevAndNext = (writing: Writing) => {
  const writings = allWritings.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const index = writings.findIndex((w) => w === writing);
  const next = index > 0 ? writings[index - 1] : null;
  const prev = index + 1 < writings.length ? writings[index + 1] : null;
  return {
    next,
    prev,
  };
};

type NavigationButtonProps = {
  writing: Writing | null;
  type: "prev" | "next";
};

const NavigationButton = ({ writing, type }: NavigationButtonProps) => {
  if (!writing) {
    return <div />;
  }
  const Icon = type === "next" ? ArrowRightCircle : ArrowLeftCircle;
  return (
    <Link
      className={clsx("group flex w-full items-center justify-start gap-2", {
        "text-left": type === "prev",
        "flex-row-reverse text-right": type === "next",
      })}
      href={writing.url}
      title={`Navigate to writing "${writing.title}"`}
    >
      <Icon className="w-6 shrink-0 group-hover:stroke-[3]" />
      <span className="hidden group-hover:underline group-hover:decoration-primary-500 group-hover:decoration-2 md:block">
        {writing.title}
      </span>
    </Link>
  );
};

const Post = ({ writing }: Props) => {
  const { next, prev } = createPrevAndNext(writing);

  // console.log({ next, prev });

  return (
    <>
      <figure className="relative flex items-center gap-4 h-96">
        <Image
          src={writing.image ? writing.image.url ?? "" : ""}
          blurDataURL={writing.image ? writing.image.blurDataURL ?? "" : ""}
          placeholder="blur"
          fill
          alt="Feature blog image"
          className="rounded-md border-2 border-base-200 object-cover dark:border-base-700"
        />
      </figure>
      <div className="my-4 flex justify-between text-xs">
        <p>{writing.readingTime}</p>
        <DateTime title="Posted at" value={writing.date} />
      </div>
      <Markdown code={writing.content.mdx} />

      <nav className="my-10 grid grid-cols-3 place-items-center border-t border-t-base-300 pt-4 dark:border-t-base-700">
        <NavigationButton type="prev" writing={prev} />
        <NavigationButton type="next" writing={next} />
      </nav>
    </>
  );
};

export default Post;
