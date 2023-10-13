import React from "react";

const Navbar = () => {
  const navList = ["about", "blog", "work", "contact"];

  return (
    <header className="">
      <section>Zenith</section>
      <nav>
        <ul className="">
          {navList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
