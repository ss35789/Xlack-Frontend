import { PushpinOutlined, RadarChartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl } from "../../variable/cookie";
import axios from "axios";
import { useState } from "react";

const ChatOption = (chat: ChatType) => {
  const [showDetail, setShowDetail] = useState<number>(-1);
  const cid = parseInt(chat.id);
  const DeleteChatBookmark = async () => {
    //chat/bookmark에 들어가는 chat_id는 다른 데이터구조(string)과는 달리 number라 형변환
    await axios
      .delete(`${backUrl}chat/bookmark/${cid}`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then(res => {
        console.log(res);
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
      })
      .catch(err => {
        console.log(err);
      });
  };

  const ChatOptionDetailArray = [
    {
      detailMessage: "ChatBookmark",
      func: () => {
        console.log(chat.has_bookmarked);
        if (!chat.has_bookmarked) {
          MakeChatBookmark();
        } else DeleteChatBookmark();
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
