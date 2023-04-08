import FooterLink from "./FooterLink";
import { TwitterIcon, LoopExchangeIcon } from "../Icons/Icons";
import { getCurrentYear } from "../../utils/generic";

const Footer = () => {
  const currentYear = getCurrentYear();
  const twitterLink =
    "https://twitter.com/stneicnA";
  const sourceCodeLink = "source code";

  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        {currentYear},{" "}
        <FooterLink href="https://loopexchange.art/collection/ancients">The Ancients is availble on LoopExchange</FooterLink>
      </p>
      <div className="space-x-4">
        <FooterLink href={twitterLink}>
          <p className="hidden md:inline-block"></p>
          <TwitterIcon className="w-5 h-5" />
        </FooterLink>
      </div>
    </div>
  );
};

export default Footer;
