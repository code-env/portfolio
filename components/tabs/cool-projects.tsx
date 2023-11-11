import React from "react";
import HeaderText from "../header-text";
import { ArrowUpRightSquare, Github } from "lucide-react";
import Link from "next/link";

const CoolProjects = () => {
  return (
    <section className="mt-20  flex flex-col gap-8">
      <HeaderText number="02" h1="Some Project I've worked on" />
      <section className="flex flex-col gap-10 text-zinc-100">
        {Array.from({ length: 3 }).map((_, index) => (
          <section
            className={`w-full flex even:justify-end relative something-${index}`}
            key={index}
          >
            {/* preview of the project goes here */}
            <section className="w-[60%] h-96 rounded-2xl bg-background p-10 flex items-center justify-center">
              <h1 className="text-3xl  font-semibold">Coming soon...</h1>
            </section>
            {/* description of project goes here  */}
            <section className="absolute h-fit w-1/2 flex flex-col  p-4 rounded-2xl left-1/2 items-end something text-background top-1/2 -translate-y-1/2">
              <h1 className="text-3xl font-semibold">Project name</h1>
              <p className="bg-zinc-700 shadow-sm p-4 rounded-2xl text-zinc-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur dolore tenetur nam earum iure tempore cumque quis
                reiciendis aperiam inventore, veritatis commodi. Soluta omnis
                nihil est veritatis recusandae sit totam! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quidem, iste placeat
                voluptates cum qui esse quaerat, culpa iure recusandae fugit
                illum perferendis dolorum praesentium itaque deserunt ipsam
                eveniet repellendus? Delectus.
              </p>

              {/* tech used in project */}
              <section className="flex mt-5 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <p key={index}>tech used</p>
                ))}
              </section>
              {/* links for the project */}
              <section className="flex gap-4 mt-5">
                <Link href="#">
                  <Github />
                </Link>
                <Link href="#">
                  <ArrowUpRightSquare />
                </Link>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default CoolProjects;
