import { MotionValue, useSpring } from "framer-motion";

function springify(rawMotionValue: MotionValue<number>) {
    const springifiedValue = useSpring(rawMotionValue, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    return springifiedValue;
  }


  export {
    springify
  }