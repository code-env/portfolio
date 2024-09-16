import Link from "next/link";
import TextGradient from "../_version-three/text-gradient";

const Logo = () => {
  return (
    <Link href="/">
      <TextGradient className="2xl:text-2xl text-lg font-bold lg:text-2xl relative">
        {`2{bkm}`}
        <span className="opacity-0 cursor-default pointer-events-none absolute">
          
        </span>
      </TextGradient>
    </Link>
  );
};

export default Logo;
