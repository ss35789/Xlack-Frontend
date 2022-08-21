import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import {backUrl} from '../features/cookie';
import {RootState} from '../app/store';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useState} from 'react';
import ChatContext from './ChatContext';
import {getChat} from './types';
// import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
// import InfoOutlinedIcon from "@materal-ui/icons/InfoOutlined";
//추가
// import { useCollection, useDocument } from "react-firebase-hooks/firestore";
// import {db} from "../firebase";

function Chat() {
    const UsingChannelId = useSelector((state: RootState) => state.enterRoom.roomId);
    const [getChatData, setgetChatData] = useState<getChat>();
    async () => {
        try {
            const res = await axios.get(`${backUrl}chat/${UsingChannelId}/?limit=10&offset=0`);

            setgetChatData(res.data);
        } catch (err) {
            window.alert('오류');
        }
    };

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
                    {getChatData?.results.map(chat => {
                        <ChatContext id={chat.id} channel={chat.channel} chatter={chat.chatter} message={chat.message} created_at={chat.created_at}></ChatContext>;
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
