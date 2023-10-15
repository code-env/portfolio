import React, { FC } from "react";

interface HeaderTextProps {
  h1: string;
  number: string;
}

const HeaderText: FC<HeaderTextProps> = ({ h1, number }) => {
  return (
    <section className="flex items-center  font-semibold text-[32px] space-x-3">
      <p className="text-zinc-700">{number}.</p>
      <h1 className="">{h1}</h1>
      <span className="h-[1px] w-1/3 bg-zinc-700"></span>
    </section>
  );
};

export default HeaderText;
