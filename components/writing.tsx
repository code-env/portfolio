import DateTime from "@/components/shared/date";
import Markdown from "@/components/shared/mdx";
import { Writing } from "content-collections";
import Image from "next/image";

type Props = {
  writing: Writing;
};

// const createPrevAndNext = (writing: Writing) => {
//   const writings = allWritings.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   );
//   const index = writings.findIndex((w) => w === writing);
//   const next = index > 0 ? writings[index - 1] : null;
//   const prev = index + 1 < writings.length ? writings[index + 1] : null;
//   return {
//     next,
//     prev,
//   };
// };

const Post = ({ writing }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-5">
        <h1 className="text-4xl font-semibold">{writing.title}</h1>
        <p className="text-muted-foreground">{writing.description}</p>
      </div>

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
      <div className="lg:px-10">
        <Markdown code={writing.content.mdx} />
      </div>
    </div>
  );
};

export default Post;
