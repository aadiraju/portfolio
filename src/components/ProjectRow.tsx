import { Project } from "@/data/projects";
import UnderlineLink from "@/components/UnderlineLink";
import Arrow from "../../public/Arrow.svg";
const ProjectRow = ({ title, synopsis, skills, imgPath, links }: Project) => {
  return (
    <div className="flex flex-row font-extralight">
      <div className="flex flex-[4] flex-col gap-4">
        <div className="text-2xl xl:text-4xl font-normal xl:font-semibold">{title}</div>
        <div className="pr-6 text-xl xl:text-2xl">{synopsis}</div>
      </div>
      <div className="flex flex-col flex-[5] gap-6 align-bottom">
        <div className="inline-flex flex-col text-xl xl:text-2xl xl:font-normal">
          {links.map((link, index) => (
            <UnderlineLink className="w-[max-content]" href={link.hyperlink}>
              {link.linkText}
              <Arrow />
            </UnderlineLink>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {skills.map((skill) => (
            <div className=" rounded-lg border border-white px-4 py-2 text-sm xl:text-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
