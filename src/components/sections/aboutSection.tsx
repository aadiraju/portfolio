const About = () => {
  return (
    <div className="z-10 mt-5 flex h-[100vh] w-full flex-col">
      <div className="flex flex-col gap-6 p-5 tracking-tight">
        <div className="text-5xl font-semibold">About</div>
        <div className="mt-7 flex w-[40%] flex-col gap-6 text-2xl font-extralight">
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
            up with <span className="font-semibold">creative</span> and <span className="font-semibold">elegant</span>{" "}
            solutions to problems in every aspect of my life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
