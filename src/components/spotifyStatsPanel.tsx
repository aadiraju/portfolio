import Image from "next/image";
import UnderlineLink from "./UnderlineLink";
import { motion } from "framer-motion";
import { springConfigs } from "@/lib/utils";
import Link from "next/link";

export type DisplayTrack = {
  title: string;
  artist: string;
  url: string;
  coverImageURL: string;
};

export type SpotifyStatsProps = {
  topTracks: DisplayTrack[];
};

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const SpotifyStatsPanel = ({ topTracks }: SpotifyStatsProps) => {
  return (
    <div className="text-md flex flex-col rounded-xl bg-black px-5 md:px-10 py-4 gap-2 text-black shadow-xl">
      {topTracks.map((track, index) => (
        <Link href={new URL(track.url)} target="_blank">
          <motion.div
            key={index}
            className="flex flex-row items-center gap-2 md:gap-6 rounded-xl p-1 shadow-xl bg-lime"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, type: "spring", ...springConfigs }}
          >
            <Image
              loader={imageLoader}
              src={track.coverImageURL}
              alt={track.title}
              width={75}
              height={75}
              className="overflow-hidden rounded-lg border-4 shrink-0"
              priority
            />
            <div className="flex flex-col p-1 w-full">
              <div className="font-extrabold">{track.title}</div>
              <div className="text-sm">{track.artist}</div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default SpotifyStatsPanel;
