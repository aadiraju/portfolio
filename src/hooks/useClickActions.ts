import { useRouter } from "next/navigation";
import { RESUME_PATH, EMAIL } from "@/data/links";

const useClickActions = () => {
  const router = useRouter();

  const openResume = () => {
    window.open(RESUME_PATH, "_blank");
  };

  const openEmail = () => {
    router.push(`mailto:${EMAIL}`);
  };

  return {
    openEmail,
    openResume,
  };
};

export { useClickActions };
