import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import Landing from "@/components/sections/landingSection";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import ProgressBar from "@/components/progressBar";
import Header from "@/components/Header";
import About from "@/components/sections/aboutSection";
import Projects from "@/components/sections/projectsSection";
import FunStuff from "@/components/sections/funStuffSection";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { DisplayTrack } from "@/components/spotifyStatsPanel";
import { topTracks } from "@/lib/spotify";
import { Track } from "@spotify/web-api-ts-sdk";

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
  return (
    <>
      <Head>
        <title>Abhineeth Adiraju</title>
      </Head>
      <main>
        <div className="fixed z-[-20] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff10_33%,#000_100%)]"></div>
        <MouseParallaxContainer
          globalFactorX={0.05}
          globalFactorY={0.05}
          resetOnLeave
          inverted
          className={`flex h-full min-h-screen items-center justify-center gap-6 px-7 py-0 ${manrope.className}`}
        >
          <span className="z-10">
            <Header />
          </span>
          <div className="relative flex h-full w-full justify-center p-8">
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
        </MouseParallaxContainer>
      </main>
      <ProgressBar />
    </>
  );
};
export default Home;
