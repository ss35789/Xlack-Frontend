import React, { useCallback,useEffect,useRef} from'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Addchannel from './Addchannel';
import { RootState } from '../app/store';
import {at,rt} from '../features/cookie';
import Channel from './Channel';
import ProfileMenu from './ProfileMenu';
import ChannelMenu from './ChannelMenu';
import { enterRoom } from '../features/EnterChannelSlice';

function Sidebar(){

    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const dispatch=useDispatch();
    const AddChannel=useSelector((state:RootState)=>state.AddChannel.title);
    const enterRoomId=useSelector((state:RootState)=>state.enterRoom.roomId);
    const [ChannelList,setChannelList]=useState([]);// 기존에 가입되어있던 채널들 정보
    const [showProfileMenu,setshowProfileMenu] = useState(false);
    const [showChannelMenu,setshowChannelMenu] =useState(false);
    const [showChannels,setshowChannels]=useState(false);
    const channelMenuRef = useRef<HTMLDivElement>(null);
    const showChannelList= async ()=>{
        try{
            const res=await axios.get(`https://xlack.kreimben.com/api/channel/all`,
            {
                headers:{
                    //토큰
                    'access-token': at,
                    'refresh-token': rt
                }
                
            })
            console.log('su');
            setChannelList(res.data);
        }catch(err){console.log(err)};
       
        
    }
   

    useEffect(()=>{showChannelList()},[AddChannel])
    useEffect(() => {// channelMenuRef 를 이용해 이외의 영역이 클릭되면 채널메뉴 없애기
        function handleClickOutside(e: MouseEvent): void {
            if (channelMenuRef.current && !channelMenuRef.current.contains(e.target as Node)) {
                setshowChannelMenu(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [channelMenuRef]);

    const connectChat=(enterRoomId : number)=>{

        console.log(`connect! ${enterRoomId}`)

    
    }
    const onClickshowChannelMenu=useCallback(()=>{
        setshowChannelMenu((prev)=>!prev);
    },[]);
    const onClickshowProfileMenu=useCallback(()=>{
        setshowProfileMenu((prev)=>!prev);
    },[]);
    const onClickshowChannels=useCallback(()=>{
        setshowChannels((prev)=>!prev);
    },[]);
    return(
        <SidebarContainer>
            <SidebarHeader onClick={onClickshowProfileMenu}>
                <SidebarInfo>
                    <div >
                        <h2>sfagasdf sslkdfj</h2>
                        <h3>
                            <FiberManualRecordIcon/>
                            sdmfpsfjp
                            
                        </h3>
                    </div>
                    
                    
                </SidebarInfo>
                <CreateIcon/>
                
            </SidebarHeader>
            {showProfileMenu&&<ProfileMenu></ProfileMenu>}

            {/* <SidebarOption Icon={InsertCommentIcon} title='Threads'/> 
            <SidebarOption Icon={InboxIcon} title='Mention & reactions'/> 
            <SidebarOption Icon={DraftsIcon} title='Saved items'/> 
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser'/> 
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/> 
            <SidebarOption Icon={AppsIcon} title='Apps'/> 
            <SidebarOption Icon={FileCopyIcon} title='File browser'/> 
            <SidebarOption Icon={ExpandLessIcon} title='Show less'/>  */}
            <hr />
            <span onClick={onClickshowChannels}><SidebarOption Icon={ExpandMoreIcon} title='Channels'/></span>
            <hr />
            {showChannels&&
                <Addchannel Icon={AddIcon} title='Add Channel'/> }
            
            {showChannels&&AddChannel.map((title)=>{//테스트용
                return <span ref={channelMenuRef} 
                onClick={(e)=>{
                    e.preventDefault();
                    
                }} 
                onContextMenu={(e)=>{
                    e.preventDefault();
                    setx(e.clientX);
                    sety(e.clientY);
                    showChannelMenu&&onClickshowChannelMenu();//새로 우클릭 한 곳에 메뉴가 다시 나오게 초기화
                    onClickshowChannelMenu();    
                }}><SidebarOption title={title} /></span>
            })}

            {showChannels&&ChannelList.map((title,channel_id)=>{
                return <span 
                onClick={(e)=>{
                    e.preventDefault();
                    dispatch(enterRoom(channel_id));//enterRoomId 를 channel id로 변경
                    connectChat(enterRoomId);

                }} 
                onContextMenu={(e)=>{
                    e.preventDefault();
                    dispatch(enterRoom(channel_id));
                    console.log("채널 메뉴열기!");
                    setx(e.clientX);
                    sety(e.clientY);
                    showChannelMenu&&onClickshowChannelMenu();//새로 우클릭 한 곳에 메뉴가 다시 나오게 초기화
                    onClickshowChannelMenu(); 
                    
                }}><Channel title={title} /></span>
            })}


            {showChannelMenu&&<div style={{position:"absolute",top:y,left:x}}>
                        <ChannelMenu></ChannelMenu>
                </div>} 

            
        </SidebarContainer>
    )
}
export default Sidebar;

const SidebarContainer=styled.div`
    
    background-color: var(--slack-color);
    color:white;
    flex:0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;
const SidebarHeader=styled.div`
    display:flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    justify-content: space-between;
    align-items:center;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
        :hover{
            cursor:pointer;
            opacity:0.6;
        }
    }
    :hover{
        cursor:pointer;
        opacity:0.6;
    }
`;
const SidebarInfo=styled.div`
    
    flex:1; 
    //???
    >div>h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    >div>h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
        
    }
    >div>h3 > .MuiSvgIcon-root{
        font-size:13px;
        margin-top:1px;
        margin-right:2px;
        color:green;
        :hover{
            cursor:pointer;
            opacity:0.6;
        }
    }
`;