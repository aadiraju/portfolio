import { Project } from "@/data/projects";
import Image from "next/image";
import UnderlineLink from "@/components/UnderlineLink";
import Arrow from "../../public/Arrow.svg";
import { motion } from "framer-motion";
import { springConfigs } from "@/lib/utils";

const ProjectRow = ({
  title,
  synopsis,
  skills,
  imgPath,
  imgAltText,
  links,
}: Project) => {
  const imageVariants = {
    rest: { scale: 0, opacity: 0, x: 50 },
    hover: { scale: 1, opacity: 1, x: 0, transition: { ...springConfigs, duration: 0.25 } },
  };
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex flex-row font-extralight"
    >
      <div className="flex flex-[4] flex-col gap-4">
        <div className="text-2xl font-normal xl:text-4xl xl:font-semibold">
          {title}
        </div>
        <div className="pr-6 text-xl xl:text-2xl">{synopsis}</div>
      </div>
      <div className="flex flex-[5] flex-col gap-6 align-bottom">
        <div className="inline-flex flex-col text-xl xl:text-2xl xl:font-normal">
          {links.map((link, index) => (
            <UnderlineLink
              key={index}
              className="w-[max-content]"
              href={link.hyperlink}
            >
              {link.linkText}
              <Arrow />
            </UnderlineLink>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-white px-4 py-2 text-sm font-normal transition duration-300 hover:bg-white hover:text-black xl:text-lg"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ ...springConfigs, duration: 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        variants={imageVariants}
        className="flex flex-[5] justify-center align-top"
      >
        <motion.span className="relative h-[25vh] w-[44vh] overflow-hidden rounded-lg border-4 border-white">
          <Image
            src={imgPath}
            alt={imgAltText ? imgAltText : "Project Image"}
            className="border-white"
            fill
            priority
          />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectRow;
