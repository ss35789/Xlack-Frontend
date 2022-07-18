
import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createRoom } from "../features/AddChannelSlice";


function Addchannel({Icon,title,id}){
    const dispatch=useDispatch()

    const addChannel=()=>{
        
        const channelName=JSON.stringify(prompt('Please enter the channel name'))
        

        if(channelName){
            // db에 name: channelName 방추가
            console.log(channelName)
            dispatch(createRoom(channelName))
            const _url='https://xlack.kreimben.com/api/channel/?channel_name='

            //dispatch(createRoom({title:{channelName}}))
            axios.post(_url+channelName,
            {
                title:{channelName}
            }
            ) 
            .then(res=>{console.log(res)})
            .catch(e=>{console.log(e)})
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

