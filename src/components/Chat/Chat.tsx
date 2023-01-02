import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import ChatContext from "./ChatContext";
import { getChat } from "../types";
import { at, WsUrl } from "../../variable/cookie";

function Chat() {
  const receiveMessage = useSelector(
    (state: RootState) => state.UpdateChatContext.receiveMessage
  );
  const Clicked_channel_hv = useSelector(
    (state: RootState) => state.ClickedChannel.channel_hashde_value
  );
  const messagesRef = useRef<any>();
  const [getChatData, setgetChatData] = useState<getChat>();
  const [websocket, setWebsocket] = useState<WebSocket>();
  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    if (websocket !== null && Clicked_channel_hv !== null) {
      websocket?.close();
      setWebsocket(
        new WebSocket(`${WsUrl}${Clicked_channel_hv}/`, null, {
          headers: { Authorization: { at } },
        })
      );
    } else {
      setWebsocket(new WebSocket(`${WsUrl}${Clicked_channel_hv}/`));
    }
    console.log(Clicked_channel_hv);
  }, [receiveMessage, Clicked_channel_hv]);
  useEffect(() => {
    if (websocket) {
      websocket.onmessage = (event) => {
        console.log(event.data);
      };
    }
  }, [websocket]);
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
