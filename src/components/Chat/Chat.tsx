import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { ChatType, SocketReceiveChatType } from "../../types/types";
import { at, backUrl } from "../../variable/cookie";
import axios from "axios";
import ChatContext from "./ChatContext";

const Chat = () => {
  const Clicked_channel = useSelector((state: RootState) => state.ClickedChannel.channelData);
  const findUser = useSelector((state: RootState) => state.ClickedChannel.findUserData);
  const ClickedBookmark = useSelector((state: RootState) => state.ChatBookmark.ClickBookmark);
  const currentWorkspace = useSelector((state: RootState) => state.getMyWorkSpace.ClickedWorkSpace);
  const UpdateBookmark = useSelector((state: RootState) => state.ChatBookmark.UpdateBookmark);
  const [lastChat, setLastChat] = useState<any>("-1");
  const messagesRef = useRef<any>();
  const [getChatData, setGetChatData] = useState<ChatType[]>([]);
  const receiveChatBookmarkData = async () => {
    try {
      const res = await axios.get(`${backUrl}workspace/bookmarked_chat/${currentWorkspace.hashed_value}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
      //데이터 받을 때 created_at 형태 바꿔줄 필요 있음
      const c: ChatType[] = [];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      res.data.map(r => {
        c.push({
          id: r.id,
          chatter: r.chatter,
          channel: r.channel,
          has_bookmarked: true,
          message: r.message,
          created_at: r.created_at,
          reaction: r.reaction,
          file: r.file,
        });
      });
      setGetChatData(c);
      console.log(c);
    } catch (err) {
      console.log("receiveChatBookmarkError: ", err);
    }
  };
  const receiveChatData = async () => {
    try {
      const res = await axios.get(`${backUrl}chat/${Clicked_channel.hashed_value}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
      //데이터 받을 때 created_at 형태 바꿔줄 필요 있음
      setGetChatData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("receiveChatError: ", err);
    }
  };
  useEffect(() => {
    setGetChatData([]);
  }, [currentWorkspace]);
  useEffect(() => {
    console.log("저장된 채널:", Clicked_channel);
    if (Clicked_channel.hashed_value) {
      receiveChatData();
    }
  }, [Clicked_channel, UpdateBookmark]);
  useEffect(() => {
    if (lastChat !== "-1") {
      console.log("최근 받은 메세지", lastChat);
      //웹소켓으로 받는 데이터로 Chat을 만들어 getChatData에 추가시키기
      setGetChatData([MakeChatDataFromLastChat(lastChat), ...getChatData]);
    }
  }, [lastChat]);
  useEffect(() => {
    if (ClickedBookmark) {
      receiveChatBookmarkData();
    }
  }, [ClickedBookmark, UpdateBookmark]);
  const MakeChatDataFromLastChat = (s: SocketReceiveChatType) => {
    const c: ChatType = {
      id: s.chat_id,
      channel: Clicked_channel.id,
      chatter: findUser,
      has_bookmarked: false,
      reaction: [],
      message: s.message,
      created_at: new Date().toString().substring(0, 25),
    };
    return c;
  };

  const ReceiveLastChat = (r: SocketReceiveChatType) => {
    setLastChat(r);
  };

  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [getChatData]); //새로운 문자가 송신되어 receiveMessage가 true가 되면 챗 정보들 불러옴
  return (
    <ChatContainer>
      {/* {roomDetails && roomMessages && ( */}
      <>
        <ChatMessages ref={messagesRef}>
          {getChatData &&
            getChatData
              .slice(0)
              .reverse()
              .map((chat, i) => {
                return (
                  <span key={i}>
                    <ChatContext {...chat}></ChatContext>
                  </span>
                );
              })}
        </ChatMessages>
        <ChatInput
          receive={(input: SocketReceiveChatType) => {
            ReceiveLastChat(input);
          }}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  margin-bottom: 130px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    /* HelpOutlineIcon */
    margin-left: auto;
    margin-right: 20px;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
