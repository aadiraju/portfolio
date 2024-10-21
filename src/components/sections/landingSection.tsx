import { motion } from "framer-motion";
import Image from "next/image";
import DraggableWindow from "../draggableWindow";

type WindowItem = {
  content: string;
  x: number;
  y: number;
};

const convertXYToStyleObject = (x: number, y: number, center = 50) => {
  return {
    left: `${center + x}%`,
    top: `${center - y}%`,
  };
};

const Landing = () => {
  const windowMap: WindowItem[] = [
    {
      content: "test",
      x: 15,
      y: 50,
    },
    {
      content: "test2",
      x: -40,
      y: -20,
    },
    {
      content: "test3",
      x: -35,
      y: 55,
    },
    {
      content: "test4",
      x: 20,
      y: -35,
    },
  ];

  return (
    <div className="z-10 flex h-[100vh] w-full flex-col justify-center">
      <div className="flex flex-col justify-center gap-2 p-5 text-6xl font-bold tracking-tighter drop-shadow-lg md:text-7xl md:drop-shadow-xl">
        <div className="flex-shrink-0 items-baseline sm:text-center">
          Abhineeth
        </div>
        <div className="flex-shrink-0 items-baseline sm:text-center">
          Adiraju
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-[2.5%] font-normal tracking-tighter md:gap-4 md:p-5 md:text-3xl">
        <div className="">DevOps Engineer</div>
        <div>|</div>
        <div className="">Artist</div>
        <div>|</div>
        <div className="">Home &quot;Chef&quot;</div>
      </div>
      <div className="absolute hidden h-[70vh] w-full lg:block">
        {windowMap.map((window, index) => {
          return (
            <div
              key={`window-${index}`}
              className={`absolute`}
              style={convertXYToStyleObject(window.x, window.y)}
            >
              <DraggableWindow>
                <div className="items-center-justify-center m-10 self-center text-6xl font-bold">
                  {window.content}
                </div>
              </DraggableWindow>
            </div>
          );
        })}
      </div>
      <div className="absolute mt-[70vh] items-end self-center md:hidden">
        <motion.div
          animate={{ y: ["25%", "-25%"] }}
          transition={{
            repeatType: "mirror",
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative min-h-[4vh] min-w-[4vh]"
        >
          <Image
            src="/downarrowsmall.png"
            alt="downward arrow"
            className="rounded-lg p-[5%] shadow-sm backdrop-blur-sm"
            fill
            sizes="50vw, 10vw, 5vh"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
