import PipelineAnimation from "@/components/PipelineAnimation";
import HoverHighlight from "../hoverHighlight";

const About = () => {
  return (
    <div className="z-10 mt-5 flex h-[screen] w-full flex-col p-5 tracking-tight">
      <div className="mb-[5%] text-4xl font-semibold md:mb-[5vh] md:text-6xl">
        <HoverHighlight>About</HoverHighlight>
      </div>
      <div className="flex h-full justify-center">
        <div className="flex flex-[3] flex-col gap-6 text-xl font-extralight md:gap-6 md:text-3xl">
          <p>
            I am a DevOps Engineer interested in building solutions driven by a
            purpose to <HoverHighlight className="font-semibold">make a difference</HoverHighlight>.
          </p>
          <p>
            I believe that maintaining websites and large infrastructures is
            just as important as building them, so I strive to improve their{" "}
            <HoverHighlight className="font-semibold">reliability</HoverHighlight> and{" "}
            <HoverHighlight className="font-semibold">efficiency</HoverHighlight> in any way I can.
          </p>
          <p>
            Having been immersed in the arts since my childhood, I enjoy coming
            up with <HoverHighlight className="font-semibold">creative</HoverHighlight> and{" "}
            <HoverHighlight className="font-semibold">elegant</HoverHighlight> solutions to problems
            in every aspect of my life.
          </p>
        </div>
        <div className="hidden flex-[3] flex-col md:flex">
          <div className="mx-[10vh]">
            <PipelineAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
