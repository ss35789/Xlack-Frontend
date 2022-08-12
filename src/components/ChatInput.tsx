import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {backUrl} from '../features/cookie';
import {io} from 'socket.io-client';
// import {Button} from "material-ui/core";
// import {auth,db} from "../firebase";
// import firebase from 'firebase';
//import {useAuthState} from "react-firebase-hooks/auth";

function ChatInput() {
    // const socket = io(`${backUrl}`, {
    //     //path: '/socket.io',
    //     transports: ['websocket'],
    // });
    const [msg, setmsg] = useState('');
    // const [user] = useAuthState(auth);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const sendMessage = (event: {preventDefault: () => void}) => {
        event.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        setmsg('');
        // socket.emit('send-message', msg);
        //현재 우리가 들어와있는 채널에만 채팅을 보내야함
        //-> emit 특정 채널이벤트 설정?, 채널마다 room 설정?
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
