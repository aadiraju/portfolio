import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type DraggableWindowProps = {
  children: ReactNode;
  className?: string;
  dragElastic?: number;
};

const DraggableWindow = ({
  children,
  className,
  dragElastic = 0.8,
}: DraggableWindowProps) => {
  const [dragging, setDrag] = useState(false);
  return (
    <motion.div
      className={`${className} mx-auto my-auto ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      drag
      onDragStart={() => setDrag(true)}
      onDragEnd={() => setDrag(false)}
      dragSnapToOrigin
      dragElastic={dragElastic}
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
      dragConstraints={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <span>
        <div
          key="topbar"
          className={`flex h-[10%] w-full items-center justify-end space-x-1.5 rounded-t-sm border-2 bg-white/10 px-2 py-2`}
        >
          <span className="h-[0.25vh] w-full bg-[var(--dynamic-color)]" />
        </div>
        <div
          key="content"
          className="flex h-full w-full items-center rounded-b-sm border-2 border-t-0"
        >
          {children}
        </div>
      </span>
    </motion.div>
  );
};

export default DraggableWindow;
