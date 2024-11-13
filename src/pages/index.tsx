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
import { motion, useTime, useTransform } from "motion/react";
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
        <div className="fixed z-[-20] h-full w-full bg-black bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff77_33%,#000_100%)]"></div>
        <MouseParallaxContainer
          globalFactorX={0.05}
          globalFactorY={0.05}
          resetOnLeave
          inverted
          className={`flex h-full min-h-screen items-center justify-center md:gap-6 md:px-7 py-0 ${manrope.className} selection:bg-[var(--dynamic-color)]`}
        >
          <MainSection topTracks={topTracks} />
        </MouseParallaxContainer>
      </motion.main>
      <ProgressBar />
    </>
  );
};
export default Home;
