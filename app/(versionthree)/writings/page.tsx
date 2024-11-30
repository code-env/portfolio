import { Metadata } from "next";

import DateTime from "@/components/shared/date";
import { cn } from "@/lib/utils";
import { allWritings, Writing } from "content-collections";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writings",
  description: "My writings/perspective about things",
};

const Writings = () => {
  const writings = allWritings.filter((writing) => writing.isPublished);

  if (writings.length === 0) {
    return <NoWritings />;
  }

  return (
    <div className="min-h-screen flex max-w-3xl py-56 mx-auto w-full sm:px-4 md:px-0 px-4">
      {writings.map((writing) => (
        <WritingCard writing={writing} key={writing.date} />
      ))}
    </div>
  );
};

const WritingCard = ({ writing }: { writing: Writing }) => {
  return (
    <article className="w-full h-fit">
      <Link
        href={writing.url}
        className={cn(
          "group mt-10 grid gap-2 hover:bg-white dark:hover:bg-neutral-950 sm:grid-cols-[8.5rem,1fr] ",
          "border-2 p-4 border-neutral-500/20"
        )}
      >
        <figure className="flex items-stretch justify-center gap-4 sm:row-span-2 sm:justify-start">
          <Image
            src={writing.image?.url ?? ""}
            blurDataURL={writing.image?.blurDataURL ?? ""}
            placeholder="blur"
            alt="Featured Image"
            width={256}
            height={128}
            priority={true}
            className={cn(
              "relative -mt-10 mb-2 h-32 w-64 flex-shrink-0 bg-white object-contain dark:bg-base-800 sm:mb-0 sm:w-32",
              "border-2 border-base-300 group-hover:border-primary-500 dark:border-base-700 dark:group-hover:border-primary-400"
            )}
          />
        </figure>
        <h3 className="text-2xl font-semibold">{writing.title}</h3>
        <p className="text-lg">{writing.description}</p>
        <footer className="flex justify-between pt-2 text-xs sm:col-span-2">
          <p>{writing.readingTime}</p>
          <DateTime value={writing.date} />
        </footer>
      </Link>
    </article>
  );
};

const NoWritings = () => {
  return (
    <div className="min-h-screen flex max-w-5xl py-56 mx-auto w-full sm:px-4 md:px-0 px-4 items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl font-bold">No writings yet</h1>
        <p className="text-lg">
          I haven&apos;t written anything yet. Check back soon for some
          thoughts.
        </p>
      </div>
    </div>
  );
};

export default Writings;
