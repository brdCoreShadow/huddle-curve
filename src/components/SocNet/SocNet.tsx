import * as SC from "./SocNetStyled"

import fbIcon from "../../assets/images/post-facebook.png"
import instagramIcon from "../../assets/images/instagram.png"
import twittericon from "../../assets/images/post-twitter.png"

const SocNet:React.FC = () => {
  return (
    <SC.SocNetList>
      <li>
        <img src={fbIcon} alt="fb" />
      </li>
      <li>
        <img src={instagramIcon} alt="instagram" />
      </li>
      <li>
        <img src={twittericon} alt="twitter" />
      </li>
    </SC.SocNetList>
  );
};

export default SocNet;
