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
`

export const HeaderLogoThumb = styled.div`

& > img{
    width: 96px;
    height: 16px;
}
`

export const HeaderBtn = styled.button`
padding-top: 6px;
padding-bottom: 6px;
padding-left: 18px;
padding-right: 18px;

background-color: transparent;
color: #FF52C1;

border: 1px solid #FF52C1;
border-radius: 12px;

box-shadow: 0 4px 12px rgba(255, 82, 193, 0.4);
`