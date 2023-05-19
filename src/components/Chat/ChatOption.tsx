import { PushpinOutlined, RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl } from "../../variable/cookie";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBookmarkPage } from "../../variable/ChatBookmarkSlice";
import { ClickBookMark } from "../../variable/ClickedChannelSlice";
import { EditChatBookmark } from "../../variable/WorkSpaceSlice";

const ChatOption = (chat: ChatType) => {
  const [showDetail, setShowDetail] = useState<number>(-1);
  const dispatch = useDispatch();
  const cidToInt = parseInt(chat.id);
  const PlayChatBookmark = () => {
    dispatch(getBookmarkPage());
    dispatch(ClickBookMark(chat.id));
    dispatch(EditChatBookmark(chat));
  };

  const DeleteChatBookmark = async () => {
    //chat/bookmark에 들어가는 chat_id는 다른 데이터구조(string)과는 달리 number라 형변환
    await axios
      .delete(`${backUrl}chat/bookmark/${cidToInt}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then(res => {
        console.log(res);
        PlayChatBookmark();
      })
      .catch(err => {
        console.log(err);
      });
  };
  //누르면 ClickBookMark(cid) -> 해당 챗의 id 로 has_bookmarked 상태값 변경하기
  const MakeChatBookmark = async () => {
    //chat/bookmark에 들어가는 chat_id는 다른 데이터구조(string)과는 달리 number라 형변환
    await axios
      .post(
        `${backUrl}chat/bookmark/`,
        {
          chat_id: cidToInt,
        },
        {
          headers: {
            Authorization: `Bearer ${at}`,
          },
        },
      )
      .then(res => {
        console.log(res);
        PlayChatBookmark();
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
            dispatch(saveReaction({ channel_hashed_value: chat_channel_hashed_value, chat_id: reactionData.chat_id, icon: reactionData.icon, reactors: reactionData.reactors }));
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
      console.log(chat.reactions);
    } else {
      // 리액션이 있을때 같은 리액션을 누르면 삭제
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
