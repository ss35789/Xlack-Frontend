import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {RootState} from '../app/store';
import {backUrl, WsUrl} from '../features/cookie';
import {UserDetailsType} from './types';
// import {Button} from "material-ui/core";
// import {auth,db} from "../firebase";
// import firebase from 'firebase';
//import {useAuthState} from "react-firebase-hooks/auth";

function ChatInput() {
    const [msg, setmsg] = useState('');
    const [MyUserPk, setMyUserPk] = useState<number>();
    const [MyUserDetails, setMyUserDetails] = useState<UserDetailsType>();
    const [socket, setsocket] = useState<WebSocket>();
    // const [user] = useAuthState(auth);
    const enterChannelId = useSelector((state: RootState) => state.enterRoom.roomId);
    const inputRef = useRef<HTMLInputElement | null>(null);

    async () => {
        try {
            const getdata = await axios.get(`${backUrl}accounts/user/`);
            setMyUserDetails(getdata.data);
            if (MyUserDetails) {
                setMyUserPk(MyUserDetails.pk);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (socket) {
            socket.close();
        }
        //이전의 소켓 닫기

        setsocket(new WebSocket(`${WsUrl}${enterChannelId}/`));
    }, [enterChannelId]);

    const sendMessage = (event: {preventDefault: () => void}) => {
        event.preventDefault();
        if (socket) {
            console.log(socket);

            socket.send(
                JSON.stringify({
                    user_id: 2,
                    //user_id: MyUserPk, test로 2 함
                    message: msg,
                }),
            );
            console.log(msg);

            socket.onmessage = message => {
                // 클라이언트로부터 메시지 수신 시
                console.log(message);
            };
            socket.onerror = event => {
                console.log(event);
            };
        }

        if (inputRef.current) {
            // enter 치면 chatbox 공백으로 초기화 됨
            inputRef.current.value = '';
            setmsg('');
        }
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
