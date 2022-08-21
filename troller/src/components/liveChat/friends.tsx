import BackspaceIcon from '@mui/icons-material/Backspace';
import FriendList from '../../styles/liveChat/chatFriends';
import { dummyRandomData } from '../../api/dummyData';

function ChatFriends() {
  return (
    <>
      {dummyRandomData.map(item => (
        <FriendList key={item.id}>
          <div className="user">
            <div className="leftside">
              <div className="lolName">{`${item.lolName}`}</div>
              <span className="content">
                sdfdsfsdfgsdfgsfdgsdsdsdfasdfas${30}
              </span>
            </div>
            <div className="rightside">
              <span className="alert">{item.kill}</span>
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
