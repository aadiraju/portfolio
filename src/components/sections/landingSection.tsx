import { motion } from "framer-motion";
import Image from "next/image";
import DraggableWindow from "../draggableWindow";

type WindowItem = {
  imageSrc: string;
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
      imageSrc: "./busybeecooking.gif",
      x: 15,
      y: 50,
    },
    {
      imageSrc: "./busybeesinging.gif",
      x: -45,
      y: -20,
    },
    {
      imageSrc: "./busybeecoding.gif",
      x: -35,
      y: 55,
    },
    {
      imageSrc: "./busybeetrolling.gif",
      x: 20,
      y: -30,
    },
  ];

  return (
    <div className="flex h-[100vh] w-full flex-col justify-center">
      <div className="z-10 flex flex-col justify-center gap-2 p-5 text-6xl font-bold tracking-tighter drop-shadow-lg md:text-7xl md:drop-shadow-xl">
        <div className="flex-shrink-0 items-baseline sm:text-center">
          Abhineeth
        </div>
        <div className="flex-shrink-0 items-baseline sm:text-center">
          Adiraju
        </div>
      </div>
      <div className="z-10 flex w-full flex-row items-center justify-center gap-[2.5%] font-normal tracking-tighter md:gap-4 md:p-5 md:text-3xl">
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
              className={`absolute z-20`}
              style={convertXYToStyleObject(window.x, window.y)}
            >
              <DraggableWindow>
                <div className="items-center-justify-center mx-1 my-1 z-10 self-center text-2xl font-bold">
                  <Image
                    src={window.imageSrc}
                    height={200}
                    width={200}
                    alt={`gif!`}
                    unoptimized={true}
                    className="[user-select:none] [touch-action:none] [will-change:auto] transform-none"
                    draggable={false}
                  />
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
