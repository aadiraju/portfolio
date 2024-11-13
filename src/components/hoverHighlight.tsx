import React, { ReactNode } from "react";
import { motion } from "motion/react";

type HoverHighlightProps = {
  children: ReactNode;
  className?: string;
  highlightColor?: string;
};

const HoverHighlight = ({ children, className, highlightColor = "var(--dynamic-color)" }: HoverHighlightProps) => {
  return (
    <motion.span
      className={`${className} hover:bg-[${highlightColor}]`}
    >
      {children}
    </motion.span>
  );
};

export default HoverHighlight;
