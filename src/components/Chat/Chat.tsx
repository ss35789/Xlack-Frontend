import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import ChatContext from "./ChatContext";
import { getChat } from "../types";
import { Socket } from "socket.io";

function Chat() {
  const receiveMessage = useSelector(
    (state: RootState) => state.UpdateChatContext.receiveMessage
  );
  const Clicked_channel_hv = useSelector(
    (state: RootState) => state.ClickedChannel.channel_hashde_value
  );
  const messagesRef = useRef<any>();
  const [getChatData, setgetChatData] = useState<getChat>();
  const [socket, setSocket] = useState<Socket>();
  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  };
  //현재 보고 있는 채널의 hashed_value가 바뀌면 기존 소켓 연결 끊고 새로 재연결
  // useEffect(() => {
  //   if (socket !== undefined) {
  //     socket?.disconnect();
  //   } else {
  //     const socketio = io(`${WsUrl}${Clicked_channel_hv}/`, {
  //       auth: {
  //         token: `Bearer ${at}`,
  //       },
  //     });
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     setSocket(socketio);
  //
  //     if (socketio.connected) console.log("소켓연결");
  //   }
  //
  //   console.log(Clicked_channel_hv);
  // }, [receiveMessage, Clicked_channel_hv]);
  //재연결한 소켓

  useEffect(() => {
    scrollToBottom();
  }, [getChatData]);
  //새로운 문자가 송신되어 receiveMessage가 true가 되면 챗 정보들 불러옴
  return (
    <ChatContainer>
      {/* {roomDetails && roomMessages && ( */}
      <>
        <ChatMessages ref={messagesRef}>
          <h4>{Clicked_channel_hv}</h4>
          {getChatData &&
            getChatData.results
              .slice(0)
              .reverse()
              .map((chat) => (
                <span>
                  <ChatContext
                    id={chat.id}
                    channel={chat.channel}
                    chatter={chat.chatter}
                    message={chat.message}
                    created_at={chat.created_at}
                  ></ChatContext>
                </span>
              ))}
        </ChatMessages>
        <ChatInput />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  margin-bottom: 130px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    /* HelpOutlineIcon */
    margin-left: auto;
    margin-right: 20px;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
