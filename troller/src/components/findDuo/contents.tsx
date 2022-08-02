import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import {
  Article,
  ArticleWrapper,
  ChatBtn,
  Content,
  ContentFooter,
  Timer,
  UserStatus,
} from '../../styles/findDuo/contents';

interface IUserDataType {
  userData: {
    lolName: string;
    favorPosition: string;
    favorChampion: string[];
    tier: string;
    win: number;
    lose: number;
    kill: number;
    death: number;
    assist: number;
    validTime: number;
    mike: boolean;
    title: string;
    content: string;
    kdaRate: number;
    winRate: string;
  };
}

function Contents({ userData }: IUserDataType) {
  return (
    <Content>
      <Timer>{userData.validTime}</Timer>
      <ArticleWrapper>
        <Article>
          <div className="titleBox">
            <h2 className="title">{userData.title}</h2>
            {userData.mike ? (
              <MicIcon className="micOn" />
            ) : (
              <MicOffIcon className="micOff" />
            )}
          </div>
          <p className="content">{userData.content}</p>
        </Article>
        <UserStatus />
      </ArticleWrapper>
      <ContentFooter>
        <div className="mostChampBox" />
        <ChatBtn>채팅하기</ChatBtn>
      </ContentFooter>
    </Content>
  );
}

export default Contents;
