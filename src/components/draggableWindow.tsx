import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type DraggableWindowProps = {
  children: ReactNode;
  className?: string;
  dragElastic?: number;
};

const DraggableWindow = ({ children, className, dragElastic = 0.5 }: DraggableWindowProps) => {
  return (
    <motion.div
      className={`${className} mx-auto my-10`}
      drag
      dragSnapToOrigin
      dragElastic={dragElastic}
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
      dragConstraints={{
        top: 0, 
        bottom: 0, 
        left: 0,
        right: 0
      }}
    >
      <div
        key="topbar"
        className={`flex h-[10%] w-full items-center justify-end space-x-1.5 rounded-t-sm border-2 bg-white/10 px-2 py-2`}
      >
        <span className="h-[0.25vh] w-full bg-[var(--dynamic-color)]" />
      </div>
      <div
        key="content"
        className="flex h-full w-full rounded-b-sm border-2 border-t-0 items-center"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default DraggableWindow;
