import * as SC from "./HeaderStyled"

import logoIcon from "../../assets/images/logo.svg"

const Header: React.FC = () => {
  return (
    <SC.HeaderCon>
      <SC.HeaderLogoThumb>
        <img src={logoIcon} alt="logo" />
      </SC.HeaderLogoThumb>
      <SC.HeaderBtn type="button">Try It Free</SC.HeaderBtn>
    </SC.HeaderCon>
  );
};

export default Header;
