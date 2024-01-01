import { Project } from "@/data/projects";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
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
    hover: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { ...springConfigs, duration: 0.25 },
    },
  };
  return (
    <MouseParallaxContainer
      globalFactorX={0.5}
      globalFactorY={0.15}
      resetOnLeave
      inverted
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="flex flex-col gap-4 font-extralight md:overflow-visible"
      >
        <div className="text-lg font-semibold md:text-4xl">{title}</div>
        <div className="flex flex-row">
          <div className="flex flex-[3] flex-col gap-4 md:flex-[4]">
            <div className="text-md pr-[7%] md:pr-6 md:text-2xl">
              {synopsis}
            </div>
          </div>
          <div className="ml-[5%] flex flex-[3] flex-col justify-start gap-6 md:flex-[5]">
            <div className="inline-flex flex-col justify-center text-lg md:text-2xl xl:font-normal">
              {links.map((link, index) => (
                <UnderlineLink
                  key={index}
                  className="w-[max-content] underline underline-offset-[0.75vh] sm:no-underline"
                  href={link.hyperlink}
                >
                  {link.linkText}
                  <Arrow className="hidden sm:inline" />
                </UnderlineLink>
              ))}
            </div>
            <div className="hidden flex-row flex-wrap gap-2 md:flex">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={` ${
                    skills.length > 3 ? "basis-1/3 text-center" : ""
                  } cursor-default rounded-lg border border-white px-4 py-2 text-sm font-normal transition duration-300 hover:bg-white hover:text-black xl:text-lg`}
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
            className="hidden flex-[5] justify-center align-top md:flex"
          >
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.02}
              className="mr-[20%] w-[120%]"
            >
              <motion.div className="relative h-[25vh] w-[44vh] overflow-hidden rounded-lg border-4 border-white">
                <Image
                  src={imgPath}
                  alt={imgAltText ? imgAltText : "Project Image"}
                  className="border-white"
                  fill
                  priority
                />
              </motion.div>
            </MouseParallaxChild>
          </motion.div>
        </div>
      </motion.div>
    </MouseParallaxContainer>
  );
};

export default ProjectRow;
