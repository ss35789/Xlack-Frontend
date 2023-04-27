import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components";
import { ChatType } from "../../types/types";

const ChatReaction = () => {
  // const [socket, setsocket] = useState<WebSocket>();
  const mode = useSelector((state: RootState) => state.ChatReaction.reactionData.mode);
  const icon = useSelector((state: RootState) => state.ChatReaction.reactionData.icon);
  const chat_id = useSelector((state: RootState) => state.ChatReaction.reactionData.chat_id);

  const ReactionArray: string[] = [];

  ReactionArray.push(icon);

  return (
    <>
      {ReactionArray.map(ReactionArray => {
        return (
          <ChatReactions>
            <span key={chat_id}>{ReactionArray}</span>
          </ChatReactions>
        );
      })}
    </>
  );
};

const ChatReactions = styled.span`
  :hover {
    background-color: blue;
  }
`;

export default ChatReaction;
