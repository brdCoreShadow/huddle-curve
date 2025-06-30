import styled from "@emotion/styled";

export const GetStartedCon = styled.div`
  margin-bottom: 248px;

  text-align: center;

  @media (min-width: 1280px) {
    margin-bottom: 178px;
  }

  & > h3 {
    margin-bottom: 40px;

    font-size: 24px;
    line-height: 1.5;

    color: #00252e;

    @media (min-width: 1280px) {
      margin-bottom: 42px;

      font-size: 40px;
    }
  }

  & > button {
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
      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 100px;
      padding-right: 100px;

      font-size: 20px;

      border-radius: 40px;
      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.7;

        cursor: pointer;

        transition: all 0.3s;
      }
    }
  }
`;
