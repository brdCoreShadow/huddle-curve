import styled from "@emotion/styled";

export const HeroCon = styled.div`
  padding-bottom: 120px;
  padding-left: 40px;
  padding-right: 40px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-left: 212px;
    padding-right: 212px;
  }
`;

export const HeroContentCon = styled.div`
  margin-bottom: 48px;

  text-align: center;

  & > h3 {
    margin-bottom: 24px;

    font-size: 24px;
    line-height: 1.5;
    font-weight: 700;

    color: #00252e;

    @media (min-width: 1280px) {
      font-size: 48px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;

    color: #00252e;

    @media (min-width: 1280px) {
      width: 640px;

      margin-left: auto;
      margin-right: auto;

      font-size: 20px;
    }
  }
`;

export const HeroBtn = styled.button`
  margin-bottom: 104px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 40px;
  padding-right: 40px;

  font-size: 12px;
  line-height: 1.5;
  font-weight: 700;

  background-color: #ff52c1;
  color: #fff;

  border-radius: 20px;

  box-shadow: 0 4px 12px rgba(255, 82, 193, 0.4);

  @media (min-width: 1280px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 100px;
    padding-right: 100px;

    font-size: 20px;
  }
`;

export const HeroPicThumb = styled.div`
  & > img {
    width: 296px;
    height: 209px;

    @media (min-width: 1280px){
        width: 896px;
        height: auto;

        margin-left: auto;
        margin-right: auto;
    }
  }
`;
