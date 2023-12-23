import { MotionValue, useSpring } from "framer-motion";

function useSpringify(rawMotionValue: MotionValue<number>) {
    const springifiedValue = useSpring(rawMotionValue, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    return springifiedValue;
  }


  export {
    useSpringify
  }