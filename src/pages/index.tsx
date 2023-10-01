import Image from "next/image";
import { Aleo } from "next/font/google";
import Landing from "@/components/sections/landingSection";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const aleo = Aleo({ subsets: ["latin"] });

export default function Homie() {
  return (
    <main>
      <MouseParallaxContainer
        globalFactorX={0.01}
        globalFactorY={0.01}
        className={`flex min-h-screen items-center justify-center gap-6 px-7 py-0 ${aleo.className}`}
      >
        <div className="relative h-80 w-full max-w-lg p-8">
          {/* TODO: Make these components */}
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <div className="animate-blob from-33% absolute -right-4 top-0 -z-20 h-72 w-72 rounded-full bg-gradient-radial from-fuchsia-900 to-violet-900 to-90% opacity-70 mix-blend-screen blur-2xl filter" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <div className="animate-blob animation-delay-5000 from-33% absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-gradient-radial from-pink-900 to-rose-900 to-90% opacity-70 mix-blend-screen blur-2xl filter" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.001} factorY={0.001}>
            <Landing />
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </main>
  );
}
