import { Outlet, useParams } from 'react-router-dom';
import {
  ChatWrapper,
  FriendsBox,
  SocketBox,
} from '../../styles/liveChat/chatBox';
import ChatFriends from '../../components/liveChat/friends';

function ChatBox() {
  const { opponentLolName, chatRoomId } = useParams();
  return (
    <ChatWrapper>
      <div className="contents">
        <FriendsBox>
          <div className="header__chat">친구 목록</div>
          <ChatFriends />
        </FriendsBox>
        <SocketBox>
          {opponentLolName !== 'friends' && chatRoomId !== 'all' ? (
            <Outlet context={{ opponentLolName, chatRoomId }} />
          ) : null}
        </SocketBox>
      </div>
    </ChatWrapper>
  );
}

export default ChatBox;
