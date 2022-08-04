import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useEffect, useState } from 'react';
import {
  Article,
  ArticleWrapper,
  ChatBtn,
  ChatBtnBox,
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
  };
}

function Contents({ userData }: IUserDataType) {
  const [validTime, setvalidTime] = useState(userData.validTime);
  const minutes = Math.floor(validTime / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (validTime % 60).toString().padStart(2, '0');
  useEffect(() => {
    const timer = setInterval(() => {
      if (validTime > 0) {
        setvalidTime(prev => prev - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [validTime]);
  return (
    <Content>
      <Timer validTime={validTime}>
        {validTime > 0 ? `${minutes}:${seconds}` : '만료'}
      </Timer>
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
        <UserStatus
          kill={userData.kill}
          death={userData.death}
          assist={userData.assist}
          win={userData.win}
          lose={userData.lose}
        >
          <div className="firstLine">
            <div className="positionBox">
              <img className="position" src={userData.favorPosition} alt="" />
            </div>
            <span className="lolName">{userData.lolName}</span>
          </div>
          <div className="secondLine">
            <div className="tierBox">
              <img className="tier" src={userData.tier} alt="tier" />
            </div>
            <span className="kda">{`${userData.kill} / ${userData.death} / ${userData.assist}`}</span>
            <span className="kdaRate">{`${(
              (userData.kill + userData.assist) /
              userData.death
            ).toFixed(1)}%`}</span>
          </div>
          <div className="thirdLine">
            <div className="winLoseBox">
              <div className="win">
                <span>{userData.win}</span>
              </div>
              <div className="lose">
                <span>{userData.lose}</span>
              </div>
            </div>
            <span className="winRate">{`${(
              (userData.win / (userData.win + userData.lose)) *
              100
            ).toFixed(2)}%`}</span>
          </div>
        </UserStatus>
      </ArticleWrapper>
      <ContentFooter>
        <div className="mostChampBox">
          {userData.favorChampion.map(champion => (
            <div className="mostChamps">
              <img src={champion} alt="chamion" />
            </div>
          ))}
        </div>
        <ChatBtnBox>
          <ChatBtn>채팅하기</ChatBtn>
          <ChatBtn>AI 듀오매칭</ChatBtn>
        </ChatBtnBox>
      </ContentFooter>
    </Content>
  );
}

export default Contents;
