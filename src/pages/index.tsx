import Image from "next/image";
import { Aleo } from "next/font/google";
import Landing from "@/components/sections/landingSection";

const aleo = Aleo({ subsets: ["latin"] });

export default function Homie() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center gap-6 px-7 py-0 ${aleo.className}`}
    >
      <div className="relative h-80 w-full max-w-lg p-8">
        <div className="absolute -right-4 top-0 -z-20 h-72 w-72 rounded-full bg-gradient-radial from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% opacity-60 mix-blend-screen blur-2xl filter" />
        <Landing />
      </div>
    </main>
  );
}
