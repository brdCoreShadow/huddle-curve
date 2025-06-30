import styled from "@emotion/styled";

export const HeroCon = styled.div`
padding-bottom: 120px;
padding-left: 40px;
padding-right: 40px;

text-align: center;

`

export const HeroContentCon = styled.div`

margin-bottom: 48px;

text-align: center;

& > h3{
    margin-bottom: 24px;

    font-size: 24px;
    line-height: 1.5;

    color: #00252E;
}

p{
font-size: 14px;
line-height: 1.5;

color: #00252E;
}
`

export const HeroBtn = styled.button`

margin-bottom: 104px;

padding-top: 12px;
padding-bottom: 12px;
padding-left: 40px;
padding-right: 40px;

font-size: 12px;
line-height: 1.5;
font-weight: 700;

background-color: #FF52C1;
color: #fff;

border-radius: 20px;

box-shadow: 0 4px 12px rgba(255, 82, 193, 0.4);
`

export const HeroPicThumb = styled.div`
& > img{
    width: 296px;
    height: 209px;
}
`