import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { ChatType } from "../../types/types";
import React, { useEffect, useState } from "react";
import ChatOption from "./ChatOption";
import ChatReaction from "./ChatReaction";
import chatReaction from "./ChatReaction";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { at, WsUrl_reaction } from "../../variable/cookie";

function ChatContext(chat: ChatType) {
  const [showChatOption, setShowChatOption] = useState<boolean>(false);
  const chatId = useSelector((state: RootState) => state.ChatReaction.reactionData.chat_id);
  const reactions = useSelector((state: RootState) => state.ChatReaction.reactionData.icon);
  const reactionArray: [string] = [reactions];
  const chat_channel_hashed_value = useSelector((state: RootState) => state.ClickedChannel.channelData.hashed_value);
  const [Rdata, setRdata] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  // useEffect(() => {
  //   const ReactionWs = new WebSocket(`${WsUrl_reaction}${chat_channel_hashed_value}/`);
  //   if (ReactionWs) {
  //     ReactionWs.onmessage = res => {
  //       const data: string = JSON.parse(res.data.icon);
  //       reactionArray.push(data);
  //     };
  //   }
  // }, [chat_channel_hashed_value]);

  return (
    <div
      onMouseOver={() => {
        setShowChatOption(true);
      }}
      onMouseLeave={() => {
        setShowChatOption(false);
      }}
    >
      <ChatContainer>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>{chat.channel}</strong>
              <StarBorderOutlinedIcon />
            </h4>
            <h1>{chat.chatter && chat.chatter.display_name}</h1>
            <span className="text-sm text-gray-700">
              {/*{created_at.slice(0, 10)}&nbsp;{created_at.slice(11, 19)}*/}
              {chat.created_at}
            </span>
          </HeaderLeft>
          <br></br>
          <HeaderRight>
            {showChatOption && (
              <span className="bg-gray-50">
                <ChatOption {...chat} />
              </span>
            )}
          </HeaderRight>
        </Header>
        <ChatMessages>
          <h2>{chat.message}</h2>
          {reactions}
        </ChatMessages>
        {/*<ChatReaction />*/}
        <span>{chatReaction}</span>
      </ChatContainer>
    </div>
  );
}

export default ChatContext;
const ChatReactions = styled.span`
  :hover {
    background-color: blue;
  }
`;
const ChatMessages = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatContainer = styled.div`
  background-color: #ede8e8;
  border: 1px solid black;
  border-radius: 3px;
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
`;
