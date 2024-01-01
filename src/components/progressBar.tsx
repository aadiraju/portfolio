import { useSpringify } from "@/lib/utils";
import { useScroll, motion } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll({ offset: ["start 0.001", "end end"] });
  return (
    <div className="hidden md:block fixed right-[5vh] top-[30vh] h-96 w-2 rounded-full bg-neutral-900">
      <motion.div
        className="h-full rounded-full bg-white [transform-origin:top]"
        style={{ scaleY: useSpringify(scrollYProgress) }}
      />
    </div>
  );
};

export default ProgressBar;
