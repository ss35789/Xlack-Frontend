import InfoOutlinedIcon from "@materal-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
//추가
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat(){
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && 
        db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderby("timestamp","asc")
    );

    console.log(roomDetails?.data());
    console.log(roomMessages);

    return(
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4> {/*2:29:35 #ROOM-name -> #{} */}
                            <strong>#{roomDetails?.data().name}</strong>
                        </h4>
                        <StarBorderOutlinedIcon/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon/> Details
                        </p>
                    </HeaderRight>
                </Header>
                {/*2:30:19*/}
                <ChatMessages>
                    {roomMessages?.docs.map(doc=>{
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
                    })}
                </ChatMessages>

                <ChatInput
                    Channelname={roomDetails?.data().name}
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}