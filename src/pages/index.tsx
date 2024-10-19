import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import { MouseParallaxContainer } from "react-parallax-mouse";
import ProgressBar from "@/components/progressBar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { topTracks } from "@/lib/spotify";
import { Track } from "@spotify/web-api-ts-sdk";
import MainSection from "@/components/sections/mainSection";
import { DisplayTrack } from "@/components/spotifyStatsPanel";
import { motion, useTime, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

export const manrope = Manrope({ subsets: ["latin"] });
export const bungieFont = localFont({ src: "./fonts/BNBungie-Clean.otf" });

async function retrieveTopTracks(): Promise<DisplayTrack[]> {
  const response = await topTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((track: Track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImageURL: track.album.images[1].url,
  }));
  return tracks;
}

export const getStaticProps = (async (context) => {
  const topTracks = await retrieveTopTracks();
  return { props: { topTracks } };
}) satisfies GetStaticProps<{
  topTracks: DisplayTrack[];
}>;

//TODO: Use ShadCN
// https://ui.shadcn.com/docs
/**
 * Ideas:
 * - On the home page, maybe some kind of 1-bit barely moving pixel art depicting some of my hobbies/traits. These would be places in (draggable?) windows floating around.
 * would use some basic mascot character or something. Like cooking, gaming, coding so on.
 * - Add a splash of text highlights or hover highlights that changes hue gradually and constantly.
 * - Steal some ideas from https://stripe.dev/
 */

/* 
        TODO: Ideas for landing stuff:

        1-bit pixel art
        black and white game windows or something perhaps
        maybe the pixel art is just small animations of some unique things about me, or just about devops, programmer, and designer
        possibly use mascot character, or just a 1-bit blob, maybe even a bee-themed mascot?

        the windows can be interactive perhaps, or they just slowly hover around the background, and move a litle based on mouse movement.
  */

const Home = ({
  topTracks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const time = useTime();
  const bgHue = useTransform(time, [0, 50000], [0, 360], { clamp: false });
  const [highlightColor, setHighlightColor] = useState("hsla(0, 69%, 69%, 100%)");

  useEffect(() => {
    bgHue.on("change", (latestHue) =>
      setHighlightColor(`hsla(${latestHue}, 69%, 69%, 100%)`),
    );
  }, [bgHue]);
  return (
    <>
      <Head>
        <title>Abhineeth Adiraju</title>
      </Head>
      <motion.main style={{
        "--dynamic-color": highlightColor
      } as React.CSSProperties}>
        <div className="fixed z-[-20] h-full w-full bg-black bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff10_33%,#000_100%)]"></div>
        <MouseParallaxContainer
          globalFactorX={0.05}
          globalFactorY={0.05}
          resetOnLeave
          inverted
        >
          <MainSection topTracks={topTracks} />
        </MouseParallaxContainer>
      </motion.main>
      <ProgressBar />
    </>
  );
};
export default Home;
