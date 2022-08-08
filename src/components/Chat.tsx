import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
// import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
// import InfoOutlinedIcon from "@materal-ui/icons/InfoOutlined";
//추가
// import { useCollection, useDocument } from "react-firebase-hooks/firestore";
// import {db} from "../firebase";

function Chat() {
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
