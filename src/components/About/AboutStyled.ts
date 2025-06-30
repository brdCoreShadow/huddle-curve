import styled from "@emotion/styled";

import bgAboutMobTop from "../../assets/images/bgaboutMob.png";
import bgAboutMobBottom from "../../assets/images/bgMobBottom.png";
import bgAboutDesktopTop from "../../assets/images/aboutBgTopDesk.png";
import bgAboutDesktopBottom from "../../assets/images/aboutBgBottomDesk.png";

export const AboutList = styled.ul``;

export const AboutItem = styled.li`
  padding-left: 28px;
  padding-right: 28px;

  text-align: center;

  @media (min-width: 1280px) {
    display: flex;
  }

  &:nth-of-type(1) {
    margin-bottom: 24px;

    padding-top: 180px;
    padding-bottom: 200px;

    background-image: url(${bgAboutMobTop});
    background-size: cover;

    @media (min-width: 1280px) {
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;

      background-image: url(${bgAboutDesktopTop});
    }
  }

  &:nth-of-type(2) {
    margin-top: 64px;
    margin-bottom: 120px;

    @media (min-width: 1280px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 8px;

    padding-top: 80px;
    padding-bottom: 276px;

    background-image: url(${bgAboutMobBottom});
    background-size: cover;

    @media (min-width: 1280px) {
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;

      background-image: url(${bgAboutDesktopBottom});
    }
  }
`;

export const AboutPicThumb = styled.div`
  margin-bottom: 40px;

  & > img {
    width: 280px;
    height: 280px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1280px) {
      width: 560px;
      height: 560px;
    }
  }
`;

export const AboutContentCon = styled.div`
  @media (min-width: 1280px) {
    width: 520px;

    text-align: left;
  }

  & > h4 {
    margin-bottom: 16px;

    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;

    color: #00252e;

    @media (min-width: 1280px) {
      margin-bottom: 26px;

      font-size: 40px;
    }
  }

  & > p {
    font-size: 14px;
    line-height: 1.5;

    color: #00252e;

    @media (min-width: 1280px){
        font-size: 16px;
    }
  }
`;
