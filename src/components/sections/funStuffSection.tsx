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
} from "framer-motion";
import { useRef } from "react";
import { bungieFont, manrope } from "@/pages";
import UnderlineLink from "../UnderlineLink";
import { decode } from "html-entities";
import { HOMIE_WEBSITES } from "@/data/links";
import SpotifyStatsPanel, { SpotifyStatsProps } from "../spotifyStatsPanel";
interface ParallaxProps {
  children: string;
  childRepetitions: number;
  baseVelocity: number;
  className: string;
}

const ParallaxText = ({
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
        <motion.span style={{ skew: skewFactor }} key={elem}>
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
  const scale = useTransform(scrollYProgress, [0.9, 1], [0, 200]);
  const symbolArray = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];
  return (
    <>
      <div
        className={`z-10 mt-5 flex max-h-[100vh] h-[100vh] w-[100vw] flex-col p-5 tracking-tight ${
          isInView ? "text-black" : "text-white"
        }`}
      >
        <div
          className={`${bungieFont.className} z-20 mb-[5vh] tracking-widest`}
        >
          <ParallaxText
            baseVelocity={7.5}
            childRepetitions={100}
            className="flex gap-4 text-[10vh] font-semibold"
          >
            Cool
          </ParallaxText>
          <ParallaxText
            baseVelocity={-7.5}
            childRepetitions={100}
            className="flex gap-4 text-[10vh] font-semibold"
          >
            Stuff
          </ParallaxText>
        </div>
        <div className="z-20 flex h-full gap-10">
          <div className="flex flex-col gap-6 basis-1/3 ml-[5vh]">
            <motion.div className={`${bungieFont.className} text-5xl`}>
              My Current Earworms
            </motion.div>
            <SpotifyStatsPanel topTracks={topTracks} />
          </div>
          <div className="flex flex-col gap-6">
            <motion.div className={`${bungieFont.className} text-5xl`}>
              Websites from the Homies
              <span
                className={`mx-1 align-top text-xl font-bold ${manrope.className}`}
              >
                (✿◠‿◠)
              </span>
            </motion.div>
            <div className="flex gap-6 text-3xl font-normal">
              <div>{decode(symbolArray[0])}</div>
              {HOMIE_WEBSITES.map((website, index) => (
                <>
                  <div key={index}>
                    <UnderlineLink
                      href={website.hyperlink}
                      className="w-[5vh]"
                      underlineColor="bg-black"
                    >
                      {website.linkText}
                    </UnderlineLink>
                  </div>
                  <div key={index}>
                    {decode(symbolArray[(index + 1) % symbolArray.length])}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          ref={containerRef}
          initial={{ scale: 1, z: 10 }}
          style={{ scale: useSpringify(scale) }}
          animate={{ z: -30 }}
          transition={{
            duration: 0.8,
            type: "inertia",
            velocity: 50,
          }}
          className="h-[10vh] w-[90%] justify-end bg-lavender"
        />
      </div>
    </>
  );
};

export default FunStuff;
