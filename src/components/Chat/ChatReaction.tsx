import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components";

const ChatReaction = () => {
  const [socket, setsocket] = useState<WebSocket>();
  const mode = useSelector((state: RootState) => state.ChatReaction.reactionData.mode);
  const icon = useSelector((state: RootState) => state.ChatReaction.reactionData.icon);
  const chat_id = useSelector((state: RootState) => state.ChatReaction.reactionData.chat_id);

  const ReactionArray: string[] = [];

  // if (socket) {
  //   if (mode) {
  //     ReactionArray.push(icon);
  //     console.log("pushed");
  //   }
  // }
  ReactionArray.push(icon);

  return (
    <>
      {ReactionArray.map((ReactionArray, i) => {
        return (
          <ChatReactions>
            <span key={i}>{ReactionArray}</span>
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
