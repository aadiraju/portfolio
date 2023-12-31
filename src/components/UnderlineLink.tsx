import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type UnderlineLinkProps = {
  children: ReactNode;
  className?: string;
  underlineColor?: string;
} & ({ href: URL; onClick?: never } | { onClick: () => void; href?: never });

const underlineStates = {
  rest: {
    scale: 0,
  },
  hover: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const textStates = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 40,
    },
  },
};
const UnderlineLink = ({
  children,
  href,
  onClick,
  className,
  underlineColor = "bg-white",
}: UnderlineLinkProps) => {
  const motionElements = (
    <motion.span
      className={`flex flex-col`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div variants={textStates} className="flex flex-row gap-2">
        {children}
      </motion.div>
      <motion.div
        className={`h-[0.25vh] w-full rounded-full ${underlineColor} [transform-origin:0%]`}
        variants={underlineStates}
      />
    </motion.span>
  );
  if (href) {
    return (
      <Link href={href} className={className} target="_blank">
        {motionElements}
      </Link>
    );
  }
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      {motionElements}
    </div>
  );
};

export default UnderlineLink;
