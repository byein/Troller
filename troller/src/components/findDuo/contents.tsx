import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IHeadDataType } from '../../recoil/findDuoAtoms';
import {
  Article,
  ArticleWrapper,
  ChatBtn,
  ChatBtnBox,
  Content,
  ContentFooter,
  Header,
  UserStatus,
} from '../../styles/findDuo/contents';
import { useAccessApi } from '../../hooks/axiosHooks';

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
    mike,
    title,
    content,
  },
  load,
}: {
  data: IHeadDataType;
  load: boolean;
}) {
  const router = useNavigate();
  const { handleSubmit } = useForm();

  const moveToChatRoom = async () => {
    const {
      data: { chatRoomId, opponentLolName },
      status,
    } = await useAccessApi.post(`/api/chat/room?opponent=규 턴`);
    if (status === 200 || status === 201) {
      router(`/sub/chat/room/${opponentLolName}/${chatRoomId}`);
    }
  }; // fake for the test

  // const moveToChatRoom = async () => {
  //   const {
  //     data: { chatRoomId, opponentLolName },
  //     status,
  //   } = await useAccessApi.post(`/api/chat/room?opponent=${lolName}`);
  //   if (status === 200 || status === 201) {
  //     router(`/sub/chat/room/${opponentLolName}/${chatRoomId}`);
  //   }
  // }; // The REAL one

  const onSubmit = handleSubmit(async () => {
    // const { status } = await useAccessApi.delete('exampleDeleteAPI',{
    //   params: {id}});
  }); // delete my content
  return (
    <Content key={id}>
      <Header onSubmit={onSubmit} isLoading={load}>
        <div className="user">
          <span className="lolName">{lolName}</span>
        </div>
        <button className="delete" type="submit">
          <BackspaceIcon />
        </button>
      </Header>
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
          <ChatBtn onClick={moveToChatRoom}>채팅하기</ChatBtn>
          <ChatBtn>AI 듀오매칭</ChatBtn>
        </ChatBtnBox>
      </ContentFooter>
    </Content>
  );
}

export default Contents;
