import PipelineAnimation from "../PipelineAnimation";

const About = () => {
  return (
    <div className="z-10 mt-5 flex h-[100vh] w-full flex-col p-5 tracking-tight">
      <div className="text-6xl font-semibold mb-[10vh]">About</div>
      <div className="flex h-full justify-center">
        <div className="flex flex-[3] flex-col gap-6 text-3xl font-extralight">
          <p>
            I am a DevOps Engineer interested in building solutions driven by a
            purpose to <span className="font-semibold">make a difference</span>.
          </p>
          <p>
            I believe that maintaining websites and large infrastructures is
            just as important as building them, so I strive to improve their{" "}
            <span className="font-semibold">reliability</span> and{" "}
            <span className="font-semibold">efficiency</span> in any way I can.
          </p>
          <p>
            Having been immersed in the arts since my childhood, I enjoy coming
            up with <span className="font-semibold">creative</span> and{" "}
            <span className="font-semibold">elegant</span> solutions to problems
            in every aspect of my life.
          </p>
        </div>
        <div className="flex flex-[3] flex-col">
          <div className="mx-[10vh]">
            <PipelineAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
