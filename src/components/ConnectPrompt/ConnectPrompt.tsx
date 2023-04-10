import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const SignInHint = () => (
  <div className="absolute flex flex-col items-center w-full">
    <div className="w-3 h-3 rounded-tl-sm bg-[#38BDF8] rotate-45 -mb-2 mt-2"></div>
    <p className="text-xs text-center bg-[#38BDF8] rounded-md text-black px-2 py-1.5">
      Sign in to continue
    </p>
  </div>
);

const ConnectPrompt = () => {
  const { address } = useAccount();

  return (
    <div className="flex flex-col items-center justify-center flex-grow space-y-10 px-6">
      <div className="space-y-2 flex flex-col items-center text-center">
        <h1 className="text-2xl lg:text-8xl font-medium font-display" style={{ textShadow: "0 0 0px black"}}>
          The Ancients
        </h1>
        <p className="text-white bg-transparent" style={{ textShadow: "0 0 10px black"}}>
          Connect your Layer2 wallet to view exclusive token-gated content
        </p>
      </div>
      {address ? (
        <div className="relative">
          <ConnectKitButton />
          <SignInHint />
        </div>
      ) : (
        <ConnectKitButton />
      )}
    </div>
  );
};

export default ConnectPrompt;
