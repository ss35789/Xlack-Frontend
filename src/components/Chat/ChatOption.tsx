import { AlibabaOutlined, PushpinOutlined, RadarChartOutlined } from "@ant-design/icons";
import styled, { keyframes } from "styled-components";
import { ChatType, ReactionData, SendReactionType } from "../../types/types";
import { at, backUrl, WsUrl_reaction } from "../../variable/cookie";
import axios from "axios";
import React, { Props, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkPage } from "../../variable/ChatBookmarkSlice";
import { RootState } from "../../app/store";
import { UpdateReactionChat, UpdateReactionChatType2 } from "../../variable/WorkSpaceSlice";
import Chat from "./Chat";
import ReactTooltip from "react-tooltip";

const ChatOption = (chat: ChatType) => {
  const [showDetail, setShowDetail] = useState<number>(-1);
  const chat_channel_hashed_value = useSelector((state: RootState) => state.ClickedChannel.channelData.hashed_value);
  const dispatch = useDispatch();
  const cid = parseInt(chat.id);
  const [reactionSocket, setReactionSocket] = useState<WebSocket>();

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
  const sendReaction = async (sendType: SendReactionType) => {
    const ReactionWs = new WebSocket(`${WsUrl_reaction}${chat_channel_hashed_value}/`);
    if (ReactionWs) {
      ReactionWs.onopen = () => {
        setReactionSocket(ReactionWs);
        ReactionWs.send(
          JSON.stringify({
            authorization: at,
          }),
        );
        ReactionWs.send(
          JSON.stringify({
            mode: sendType.mode,
            icon: sendType.icon,
            chat_id: sendType.chat_id,
          }),
        );
        ReactionWs.onmessage = res => {
          const data = JSON.parse(res.data);
          const reactionData = data?.reaction;
          console.log("reaction Data " + JSON.stringify(data));
          if (reactionData) {
            dispatch(UpdateReactionChatType2({ channel_hashed_value: chat_channel_hashed_value, chat_id: reactionData.chat_id, icon: reactionData.icon, reactors: reactionData.reactors }));
          }
        };
      };
      setReactionSocket(ReactionWs);
    }
  };
  function ReactionLogic(clickedIcon: string, cid: number) {
    if (clickedIcon !== null) {
      //리액션이 없을때 새로운 리액션을 추가
      sendReaction({ mode: "create", icon: clickedIcon, chat_id: cid });
      //dispatch(UpdateReactionChat([chat_channel_hashed_value, { chat_id: cid, icon: clickedIcon, reactors: [] }]));
    } else {
      // 리액션이 있을때 같은 리액션을 누르면 삭제
      //dispatch(RemoveReactionChat([chat_channel_hashed_value, { chat_id: cid, icon: clickedIcon, reactors: [] }]));
      sendReaction({ mode: "delete", icon: clickedIcon, chat_id: cid });
    }
  }

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
      //detailMessage: icon.match("👀") ? "you already signed" : "Sign as shown",
      detailMessage: "Sign as shown",
      func: () => {
        ReactionLogic("👀", cid);
      },
      Icon: "👀",
    },
    {
      detailMessage: "Sign as shown",
      func: () => {
        ReactionLogic("👍", cid);
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
              }}
              onMouseOver={() => {
                setShowDetail(i);
              }}
              onMouseLeave={() => {
                setShowDetail(-1);
              }}
            >
              {/*{showDetail === i && <ChatOptionDetailMessage de={ChatOptionDetail.detailMessage} />}*/}
              {showDetail === i && <ChatOptionDetailMessage />}
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
