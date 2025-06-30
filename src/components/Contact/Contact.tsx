import * as SC from "./ContactsStyled";

import logoIcon from "../../assets/images/color_logo_transparent .svg";

const Contacts: React.FC = () => {
  return (
    <SC.ContactCon>
      <SC.ContactLogoThumb>
        <img src={logoIcon} alt="logo" />
      </SC.ContactLogoThumb>
      <SC.ContactContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</SC.ContactContent>
      <SC.ContactList>
        <SC.ContactItem>
            <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
        </SC.ContactItem>
        <SC.ContactItem>
            <a href="email:example@company.com">example@company.com</a>
        </SC.ContactItem>
      </SC.ContactList>
    </SC.ContactCon>
  );
};

export default Contacts;
