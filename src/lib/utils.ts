import { MotionValue, useSpring } from "framer-motion";

const springConfigs = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};
function useSpringify(rawMotionValue: MotionValue<number>) {
  const springifiedValue = useSpring(rawMotionValue, springConfigs);
  return springifiedValue;
}

export { useSpringify, springConfigs };
