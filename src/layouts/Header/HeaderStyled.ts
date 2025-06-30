import styled from "@emotion/styled";

export const HeaderCon = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 24px;
  padding-bottom: 112px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1280px) {
    padding-top: 78px;
    padding-bottom: 224px;
    padding-left: 80px;
    padding-right: 64px;
  }
`;

export const HeaderLogoThumb = styled.div`
  & > img {
    width: 96px;
    height: 16px;

    @media (min-width: 1280px) {
      width: 240px;
      height: 38px;
    }
  }
`;

export const HeaderBtn = styled.button`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 18px;
  padding-right: 18px;

  font-size: 10px;

  background-color: transparent;
  color: #ff52c1;

  border: 1px solid #ff52c1;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(255, 82, 193, 0.4);

  @media (min-width: 1280px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;

    font-size: 16px;

    &:hover{
        cursor: pointer;
    }
  }
`;
