import { useSpringify } from "@/lib/utils";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";
import { bungieFont, manrope } from "@/pages";
import UnderlineLink from "../UnderlineLink";
import { decode } from "html-entities";
import { HOMIE_WEBSITES } from "@/data/links";
import SpotifyStatsPanel, { SpotifyStatsProps } from "../spotifyStatsPanel";
import React from "react";
interface ParallaxProps {
  keyPrefix: string;
  children: string;
  childRepetitions: number;
  baseVelocity: number;
  className: string;
}

const ParallaxText = ({
  keyPrefix,
  children,
  childRepetitions = 4,
  baseVelocity = 100,
  className,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpringify(scrollVelocity);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const skewFactor = useTransform(smoothVelocity, [-1000, 1000], [-30, 30], {
    clamp: false,
  });

  // Text Wrapping Constraints
  const wrapPercent = -200;
  const wrapStart = -10;
  const x = useTransform(
    baseX,
    (v) => `${wrap(wrapStart, wrapStart + wrapPercent, v)}%`,
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className={className} style={{ x }}>
      {Array.from({ length: childRepetitions }, (_, i) => i).map((elem) => (
        <motion.span style={{ skew: skewFactor }} key={`${keyPrefix}${elem}`}>
          {children}
        </motion.span>
      ))}
    </motion.div>
  );
};

const FunStuff = ({ topTracks }: SpotifyStatsProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({ offset: ["start 0.001", "end end"] });
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const scaleOffset = isMobile ? [0.69, 0.7] : [0.99, 1];
  const scale = useTransform(scrollYProgress, scaleOffset, [0, 500]);
  const symbolArray = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];
  return (
    <div
      key="funstuff"
      className={`z-10 mb-[10%] mt-[5%] flex h-[screen] w-full flex-col p-[5%] tracking-tight md:mb-0 md:mt-[5vh] md:p-2 ${
        isInView ? "text-black" : "text-white"
      }`}
    >
      <div
        key="scrollingtext"
        className={`${bungieFont.className} z-20 mb-[2%] tracking-widest`}
      >
        <ParallaxText
          keyPrefix="text1"
          baseVelocity={7.5}
          childRepetitions={100}
          className="flex gap-4 text-[10vh] font-semibold"
        >
          Cool
        </ParallaxText>
        <ParallaxText
          keyPrefix="text2"
          baseVelocity={-7.5}
          childRepetitions={100}
          className="flex gap-4 text-[10vh] font-semibold"
        >
          Stuff
        </ParallaxText>
      </div>
      <div
        key="mainsection"
        className="gap-10r z-20 flex h-full flex-col md:flex-row"
      >
        <div className="flex flex-col gap-6 self-center md:ml-[5vh] md:basis-1/3">
          <motion.div className={`${bungieFont.className} text-5xl`}>
            My Current Earworms
          </motion.div>
          <SpotifyStatsPanel topTracks={topTracks} isInView={isInView} />
        </div>
        <div className="mt-[15%] flex flex-col gap-[5%] md:mx-[5%] md:mt-0">
          <motion.div className={`${bungieFont.className} text-5xl`}>
            Websites from the Homies
            <span
              className={`mx-1 align-top text-xl font-bold ${manrope.className}`}
            >
              (✿◠‿◠)
            </span>
          </motion.div>
          <div className="mt-[5%] flex flex-col gap-6 text-2xl font-extrabold underline underline-offset-[1vh] md:mt-0 md:flex-row md:font-semibold md:no-underline">
            <div className="hidden md:block">{decode(symbolArray[0])}</div>
            {HOMIE_WEBSITES.map((website, index) => (
              <React.Fragment key={`parent${index}`}>
                <div key={`link${index}`}>
                  <UnderlineLink
                    href={website.hyperlink}
                    className="w-[5vh]"
                    underlineColor={isInView? 'bg-black': undefined}
                  >
                    {website.linkText}
                  </UnderlineLink>
                </div>
                <div className="hidden md:block" key={`symb${index}`}>
                  {decode(symbolArray[(index + 1) % symbolArray.length])}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        key="slidingbg"
        ref={containerRef}
        initial={{ scale: 1, z: 10 }}
        style={{ scale: useSpringify(scale) }}
        animate={{ z: isInView ? -30 : 10 }}
        transition={{
          duration: 0.8,
          type: "inertia",
          velocity: 50,
        }}
        className="absolute bottom-[0%] h-[1vh] w-[90%] justify-end bg-lavender"
      />
    </div>
  );
};

export default FunStuff;
