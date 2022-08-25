import BackspaceIcon from '@mui/icons-material/Backspace';
import FriendList from '../../styles/liveChat/chatFriends';
import { dummyRandomData } from '../../api/dummyData';

function ChatFriends() {
  return (
    <>
      {dummyRandomData.map(
        (
          item // 나중에 friends로 바꿔야함
        ) => (
          <FriendList key={item.id}>
            <div className="user">
              <div className="leftside">
                <div className="lolName">{`${item.lolName}`}</div>
                <span className="content">
                  sdfdsfsdfgsdfgsfdgsdsdsdfasdfas${30}
                </span>
              </div>
            </div>
            <button className="delete" type="button">
              <BackspaceIcon />
            </button>
          </FriendList>
        )
      )}
    </>
  );
}

export default ChatFriends;
