import Image from "next/image";
import { motion } from "framer-motion";
import { GITHUB, LINKEDIN } from "@/data/links";
import { useClickActions } from "@/hooks/useClickActions";
import UnderlineLink from "./UnderlineLink";

const Header = () => {
  const {openResume, openEmail} = useClickActions();
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
        <UnderlineLink href={GITHUB}>Github</UnderlineLink>
        <div>|</div>
        <UnderlineLink onClick={openResume}>Resume</UnderlineLink>
        <div>|</div>
        <UnderlineLink href={LINKEDIN}>LinkedIn</UnderlineLink>
        <div>|</div>
        <UnderlineLink onClick={openEmail}>Email</UnderlineLink>
      </div>
    </div>
  );
};

export default Header;
