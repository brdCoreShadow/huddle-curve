import NewsLetter from "@/components/NewsLetter/NewsLetter";
import * as SC from "./FooterStyled";
import Contacts from "@/components/Contact/Contact";

const Footer: React.FC = () => {
  return (
    <SC.FooterCon>
      <NewsLetter />
      <Contacts/>
    </SC.FooterCon>
  );
};

export default Footer;
