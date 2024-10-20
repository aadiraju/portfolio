import Image from "next/image";
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
    <div className={`${isInView? 'bg-black': 'bg-white'} text-md flex flex-col rounded-xl px-5 py-4 gap-2 text-black shadow-xl`}>
      {topTracks.map((track, index) => (
        <Link key={index} href={new URL(track.url)} target="_blank">
          <motion.div
            className={`${isInView? 'bg-lime': 'bg-[var(--dynamic-color)] border-black'} flex flex-row items-center gap-2 md:gap-6 rounded-xl p-1 shadow-xl border-2`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, type: "spring", ...springConfigs }}
          >
            <Image
              loader={imageLoader}
              src={track.coverImageURL}
              alt={track.title}
              width={75}
              height={75}
              className={`${isInView? 'border-white': 'border-black'} overflow-hidden rounded-lg border-4 shrink-0`}
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
