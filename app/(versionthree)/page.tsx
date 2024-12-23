import Hero from "@/components/_version-three/sections/hero";
import Projects from "@/components/_version-three/sections/projects";
import { allProjects } from "content-collections";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <Projects projects={allProjects} take={4} length={allProjects.length} />
    </div>
  );
};

export default Page;
