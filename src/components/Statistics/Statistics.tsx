import * as SC from "./StatisticsStyled";

import communititesIcon from "../../assets/images/icon-communities.svg"
import messagesIcon from "../../assets/images/icon-messages.svg"

const Statistics: React.FC = () => {
  return (
    <SC.StatisticsList>
      <SC.StatisticsItem>
        <SC.StatisticsPicThumb>
          <img src={communititesIcon} alt="communities" />
        </SC.StatisticsPicThumb>
        <SC.StatisticsContentCon>
          <p>1.4k+</p>
          <p>Communities Formed</p>
        </SC.StatisticsContentCon>
      </SC.StatisticsItem>
      <SC.StatisticsItem>
          <SC.StatisticsPicThumb>
          <img src={messagesIcon} alt="communities" />
        </SC.StatisticsPicThumb>
        <SC.StatisticsContentCon>
          <p>2.7m+</p>
          <p>Messages Sent</p>
        </SC.StatisticsContentCon>
      </SC.StatisticsItem>
    </SC.StatisticsList>
  );
};

export default Statistics;
