import { useSpring, useScroll, motion, MotionValue } from "framer-motion";

const ProgressBar = () => {
  const {scrollYProgress} = useScroll({offset: ["start 0.001", "end end"]});
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="fixed top-[30vh] right-[5vh] h-96 w-2 rounded-full bg-neutral-900">
      <motion.div className="h-full rounded-full bg-white [transform-origin:top]" style={{ scaleY }} />
    </div>
  );
};

export default ProgressBar;
