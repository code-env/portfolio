//const Projects = () => {
//  const [projects, setProjects] = useState(2);
//
//  return (
//    <div className="min-h-fit relative flex flex-col gap-10">
//      <h1 className="text-3xl text-neutral-700 font-bold">Some of my doings</h1>
//      <AnimatePresence>
//        <motion.div className="flex flex-col lg:gap-5 gap-10" layout>
//          {Array.from({ length: projects }).map((_, index) => {
//            //some code here
//            return (
//              <div
//                key={index}
//                className="group flex gap-5 lg:even:flex-row-reverse lg:flex-row flex-col"
//              >
//                <div className="lg:h-96 h-80 lg:flex-[1.2] backdrop-blur relative w-full">
//                  <Image
//                    fill
//                    src="/placeholder-dark.svg"
//                    className="object-cover hidden dark:block"
//                    alt="nothing"
//                  />
//                  <Image
//                    fill
//                    src="/placeholder.svg"
//                    className="object-cover block dark:hidden"
//                    alt="nothing"
//                  />
//                </div>
//                <div className="flex-[0.8] w-full relative">
//                  <div className="lg:absolute relative lg:w-[120%] w-full lg:group-odd:-left-[20%] top-0 bottom-0 my-auto flex flex-col gap-5 h-[70%] left-0 justify-between">
//                    <div className="lg:group-odd:self-end flex flex-col lg:group-odd:text-end">
//                      <p className="text-lg font-semibold text-neutral-700">
//                        Featured Projects
//                      </p>
//                      <h1 className="text-2xl font-semibold text-neutral-400">
//                        Project Name
//                      </h1>
//                    </div>
//                    <div className="bg-muted p-3 lg:shadow-lg">
//                      <p className="line-clamp-3">
//                        Lorem ipsum, dolor sit amet consectetur adipisicing
//                        elit. Officia maxime ipsa blanditiis! Sunt at
//                        repellendus voluptate ipsum soluta, incidunt ab
//                        inventore nostrum sequi, adipisci corrupti esse?
//                        Veritatis consectetur sequi sapiente.
//                      </p>
//                    </div>
//                    <div className="group-odd:self-end flex gap-5">
//                      <Github className="w-6 text-neutral-700 hover:text-neutral-700/75 slowmo cursor-pointer h-6" />
//                      <Share className="w-6 text-neutral-700 hover:text-neutral-700/75 slowmo cursor-pointer h-6" />
//                    </div>
//                  </div>
//                </div>
//              </div>
//            );
//          })}
//        </motion.div>
//        <div className="w-full bg-gradient-to-b absolute bottom-0 left-0 from-transparent to-background via-background h-36" />
//        <div className="absolute bottom-0 left-0 w-fit mx-auto right-0">
//          <button
//            className="relative group  px-10 py-2"
//            onClick={() => setProjects(projects + 1)}
//          >
//            <HoverEffect>Load More</HoverEffect>
//          </button>
//        </div>
//      </AnimatePresence>
//    </div>
//  );
//};
//
//export default Projects;
//
