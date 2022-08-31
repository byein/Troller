import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import { useParams } from 'react-router-dom';
import { Form, TextArea } from '../../styles/liveChat/liveChat';

function LiveChat() {
  const [content, setContent] = useState('');
  const accessToken = localStorage.getItem('access_token');
  const { chatRoomId } = useParams();
  const socketUrl = 'ws://3.37.22.89:8080';
  const client = useRef<StompJs.Client>();

  const subscribe = () => {
    client.current?.subscribe(
      `${socketUrl}/topic/chat_room/${chatRoomId}`,
      (message: any) => {
        console.log(message);
      }
    );
  };

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: `${socketUrl}/ws-chat`,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: frame => {
        console.log(`Connected: ${frame}`);
        subscribe();
      },
      onStompError: frame => {
        console.log(`Broker reported error: ${frame.headers.message}`);
        console.log(`Additional details: ${frame.body}`);
      },
    });
    client.current.activate();
  };

  const disconnect = () => {
    client.current?.deactivate();
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatRoomId]);

  const publish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = {
      content,
      chatRoomId: Number(chatRoomId),
      accessToken,
    };
    client.current?.publish({
      destination: `${socketUrl}/app/chat/message`,
      body: JSON.stringify(msg),
    }); // It Works!
    setContent('');
  };

  const publishByClick = () => {
    const msg = {
      content,
      chatRoomId: Number(chatRoomId),
      accessToken,
    };
    client.current?.publish({
      destination: `${socketUrl}/app/chat/message`,
      body: JSON.stringify(msg),
    }); // It Works!
    setContent('');
  };
  return (
    <>
      <TextArea />
      <Form onSubmit={publish}>
        <input
          className="input"
          name="message"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button
          type="button"
          className="send"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            publishByClick();
          }}
        >
          <SendIcon />
        </button>
      </Form>
    </>
  );
}

export default LiveChat;
