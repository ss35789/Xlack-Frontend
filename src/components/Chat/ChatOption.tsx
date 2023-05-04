import { AlibabaOutlined, PushpinOutlined, RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl, WsUrl_reaction } from "../../variable/cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkPage } from "../../variable/ChatBookmarkSlice";
import { RootState } from "../../app/store";
import { setClickedChatReaction } from "../../variable/ChatReactionSlice";
import chatReaction from "./ChatReaction";
const ChatOption = (chat: ChatType) => {
  const [showDetail, setShowDetail] = useState<number>(-1);
  const chat_channel_hashed_value = useSelector((state: RootState) => state.ClickedChannel.channelData.hashed_value);
  const dispatch = useDispatch();
  const cid = parseInt(chat.id);
  const [socket, setsocket] = useState<WebSocket>();
  const [reactionSocket, setReactionSocket] = useState<WebSocket>();
  const mode = useSelector((state: RootState) => state.ChatReaction.reactionData.mode);
  const icon = useSelector((state: RootState) => state.ChatReaction.reactionData.icon);
  const chat_id = useSelector((state: RootState) => state.ChatReaction.reactionData.chat_id);
  const [ChatReaction, setReaction] = useState<string>("");

  const DeleteChatBookmark = async () => {
    //chat/bookmark에 들어가는 chat_id는 다른 데이터구조(string)과는 달리 number라 형변환
    await axios
      .delete(`${backUrl}chat/bookmark/${cid}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then(res => {
        console.log(res);
        dispatch(getBookmarkPage());
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const ReactionWs = new WebSocket(`${WsUrl_reaction}${chat_channel_hashed_value}/`);
    if (ReactionWs) {
      ReactionWs.onopen = () => {
        setReactionSocket(ReactionWs);
        ReactionWs.send(
          JSON.stringify({
            authorization: at,
          }),
        );
        ReactionWs.onmessage = res => {
          const data = JSON.parse(res.data);
          console.log("reaction Data " + JSON.stringify(data));
          //dispatch(setClickedChatReaction(data));
        };
      };
    }
  }, [chat_channel_hashed_value]);

  const sendReaction = async () => {
    if (reactionSocket) {
      console.log("인증 성공");
      reactionSocket.send(
        JSON.stringify({
          mode: mode,
          icon: icon,
          chat_id: chat_id,
        }),
      );
    } else {
      console.log("socket is undefined");
    }
  };

  const MakeChatBookmark = async () => {
    //chat/bookmark에 들어가는 chat_id는 다른 데이터구조(string)과는 달리 number라 형변환
    await axios
      .post(
        `${backUrl}chat/bookmark/`,
        {
          chat_id: cid,
        },
        {
          headers: {
            Authorization: `Bearer ${at}`,
          },
        },
      )
      .then(res => {
        console.log(res);
        dispatch(getBookmarkPage());
      })
      .catch(err => {
        console.log(err);
      });
  };

  const ChatOptionDetailArray = [
    {
      detailMessage: chat.has_bookmarked ? "UnChatBookmark" : "ChatBookmark",
      func: () => {
        if (!chat.has_bookmarked) {
          MakeChatBookmark();
        } else {
          DeleteChatBookmark();
        }
      },
      Icon: <PushpinOutlined />,
    },
    {
      detailMessage: "test",
      func: () => {
        console.log("test");
      },
      Icon: <RadarChartOutlined />,
    },
    {
      detailMessage: icon.match("👀") ? "you already signed" : "sign as shown",
      func: () => {
        if (icon === "" && chat.id == cid.toString()) {
          dispatch(setClickedChatReaction({ mode: "create", icon: "👀", chat_id: cid }));
          //sendReaction(true, "👀", cid).then(r => console.log(true, "👀", cid));
        } else if (icon.match("👀") && chat.id == cid.toString()) dispatch(setClickedChatReaction({ mode: "delete", icon: icon.replace("👀", ""), chat_id: cid }));
        else dispatch(setClickedChatReaction({ mode: "create", icon: "👀" + icon, chat_id: cid }));
        console.log("clicked_chat" + chat_id);
      },
      Icon: "👀",
    },
    {
      detailMessage: icon.match("👍") ? "you already signed" : "Thumb Up",
      func: () => {
        if (icon === "" && chat.id == cid.toString()) dispatch(setClickedChatReaction({ mode: "create", icon: "👍", chat_id: cid }));
        else if (icon.match("👍") && chat.id == cid.toString()) dispatch(setClickedChatReaction({ mode: "delete", icon: icon.replace("👍", ""), chat_id: cid }));
        else dispatch(setClickedChatReaction({ mode: "create", icon: "👍" + icon, chat_id: cid }));
      },
      Icon: "👍",
    },
  ];

  return (
    <>
      {ChatOptionDetailArray &&
        ChatOptionDetailArray.map((ChatOptionDetail, i) => {
          return (
            <Option
              key={i}
              onClick={() => {
                ChatOptionDetail.func();
                sendReaction();
              }}
              onMouseOver={() => {
                setShowDetail(i);
              }}
              onMouseLeave={() => {
                setShowDetail(-1);
              }}
            >
              {showDetail === i && <ChatOptionDetailMessage de={ChatOptionDetail.detailMessage} />}
              {ChatOptionDetail.Icon}
            </Option>
          );
        })}
    </>
  );
};

export default ChatOption;

const Option = styled.span`
  font-size: 1.5rem;
  border-radius: 10% / 50%;

  :hover {
    text-underline-colorcolor: black;
    cursor: pointer;
    opacity: 0.6;
    background-color: #9ca3af;
  }
`;

const ChatOptionDetailMessage = (props: any) => {
  return <>{props.de}</>;
};
