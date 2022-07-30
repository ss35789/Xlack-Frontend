import React from 'react'

export interface ChannelInfo{
    Icon?: any;
    title: string;
    id?: number;
    
}

function Channel({title}:ChannelInfo) {
  return (
    <>
        {title}
    </>
  )
}

export default Channel