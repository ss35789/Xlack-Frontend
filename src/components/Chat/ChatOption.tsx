import { AlibabaOutlined, PushpinOutlined, RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl, WsUrl_reaction, WsUrl_status } from "../../variable/cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarkPage } from "../../variable/ChatBookmarkSlice";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { findChannelHV } from "../../variable/ClickedChannelSlice";
import { RootState } from "../../app/store";

const ChatOption = (chat: ChatType) => {
  const [showDetail, setShowDetail] = useState<number>(-1);
  const chat_channel_hashed_value = useSelector((state: RootState) => state.ClickedChannel.channelData.hashed_value);
  const dispatch = useDispatch();
  const cid = parseInt(chat.id);
  const [socket, setsocket] = useState<WebSocket>();
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
  const [icon, setIcon] = useState<string>("...");
  const [time, setTime] = useState<number>(0);
  const [isCreated, setisCreated] = useState<boolean>(true);

  useEffect(() => {
    if (chat_channel_hashed_value !== "") {
      setsocket(new WebSocket(`${WsUrl_reaction}${chat_channel_hashed_value}`));
      console.log("reaction ws connected");
    }
  }, [chat_channel_hashed_value]);

  useEffect(() => {
    console.log("현재 reaction 소켓", chat_channel_hashed_value);
    if (socket) {
      socket.onopen = () => {
        socket.send(
          JSON.stringify({
            authorization: at,
          }),
        );
      };
    }
  }, [socket]);
  const sendReaction = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (socket) {
      console.log(socket);
      socket.send(
        JSON.stringify({
          mode: isCreated,
          icon: icon,
          chat_id: time,
        }),
      );
      console.log(isCreated, icon, time);
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
      detailMessage: "reaction",
      func: () => {
        console.log("test");
      },
      Icon: <AccessTimeFilledIcon />,
    },
    {
      detailMessage: "CheckBox",
      func: () => {
        console.log("CheckBox");
      },
      Icon: <CheckBoxIcon />,
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
