
import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createRoom } from "../features/AddChannelSlice";
import { SidebarInfo } from "./SidebarOption";
import { AppDispatch } from "../app/store";


function Addchannel({Icon,title,id}:SidebarInfo){
    const dispatch : AppDispatch=useDispatch()

    const addChannel=()=>{
        
        const channelName : string=JSON.stringify(prompt('Please enter the channel name'))
        
        if(channelName){
            // db에 name: channelName 방추가
            dispatch(createRoom(channelName))
            axios.post('https://xlack.kreimben.com/api/channel/?channel_name={channelName}',{
    
            })
            .then(res=>{console.log(res)})
            .catch(e=>{console.log('e')})
        }
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
