import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="fixed top-0 flex h-[15vh] w-full px-8">
      <div className="w-[10vh] pt-5 flex-initial justify-start">
        <Image
          src="/logo.svg"
          alt="Site Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex basis-full items-center justify-end gap-2 text-2xl font-medium tracking-tighter">
        <a>Github</a>
        <div>|</div>
        <a>Resume</a>
        <div>|</div>
        <a>LinkedIn</a>
      </div>
    </div>
  );
};

export default Header;
