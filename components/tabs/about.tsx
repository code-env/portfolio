import React from "react";
import HeaderText from "../header-text";
import Image from "next/image";

const About = () => {
  return (
    <section className="h-screen text-background flex flex-col gap-8 relative">
      <HeaderText number="01" h1="About me" />
      <section className="flex gap-20 relative">
        <section className="flex-1 relative">
          <p className="text-xl text-zinc-700">
            Hello! My name is Zenith but others call me ( The!nvestor, code-env,
            zenith-noble ) and I enjoy building things that live on the
            internet. My interest in web development started back in 2020 when I
            decided to build the website for our project SSAMS ( School Security
            and Attendance Management System ) to go in for a competition (TiC
            summit 2021). I guess that's was my spark into the development world
            till date
          </p>
          <div className="triangle"></div>
        </section>
        <section className="flex-[0.8] relative">
          {/* <Image
            src="/img.jpg"
            alt="myself codeing"
            width={300}
            height={300}
            className="h-[400px] w-[400px] rounded-lg object-cover"
          /> */}
          <section className="h-[400px] w-[400px] relative rounded-2xl object-cover bg-zinc-500  before:w-full before:h-full before:absolute before:top-10 before:-right-10 before:-z-20 before:rounded-2xl before:border-zinc-700 before:border-2" />
        </section>
      </section>
    </section>
  );
};

export default About;
