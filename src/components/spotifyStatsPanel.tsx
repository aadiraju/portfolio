import Image from "next/image";
import { motion } from "motion/react";
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
  isInView?: boolean;
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

const SpotifyStatsPanel = ({ topTracks, isInView }: SpotifyStatsProps) => {
  return (
    <div
      className={`${
        isInView ? "bg-black" : "bg-white"
      } text-md flex flex-col gap-2 rounded-xl px-5 py-4 text-black shadow-xl`}
    >
      {topTracks.map((track, index) => (
        <Link key={index} href={new URL(track.url)} target="_blank">
          <motion.div
            className={`${
              isInView ? "bg-lime" : "border-black bg-[var(--dynamic-color)]"
            } flex flex-row items-center gap-2 rounded-xl border-2 p-1 shadow-xl md:gap-6`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, type: "spring", ...springConfigs }}
          >
            <Image
              loader={imageLoader}
              src={track.coverImageURL}
              alt={track.title}
              width={75}
              height={75}
              className={`${
                isInView ? "border-white" : "border-black"
              } shrink-0 overflow-hidden rounded-lg border-4`}
              priority
            />
            <div className="flex w-full flex-col p-1">
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
