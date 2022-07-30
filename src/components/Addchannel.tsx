import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createRoom } from "../features/AddChannelSlice";
import { SidebarInfo } from "./SidebarOption";
import { AppDispatch } from "../app/store";
import { at,rt } from '../features/cookie';

function Addchannel({Icon,title,id}:SidebarInfo){
    const dispatch : AppDispatch=useDispatch()
    
    const addChannel=async()=>{
        
        console.log(at);
        console.log(rt);
        try{
            const channelName : string|null=prompt('Please enter the channel name')
            
            if(channelName){
                // db에 name: channelName 방추가
                dispatch(createRoom(channelName))
                await axios.post(`https://xlack.kreimben.com/api/channel/`,
                {
                    "channel_name": channelName
                }
                ,{
                    //쿠키 생성
                    headers:{
                        'access-token': at,
                        'refresh-token': rt
                    }
                    
                    
                }
                )
//                console.log();
                
            }
        }catch(err){window.alert("권한이 없습니다")}
    }
    
    return(
        <div className="addchannel"
            onClick={addChannel}
        >
            {Icon && <Icon fontSize='small' style={{padding : 10}}></Icon>}
            {Icon ? (<h3>{title}</h3>) : 
                <div>
                    <span>#</span>{title}
                </div>
            }
        </div>
    )
}

export default Addchannel