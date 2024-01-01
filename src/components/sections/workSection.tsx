import { WORKEXPERIENCES } from "@/data/experiences";
import ExperienceRow from "../experienceRow";

const WorkExperience = () => {
  return (
    <div className="z-10 mt-5 flex h-[100vh] w-full flex-col p-5 tracking-tight">
      <div className="mb-[10vh] text-6xl font-semibold">Work Experience</div>
      <div className="flex h-full">
        <div className="flex flex-col gap-6 text-3xl font-extralight">
        {WORKEXPERIENCES.map((experience, index) => (
            <ExperienceRow key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
