import Hero from "@/components/_version-three/hero";
import Projects from "@/components/_version-three/projects";

const Page = () => {
  return (
    <div className="flex flex-col gap-40 w-full">
      <Hero />
      <Projects />
    </div>
  );
};

export default Page;
