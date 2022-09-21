/* eslint-disable import/no-cycle */
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import { useParams } from 'react-router-dom';
import Form from '../../styles/liveChat/liveChat';
import { useAccessApi } from '../../hooks/axiosHooks';
import TalkBox from './talkBox';

export interface IChatHistoryType {
  sender: string;
  content: string;
  createDate: string;
  messageId: number;
}

function LiveChat() {
  const [chatHistory, setChatHistory] = useState<IChatHistoryType[]>();
  const [content, setContent] = useState('');
  const accessToken = localStorage.getItem('access_token');
  const { chatRoomId } = useParams();
  const socketUrl = 'ws://3.37.22.89:8080';
  const client = useRef<StompJs.Client>();
  const subscribe = () => {
    client.current?.subscribe(
      `/topic/chat_room/${chatRoomId}`,
      (message: any) => {
        const data = JSON.parse(message.body);
        setChatHistory((prev: any) => [...prev, data]);
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

  useEffect(() => {
    (async () => {
      const { data, status } = await useAccessApi.get(
        `/api/chat/rooms/messages/${chatRoomId}`
      );
      if (status === 200) {
        setChatHistory(data);
      }
    })();
  }, [chatRoomId]);

  const publish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = {
      content,
      chatRoomId: Number(chatRoomId),
      accessToken,
    };
    client.current?.publish({
      destination: `/app/chat/message`,
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
      destination: `/app/chat/message`,
      body: JSON.stringify(msg),
    }); // It Works!
    setContent('');
  };
  return (
    <>
      <TalkBox chatHistory={chatHistory} />
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
