import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
padding-left: 108px;
padding-right: 108px;

`

export const StatisticsItem = styled.li`

&:not(:last-of-type){
    margin-bottom: 88px;
}
`

export const StatisticsPicThumb = styled.div`
& > img{
    width: 36px;
    height: 36px;
}
`

export const StatisticsContentCon = styled.div`
& > p:not(:last-of-type){
    font-size: 60px;
    line-height: 1.5;
    font-weight: 700;

    color: #00252E;
}

& > p:last-of-type{
    font-size: 16px;
    line-height: 1.5;

    color: #808E9A;
}
`