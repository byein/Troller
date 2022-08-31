import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import * as StompJs from "@stomp/stompjs";
import { useOutletContext } from "react-router-dom";
import { Form, TextArea } from "../../styles/liveChat/liveChat";

function LiveChat() {
	const [content, setContent] = useState("");
	const accessToken = localStorage.getItem("access_token");
	const { opponentLolName, chatRoomId } = useOutletContext<{
		opponentLolName: string;
		chatRoomId: string;
	}>();

	const client1 = new StompJs.Client({
		brokerURL: "ws://3.37.22.89:8080/ws-chat",
		reconnectDelay: 5000,
	});

	const client = new StompJs.Client({
		brokerURL: "ws://3.37.22.89:8080/ws-chat",
		reconnectDelay: 5000,
		onConnect: (frame) => {
			console.log(`Connected: ${frame}`);
			client.subscribe(`ws://topic/chat_room/${chatRoomId}`, (message) => {
				console.log(message);
			});
		},
		onStompError: (frame) => {
			console.log(`Broker reported error: ${frame.headers.message}`);
			console.log(`Additional details: ${frame.body}`);
		},
	});
	client.activate();
	useEffect(() => {}, [chatRoomId, opponentLolName]);

	const onSend = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (content !== "") {
			const message = {
				chatRoomId,
				content,
				accessToken,
			};
			client1.publish({
				destination: "/app/chat/message",
				body: JSON.stringify(message),
			});
		}
		setContent("");
	};
	return (
		<>
			<TextArea />
			<Form onSubmit={onSend}>
				<input
					className="input"
					name="message"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="메시지를 입력하세요"
				/>
				<button type="button" className="send">
					<SendIcon />
				</button>
			</Form>
		</>
	);
}

export default LiveChat;
