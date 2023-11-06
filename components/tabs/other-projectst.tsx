import Link from "next/link";
import React from "react";

const OtherProjects = () => {
  return (
    <section className="flex flex-col gap-10 mt-20">
      <h1 className="text-center font-semibold text-3xl">Other Projects</h1>

      {/* other projects */}

      <section className="grid grid-cols-2 gap-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <section
            key={index}
            className="p-32 bg-background rounded-2xl shadow-sm hover:shadow-2xl duration-300 text-zinc-100 flex items-center justify-center text-3xl font-semibold"
          >
            Coming soon...
          </section>
        ))}
      </section>

      <section className="flex items-center justify-center">
        <Link
          className="text-center text-2xl capitalize hover:underline duration-300"
          href="/projects"
        >
          see more
        </Link>
      </section>
    </section>
  );
};

export default OtherProjects;
