import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navList = ["about", "blog", "work", "contact"];

  return (
    <header className="h-20 flex text-background backdrop-blur-sm fixed top-0 left-0 w-screen justify-between px-20 items-center">
      <Link href="/">
        <section className="font-bold text-2xl">Zenith</section>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 relative">
          {navList.map((list, index) => (
            <Link href="#" className="">
              <li
                key={list}
                className="capitalize flex items-center gap-2 links"
              >
                <span className="text-base">0{index + 1}.</span>
                <span className="capitalize">{list}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
