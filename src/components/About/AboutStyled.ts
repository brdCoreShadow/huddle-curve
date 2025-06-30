import styled from "@emotion/styled";

import bgAboutMobTop from "../../assets/images/bgaboutMob.png";
import bgAboutMobBottom from "../../assets/images/bgMobBottom.png";

export const AboutList = styled.ul``;

export const AboutItem = styled.li`
  padding-left: 28px;
  padding-right: 28px;

  text-align: center;

  &:nth-child(1) {
    margin-bottom: 24px;

    padding-top: 180px;
    padding-bottom: 200px;

    background-image: url(${bgAboutMobTop});
    background-size: cover;
  }

  &:nth-child(2) {
    margin-top: 64px;
    margin-bottom: 120px;
  }

  &:nth-child(3) {
    margin-bottom: 8px;

    padding-top: 80px;
    padding-bottom: 276px;

    background-image: url(${bgAboutMobBottom});
    background-size: cover;
  }
`;

export const AboutPicThumb = styled.div`
margin-bottom: 40px;

& > img{
    width: 280px;
    height: 280px;

    margin-left: auto;
    margin-right: auto;
}
`

export const AboutContentCon = styled.div`
& > h4{
    margin-bottom: 16px;

    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;

    color: #00252E;
}

& > p{
    font-size: 14px;
    line-height: 1.5;

    color: #00252E;
}
`