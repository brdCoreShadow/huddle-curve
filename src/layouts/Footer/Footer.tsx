import * as SC from "./FooterStyled";

import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Contacts from "@/components/Contact/Contact";
import SocNet from "@/components/SocNet/SocNet";

const Footer: React.FC = () => {
  return (
    <SC.FooterCon>
      <NewsLetter />
      <div>
      <Contacts/>
      <SocNet/>
      </div>
    </SC.FooterCon>
  );
};

export default Footer;
