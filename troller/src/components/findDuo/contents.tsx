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
  id: number;
  lolName: string;
  favorChampions: string[];
  favorPosition: string;
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
}

function Contents({
  data: {
    id,
    lolName,
    favorChampions,
    favorPosition,
    tier,
    win,
    lose,
    kill,
    death,
    assist,
    validTime,
    mike,
    title,
    content,
  },
}: {
  data: IUserDataType;
}) {
  const [load, setLoad] = useState(false);
  const [validTimer, setvalidTimer] = useState(validTime);
  const minutes = Math.floor(validTime / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (validTime % 60).toString().padStart(2, '0');
  useEffect(() => {
    const timer = setInterval(() => {
      if (validTime > 0) {
        setvalidTimer(prev => prev - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [validTime]);
  return (
    <Content>
      <Timer validTime={validTime} isLoading={load}>
        <div className="user">
          <span className="lolName">{lolName}</span>
        </div>
        <span className="validTime">
          {validTime > 0 ? `${minutes}:${seconds}` : '만료'}
        </span>
      </Timer>
      <ArticleWrapper>
        <Article isLoading={load}>
          <div className="titleBox">
            <h2 className="title">{title}</h2>
            {mike ? (
              <MicIcon className="micOn" />
            ) : (
              <MicOffIcon className="micOff" />
            )}
          </div>
          <hr className="seperator" />
          <p className="content">{content}</p>
        </Article>
        <UserStatus
          isLoading={load}
          kill={kill}
          death={death}
          assist={assist}
          win={win}
          lose={lose}
        >
          <div className="firstLine">
            <div className="positionBox">
              <img className="position" src={favorPosition} alt="" />
            </div>
            {favorChampions.map(champion => (
              <div className="mostChamps">
                <img src={champion} alt="chamion" />
              </div>
            ))}
          </div>
          <div className="secondLine">
            <div className="tierBox">
              <img className="tier" src={tier} alt="tier" />
            </div>
            <span className="kda">{`${kill} / ${death} / ${assist}`}</span>
            <span className="kdaRate">{`${((kill + assist) / death).toFixed(
              1
            )}`}</span>
          </div>
          <div className="thirdLine">
            <div className="winLoseBox">
              <div className="win">
                <span>{win}</span>
              </div>
              <div className="lose">
                <span>{lose}</span>
              </div>
            </div>
          </div>
        </UserStatus>
      </ArticleWrapper>
      <ContentFooter>
        <ChatBtnBox>
          <ChatBtn>채팅하기</ChatBtn>
          <ChatBtn>AI 듀오매칭</ChatBtn>
        </ChatBtnBox>
      </ContentFooter>
    </Content>
  );
}

export default Contents;
