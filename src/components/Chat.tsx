import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import {at, backUrl} from '../features/cookie';
import {RootState} from '../app/store';
import {useSelector} from 'react-redux';
import axios from 'axios';
import ChatContext from './ChatContext';
import {getChat} from './types';

function Chat() {
    const receiveMessage = useSelector((state: RootState) => state.UpdateChatContext.receiveMessage);
    const enterRoomId = useSelector((state: RootState) => state.enterRoom.roomId);

    const [getChatData, setgetChatData] = useState<getChat>();
    const getChatContext = async (UsingChannelId: number) => {
        try {
            const res = await axios.get(`${backUrl}chat/${UsingChannelId}/?limit=100&offset=0`, {
                headers: {
                    Authorization: `Bearer ${at}`,
                },
            });
            setgetChatData(res.data);
        } catch (err) {
            window.alert('오류로 인해 chat을 불러올 수 없습니다');
        }
    };
    useEffect(() => {
        console.log(enterRoomId);
        getChatContext(enterRoomId);
    }, [receiveMessage, enterRoomId]);
    useEffect(() => {
        console.log(getChatData);
    }, [getChatData]);
    //새로운 문자가 송신되어 receiveMessage가 true가 되면 챗 정보들 불러옴
    return (
        <ChatContainer>
            {/* {roomDetails && roomMessages && ( */}
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            {' '}
                            {/*2:29:35 #ROOM-name -> #{} */}
                            {/* <strong>#{roomDetails?.data().name}</strong> */}
                        </h4>
                        {/* <StarBorderOutlinedIcon/> */}
                    </HeaderLeft>
                    <HeaderRight>
                        <p>{/* <InfoOutlinedIcon/> Details */}</p>
                    </HeaderRight>
                </Header>
                {/*2:30:19*/}
                <ChatMessages>
                    <h1>ChatMessage</h1>
                    {getChatData &&
                        getChatData.results.map(chat => {
                            return (
                                <span>
                                    <ChatContext id={chat.id} channel={chat.channel} chatter={chat.chatter} message={chat.message} created_at={chat.created_at}></ChatContext>;
                                </span>
                            );
                        })}
                </ChatMessages>
                <ChatInput />
            </>
        </ChatContainer>
    );
}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
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
