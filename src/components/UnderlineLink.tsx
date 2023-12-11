import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type UnderlineLinkProps = {
  children: ReactNode;
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
        damping: 40
    }
  },
};
const UnderlineLink = ({ children, href, onClick }: UnderlineLinkProps) => {
  const motionElements = (
    <motion.div
      className="flex flex-col"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div variants={textStates}>{children}</motion.div>
      <motion.div
        className="h-[0.25vh] w-full rounded-full bg-white [transform-origin:0%]"
        variants={underlineStates}
      />
    </motion.div>
  );
  if (href) {
    return (
      <Link href={href} target="_blank">
        {motionElements}
      </Link>
    );
  }
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {motionElements}
    </div>
  );
};

export default UnderlineLink;
