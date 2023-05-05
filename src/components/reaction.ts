import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { at, WsUrl_reaction } from "../variable/cookie";
import { RootState } from "../app/store";

export function Reaction() {
  const chat_channel_hashed_value = useSelector((state: RootState) => state.ClickedChannel.channelData.hashed_value);
  const [reactionSocket, setReactionSocket] = useState<WebSocket>();
  const dispatch = useDispatch();
  useEffect(() => {
    setReactionSocket(new WebSocket(`${WsUrl_reaction}${chat_channel_hashed_value}/`));
  }, [at]);
  if (reactionSocket) {
    reactionSocket.onopen = () => {
      reactionSocket.send(
        JSON.stringify({
          authorization: at,
        }),
      );
      console.log("###### Reaction Websocket Connected");
    };
    reactionSocket.onmessage = res => {
      const reaction = JSON.parse(res.data).reaction;
      if (reaction !== "undefined" || reaction !== null) {
        dispatch(reaction);
      }
    };
  }
}
