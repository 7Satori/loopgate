import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import Link from "next/link";
import LogoBrandLight from "@/public/images/logo/loopgate-brand-light.svg";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center py-3 px-4 sm:px-6 sticky top-0 border-b sm:border-b-0 border-white/10 bg-slate-0/0 backdrop-blur-lg z-10">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <Image src={LogoBrandLight} alt="The Ancients Logo" height={32} />
        </div>
        <ConnectKitButton />
      </div>
    </div>
  );
};

export default Header;