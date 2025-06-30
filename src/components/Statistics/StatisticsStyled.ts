import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
padding-left: 108px;
padding-right: 108px;

@media (min-width: 1280px){
    pad: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`

export const StatisticsItem = styled.li`

&:not(:last-of-type){
    margin-bottom: 88px;

    @media (min-width: 1280px){
        margin-bottom: 0;
        margin-right: 340px;
    }
}
`

export const StatisticsPicThumb = styled.div`
& > img{
    width: 36px;
    height: 36px;

    @media (min-width: 1280px){
        width: 56px;
        height: 56px;
    }
}
`

export const StatisticsContentCon = styled.div`
& > p:not(:last-of-type){
    font-size: 60px;
    line-height: 1.5;
    font-weight: 700;

    color: #00252E;

    @media (min-width: 1280px){
        font-size: 96px;
    }
}

& > p:last-of-type{
    font-size: 16px;
    line-height: 1.5;

    color: #808E9A;

    @media (min-width: 1280px){
        font-size: 24px;
    }
}
`