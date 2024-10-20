import { MouseParallaxChild } from "react-parallax-mouse";
import Header from "../Header";
import Landing from "./landingSection";
import About from "./aboutSection";
import Projects from "./projectsSection";
import FunStuff from "./funStuffSection";
import { SpotifyStatsProps } from "../spotifyStatsPanel";
import { manrope } from "@/pages";
import { motion } from "framer-motion";
import React from "react";

const MainSection = ({ topTracks }: SpotifyStatsProps) => {
  return (
    <motion.div
      className={`flex h-full min-h-screen items-center justify-center py-0 md:gap-6 md:px-7 ${manrope.className} selection:bg-[var(--dynamic-color)]`}
    >
      <span key="header" className="z-10">
        <Header />
      </span>
      <div key="content" className="relative flex h-full w-full justify-center md:p-8">
        <MouseParallaxChild
          factorX={0.15}
          factorY={0.15}
          className="w-full justify-items-center"
        >
          <Landing />
          <About />
          <Projects />
          {/* <WorkExperience /> */}
          <FunStuff topTracks={topTracks} />
        </MouseParallaxChild>
      </div>
    </motion.div>
  );
};

export default MainSection;
