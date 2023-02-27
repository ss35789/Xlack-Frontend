import { PushpinOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl } from "../../variable/cookie";
import axios from "axios";

const ChatOption = (chat: ChatType) => {
  const MakeChatBookmark = async () => {
    const cid = parseInt(chat.id);
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
  return (
    <>
      chatOPtions
      <Icon
        onClick={() => {
          MakeChatBookmark();
        }}
      >
        <PushpinOutlined />
      </Icon>
    </>
  );
};

export default ChatOption;

const Icon = styled.span`
  :hover {
    cursor: pointer;
    opacity: 0.6;
    background-color: #9ca3af;
  }
`;
