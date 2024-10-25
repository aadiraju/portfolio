import { MouseParallaxChild } from "react-parallax-mouse";
import Header from "../Header";
import Landing from "./landingSection";
import About from "./aboutSection";
import Projects from "./projectsSection";
import FunStuff from "./funStuffSection";
import { SpotifyStatsProps } from "../spotifyStatsPanel";
import React from "react";

const MainSection = ({ topTracks }: SpotifyStatsProps) => {
  return (
    <>
      <span className="z-10">
        <Header />
      </span>
      <div className="relative flex h-full w-full justify-center md:p-8">
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
    </>
  );
};

export default MainSection;
