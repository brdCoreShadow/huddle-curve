import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/screen-mockups.svg";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon>
      <SC.HeroContentCon>
        <h3>Build The Community Your Fans Will Love</h3>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
      </SC.HeroContentCon>
      <SC.HeroBtn type="button">Get Started For Free</SC.HeroBtn>
      <SC.HeroPicThumb>
        <img src={heroPicMob} alt="hero" />
      </SC.HeroPicThumb>
    </SC.HeroCon>
  );
};

export default Hero;
