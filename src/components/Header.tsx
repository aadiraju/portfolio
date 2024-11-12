import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { GITHUB, LINKEDIN } from "@/data/links";
import { useClickActions } from "@/hooks/useClickActions";
import UnderlineLink from "@/components/UnderlineLink";
import { useSpringify } from "@/lib/utils";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleLogoRaw = useTransform(scrollYProgress, [0, 0.25], [1, 0.75]);
  const scaleMenuRaw = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const { openResume, openEmail } = useClickActions();
  return (
    <div className="fixed top-0 flex h-[15vh] w-full px-[5%] md:top-2 md:h-[15vh] md:px-8">
      <div className="flex items-center justify-start">
        <motion.div
          style={{ scale: useSpringify(scaleLogoRaw) }}
          className="relative min-h-[4vh] min-w-[5vh] md:hidden"
        >
          <Image
            src="/logosmall.png"
            alt="Site Logo"
            className="rounded-lg p-[10%] shadow-sm backdrop-blur-sm"
            fill
            sizes="50vw, 10vw, 5vh"
            priority
          />
        </motion.div>
        <motion.span
          style={{ scale: useSpringify(scaleLogoRaw) }}
          className="hidden rounded-xl p-3 shadow-2xl backdrop-blur-md md:block"
        >
          <Image
            src="/logo.svg"
            alt="Site Logo"
            width={75}
            height={75}
            priority
            className="transform-none [touch-action:none] [user-select:none] [will-change:auto]"
            draggable={false}
          />
        </motion.span>
      </div>
      <div className="flex basis-full items-center justify-end text-sm tracking-tighter sm:text-xl md:text-2xl md:font-medium">
        <motion.div
          style={{ scale: useSpringify(scaleMenuRaw) }}
          className="mr-[2%] flex gap-1 rounded-lg shadow-xl backdrop-blur-sm md:gap-2 md:rounded-xl md:p-4 md:shadow-2xl md:backdrop-blur-md"
        >
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
