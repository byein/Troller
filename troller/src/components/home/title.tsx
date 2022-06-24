import { TitleText, TitleWrapper } from '../../styles/home/home';

const TITLE_TEXT = 'HOXY... Troll?';
function Title() {
  return (
    <TitleWrapper>
      <TitleText>{TITLE_TEXT}</TitleText>
    </TitleWrapper>
  );
}
export default Title;
