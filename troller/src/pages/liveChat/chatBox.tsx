import { useEffect, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import {
  ChatWrapper,
  FriendsBox,
  SocketBox,
} from '../../styles/liveChat/chatBox';
import ChatFriends from '../../components/liveChat/friends';
import LiveChat from '../../components/liveChat/liveChat';
import { useAccessApi } from '../../hooks/axiosHooks';

function ChatBox() {
  const [lolName, setlolName] = useState('');

  const client = new StompJs.Client({
    brokerURL: 'ws://exampleEndPoint/ws',
    // connectHeaders: {
    //   lolName,
    // },
    reconnectDelay: 5000,
    debug: () => {
      alert('연결 실패');
    },
  }); // 소켓 연결

  const connectUser = async () => {
    client.onConnect = frame => {
      console.log(frame);
    };
    client.onStompError = frame => {
      console.log(frame);
    };
    client.activate();
  };

  useEffect(() => {
    if (lolName !== '') {
      (async () => {
        const { data } = await useAccessApi.get('findlolName');
        setlolName(data.lolName);
      })();
    }
  });
  return (
    <ChatWrapper>
      <div className="contents">
        <FriendsBox>
          <div className="header__chat">친구 목록</div>
          <ChatFriends />
        </FriendsBox>
        <SocketBox>
          <LiveChat />
        </SocketBox>
      </div>
    </ChatWrapper>
  );
}

export default ChatBox;
