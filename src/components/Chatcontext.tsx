import Reacdt from'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import {RootState} from '../app/store';

function Chatcontext(){
    const roomId=useSelector<RootState>(state=> state.app.roomId);

    return(
        <ChatContainer>
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room-name</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                    
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                
                {/* List out the message */}
                
            </ChatMessages>

            {/* <ChatInput 
                // ChannelName
                channelId={roomId}
            /> */}
            </>
        </ChatContainer>
    )
}

export default Chatcontext

const ChatMessages=styled.div``;
const Header=styled.div`
    display:flex;
    justify-content:space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft=styled.div`
    display: flex;

    >h4{
        display:flex;
        text-transform:lowercase;
        margin-right: 10px;
    }

    >h4 > .MuiSvgIcon-root{
        margin-left: 20px;
        font-size: 18px;
    }
`;
const HeaderRight=styled.div`
    >p{
        display: flex;
        align-itmes: center;
        font-size: 14px;
    }

    >p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;
const ChatContainer=styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y : scroll;
    margin-top: 60px;
`;