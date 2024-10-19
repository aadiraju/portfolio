import { springConfigs, useSpringify } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="z-10 flex h-[100vh] w-full flex-col justify-center">
      <div className="items-center justify-center self-center">
        <div className="flex flex-col justify-center p-5 gap-2 text-6xl font-bold tracking-tighter drop-shadow-lg md:text-7xl md:drop-shadow-xl">
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
      </div>
      <div className="absolute mt-[70vh] items-end self-center md:hidden">
        <motion.div
          animate={{ y: ["25%", "-25%"] }}
          transition={{
            repeatType: "mirror",
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="relative min-h-[4vh] min-w-[4vh]"
        >
          <Image
            src="/downarrowsmall.png"
            alt="downward arrow"
            className="rounded-lg p-[5%] shadow-sm backdrop-blur-sm"
            fill
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
