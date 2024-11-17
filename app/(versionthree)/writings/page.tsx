import { Metadata } from "next";

import { allWritings } from "content-collections";
import { format } from "date-fns";
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
    <div className="min-h-screen flex max-w-5xl py-56 mx-auto w-full sm:px-4 md:px-0 px-4">
      {writings.map((writing) => {
        return (
          <div
            key={writing._meta.path}
            className="w-full h-fit border p-4 dark:bg-neutral-950 bg-white"
          >
            <Link
              href={`/writings/${writing._meta.path}`}
              className="w-full flex flex-col gap-3"
            >
              <div>
                <h3 className="md:text-3xl text-2xl font-bold">
                  {writing.title}
                </h3>
                <p className="md:text-lg text-sm">{writing.description}</p>
              </div>
              <span className="text-sm">
                {format(new Date(writing.date), "MMMM d, yyyy")}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const NoWritings = () => {
  return (
    <div className="min-h-screen flex max-w-5xl py-56 mx-auto w-full sm:px-4 md:px-0 px-4 items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl font-bold">No writings yet</h1>
        <p className="text-lg">
          I haven't written anything yet. Check back soon for some thoughts.
        </p>
      </div>
    </div>
  );
};

export default Writings;
