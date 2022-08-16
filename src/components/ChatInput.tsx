import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import {backUrl} from '../features/cookie';
import {io} from 'socket.io-client';
import {WsUrl} from '../features/cookie';
import {useSelector} from 'react-redux';
import {RootState} from '../app/store';

// import {Button} from "material-ui/core";
// import {auth,db} from "../firebase";
// import firebase from 'firebase';
//import {useAuthState} from "react-firebase-hooks/auth";

function ChatInput() {
    const UsingChannelId = useSelector((state: RootState) => state.enterRoom.roomId);
    const [msg, setmsg] = useState('');
    // const [user] = useAuthState(auth);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const sendMessage = (event: {preventDefault: () => void}) => {
        event.preventDefault();
        const socket = io(`${WsUrl}${UsingChannelId}`, {
            //path: '/socket.io',
            transports: ['websocket'],
        });

        socket.emit('message', msg);
        // socket.emit('send-message', msg);
        //현재 우리가 들어와있는 채널에만 채팅을 보내야함
        //-> emit 특정 채널이벤트 설정?, 채널마다 room 설정?

        if (inputRef.current) {
            // enter 치면 chatbox 공백으로 초기화 됨
            inputRef.current.value = '';
            setmsg('');
        }
        if (socket.connected) socket.disconnect();
    };

    return (
        <ChatInputContainer>
            <form>
                <input ref={inputRef} onChange={e => setmsg(e.target.value)} placeholder={`Message #`} />
                <button hidden type="submit" onClick={sendMessage}>
                    SEND
                </button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 40%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;
