import * as SC from "./NewsLetterStyled"

const NewsLetter: React.FC = () => {
  return (
    <SC.NewsLetterCon>
      <SC.NewsLetterContentCon>
        <h3>newsletter</h3>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
      </SC.NewsLetterContentCon>
      <SC.NewsLetterForm>
        <input type="text" />
        <button>Subscribe</button>
      </SC.NewsLetterForm>
    </SC.NewsLetterCon>
  );
};

export default NewsLetter;
