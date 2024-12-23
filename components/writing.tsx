import DateTime from "@/components/shared/date";
import Markdown from "@/components/shared/mdx";
import { Writing, allWritings } from "content-collections";
import { compareDesc } from "date-fns";
import Image from "next/image";
import { NavigationButton } from "./shared/mdx-navigation";

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

const Post = ({ writing }: Props) => {
  const { next, prev } = createPrevAndNext(writing);

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
        <NavigationButton type="prev" item={prev} />
        <NavigationButton type="next" item={next} />
      </nav>
    </>
  );
};

export default Post;
