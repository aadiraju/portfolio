import { PROJECTS } from "@/data/projects";
import ProjectRow from "../ProjectRow";
import HoverHighlight from "../hoverHighlight";

const Projects = () => {
  return (
    <div className="z-10 mt-[15%] flex h-[screen] w-full flex-col p-5 tracking-tight md:mt-5">
      <div className="mb-[5%] text-4xl font-semibold md:mb-[5vh] md:text-6xl">
        <HoverHighlight>Projects</HoverHighlight>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col justify-start gap-4 md:gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
