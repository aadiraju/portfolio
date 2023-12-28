import { PROJECTS } from "@/data/projects";
import ProjectRow from "../ProjectRow";

const Projects = () => {
  return (
    <div className="z-10 mt-5 flex h-[100vh] w-full flex-col p-5 tracking-tight">
      <div className="mb-[5vh] text-6xl font-semibold">Projects</div>
      <div className="flex h-full">
        <div className="flex flex-col gap-8 justify-start">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
