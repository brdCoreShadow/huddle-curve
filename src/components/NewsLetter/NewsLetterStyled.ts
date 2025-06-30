import styled from "@emotion/styled";

export const NewsLetterCon = styled.div`
  margin-bottom: 104px;

  @media (min-width: 1280px) {
    width: 520px;

    margin-bottom: 0;
  }
`;

export const NewsLetterContentCon = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1280px) {
    width: 360px;
  }
  & > h3 {
    margin-bottom: 16px;

    text-transform: uppercase;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;
  }

  & > p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
  }
`;

export const NewsLetterForm = styled.form`
  text-align: right;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }

  & > input {
    width: 100%;
    height: 48px;

    margin-bottom: 16px;

    background-color: #fff;

    border-radius: 6px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 40px;
    }
  }

  & > button {
    width: 160px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
    padding-right: 40px;

    font-size: 16px;
    line-height: 1.5;

    background-color: #ff52c1;
    color: #fff;

    border-radius: 6px;

    @media (min-width: 1280px) {
      width: auto;
      transition: all 0.3s;

      &:hover,
      &:focus,
      &:hover {
        opacity: 0.7;
        cursor: pointer;

        transition: all 0.3s;
      }
    }
  }
`;
