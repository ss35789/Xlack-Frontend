import styled from 'styled-components';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {backUrl, WsUrl} from '../features/cookie';
import {io} from 'socket.io-client';
import {RootState} from '../app/store';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useState} from 'react';
import {ChatType} from './types';

function ChatContext({id, channel, chatter, message, created_at}: ChatType) {
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#Room-name</strong>
                            <StarBorderOutlinedIcon />
                        </h4>
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>{/* List out the message */}</ChatMessages>

                {/* <ChatInput
                // ChannelName
                channelId={roomId}
            /> */}
            </>
        </ChatContainer>
    );
}

export default ChatContext;

const ChatMessages = styled.div``;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;
