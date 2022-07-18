import React,{useEffect, useRef} from "react";
import styled from "styled-components";
// import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
// import InfoOutlinedIcon from "@materal-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
//추가
// import { useCollection, useDocument } from "react-firebase-hooks/firestore";
// import {db} from "../firebase";
import Message from "./Message";

function Chat(){
    // const chatRef = useRef(null);
    // const roomId = useSelector(selectRoomId);
    // const [roomDetails] = useDocument(
    //     roomId && db.collection("rooms").doc(roomId)
    // )
    // const [roomMessages, loading] = useCollection(
    //     roomId && 
    //     db
    //         .collection("rooms")
    //         .doc(roomId)
    //         .collection("messages")
    //         .orderby("timestamp","asc")
    // );
    //채팅방에 들어갔을 때 맨 밑으로 이동
    // useEffect(()=>{
    //     chatRef?.current?.scrollIntoView({
    //         behavior:"smooth",
    //     });
    // },[roomId,loading])

    // console.log(roomDetails?.data());
    // console.log(roomMessages);

    return(
        <ChatContainer>
            {/* {roomDetails && roomMessages && ( */}
            <>
                <Header>
                    <HeaderLeft>
                        <h4> {/*2:29:35 #ROOM-name -> #{} */}
                            {/* <strong>#{roomDetails?.data().name}</strong> */}
                        </h4>
                        {/* <StarBorderOutlinedIcon/> */}
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            {/* <InfoOutlinedIcon/> Details */}
                        </p>
                    </HeaderRight>
                </Header>
                {/*2:30:19*/}
                <ChatMessages><h1>CharMessage</h1>
                    {/* {roomMessages?.docs.map(doc=>{
                        const{message,timestamp,user,userImage} = doc.data();
                        return(
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                    })} */}
                    {/* //<ChatBottom ref={chatRef}/> */}
                </ChatMessages>
                
                {/* <ChatInput
                    // chatRef={chatRef}
                    // // Channelname={roomDetails?.data().name}
                    // channelId={roomId}
                /> */}
            </>
            
            
        </ChatContainer>
    );
}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;
const ChatContainer=styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y : scroll;
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
const HeaderRight=styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;

    >.MuiSvgIcon-root{ /* HelpOutlineIcon */
        margin-left:auto;
        margin-right:20px;

        :hover{
            cursor:pointer;
            opacity:0.6;
        }
    }
`;