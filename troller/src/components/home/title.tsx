import { TitleText, TitleWrapper } from "../../styles/home/home";

const TITLE_TEXT = "HOXY... Troll?";
const Title = () => {
  return (
    <TitleWrapper>
      <TitleText>{TITLE_TEXT}</TitleText>
    </TitleWrapper>
  );
};
export default Title;
