import { Manrope } from "next/font/google";
import Landing from "@/components/sections/landingSection";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import ProgressBar from "@/components/progressBar";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <main>
        <div className="fixed z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#ffffff10_33%,#000_100%)]"></div>
        <MouseParallaxContainer
          globalFactorX={0.05}
          globalFactorY={0.05}
          resetOnLeave
          inverted
          className={`flex h-full min-h-screen items-center justify-center gap-6 px-7 py-0 ${manrope.className}`}
        >
          <Header />
          <div
            className={`flex h-full flex-col items-center justify-center gap-6 px-7 py-0 ${manrope.className}`}
          >
            <div className="relative flex h-full w-full justify-center p-8">
              <MouseParallaxChild
                factorX={0.15}
                factorY={0.15}
                className="w-full justify-items-center"
              >
                <Landing />
              </MouseParallaxChild>
            </div>
          </div>
          
        </MouseParallaxContainer>
      </main>
      <ProgressBar />
    </>

    // https://www.researchgate.net/publication/374315197_An_Open_CS1_Learning_Platform_to_Promote_and_Incentivize_Deliberate_Practice
    // https://www.researchgate.net/publication/374314494_JUnit_An_Open_Educational_Tool_for_Simplifying_Unit_Testing
    //  https://canvas-gamification.github.io/docs/

    //https://github.com/pmndrs/drei#scrollcontrols
    //https://codesandbox.io/s/4m0d0?file=/src/App.js
  );
};
export default Home;
