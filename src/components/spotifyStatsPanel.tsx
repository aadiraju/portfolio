import Image from "next/image";

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
    <div className="flex flex-col text-md text-ellipsis px-10 py-4 rounded-xl bg-maroon text-white shadow-xl">
      {topTracks.map((track, index) => (
        <div key={index} className="flex flex-row gap-6 items-center rounded-xl shadow-lg p-1">
          <Image
            loader={imageLoader}
            src={track.coverImageURL}
            alt={track.title}
            width={75}
            height={75}
            className="overflow-hidden rounded-lg border-4"
            priority
          />
          <div className="flex flex-col p-1">
            {/* TODO: Make these links a bit better */}
            <a href={track.url}><div className="font-bold">{track.title}</div></a>
            <div>{track.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpotifyStatsPanel;
