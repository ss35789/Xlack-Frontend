import { PushpinOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { ChatType } from "../../types/types";
import { at, backUrl } from "../../variable/cookie";
import axios from "axios";

const ChatOption = (chat: ChatType) => {
  const MakeChatBookmark = async () => {

    await axios
      .post(
        `${backUrl}chat/bookmark/`,
        {
          chat_id: { chat.id },
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
