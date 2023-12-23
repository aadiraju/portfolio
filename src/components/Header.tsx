import Image from "next/image";
import { useSpring, useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { GITHUB, LINKEDIN } from "@/data/links";
import { useClickActions } from "@/hooks/useClickActions";
import UnderlineLink from "./UnderlineLink";

function springify(rawMotionValue: MotionValue<number>) {
  const springifiedValue = useSpring(rawMotionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return springifiedValue;
}

const Header = () => {
  const {scrollYProgress} = useScroll();
  const scaleLogoRaw = useTransform(scrollYProgress, [0, 0.25], [1, 0.75]);
  const scaleMenuRaw = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const { openResume, openEmail } = useClickActions();
  return (
    <div className="fixed top-2 flex h-[15vh] w-full px-8">
      <div className="flex items-center justify-start">
        <motion.span 
        style= {{scale: springify(scaleLogoRaw)}}
        className="rounded-lg backdrop-blur-md p-3">
          <Image
            src="/logo.svg"
            alt="Site Logo"
            width={75}
            height={75}
            priority
          />
        </motion.span>
      </div>
      <div className="flex basis-full items-center justify-end text-2xl font-medium tracking-tighter">
        <motion.div style={{scale: springify(scaleMenuRaw)}} className="flex gap-2 backdrop-blur-md rounded-lg p-4">
          <UnderlineLink href={GITHUB}>Github</UnderlineLink>
          <div>|</div>
          <UnderlineLink onClick={openResume}>Resume</UnderlineLink>
          <div>|</div>
          <UnderlineLink href={LINKEDIN}>LinkedIn</UnderlineLink>
          <div>|</div>
          <UnderlineLink onClick={openEmail}>Email</UnderlineLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
