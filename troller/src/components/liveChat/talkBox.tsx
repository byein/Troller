import { useParams } from 'react-router-dom';
import TextArea from '../../styles/liveChat/talkBox';
// eslint-disable-next-line import/no-cycle
import { IChatHistoryType } from './liveChat';

function TalkBox({
  chatHistory,
}: {
  chatHistory: IChatHistoryType[] | undefined;
}) {
  const { opponentLolName } = useParams();
  return (
    <TextArea>
      {chatHistory?.map((chat: IChatHistoryType) => (
        <div
          className={chat.sender === opponentLolName ? 'opponent' : 'me'}
          key={chat.createDate}
        >
          {chat.sender !== opponentLolName && (
            <span className="date">{chat.createDate.split(',')[1]}</span>
          )}
          <div className="person">
            <span className="msg">{chat.content}</span>
          </div>
          {chat.sender === opponentLolName && (
            <span className="date">{chat.createDate.split(',')[1]}</span>
          )}
        </div>
      ))}
    </TextArea>
  );
}

export default TalkBox;
