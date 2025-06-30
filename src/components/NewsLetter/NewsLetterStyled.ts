import styled from "@emotion/styled";

export const NewsLetterCon = styled.div`
  margin-bottom: 104px;
`;

export const NewsLetterContentCon = styled.div`
  margin-bottom: 32px;

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

  & > input {
    width: 100%;
    height: 48px;

    margin-bottom: 16px;

    background-color: #fff;

    border-radius: 6px;
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
  }
`;
