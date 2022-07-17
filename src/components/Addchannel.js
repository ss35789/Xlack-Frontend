
import React from "react";
import axios from 'axios';
function Addchannel({Icon,title,id}){

    const addChannel=()=>{
        
        const channelName=prompt('Please enter the channel name')
        const c_name=JSON.stringify(channelName)

        if(channelName){
            // db에 name: channelName 방추가
            console.log(c_name)
            const _url='https://xlack.kreimben.com/api/channel/?channel_name='
            axios.post(_url+c_name,
            {
                title:{c_name}
            }
            ) 
            .then(res=>{console.log(res)})
            .catch(console.log('e'))
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

