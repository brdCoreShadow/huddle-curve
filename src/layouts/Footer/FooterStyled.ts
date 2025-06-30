import styled from "@emotion/styled";

export const FooterCon = styled.footer`
  padding-top: 112px;
  padding-bottom: 48px;
  padding-left: 28px;
  padding-right: 28px;

  background-image: url("data:image/svg+xml;utf8,<svg width='375' height='839' viewBox='0 0 375 839' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 20.7556C0 20.7556 86.6457 -17.7179 207.792 20.7556C328.938 59.229 332.12 25.5803 375.022 0.696444C417.925 -24.1874 452 840 452 840H0L0 20.7556Z' fill='%2300252E'/></svg>");

  background-size: cover;

  color: #fff;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    padding-top: 274px;
    padding-bottom: 102px;
    padding-left: 120px;
    padding-right: 120px;

    background-image: url("data:image/svg+xml;utf8,<svg width='1440' height='714' viewBox='0 0 1440 714' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 93.4246C0 93.4246 374.778 -76.9711 727.484 44.661C1080.19 166.293 1228.91 185.196 1454.97 44.661C1681.03 -95.8736 1454.97 714 1454.97 714H0V93.4246Z' fill='%2300252E'/></svg>");
  }
`;
