import styled from "@emotion/styled";

import bgAboutMobTop from "../../assets/images/bgaboutMob.png";

export const AboutList = styled.ul``;

export const AboutItem = styled.li`
  padding-left: 28px;
  padding-right: 28px;

  text-align: center;

  &:nth-child(1) {
    margin-bottom: 68px;

    padding-top: 180px;
    padding-bottom: 132px;

    background-image: url(${bgAboutMobTop});
    background-size: contain;
  }
`;
