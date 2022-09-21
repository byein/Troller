import BackspaceIcon from '@mui/icons-material/Backspace';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FriendList from '../../styles/liveChat/chatFriends';
import { useAccessApi } from '../../hooks/axiosHooks';

interface IFriendsType {
  opponentLolName: string;
  chatRoomId: number;
}

function ChatFriends() {
  const { chatRoomId } = useParams();
  const navigate = useNavigate();
  const [friends, setFriends] = useState<IFriendsType[]>([]);
  useEffect(() => {
    (async () => {
      const { data, status } = await useAccessApi.get('/api/chat/rooms/all');
      if (status === 200) {
        setFriends(data);
      }
    })();
  }, [chatRoomId]);
  return (
    <>
      {friends.map(friend => (
        <FriendList
          key={friend.chatRoomId}
          onClick={() => {
            navigate(
              `/sub/chat/room/${friend.opponentLolName}/${friend.chatRoomId}`
            );
          }}
        >
          <div className="user">
            <div className="leftside">
              <div className="lolName">{`${friend.opponentLolName}`}</div>
              {/* <span className="content">
                sdfdsfsdfgsdfgsfdgsdsdsdfasdfas${30}
              </span> */}
            </div>
          </div>
          <button className="delete" type="button">
            <BackspaceIcon />
          </button>
        </FriendList>
      ))}
    </>
  );
}

export default ChatFriends;
