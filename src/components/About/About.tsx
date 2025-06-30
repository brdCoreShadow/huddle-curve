import * as SC from "./AboutStyled";

import growPic from "../../assets/images/illustration-grow-together.svg"
import conversationsPic from "../../assets/images/illustration-flowing-conversation.svg"
import usersPic from "../../assets/images/illustration-your-users.svg"

const About: React.FC = () => {
  return (
    <SC.AboutList>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={growPic} alt="grow" />
        </SC.AboutPicThumb>
        <SC.AboutContentCon>
          <h4>Grow Together</h4>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </SC.AboutContentCon>
      </SC.AboutItem>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={conversationsPic} alt="Conversations" />
        </SC.AboutPicThumb>
        <SC.AboutContentCon>
          <h4>Flowing Conversations</h4>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </SC.AboutContentCon>
      </SC.AboutItem>
      <SC.AboutItem>
        <SC.AboutPicThumb>
          <img src={usersPic} alt="uesers" />
        </SC.AboutPicThumb>
        <SC.AboutContentCon>
          <h4>Your Users</h4>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </SC.AboutContentCon>
      </SC.AboutItem>
    </SC.AboutList>
  );
};

export default About;
