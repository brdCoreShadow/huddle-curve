import styled from "@emotion/styled";

export const ContactCon = styled.div`
  margin-bottom: 48px;
`;

export const ContactLogoThumb = styled.div`
  margin-bottom: 16px;

  & > img {
    width: 200px;
    height: 32px;
  }
`;

export const ContactContent = styled.p`
  margin-bottom: 40px;

  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
`;

export const ContactList = styled.ul``;

export const ContactItem = styled.li`
  font-size: 14px;
  line-height: 1.5;

  & > a {
    position: relative;
    padding-left: 40px;

    color: #fff;
  }

  &:nth-of-type(1) {
    margin-bottom: 16px;

    & > a::before {
      position: absolute;
      top: 0;
      left: 0;

      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;

      background-image: url("data:image/svg+xml;utf8,<svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M-3-3h24v24H-3z'/><path d='M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z' fill='%23FFF'/></g></svg>");

      background-repeat: no-repeat;
    }
  }

   &:nth-of-type(2) {

    & > a::before {
      position: absolute;
      top: 0;
      left: 0;

      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;

      background-image: url("data:image/svg+xml;utf8,<svg width='20' height='16' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M-2-4h24v24H-2z'/><path d='M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z' fill='%23FFF'/></g></svg>");

      background-repeat: no-repeat;
    }
  }
`;
