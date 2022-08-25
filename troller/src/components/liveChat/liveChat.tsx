import SendIcon from '@mui/icons-material/Send';
import * as StompJs from '@stomp/stompjs';
import { Form, TextArea } from '../../styles/liveChat/liveChat';

function LiveChat() {
  return (
    <>
      <TextArea />
      <Form>
        <input className="input" placeholder="메시지를 입력하세요" />
        <button type="submit" className="send">
          <SendIcon />
        </button>
      </Form>
    </>
  );
}

export default LiveChat;
